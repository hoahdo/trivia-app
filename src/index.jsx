import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// Current Bugs:
// - game shuffles answers on results page FIXED
// - answers have to be de-selected before FIXED
//   	selecting another answer
// - game doesnt load new Qs when Play Again is hit FIXED
// - move fetch to questions page FIXED
// - special chars in questons are encoded FIXED
// - cant pass name of category into state FIXED
// - special chars in answers are encoded FIXED
// - some combination of settings has less questions than what is retrievable
// - difficulty buttons dont show which one was clicked (persist)
// - categories dont update in top right in different browsers FIXED
// - auto adjust to mobile screen viewport FIXED
// - remove underline on Category and Difficulty FIXED
// - alphabetize the categories FIXED

// Features Added:
// - answer shuffler to randomize layout
// - user only able to select one answer at a time
// - add scores at the end
// - category selector
// - difficulty selector
// - number of questions selector
// - button to play again with same settings
// - button to choose new settings at main menu
// - display settings on top of page
// - add button to play again with same settings
// - allow users to choose their settings
// - add button to choose new settings

// Future Features:
// - add click effects to buttons
// - add true random play-again button
// - add settings reset button
// - update api call to handle when user selects 
//   	more questions than database can serve
// - implement slider so user can select questions