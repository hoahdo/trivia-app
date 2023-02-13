import React from "react";

function Difficulty ({settings, changeDifficulty}) {
    
    
    return (
        <div className="difficulty--container">
            <label htmlFor="difficulty-buttons">Choose the Difficulty</label>
            <div id="difficulty-buttons" className="difficulty-button-container">
                <button
                    className="difficulty-button button-easy"
                    name="Easy"
                    value="&difficulty=easy"
                    onClick={(event) => changeDifficulty(event)}
                >
                    Easy
                </button>
                <button
                    className="difficulty-button button-medium"
                    name="Medium"
                    value="&difficulty=medium"
                    onClick={(event) => changeDifficulty(event)}
                >
                    Medium
                </button>
                <button
                    className="difficulty-button button-hard"
                    name="Hard"
                    value="&difficulty=hard"
                    onClick={(event) => changeDifficulty(event)}
                >
                    Hard
                </button>
            </div>
        </div>
    )
}

export default Difficulty;