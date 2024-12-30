import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Feedback({ feedbackData }) {
  if (!feedbackData) {
    return null
  }

  const { feedback, score } = feedbackData

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>🧠 Instant Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">🎯 Detected Issues:</h3>
          <ul className="list-disc pl-5">
            {feedback.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.type.toUpperCase()}:</span> {item.message}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🏆 Your Score:</h3>
          <p className="text-3xl font-bold text-purple-600">{score}/100</p>
          <p className="text-green-600">Great job! Keep practicing to improve further. 😊</p>
        </div>
      </CardContent>
    </Card>
  )
}

