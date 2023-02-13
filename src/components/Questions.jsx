import React from "react";
import Answers from "./Answers.jsx";
import GetResultsBtn from "./GetResultsBtn.jsx";
import PlayAgainBtn from "./PlayAgainBtn.jsx";
import {shuffle, randID, decode} from "./utils.jsx";

function Questions ({gameStart, gameOver, settings, toggleGameStart, toggleGameOver}) {
    
    const [questions, setQuestions] = React.useState([]);
    const [score, setScore] = React.useState();
    const [replay, setReplay] = React.useState(false);

    React.useEffect(()=>{
        fetch(`https://opentdb.com/api.php?amount=${settings.numberOfQuestions}${settings.category}${settings.difficulty}&type=multiple`)
            .then(response => response.json())
            .then(data => {
                const triviaArray = data.results.map(trivia => {
                    const answersArray = createAnswersArray (
                        trivia.correct_answer, trivia.incorrect_answers )
                    return {
                        key: randID(),
                        id: randID(),
                        question: decode(trivia.question),
                        answersArray: answersArray,
                        rightAnswer: trivia.correct_answer
                    }
                })
                setQuestions(triviaArray);
            })   
        function createAnswersArray(rightAnswer, wrongAnswersArray) {
            const notRandomAnswersArray = [...wrongAnswersArray, rightAnswer]
            const encodedArray = shuffle(notRandomAnswersArray)
            const decodedArray = encodedArray.map(answer => {
                return decode(answer)
            })
            const answersArray = decodedArray.map(answer => {
                return {
                    id: randID(),
                    selected: false,
                    option: answer,
                    style: "answers"    
                }
            })
            return answersArray;
        }
    }, [replay])
    
    // Creates question elements from questions array in state
    function Trivia_Questions () { 
        return questions.map(item => {
            return (
                <div
                    key={item.key}
                    className="question-item"
                >
                    <h1 >{item.question}</h1>
                    <div className="answers--container" id={item.id}>
                        {createTriviaAnswers(item.answersArray)}
                    </div>
                </div>
            )
        })
    }
    
    // Creates answer elements
    function createTriviaAnswers (triviaAnswersArray) {
        return triviaAnswersArray.map (item => {
            return (
                <Answers 
                    key={randID()}
                    id={item.id}
                    className={item.style}
                    selected={item.selected}
                    option={item.option}
                    clickHandler={userClickedThis}
                />
            )
        })
    }
    
    // Highlights the option the user chose
    function userClickedThis (event) {
        if (!gameOver) {
            const { id : pickedAnswerID } = event.target
            const { id : questionID } = event.target.parentElement
            setQuestions(prev => {
                return prev.map(question => {
                    if (questionID === question.id) {
                        return {
                            ...question,
                            answersArray: question.answersArray.map(answer => {
                                if (pickedAnswerID === answer.id) {
                                    return {
                                        ...answer,
                                        selected: true,
                                        style: "answers selected"
                                    }
                                } else {
                                    return {
                                        ...answer,
                                        selected: false,
                                        style: "answers not-selected"
                                    }
                                }
                            })
                        }
                    } else {
                        return question
                    }
                })
            })
        }
    }
    
    function getResults () {
        let correctAnswers = 0;
        for (let x = 0; x < questions.length; x++) {
            for (let y = 0; y < questions[x].answersArray.length ; y++) {
                if (questions[x].answersArray[y].selected) {
                    if (questions[x].answersArray[y].option == questions[x].rightAnswer) {
                        questions[x].answersArray[y].style = "answers correct";
                        correctAnswers += 1
                    } else {
                        questions[x].answersArray[y].style = "answers incorrect";
                    }   
                } else if (!questions[x].answersArray[y].selected) {
                    if (questions[x].answersArray[y].option == questions[x].rightAnswer) {
                        questions[x].answersArray[y].style = "answers correct";
                    } else {
                        questions[x].answersArray[y].style = "answers not-picked";
                    }
                } else {
                    questions[x].answersArray[y].style = "answers not-picked";
                }
            }
        }
        setScore(correctAnswers)
        toggleGameOver(true)
    }

    function mainMenu () {
        toggleGameStart(false)
        toggleGameOver(false)
    }
    
    function playAgain () {
        setReplay(prev => !prev)
        toggleGameOver(false)
    }
    
    return (
         <div className="questions--container">
            {Trivia_Questions()}
         {
             gameOver 
             ?
             <PlayAgainBtn 
                 score={score}
                 questions={questions}
                 mainMenu={mainMenu}
                 playAgain={playAgain}
             />
             :
             <GetResultsBtn 
                 getResults={getResults}
             />
         }
         </div>
    )
}


export default Questions;