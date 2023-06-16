import React from "react"
import { TealEnvelopeDiv } from "./SyledComponents"

function Envelope({envelope}) {

    return (
        <>
        <TealEnvelopeDiv>
        <h2>{envelope.envelopeName}</h2>
        <h3>{envelope.envelopeBalance}</h3>
        </TealEnvelopeDiv>
       
        </>
    )
}

export default Envelope
