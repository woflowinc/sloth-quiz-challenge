"use client"

import { Button } from "@/components/ui/button"

interface AnswerButtonProps {
  text: string
  onClick: () => void
  isSelected: boolean
  isCorrect: boolean
  isWrong: boolean
  disabled: boolean
}

export default function AnswerButton({ text, onClick, isSelected, isCorrect, isWrong, disabled }: AnswerButtonProps) {
  const getButtonClasses = () => {
    const baseClasses =
      "w-full p-6 text-left font-semibold text-lg border-2 transition-all duration-300 min-h-[80px] flex items-center justify-center"

    if (disabled) {
      if (isCorrect) {
        return `${baseClasses} bg-black text-white border-black`
      }
      if (isWrong) {
        return `${baseClasses} bg-gray-800 text-white border-gray-800`
      }
      if (!isSelected) {
        return `${baseClasses} bg-gray-100 text-gray-500 border-gray-300`
      }
    }

    if (isSelected && !disabled) {
      return `${baseClasses} bg-black text-white border-black`
    }

    return `${baseClasses} bg-white text-black border-black hover:bg-gray-100`
  }

  return (
    <Button onClick={onClick} disabled={disabled} className={getButtonClasses()} variant="outline">
      <span className="text-center">{text}</span>
    </Button>
  )
}
