# Math-Tutoring

## Description

Hello - this is my application for math practice. The purpose is to assist grade schoolers in practicing their addition skills. It uses the React Framework in order to store questions, results, score, and conditional render the results. You can track a running score, and answer as many questions as you'd like to practice you're adding skills!


Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Roadmap](#roadmap)

* [Contributions](#contributions)

* [License](#license)

## Installation

Install Math-Tutoring with npm

git clone git@github.com:derekthecarrot/Math-Tutoring.git
npm install # or yarn install
npm start  

Your app should be running on http://localhost:3000 or whichever PORT number you specify.



## Usage

In order to use this application, you will need to have Visual Studio Code, Node.js, and Git Bash installed. After that - you can clone the repository and run an npm install, and then an npm start to start the application.

After installing the application, you may start answering addition questions to your hearts desire!


## Roadmap

 - Add unit testing, Would look to implement unit testing using Jest.js
 - Generating more complex mathematical expressions, Could likely generate more complex math questions using math.js package as it seems to be able to handle much more advanced expressions
 - Maintain a history of questions, History of questions based on a state that pushes a component list based on last question
 - Keep a running total score, Total score implemented by using state and setting count
 - Give multiple questions at once, Would likely need to use props to give each question a seperate unique property in order for questions to be submitted seperately
 - Utilize a timer, Can use a state and a set a timer function, and once timer function hits 0, set score to 0 and generate new question again.
 - Limit the number of incorrect answers, Can use a state for once a number of incorrect answers are reached, reset score to 0 to restart game, and if timer was implemented then reset timer as well.
 - Brand the application, Create a logo, market it to user's it was created for (grade schoolers)

## Contributions

How can you contribute to this project/repository? You can fork the repository and build upon it, or you can submit some changes to be made/requested on the issues tab!

## License

[MIT](https://choosealicense.com/licenses/mit/)

