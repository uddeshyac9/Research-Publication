import { useEffect, useState, useRef, useMemo } from "react"

const StatsSection = () => {
  const sectionRef = useRef(null)

  // 1) Original stats with lighter bg colors
  const stats = [
    { value: 5,    label: "Years Of Expertise", suffix: "+", color: "bg-amber-200 text-amber-800" },
    { value: 1000, label: "Happy Clients",      suffix: "+", color: "bg-amber-200 text-amber-800" },
    { value: 5000, label: "Noble Ideas",        suffix: "+", color: "bg-gray-200 text-gray-900" },
    { value: 500,  label: "Writing Support",    suffix: "+", color: "bg-gray-200 text-gray-900" },
  ]

  const sortedStats = useMemo(
    () => [...stats].sort((a, b) => a.value - b.value),
    []
  )

  const [counters, setCounters] = useState(() => sortedStats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return
    let frameId
    const duration = 5000
    const start = performance.now()

    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCounters(sortedStats.map(stat => Math.round(stat.value * progress)))
      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setCounters(sortedStats.map(stat => stat.value))
      }
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [hasAnimated, sortedStats])

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="absolute inset-0 bg-gray-100 z-0">
        <img
          src="https://images.unsplash.com/photo-1550592704-6c76defa9985?q=80&w=2940&auto=format&fit=crop"
          alt="Document background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedStats.map((stat, idx) => (
            <div
              key={idx}
              className={`
                ${stat.color}
                rounded-lg
                p-4 sm:p-6
                text-center
                flex flex-col items-center justify-center
                min-h-[140px] sm:min-h-[200px]
                transition-transform hover:scale-105
              `}
            >
              <div className="font-bold mb-1 text-3xl sm:text-4xl">
                {counters[idx].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-base sm:text-xl font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
