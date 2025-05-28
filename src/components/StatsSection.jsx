"use client"

import { useEffect, useState, useRef } from "react"

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { value: 8, label: "Years Of Expertise", suffix: "", color: "bg-amber-800" },
    { value: 5420, label: "Publication", suffix: "+", color: "bg-gray-900" },
    { value: 857, label: "Scientific Article Writing", suffix: "+", color: "bg-gray-900" },
    { value: 18, label: "Book Publication", suffix: "+", color: "bg-gray-900" },
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 5000 // 5 seconds
    const interval = 20 // Update every 20ms for smooth animation
    const steps = duration / interval

    const timers = stats.map((stat, index) => {
      const increment = stat.value / steps
      let count = 0

      return setInterval(() => {
        count += increment
        if (count >= stat.value) {
          count = stat.value
          clearInterval(timers[index])
        }

        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(count)
          return newCounters
        })
      }, interval)
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [isVisible, stats])

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="absolute inset-0 bg-gray-100 z-0">
        <img src="/document-bg.jpg" alt="Document background" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-[200px] transition-transform hover:scale-105`}
            >
              <div className="text-amber-500 text-4xl font-bold mb-2">
                {counters[index].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-white text-xl font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
