import React from "react"
import Income from "./Income"
import {PurpleIncomesDiv} from "./SyledComponents"

function Incomes({incomes}) {

    return (
        <>
        <PurpleIncomesDiv>
        <h1>INCOMES</h1>
        {incomes.map((income) => {
                return (
                    <Income 
                    name={income.incomeName} 
                    amount = {income.amount} 
                    frequncy = {income.frequency}
                    expenseId = {income._id}
                    />
                    
                )
            })}
        </PurpleIncomesDiv>
           
        </>
    )
}

export default Incomes