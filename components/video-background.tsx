"use client"

import { useEffect, useRef, useState } from "react"
import "../app/video-background.css"

interface VideoBackgroundProps {
  videoUrl: string
  posterUrl?: string
}

export function VideoBackground({ videoUrl, posterUrl = "/video-poster.jpg" }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    video.addEventListener("canplay", handleCanPlay)

    // Check if video is already loaded
    if (video.readyState >= 3) {
      setIsLoaded(true)
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
    }
  }, [])

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Fallback image while video loads */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${posterUrl})` }}
        />
      )}
    </div>
  )
}

