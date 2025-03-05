import { AITradingVisualization } from "@/components/ai-trading-visualization"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function VisualizationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-white">AI Trading Visualization</h1>
        <p className="mt-2 text-lg text-zinc-400">
          An interactive visualization of our AI trading model and neural network analysis
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="h-[600px] overflow-hidden rounded-lg">
            <AITradingVisualization />
          </div>
        </div>

        <div>
          <div className="rounded-lg bg-zinc-900 p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">How It Works</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                This visualization represents our AI trading model's neural network architecture and decision-making
                process.
              </p>
              <p>The left layer represents market data inputs, including price action, volume, and external factors.</p>
              <p>The middle layer shows our proprietary deep learning network that processes and analyzes patterns.</p>
              <p>
                The right layer displays the output signals that guide trading decisions based on the analyzed data.
              </p>
              <p>
                The candlestick chart demonstrates how our AI model identifies patterns and predicts future price
                movements.
              </p>
              <p>Pulses along the neural connections represent data flowing through the network in real-time.</p>
            </div>

            <div className="mt-6 space-y-4">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-black hover:from-cyan-600 hover:to-teal-500">
                Learn More About Our Technology
              </Button>
              <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-zinc-900 p-6">
          <h3 className="mb-3 text-xl font-bold text-cyan-400">Pattern Recognition</h3>
          <p className="text-zinc-300">
            Our AI model can identify over 50 different chart patterns and market conditions, with accuracy rates
            exceeding 90% in most market environments.
          </p>
        </div>

        <div className="rounded-lg bg-zinc-900 p-6">
          <h3 className="mb-3 text-xl font-bold text-pink-400">Predictive Analytics</h3>
          <p className="text-zinc-300">
            Using advanced time-series forecasting and machine learning, our system predicts price movements across
            multiple timeframes simultaneously.
          </p>
        </div>

        <div className="rounded-lg bg-zinc-900 p-6">
          <h3 className="mb-3 text-xl font-bold text-teal-400">Risk Management</h3>
          <p className="text-zinc-300">
            Every trade is protected by our dynamic risk management system that adjusts position sizing and stop-loss
            levels based on market volatility.
          </p>
        </div>
      </div>
    </div>
  )
}

