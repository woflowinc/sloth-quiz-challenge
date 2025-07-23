import { Card, CardContent } from "@/components/ui/card"

interface QuestionCardProps {
  question: string
  questionNumber: number
}

export default function QuestionCard({ question, questionNumber }: QuestionCardProps) {
  return (
    <Card className="border-2 border-black bg-white">
      <CardContent className="p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mb-4">
            <span className="text-xl font-bold">{questionNumber}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">{question}</h2>
        </div>
      </CardContent>
    </Card>
  )
}
