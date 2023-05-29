import React, {useState} from "react"
import {TealExpenseDiv, RedExpenseDiv} from "./SyledComponents"
const cronstrue = require('cronstrue');


function Expense({name, amount, frequncy, expenseId}) {

const [isDue, setIsDue] = useState(true)

function handleApply() {
    setIsDue(false)
    //account checking - amount
}

    return (
        <>
        <div className="expense" value = {expenseId}>
        {isDue
         ?
         <RedExpenseDiv>
            <h1>Expense Name: {name}</h1>
            <h2>Amount: ${amount}</h2>
            <h3>{cronstrue.toString(frequncy)}</h3>
            <button onClick={handleApply}>Apply</button>
        </RedExpenseDiv>
         :
        <TealExpenseDiv>
             <h1>Expense Name: {name}</h1>
             <h2>Amount: ${amount}</h2>
             <h3>{cronstrue.toString(frequncy)}</h3>
         </TealExpenseDiv>
        
        }
        </div>
        </>
    )
}

export default Expense