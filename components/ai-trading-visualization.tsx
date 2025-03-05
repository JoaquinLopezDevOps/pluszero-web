"use client"

import { useEffect, useRef } from "react"

interface Point {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  color: string
  connections: number[]
}

interface Connection {
  from: number
  to: number
  strength: number
  active: boolean
  pulsePosition: number
  pulseDirection: number
  pulseSpeed: number
  color: string
}

interface CandleStick {
  x: number
  open: number
  close: number
  high: number
  low: number
  color: string
  width: number
}

// Helper function to modify rgba alpha value
function adjustAlpha(rgbaColor: string, newAlpha: number): string {
  // Parse the rgba components
  const rgbaMatch = rgbaColor.match(/rgba$$\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*$$/)

  if (rgbaMatch) {
    const [, r, g, b] = rgbaMatch
    return `rgba(${r}, ${g}, ${b}, ${newAlpha})`
  }

  // Fallback for non-rgba colors
  return rgbaColor
}

export function AITradingVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create neural network points
    const points: Point[] = []
    const connections: Connection[] = []
    const candlesticks: CandleStick[] = []

    // Initialize points
    const initPoints = () => {
      points.length = 0

      // Create 3 layers of points
      const layers = 3
      const pointsPerLayer = [6, 8, 5]
      const colors = ["rgba(0, 255, 255, 0.8)", "rgba(255, 105, 180, 0.8)", "rgba(0, 255, 150, 0.8)"]

      let pointIndex = 0

      for (let layer = 0; layer < layers; layer++) {
        const layerPoints = pointsPerLayer[layer]
        const xPos = (canvas.width * (layer + 1)) / (layers + 1)

        for (let i = 0; i < layerPoints; i++) {
          const yPos = (canvas.height * (i + 1)) / (layerPoints + 1)

          points.push({
            x: xPos,
            y: yPos,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            radius: 4 + Math.random() * 2,
            color: colors[layer],
            connections: [],
          })

          // Connect to previous layer
          if (layer > 0) {
            const prevLayerStart = pointsPerLayer[layer - 1] > 0 ? pointIndex - pointsPerLayer[layer - 1] : 0

            // Connect to some points in the previous layer
            const connectionsCount = 1 + Math.floor(Math.random() * 3)
            const possibleConnections = [...Array(pointsPerLayer[layer - 1]).keys()].map((i) => i + prevLayerStart)

            for (let c = 0; c < connectionsCount; c++) {
              if (possibleConnections.length === 0) break

              const randomIndex = Math.floor(Math.random() * possibleConnections.length)
              const targetPoint = possibleConnections[randomIndex]
              possibleConnections.splice(randomIndex, 1)

              points[pointIndex].connections.push(targetPoint)

              // Add connection
              connections.push({
                from: targetPoint,
                to: pointIndex,
                strength: 0.1 + Math.random() * 0.9,
                active: Math.random() > 0.3,
                pulsePosition: 0,
                pulseDirection: Math.random() > 0.5 ? 1 : -1,
                pulseSpeed: 0.01 + Math.random() * 0.03,
                color: `rgba(${Math.random() > 0.5 ? "0, 255, 255" : "255, 105, 180"}, ${0.2 + Math.random() * 0.4})`,
              })
            }
          }

          pointIndex++
        }
      }
    }

    // Initialize candlesticks
    const initCandlesticks = () => {
      candlesticks.length = 0

      const count = 20
      const width = (canvas.width * 0.7) / count
      const startX = canvas.width * 0.15

      let lastClose = canvas.height * 0.5

      for (let i = 0; i < count; i++) {
        const open = lastClose
        const close = open + (Math.random() - 0.5) * canvas.height * 0.1
        const high = Math.min(open, close) - Math.random() * canvas.height * 0.05
        const low = Math.max(open, close) + Math.random() * canvas.height * 0.05

        candlesticks.push({
          x: startX + i * width,
          open,
          close,
          high,
          low,
          color: close < open ? "rgba(255, 50, 50, 0.7)" : "rgba(0, 200, 100, 0.7)",
          width: width * 0.7,
        })

        lastClose = close
      }
    }

    // Initialize
    initPoints()
    initCandlesticks()

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(10, 10, 20, 1)")
      gradient.addColorStop(1, "rgba(30, 30, 50, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(100, 100, 150, 0.1)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw candlesticks
      candlesticks.forEach((candle) => {
        // Draw wick
        ctx.strokeStyle = candle.color
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(candle.x, candle.high)
        ctx.lineTo(candle.x, candle.low)
        ctx.stroke()

        // Draw body
        ctx.fillStyle = candle.color
        const bodyHeight = Math.abs(candle.close - candle.open)
        const bodyY = Math.min(candle.close, candle.open)
        ctx.fillRect(candle.x - candle.width / 2, bodyY, candle.width, bodyHeight)
      })

      // Draw connections
      connections.forEach((connection) => {
        if (!connection.active) return

        const fromPoint = points[connection.from]
        const toPoint = points[connection.to]

        // Draw connection line
        ctx.strokeStyle = connection.color
        ctx.lineWidth = 1 + connection.strength
        ctx.beginPath()
        ctx.moveTo(fromPoint.x, fromPoint.y)
        ctx.lineTo(toPoint.x, toPoint.y)
        ctx.stroke()

        // Draw pulse
        connection.pulsePosition += connection.pulseSpeed * connection.pulseDirection

        if (connection.pulsePosition > 1) {
          connection.pulsePosition = 1
          connection.pulseDirection = -1
        } else if (connection.pulsePosition < 0) {
          connection.pulsePosition = 0
          connection.pulseDirection = 1
        }

        const pulseX = fromPoint.x + (toPoint.x - fromPoint.x) * connection.pulsePosition
        const pulseY = fromPoint.y + (toPoint.y - fromPoint.y) * connection.pulsePosition

        // Fixed: Create a new color with adjusted alpha instead of string manipulation
        ctx.fillStyle = adjustAlpha(connection.color, 0.8)
        ctx.beginPath()
        ctx.arc(pulseX, pulseY, 2 + connection.strength * 2, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw points
      points.forEach((point) => {
        // Move point slightly
        point.x += point.dx
        point.y += point.dy

        // Bounce off edges
        if (point.x < point.radius || point.x > canvas.width - point.radius) {
          point.dx *= -1
        }

        if (point.y < point.radius || point.y > canvas.height - point.radius) {
          point.dy *= -1
        }

        // Draw point
        ctx.fillStyle = point.color
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow - Fixed: Create proper gradient with correct color format
        const pointGradient = ctx.createRadialGradient(
          point.x,
          point.y,
          point.radius * 0.5,
          point.x,
          point.y,
          point.radius * 3,
        )

        // Fixed: Use the helper function to adjust alpha values
        pointGradient.addColorStop(0, adjustAlpha(point.color, 0.3))
        pointGradient.addColorStop(1, adjustAlpha(point.color, 0))

        ctx.fillStyle = pointGradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius * 3, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw overlay text
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.font = "12px monospace"
      ctx.fillText("AI TRADING MODEL", 20, 30)
      ctx.fillText("NEURAL NETWORK ANALYSIS", 20, 50)

      // Draw some metrics
      ctx.fillStyle = "rgba(0, 255, 255, 0.7)"
      ctx.fillText("PREDICTION ACCURACY: 94.2%", canvas.width - 220, 30)
      ctx.fillText("MARKET VOLATILITY: MEDIUM", canvas.width - 220, 50)
      ctx.fillText("SIGNAL STRENGTH: HIGH", canvas.width - 220, 70)

      // Randomly activate/deactivate connections
      if (Math.random() < 0.05) {
        const randomConnection = Math.floor(Math.random() * connections.length)
        connections[randomConnection].active = !connections[randomConnection].active
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full rounded-lg" style={{ background: "#0a0a14" }} />
}

