"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent")
    if (!hasAccepted) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg bg-zinc-800 p-4 shadow-lg">
      <h3 className="mb-2 text-lg font-medium">Este sitio web utiliza cookies</h3>
      <p className="mb-4 text-sm text-zinc-300">
        Usamos cookies para analizar el tráfico del sitio web y optimizar tu experiencia en el sitio. Al aceptar nuestro
        uso de cookies, tus datos se agruparán con los datos de todos los demás usuarios.
      </p>
      <Button
        onClick={acceptCookies}
        className="w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-black hover:from-cyan-600 hover:to-teal-500"
      >
        ACEPTAR
      </Button>
    </div>
  )
}

