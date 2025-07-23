
# Woflow Front-End Sloth Quiz Challenge

## Project Overview

The app is a multiple-choice quiz about sloth facts. The quiz consists of 5 questions, one at a time, with 4 choices per question. The user selects an answer / submits it, and then advances to the next question. At the end of the quiz, the user should see a score summary with the number of correct answers.

All the UI components you’ll need are already implemented and located in the /components directory. You are responsible for:
	•	Managing quiz state (current question, selected answer, score, etc.)
	•	Handling user interactions (selecting an answer, submitting, going to the next question)
	•	Displaying results at the end
	•	Optional: Adding some nice UX touches (loading states, transitions, error handling)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Part 1: Quiz Logic

Here’s what you need to implement:
- Question Flow: Load the questions one by one. Use provided questions and answers in `sloth-quiz.constants.ts`.
- Answer Selection: Allow the user to choose one option per question.
- Submit Mechanism: When the user submits an answer, lock in their choice and indicate if it was correct.
- Score Tracking: Keep track of the number of correct answers.
- Navigation: Enable users to proceed to the next question after submitting.
- Final Summary: Show a final score and allow the user to restart the quiz if desired.

⸻

## Part 2: Extras (if time)

If you finish early or want to go the extra mile:
- Add a timer for each question.
- Add progress indicators (e.g. “Question 3 of 5”).
- Animate transitions between questions or show a celebratory result screen.
- Persist quiz results locally using localStorage or similar.

