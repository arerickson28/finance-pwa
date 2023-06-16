import React, {useState, useEffect} from "react"
import Expenses from "./Expenses"
import Incomes from "./Incomes"
import  Envelope from "./Envelope"
import { MaroonAccountDiv } from "./SyledComponents"
const { DateTime } = require("luxon");

function Account() {

const tempUserId = "648369a99ec9ed8f5caeca0d"


let now = DateTime.now().toLocaleString()
console.log(now)


const [accountState, setAccountState] = useState([])
const [envelopesState, setEnvelopesState] = useState([])

useEffect(() => {
    fetch(`/api/accounts/userId/${tempUserId}`, {method: "GET"})
    // fetch("/api/accounts/userId/648369a99ec9ed8f5caeca0d")
    .then((response)=> {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        setAccountState(data)
        getEnvelopes(data._id)
    })
    .catch((err) => {
        console.log(err.message);
     });
}, []);


        function getEnvelopes(accountId) {
            fetch(`/api/envelopes/accountId/${accountId}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setEnvelopesState(data)
            })
            .catch((err) => {
                console.log(err.message);
             });
        }
  

    // const tempAccount = {
    //     "monthlyIncome": 4000,
    //     "checking": 5000,
    //     "expenses": [
    //         {
    //             "expenseName": "orangeTheory",
    //             "amount": 140,
    //             "frequency": "0 0 1 * *",
    //             "_id": "64718f624ce3406fd1b37461"
    //         },
    //         {
    //             "expenseName": "rent",
    //             "amount": 1558,
    //             "frequency": "0 0 1 * *",
    //             "_id": "647177fe80ab68505507ca21"
    //         }
    //     ],
    //     "incomes": [
    //         {
    //             "incomeName": "Target Paycheck",
    //             "amount": 2236,
    //             "frequency": "42 4 1,16 * *",
    //             "_id": "income_id"
    //         }
    //     ]
    // }


    function getTotalExpenses(expensesList) {
        let totalExpenses = 0
        for (let i=0; i<expensesList.length; i++) {
            totalExpenses += expensesList[i].amount
        }
        return totalExpenses
    }

    function getTotalIncomes(incomesList) {
        let totalIncomes = 0
        for (let i=0; i<incomesList.length; i++) {
            totalIncomes += incomesList[i].amount
        }
        return totalIncomes
    }

    return (
        <>
        <h1>{now}</h1>
        <MaroonAccountDiv>
        {/* <h1>ACCOUNT</h1> */}
        <h1>{accountState.name}</h1>
        {/* <h2>Monthly Income: ${tempAccount.monthlyIncome}</h2> */}
        {/* <h2>Total Monthy Incomes: ${getTotalIncomes(tempAccount.incomes)}</h2> */}
        {/* <h2>Total Monthly Expenses: ${getTotalExpenses(tempAccount.expenses)}</h2> */}
        {/* <h2>Montly Cashflow: ${getTotalIncomes(tempAccount.incomes) - getTotalExpenses(tempAccount.expenses)}</h2> */}
        <hr></hr>
        <h2>Balance: ${accountState.balance}</h2>
        <hr></hr>
        {/* <Expenses expenses = {tempAccount.expenses}/> */}
        {/* <Incomes incomes = {tempAccount.incomes}/> */}
        {envelopesState.map((envelope) => {
            return (
                <>
                    <Envelope envelope={envelope} />
                </>
            )
        
        })}
        </MaroonAccountDiv>
        </>
    )
}

export default Account

