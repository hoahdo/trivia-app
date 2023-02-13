import React from "react";
import Header from "./components/Header.jsx";
import Start from "./components/Start.jsx";
import Questions from "./components/Questions.jsx";
import { randID } from "./components/utils.jsx";

function App() {
	const [gameStart, setGameStart] = React.useState(false);
	const [gameOver, setGameOver] = React.useState(false);
	const [settings, setSettings] = React.useState({
		category: "",
		categoryName: "Any",
		difficulty: "",
		difficultyName: "Any",
		numberOfQuestions: Math.floor(Math.random() * 10 + 1).toString(),
	});

	function changeCategory(event) {
		const { value, text } = event.target;
		setSettings((prevSettings) => {
			return {
				...prevSettings,
				category: value,
				categoryName: text,
			};
		});
	}

	function changeDifficulty(event) {
		const { value, name } = event.target;
		setSettings((prevSettings) => {
			return {
				...prevSettings,
				difficulty: value,
				difficultyName: name,
			};
		});
	}

	function changeNumOfQuest(event) {
		const { value } = event.target;
		setSettings((prevSettings) => {
			return {
				...prevSettings,
				numberOfQuestions: value,
			};
		});
	}

	function toggleGameStart(state) {
		setGameStart(state);
	}

	function toggleGameOver(state) {
		setGameOver(state);
	}

	return (
		<div>
			<Header settings={settings} />
			<div>
				{gameStart ? (
					<Questions
						gameStart={gameStart}
						gameOver={gameOver}
						settings={settings}
						toggleGameStart={toggleGameStart}
						toggleGameOver={toggleGameOver}
					/>
				) : (
					<Start
						toggleGameStart={toggleGameStart}
						settings={settings}
						changeCategory={changeCategory}
						changeDifficulty={changeDifficulty}
						changeNumOfQuest={changeNumOfQuest}
					/>
				)}
			</div>
			<footer>&#169; Hoa</footer>
		</div>
	);
}

export default App;
