import React, { useEffect } from "react"
import { evaluate } from 'mathjs'
import { useState } from 'react'


function AddMath () {

    const [answer, setAnswer] = useState('')
    const [integers, setIntegers] = useState('')

    function generateQuestion() {
    let integerA = Math.floor(Math.random() * 20);
    let integerB = Math.floor(Math.random() * 20);


        console.log(integerA)
        console.log(integerB)

        setIntegers([integerA, integerB]);
    }

    useEffect(() => generateQuestion()
    , [])

    function useAnswer() {
        let addedIntegers = evaluate(integers[0] + integers[1])

            console.log(addedIntegers)
            console.log(answer)
        if (answer == addedIntegers) {
            console.log('Nice work!')
        }
        else {
            console.log('Try again!')
        }

    }

    return (
        <React.Fragment>
            <h1>{integers[0]} + {integers[1]} </h1>
            <input value={answer} onChange={ (e) => setAnswer(e.target.value)}/>
            <button onClick={useAnswer}>Submit</button>
            
        </React.Fragment>
    )
}

export default AddMath