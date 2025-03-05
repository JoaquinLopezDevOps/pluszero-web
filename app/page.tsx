import Link from "next/link"
import {
  ArrowRight,
  BarChart2,
  BrainCircuit,
  ChevronRight,
  Globe,
  Lock,
  TrendingUp,
  Database,
  Server,
  Shield,
  LineChart,
} from "lucide-react"
import "./video-background.css"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoBackground } from "@/components/video-background"
import { AITradingVisualization } from "@/components/ai-trading-visualization"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-24 md:py-32">
        {/* Video Background */}
        <VideoBackground
          videoUrl="https://kopiustech.com/wp-content/themes/valence/assets/imgs/kopius-loop-compressed.mp4"
          posterUrl="/video-poster.jpg"
        />

        <div className="container relative z-10 mx-auto px-4 text-center video-content">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">PLUSZERO</h1>
          <p className="mx-auto mb-10 max-w-3xl text-2xl font-light text-white/90 md:text-4xl">Redefining AI-Trading</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-400 text-black hover:from-cyan-600 hover:to-teal-500"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Advanced AI Trading Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-zinc-800 text-white">
              <CardHeader>
                <BrainCircuit className="h-10 w-10 text-cyan-400" />
                <CardTitle className="mt-4">AI-Powered Analysis</CardTitle>
                <CardDescription className="text-zinc-400">
                  Our algorithms process market data in real-time to identify profitable trading opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Leverage machine learning models trained on decades of market data to spot patterns humans can't see.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/ai-analysis" className="flex items-center text-cyan-400 hover:text-cyan-300">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-800 text-white">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-pink-400" />
                <CardTitle className="mt-4">Predictive Trading</CardTitle>
                <CardDescription className="text-zinc-400">
                  Forecast market movements with unprecedented accuracy using our proprietary models.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Our predictive engine analyzes multiple timeframes to generate high-probability trade signals.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/predictive-trading" className="flex items-center text-pink-400 hover:text-pink-300">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-800 text-white">
              <CardHeader>
                <BarChart2 className="h-10 w-10 text-teal-400" />
                <CardTitle className="mt-4">Risk Management</CardTitle>
                <CardDescription className="text-zinc-400">
                  Sophisticated risk controls to protect your capital in all market conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Dynamic position sizing and stop-loss algorithms adapt to changing market volatility.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/risk-management" className="flex items-center text-teal-400 hover:text-teal-300">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-zinc-950 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">About PlusZero</h2>
              <p className="mb-6 text-lg text-zinc-300">
                PlusZero is at the forefront of AI-driven trading technology, combining advanced machine learning with
                deep market expertise.
              </p>
              <p className="mb-8 text-lg text-zinc-300">
                Our team of data scientists, quants, and trading professionals has developed a revolutionary approach to
                market analysis and execution.
              </p>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-teal-400 text-black hover:from-cyan-600 hover:to-teal-500"
                asChild
              >
                <Link href="/visualization">View AI Visualization</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <AITradingVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Our Technology Stack</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-zinc-800 text-white">
              <CardHeader className="pb-2">
                <Database className="h-10 w-10 text-cyan-400" />
                <CardTitle className="mt-4">Big Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Process terabytes of market data daily using distributed computing frameworks for real-time analysis
                  and pattern recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 text-white">
              <CardHeader className="pb-2">
                <BrainCircuit className="h-10 w-10 text-pink-400" />
                <CardTitle className="mt-4">Neural Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Deep learning models trained on historical market data to identify complex patterns and predict market
                  movements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 text-white">
              <CardHeader className="pb-2">
                <Server className="h-10 w-10 text-teal-400" />
                <CardTitle className="mt-4">Low-Latency Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Strategically located servers with direct market connections ensure microsecond execution times for
                  optimal trade entry and exit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 text-white">
              <CardHeader className="pb-2">
                <Shield className="h-10 w-10 text-purple-400" />
                <CardTitle className="mt-4">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300">
                  Enterprise-grade security protocols and compliance with financial regulations to protect your data and
                  assets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zinc-900 to-black py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.2),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,0,255,0.2),transparent_40%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Real-Time Market Intelligence</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">Market Performance Dashboard</h3>
              <div className="mb-6 h-[200px] rounded-md bg-zinc-900 p-4">
                <div className="flex h-full items-center justify-center">
                  <LineChart className="h-20 w-20 text-cyan-400" />
                </div>
              </div>
              <p className="mb-4 text-zinc-300">
                Our advanced dashboard provides real-time insights into market movements, sector performance, and
                emerging opportunities.
              </p>
              <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30">
                View Demo Dashboard
              </Button>
            </div>
            <div className="grid gap-6">
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold text-white">AI Market Sentiment Analysis</h3>
                <p className="text-zinc-300">
                  Our algorithms analyze news, social media, and market data to gauge market sentiment and predict
                  potential shifts.
                </p>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold text-white">Automated Strategy Backtesting</h3>
                <p className="text-zinc-300">
                  Test trading strategies against historical data to validate performance before deploying with real
                  capital.
                </p>
              </div>
              <div className="rounded-lg bg-zinc-800/50 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-bold text-white">Custom Alert System</h3>
                <p className="text-zinc-300">
                  Receive notifications when our AI detects high-probability trading opportunities matching your
                  criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">PlusZero</h3>
              <p className="mb-4 text-zinc-400">
                Redefining AI-Trading with cutting-edge technology and expert market analysis.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Products</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    AI Trading Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Market Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Risk Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-center">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>pluszero.app</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@pluszero.app</span>
                </li>
                <li className="flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  <Link href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
            <p>Copyright © {new Date().getFullYear()} PlusZero - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

