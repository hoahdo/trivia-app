import React from "react";

function NumberOfQuestions ({settings, changeNumOfQuest}) {
    
    
    const numbersArray = [3,5,7,10]
    
    function NumberOptions() {
        return numbersArray.map((item, key) => {
            return (
                <div key={key}>
                    <input 
                        type="radio"
                        className="number-options-container-input"
                        id={item}
                        value={item}
                        name="numberOfQuestions"
                        onChange={(event) => changeNumOfQuest(event)}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            )
        })
    }
    
    return (
        <div className="numOfQuest--container">
            <p>Set the Number of Questions</p>
            <div className="number-options-container">
                {NumberOptions()}
            </div>
        </div>
    )
}

export default NumberOfQuestions;