<a name="top-of-page"></a>
<!--- Title Section --->

<div align="center">
	<h1>Trivia App</h1>
	<a href="https://luminous-parfait-b8b22b.netlify.app/">Live App Link</a> &#x2022 <a href="https://github.com/hoahdo/trivia-app">GitHub Repo Link</a>
</div>

<br/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/94433620/223358651-4bfe3fda-2eb3-48c4-88bc-95392262c572.png" width="600"/>
</p>

<!--- About Section --->

## About
This web application was created to allow users to test their trivia knowledge. Users can choose from a variety of categories and set their desired difficulty as well as number of questions. The scores are tallied and displayed on the results page to show how well the user did.

### Features

* Option to choose the category, difficulty, and number of questions
* Variety of topics to choose from
* User can choose to play again with current settings or set new settings
* Score at the end to show how well user performed 

### Built With

* Languages and Frameworks

  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> 
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  
* API
  
  [Open Trivia Database](https://opentdb.com/api_config.php)

<!--- Installation & Setup Section --->

## Installation & Setup

You will need `npm` and `vite` installed globally on your machine.
 1. Clone this repo
 2. Install dependencies `npm install` 
 3. Start development server `npx vite`
  

<!--- Usage Section --->

## Usage

### Pick desired settings

<img src="https://user-images.githubusercontent.com/94433620/223358671-c9ea6008-11fa-427c-b2c5-a5da6a8a872c.png" width="300" />

### Answering trivia questions

<img src="https://user-images.githubusercontent.com/94433620/223359805-9a962e76-b597-4ccd-afbc-48bfb2abcd9c.png" width="300" />

### Results page

<img src="https://user-images.githubusercontent.com/94433620/223359815-fd51edb9-df45-449e-b8ac-4f7bfc73ab57.png" width="300" />


<!--- Contributing Section--->

## Contributing

1. Fork this repo:  https://github.com/hoahdo/trivia-app/forks 
2. Create your feature branch:  `git checkout -b my-new-feature` 
3. Commit your changes:  `git commit -m 'Add some feature'` 
4. Push to the branch:  `git push origin my-new-feature` 
5. Create a new pull request:  https://github.com/hoahdo/trivia-app/pulls 


<!--- Status Section --->

## Project Status

<a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" height="30"/></a>


### Roadmap
- [x] Randomize answer key
- [x] Limit user to one answer selected at a time
- [x] Add scores on results page
- [x] Add category selector
- [x] Add difficulty selector
- [x] Add option to set number of questions
- [x] Add play again option with same settings
- [x] Add option to return to main menu
- [x] Add selected category and selected difficulty notifier on top of UI
- [ ] Add button to reset all settings to default
- [ ] Add randomizer play again button
- [ ] Implement slider feature to select number of questions
 
### Known Issues
* ~~Answers are shuffled on results page~~ RESOLVED
* ~~Answers have to be de-selected before selecting another answer~~ RESOLVED
* ~~Play Again does not load new questions~~ RESOLVED
* ~~Special characters are displayed as encoded~~ RESOLVED
* ~~Selected category label not updating in all browsers~~ RESOLVED
* ~~Categories drop down menu items not alphabetized~~ RESOLVED
* Difficulty buttons do not retain clicked state
* Some combination of settings return fewer questions than what the user selects
* Some questions do not have assigned answers


<!--- Reflection Section --->

## Reflection

Things I learned:
* Implementing different types of forms
* Passing data around components
* Sending customized api calls
* Parsing data returned from database
* Managing app activity lifecyle
* Working with nested arrays of objects

<!--- Resources Section --->

## Resources
* https://bost.ocks.org/mike/shuffle/
* https://stackoverflow.com/questions/48879342/what-s-the-difference-between-react-event-and-dom-event
* https://reactjs.org/docs/forms.html
* https://beta.reactjs.org/reference/react-dom/components/input
* https://beta.reactjs.org/reference/react-dom/components/select

<!--- Licensing Section --->

## License
[MIT](LICENSE) License (2023)

<p align="right">(<a href="#top-of-page">Back to Top</a>)</p>
