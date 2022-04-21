import React, { useEffect } from "react"
import { evaluate } from 'mathjs'
import { useState } from 'react'
import CorrectAnswer from './results'
import WrongAnswer from './wrongresults'


function AddMath() {

    const [answer, setAnswer] = useState('')
    const [integers, setIntegers] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)

    let addedIntegers = evaluate(integers[0] + integers[1])

    function generateQuestion() {
        let integerA = Math.floor(Math.random() * 20);
        let integerB = Math.floor(Math.random() * 20);


        console.log(integerA)
        console.log(integerB)

        setIntegers([integerA, integerB]);
    }

    useEffect(() => {
        generateQuestion()

        setTimeout(() => { setShowResults(false) }, 1000)
    }, [score])

    function useAnswer() {


        console.log(addedIntegers)
        console.log(answer)
        if (answer == addedIntegers) {
            setShowResults(true)
            setScore(score + 1)
        }
        else {
            console.log('Try again!')
            setShowResults(true)
            setScore(score - 1)
        }

    }

    return (
        <React.Fragment>
            <div><h1>{score}</h1></div>
            {answer == addedIntegers ? (
                <>
                    <div className='mathQuestions'>
                        <h1 className='questionNumbers'>{integers[0]} + {integers[1]} </h1>
                        <input className='inputBox' value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        <div className='submitDiv'>
                            <button className='submitAnswer' onClick={useAnswer}>Submit</button>
                        </div>

                    </div>
                    {showResults && (
                        <CorrectAnswer></CorrectAnswer>
                    )}

                </>
            ) : (
                <>
                    <div className='mathQuestions'>
                        <h1 className='questionNumbers'>{integers[0]} + {integers[1]} </h1>
                        <input className='inputBox' value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        <div className='submitDiv'>
                            <button className='submitAnswer' onClick={useAnswer}>Submit</button>
                        </div>

                    </div>
                    {showResults && (
                        <WrongAnswer></WrongAnswer>
                    )}
                </>
            )
            }

        </React.Fragment>
    )
}

export default AddMath