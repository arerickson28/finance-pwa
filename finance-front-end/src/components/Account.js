import React from "react"
import Expenses from "./Expenses"
import { MaroonAccountDiv } from "./SyledComponents"

function Account() {

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
        ]
    }


    return (
        <>
        <MaroonAccountDiv>
        <h1>ACCOUNT</h1>
        <h2>Monthly Income: ${tempAccount.monthlyIncome}</h2>
        <h2>Checking: ${tempAccount.checking}</h2>
        <Expenses expenses = {tempAccount.expenses}/>
        </MaroonAccountDiv>
       
        </>
    )
}

export default Account

