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
//   selecting another answer
// - game doesnt load new Qs when Play Again is hit FIXED
// - move fetch to questions page FIXED
// - special chars in questons are encoded FIXED
// - cant pass name of category into state FIXED
// - special chars in answers are encoded FIXED
// - some combination of settings has less questions than what is retrievable
// - difficulty buttons dont show which one was clicked

// Features Added:
// - answer shuffler to randomize layout
// - user only able to select one answer at a time
// - add scores at the end
// - category selector
// - difficulty selector
// - number of questions selector
// - button to play again with same settings
// - button to choose new settings

// Future Features:
// - add button to play again with same settings
// - add button to choose new settings
// - allow users to choose their settings
// - display settings on top of page
