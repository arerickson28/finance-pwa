import React, {useState} from "react"
import {TealIncomeDiv, GoldIncomeDiv} from "./SyledComponents"
const cronstrue = require('cronstrue');

function Income({name, amount, frequncy, incomeId}) {

    const [isDue, setIsDue] = useState(true)

    function handleApply() {
        setIsDue(false)
        //account checking - amount
    }

    return (
        <>
         <div className="income" value = {incomeId}>
        {isDue
         ?
         <GoldIncomeDiv>
            <h1>Income Name: {name}</h1>
            <h2>Amount: ${amount}</h2>
            <h3>{cronstrue.toString(frequncy)}</h3>
            <button onClick={handleApply}>Apply</button>
        </GoldIncomeDiv>
         :
        <TealIncomeDiv>
             <h1>Income Name: {name}</h1>
             <h2>Amount: ${amount}</h2>
             <h3>{cronstrue.toString(frequncy)}</h3>
         </TealIncomeDiv>
        
        }
        </div>
        </>
    )
}

export default Income