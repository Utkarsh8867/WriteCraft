"use client"

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function WritingArea({ onFeedbackUpdate }) {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    // Simulating feedback generation
    const feedback = generateFeedback(text)
    onFeedbackUpdate(feedback)
  }

  // This is a mock function to simulate feedback generation
  const generateFeedback = (text) => {
    const wordCount = text.split(' ').length
    const score = Math.min(Math.floor(wordCount * 2), 100)
    
    // Simulating spelling mistake detection
    const spellingMistakes = [
      { mistake: 'recieve', correction: 'receive' },
      { mistake: 'seperate', correction: 'separate' },
      { mistake: 'accomodate', correction: 'accommodate' },
    ]

    const detectedMistakes = spellingMistakes.filter(({ mistake }) => 
      text.toLowerCase().includes(mistake)
    )

    return {
      score,
      feedback: [
        { type: 'grammar', message: 'Consider using more varied sentence structures.' },
        { type: 'style', message: 'Try to use more descriptive language.' },
        { type: 'vocabulary', message: 'Consider using more advanced vocabulary.' },
        ...detectedMistakes.map(({ mistake, correction }) => ({
          type: 'spelling',
          message: `"${mistake}" is misspelled. The correct spelling is "${correction}".`
        }))
      ],
      progress: {
        grammar: Math.min(Math.floor(Math.random() * 100) + 1, 100),
        vocabulary: Math.min(Math.floor(Math.random() * 100) + 1, 100),
        style: Math.min(Math.floor(Math.random() * 100) + 1, 100),
        spelling: Math.min(Math.floor(Math.random() * 100) + 1, 100),
      },
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📝 Write and Improve</h2>
      <Textarea 
        placeholder="Start writing here... (Try including words like 'recieve', 'seperate', or 'accomodate' to see spelling corrections)" 
        className="min-h-[200px] mb-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit for Feedback</Button>
    </div>
  )
}

