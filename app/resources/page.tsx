import { FileText, Video, Download, BookOpen, Code, Users, BarChart2, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Resources</h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Everything you need to get the most out of the PlusZero AI trading platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <FileText className="h-8 w-8 text-cyan-400" />
              <CardTitle className="mt-4">Documentation</CardTitle>
              <CardDescription className="text-zinc-400">
                Comprehensive guides for all platform features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Detailed documentation covering everything from getting started to advanced trading strategies.
              </p>
              <Button variant="outline" className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30">
                View Documentation
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <Video className="h-8 w-8 text-pink-400" />
              <CardTitle className="mt-4">Video Tutorials</CardTitle>
              <CardDescription className="text-zinc-400">Step-by-step visual guides</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Watch our comprehensive video tutorials to quickly master the PlusZero platform.
              </p>
              <Button variant="outline" className="w-full border-pink-500/30 text-pink-400 hover:bg-pink-950/30">
                Watch Tutorials
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <Download className="h-8 w-8 text-teal-400" />
              <CardTitle className="mt-4">Downloads</CardTitle>
              <CardDescription className="text-zinc-400">Tools, templates, and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Download trading templates, strategy backtesting tools, and other resources.
              </p>
              <Button variant="outline" className="w-full border-teal-500/30 text-teal-400 hover:bg-teal-950/30">
                Access Downloads
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-purple-400" />
              <CardTitle className="mt-4">Knowledge Base</CardTitle>
              <CardDescription className="text-zinc-400">Articles and guides on trading</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Explore our extensive knowledge base covering trading strategies, market analysis, and more.
              </p>
              <Button variant="outline" className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-950/30">
                Browse Articles
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <Code className="h-8 w-8 text-blue-400" />
              <CardTitle className="mt-4">API Documentation</CardTitle>
              <CardDescription className="text-zinc-400">Integrate with our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Comprehensive API documentation for developers looking to integrate with PlusZero.
              </p>
              <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-950/30">
                View API Docs
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <Users className="h-8 w-8 text-amber-400" />
              <CardTitle className="mt-4">Community</CardTitle>
              <CardDescription className="text-zinc-400">Connect with other traders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Join our community of traders to share strategies, insights, and get help from peers.
              </p>
              <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-950/30">
                Join Community
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <BarChart2 className="h-8 w-8 text-green-400" />
              <CardTitle className="mt-4">Market Analysis</CardTitle>
              <CardDescription className="text-zinc-400">Research and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Access our team's market analysis, research reports, and trading insights.
              </p>
              <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-950/30">
                View Analysis
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <Zap className="h-8 w-8 text-yellow-400" />
              <CardTitle className="mt-4">Quick Start Guide</CardTitle>
              <CardDescription className="text-zinc-400">Get up and running fast</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-zinc-300">
                Our quick start guide will have you trading with PlusZero in minutes.
              </p>
              <Button variant="outline" className="w-full border-yellow-500/30 text-yellow-400 hover:bg-yellow-950/30">
                Start Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

