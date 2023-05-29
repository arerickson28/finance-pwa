import React from "react"
import Expense from "./Expense"
import {OrangeExpensesDiv} from "./SyledComponents"


const tempExpense = [
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

function Expenses({expenses}) {
    return (
        <>
        <OrangeExpensesDiv>
            <h1>EXPENSES</h1>
            {expenses.map((expense) => {
                return (
                    <Expense 
                    name={expense.expenseName} 
                    amount = {expense.amount} 
                    frequncy = {expense.frequency}/>
                )
            })}
            </OrangeExpensesDiv>
        </>
    )
}

export default Expenses

