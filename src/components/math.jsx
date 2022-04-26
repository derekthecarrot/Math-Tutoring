import React, { useEffect, useState } from "react"
import { evaluate } from 'mathjs'
import CorrectAnswer from './results'
import WrongAnswer from './wrongresults'


function AddMath() {

    const [answer, setAnswer] = useState('')
    const [integers, setIntegers] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)
    const [clicked, setClicked] = useState(false)

    let addedIntegers = evaluate(integers[0] + integers[1])



    //Generates question based on random math - max number is 20 and then setting state of integer.
    function generateQuestion() {
        let integerA = Math.floor(Math.random() * 20);
        let integerB = Math.floor(Math.random() * 20);

        setIntegers([integerA, integerB]);
    }
    //useEffect based on score, to update with a new question and reset conditional render back to false
    useEffect(() => {
        setTimeout(() => {generateQuestion()}, 1000)

        setTimeout(() => { setShowResults(false) }, 1000)

        setTimeout(() => { setClicked(false) }, 1000)

    }, [score])
    //if else statement to check answer and then minus or plus a point from score, and then setting that info to a state
    function useAnswer() {
        
        // setting a clicked state in order to stop score cheating and button spam
        setClicked(true);

        if (answer == addedIntegers) {
            setShowResults(true)
            setScore(score + 1)
        }
        else {
            setShowResults(true)
            setScore(score - 1)
        }

    }

    return (
        <React.Fragment>

            <div><h1 className='scoreheader'>Score: {score}</h1></div>
            {answer == addedIntegers ? (
                <>
                    <div className='mathQuestions'>
                        <h1 className='questionNumbers'>{integers[0]} + {integers[1]} </h1>
                        <input className='inputBox' value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        <div className='submitDiv'>
                            <button className='submitAnswer' disabled={clicked} onClick={useAnswer}>Submit</button>
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