 - Add unit testing
 Would look to implement unit testing using Jest.js
 - Generating more complex mathematical expressions
 Could likely generate more complex math questions using math.js package as it seems to be able to handle much more advanced expressions
 - Maintain a history of questions
 History of questions based on a state that pushes a component list based on last question
 - Keep a running total score
 Total score implemented by using state and setting count
 - Give multiple questions at once
 Would likely need to use props to give each question a seperate unique property in order for questions to be submitted seperately
 - Utilize a timer
 Can use a state and a set a timer function, and once timer function hits 0, set score to 0 and generate new question again.
 - Limit the number of incorrect answers
 Can use a state for once a number of incorrect answers are reached, reset score to 0 to restart game, and if timer was implemented then reset timer as well.
 - Brand the application
 Create a logo, market it to user's it was created for (grade schoolers)