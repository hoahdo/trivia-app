import React from "react";

function PlayAgainBtn ({score, questions, mainMenu, playAgain}) {
    
    const total = questions.length
    
    return (
        <div>
            <h2 className="results-message">
                You got {score} / {total} questions correct!
            </h2>
            <div className="play-again-main-menu-container">
                <button 
                    className="button-play-again"
                    onClick={playAgain}
                >
                    Play Again
                </button>
                <button
                    className="button-main-menu"
                    onClick={mainMenu}
                >
                    Main Menu   
                </button>
            </div>
        </div>
    )
}

export default PlayAgainBtn;





