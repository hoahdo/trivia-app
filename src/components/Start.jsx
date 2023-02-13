import React from "react";
import Category from "./Category.jsx";
import Difficulty from "./Difficulty.jsx";
import NumberOfQuestions from "./NumberOfQuestions.jsx";

function Start({
	toggleGameStart,
	settings,
	changeCategory,
	changeDifficulty,
	changeNumOfQuest,
}) {
	function startGame() {
		toggleGameStart(true);
	}

	return (
		<div className="start--container">
			<h1>Trivia App</h1>
			<h2>Start with default settings for random trivia.</h2>
			<div>
				<Category settings={settings} changeCategory={changeCategory} />
				<Difficulty settings={settings} changeDifficulty={changeDifficulty} />
				<NumberOfQuestions
					settings={settings}
					changeNumOfQuest={changeNumOfQuest}
				/>
			</div>
			<button className="start-button" onClick={startGame}>
				Start
			</button>
		</div>
	);
}

export default Start;
