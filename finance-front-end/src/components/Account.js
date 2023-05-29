import React from "react"
import Expenses from "./Expenses"
import Incomes from "./Incomes"
import { MaroonAccountDiv } from "./SyledComponents"
const { DateTime } = require("luxon");

function Account() {

let now = DateTime.now().toLocaleString()
console.log(now)

    const tempAccount = {
        "monthlyIncome": 4000,
        "checking": 5000,
        "expenses": [
            {
                "expenseName": "orangeTheory",
                "amount": 140,
                "frequency": "0 0 1 * *",
                "_id": "64718f624ce3406fd1b37461"
            },
            {
                "expenseName": "rent",
                "amount": 1558,
                "frequency": "0 0 1 * *",
                "_id": "647177fe80ab68505507ca21"
            }
        ],
        "incomes": [
            {
                "incomeName": "Target Paycheck",
                "amount": 2236,
                "frequency": "42 4 1,16 * *",
                "_id": "income_id"
            }
        ]
    }


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
        <h1>ACCOUNT</h1>
        {/* <h2>Monthly Income: ${tempAccount.monthlyIncome}</h2> */}
        <h2>Total Monthy Incomes: ${getTotalIncomes(tempAccount.incomes)}</h2>
        <h2>Total Monthly Expenses: ${getTotalExpenses(tempAccount.expenses)}</h2>
        <h2>Montly Cashflow: ${getTotalIncomes(tempAccount.incomes) - getTotalExpenses(tempAccount.expenses)}</h2>
        <hr></hr>
        <h2>Checking: ${tempAccount.checking}</h2>
        <hr></hr>
        <Expenses expenses = {tempAccount.expenses}/>
        <Incomes incomes = {tempAccount.incomes}/>
        </MaroonAccountDiv>
        </>
    )
}

export default Account

