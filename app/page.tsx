"use client"

import { useState } from 'react'
import Hero from './components/Hero'
import WritingArea from './components/WritingArea'
import Feedback from './components/Feedback'
import ProgressTracker from './components/ProgressTracker'

export default function Home() {
  const [feedbackData, setFeedbackData] = useState(null)

  const handleFeedbackUpdate = (newFeedback) => {
    setFeedbackData(newFeedback)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WritingArea onFeedbackUpdate={handleFeedbackUpdate} />
          <div>
            <Feedback feedbackData={feedbackData} />
            <ProgressTracker progress={feedbackData?.progress} />
          </div>
        </div>
      </div>
    </main>
  )
}

