import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">WriteCraft: Your Personal English Writing Coach</h1>
        <p className="text-xl md:text-2xl mb-8">Elevate your English writing skills with WriteCraft, the intelligent app that turns practice into perfection!</p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">Start Writing Now</Button>
      </div>
    </div>
  )
}

