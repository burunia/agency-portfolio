"use client"

import { useEffect, useRef } from "react"

export default function AnimatedRibbon() {
  const ribbonGroupRef = useRef<SVGGElement>(null)
  const animationRef = useRef(0)

  useEffect(() => {
    if (!ribbonGroupRef.current) return

    // Clean up any previous paths before starting new animation
    while (ribbonGroupRef.current.firstChild) {
      ribbonGroupRef.current.removeChild(ribbonGroupRef.current.firstChild)
    }

    const group = ribbonGroupRef.current
    const numLines = 55
    const lineOffset = 2.0

    const baseShapes = [
      "M0,300 Q150,250 300,300 T600,300 T900,300 T1200,300 T1500,300 T1800,300 T2100,300 T2400,300",
      "M0,300 Q150,350 300,250 T600,350 T900,250 T1200,350 T1500,250 T1800,350 T2100,250 T2400,300",
      "M0,300 Q150,200 300,350 T600,250 T900,350 T1200,250 T1500,350 T1800,250 T2100,350 T2400,300",
      "M0,300 Q150,270 300,330 T600,270 T900,330 T1200,270 T1500,330 T1800,270 T2100,330 T2400,300",
    ]

    let shapeIndex = 0
    let nextIndex = 1
    let progress = 0
    const speed = 0.0015

    const paths: SVGPathElement[] = []

    // Create all the path elements with initial stretched state
    for (let i = 0; i < numLines; i++) {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path")
      const offsetY = (i - numLines / 2) * lineOffset
      const initialPath = baseShapes[0].replace(/-?[\d.]+/g, (match, index) => {
        if (index % 2 === 1) { // Only modify Y coordinates
          return (parseFloat(match) + offsetY).toString()
        }
        return match
      })
      p.setAttribute("d", initialPath)
      p.setAttribute("fill", "url(#golden)")
      p.setAttribute("opacity", "0.1")
      group.appendChild(p)
      paths.push(p)
    }

    function lerpPath(d1: string, d2: string, t: number, offsetY = 0) {
      const nums1 = d1.match(/-?[\d.]+/g)?.map(Number) || []
      const nums2 = d2.match(/-?[\d.]+/g)?.map(Number) || []
      const result = nums1.map((n, i) => n + (nums2[i] - n) * t)

      for (let i = 1; i < result.length; i += 2) {
        result[i] += offsetY
      }

      let i = 0
      return d1.replace(/-?[\d.]+/g, () => result[i++].toFixed(1))
    }

    function animate() {
      progress += speed
      if (progress >= 1) {
        progress = 0
        shapeIndex = nextIndex
        nextIndex = (nextIndex + 1) % baseShapes.length
      }

      for (let i = 0; i < paths.length; i++) {
        const phase = (i / numLines) * Math.PI * 2
        const localT = (progress + Math.sin(phase) * 0.05 + 1) % 1
        const offsetY = (i - numLines / 2) * lineOffset
        const d = lerpPath(baseShapes[shapeIndex], baseShapes[nextIndex], localT, offsetY)
        paths[i].setAttribute("d", d)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
      if (ribbonGroupRef.current) {
        ribbonGroupRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <svg
      viewBox="0 0 2400 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="golden" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a68a64" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
      </defs>
      <g ref={ribbonGroupRef}></g>
    </svg>
  )
}
