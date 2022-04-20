import React, { useEffect } from "react"
import { evaluate } from 'mathjs'
import { useState } from 'react'


function AddMath () {

    const [answer, setAnswer] = useState('')
    const [integers, setIntegers] = useState('')

    function generateQuestion() {
    const integerA = Math.floor(Math.random() * 20);
    const integerB = Math.floor(Math.random() * 20);

    console.log(integerA)
    console.log(integerB)
    
        setIntegers([integerA, integerB]);
    }

    useEffect(() => generateQuestion()
    , [])

    const useAnswer = () => {
        const addedIntegers = evaluate(integers)

        console.log(addedIntegers);
    }

    return (
        <React.Fragment>
            <h1> </h1>
            <input type="text" name="answer" onChange={ (event) => setAnswer(event.target.value)}/>
            <button onClick={useAnswer}>Submit</button>
            
        </React.Fragment>
    )
}

export default AddMath