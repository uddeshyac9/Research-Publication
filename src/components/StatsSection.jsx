import { useEffect, useState, useRef, useMemo } from "react"

const StatsSection = () => {
  const sectionRef = useRef(null)

  // 1) Original stats (order doesn’t matter here)
  const stats = [
    { value: 4, label: "Years Of Expertise", suffix: "+", color: "bg-amber-800" },
    { value: 5, label: "Publication", suffix: "+", color: "bg-gray-900" },
    { value: 8, label: "Scientific Article Writing", suffix: "+", color: "bg-gray-900" },
    { value: 2, label: "Book Publication", suffix: "+", color: "bg-gray-900" },
  ]

  // 2) Sort once (useMemo keeps the same array reference across renders)
  const sortedStats = useMemo(
    () => [...stats].sort((a, b) => a.value - b.value),
    [] // only run on first render
  )

  // 3) Counter state (length matches sortedStats)
  const [counters, setCounters] = useState(() => sortedStats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  // 4) IntersectionObserver effect → set hasAnimated to true when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  // 5) Animation effect → runs exactly once, when hasAnimated becomes true
  useEffect(() => {
    if (!hasAnimated) return

    let animationFrameId;
    const duration = 5000 // 5 seconds total
    const startTime = performance.now()

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Update each counter proportionally
      setCounters(sortedStats.map(stat => Math.round(stat.value * progress)))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        // Final guarantee: set each counter exactly to its target value
        setCounters(sortedStats.map(stat => stat.value))
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [hasAnimated, sortedStats])

  return (
    <section ref={sectionRef} className="py-16 relative">
      {/* Background image (semi‐transparent) */}
      <div className="absolute inset-0 bg-gray-100 z-0">
        <img
          src="https://images.unsplash.com/photo-1550592704-6c76defa9985?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Document background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedStats.map((stat, index) => (
            <div
              key={index}
              className={`
                ${stat.color}
                rounded-lg
                p-8
                text-center
                flex flex-col items-center justify-center
                min-h-[200px]
                transition-transform hover:scale-105
              `}
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
