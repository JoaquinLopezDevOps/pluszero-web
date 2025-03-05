"use client"

import { useEffect, useRef } from "react"
import "../app/circuit-background.css"

export function CircuitBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create circuit lines
    const container = containerRef.current
    if (!container) return

    // Clear existing lines
    const existingLines = container.querySelectorAll(".circuit-line")
    existingLines.forEach((line) => line.remove())

    // Add new lines
    for (let i = 0; i < 10; i++) {
      const line = document.createElement("div")
      line.className = "circuit-line"
      line.style.top = `${Math.random() * 100}%`
      line.style.animationDelay = `${Math.random() * 5}s`
      line.style.animationDuration = `${5 + Math.random() * 10}s`
      container.appendChild(line)
    }

    // Create candlesticks for trading chart
    const chart = chartRef.current
    if (!chart) return

    // Clear existing candlesticks
    const existingCandlesticks = chart.querySelectorAll(".candlestick")
    existingCandlesticks.forEach((candlestick) => candlestick.remove())

    // Generate random candlesticks
    const generateCandlesticks = () => {
      chart.innerHTML = ""
      const candlestickCount = 30
      const chartWidth = chart.offsetWidth
      const candlestickWidth = chartWidth / candlestickCount

      for (let i = 0; i < candlestickCount; i++) {
        const height = 20 + Math.random() * 80
        const candlestick = document.createElement("div")
        candlestick.className = "candlestick"
        candlestick.style.height = `${height}%`
        candlestick.style.left = `${i * candlestickWidth}px`
        candlestick.style.animationDelay = `${i * 0.05}s`

        // Randomly choose color (green/red)
        if (Math.random() > 0.5) {
          candlestick.style.background = "linear-gradient(to bottom, rgba(0, 255, 150, 0.8), rgba(0, 200, 100, 0.8))"
        } else {
          candlestick.style.background = "linear-gradient(to bottom, rgba(255, 50, 50, 0.8), rgba(200, 0, 0, 0.8))"
        }

        chart.appendChild(candlestick)
      }
    }

    generateCandlesticks()
    const interval = setInterval(generateCandlesticks, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="circuit-background">
      <div ref={containerRef} className="circuit-lines"></div>
      <div ref={chartRef} className="trading-chart"></div>
    </div>
  )
}

