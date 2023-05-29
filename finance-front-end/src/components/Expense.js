import React, {useState} from "react"
import {TealExpenseDiv} from "./SyledComponents"
const cronstrue = require('cronstrue');


function Expense({name, amount, frequncy}) {

const [isDue, setIsDue] = useState(false)

    return (
        <>
        <TealExpenseDiv>
        <h1>Expense Name: {name}</h1>
        <h2>Amount: ${amount}</h2>
        <h3>Frequency: {cronstrue.toString(frequncy)}</h3>
        { isDue ? <button>Apply</button> : <></>}
        </TealExpenseDiv>
        </>
    )
}

export default Expense