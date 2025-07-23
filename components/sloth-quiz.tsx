"use client"

import { useState } from "react"
import QuestionCard from "./question-card"
import AnswerButton from "./answer-button"
import { Button } from "@/components/ui/button"
import { questions, scoreMessages } from "./sloth-quiz.constants"

export default function SlothQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return

    setSelectedAnswer(answerIndex)
    setAnswered(true)

    // Check if answer is correct and update score
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    // Move to next question after delay
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
        setSelectedAnswer(null)
        setAnswered(false)
      } else {
        setShowScore(true)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowScore(false)
    setAnswered(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return scoreMessages[0]
    if (percentage >= 80) return scoreMessages[1]
    if (percentage >= 60) return scoreMessages[2]
    if (percentage >= 40) return scoreMessages[3]
    return scoreMessages[4]
  }

  if (showScore) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-black text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <div className="mb-6">
              <div className="text-6xl font-bold mb-2">
                {score}/{questions.length}
              </div>
              <div className="text-xl mb-4">{Math.round((score / questions.length) * 100)}%</div>
              <p className="text-lg">{getScoreMessage()}</p>
            </div>
            <Button
              onClick={resetQuiz}
              className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-6 rounded-lg"
            >
              Play Again? 🦥
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-black font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-black font-medium">Score: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <QuestionCard question={questions[currentQuestion].question} questionNumber={currentQuestion + 1} />

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {questions[currentQuestion].options.map((option, index) => (
            <AnswerButton
              key={index}
              text={option}
              onClick={() => handleAnswerSelect(index)}
              isSelected={selectedAnswer === index}
              isCorrect={answered && index === questions[currentQuestion].correctAnswer}
              isWrong={answered && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer}
              disabled={answered}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
