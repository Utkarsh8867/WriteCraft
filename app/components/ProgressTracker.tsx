import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProgressTracker({ progress }) {
  if (!progress) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Progress Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(progress).map(([skill, value]) => (
            <div key={skill}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                <span className="text-sm font-medium">{value}%</span>
              </div>
              <Progress value={value} className="w-full" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

