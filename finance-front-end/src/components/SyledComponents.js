import styled from "styled-components"


const OrangeExpensesDiv = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    background-color: rgb(255, 123, 0)
    // width: 700px;
    `

    const TealExpenseDiv = styled.div`
border: solid 4px rgb(0,139,139);
padding: 5px;
margin: 10px;
background-color: white;
`
const TealEnvelopeDiv = styled.div`
border: solid 4px rgb(0,139,139);
padding: 5px;
margin: 10px;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
`

const TealIncomeDiv = styled.div`
border: solid 4px rgb(0,139,139);
padding: 5px;
margin: 10px;
background-color: white;
`

const MaroonAccountDiv = styled.div`
border: solid 4px rgb(220,20,60);
padding: 5px;
margin: 10px;

`

const RedExpenseDiv = styled.div`
border: solid 4px rgb(220,20,60);
padding: 5px;
margin: 10px;
background-color: white;

`


const GoldIncomeDiv = styled.div`
border: solid 4px rgb(255,215,0);
padding: 5px;
margin: 10px;
`

const PurpleIncomesDiv = styled.div`
border: solid 4px rgb(138,43,226);
padding: 5px;
margin: 10px;
`


export { 
    OrangeExpensesDiv, 
    TealExpenseDiv, 
    TealIncomeDiv, 
    GoldIncomeDiv, 
    MaroonAccountDiv, 
    RedExpenseDiv,
    PurpleIncomesDiv,
    TealEnvelopeDiv
}