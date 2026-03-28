import { useEffect } from 'react'

export function useCounters() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        io.unobserve(e.target)
        const target = parseInt(e.target.getAttribute('data-count'), 10)
        const suffix = e.target.getAttribute('data-suffix') || ''
        const dur = 1400
        let start = null
        function tick(now) {
          if (!start) start = now
          const p = Math.min((now - start) / dur, 1)
          e.target.textContent = Math.round(p * target) + (p >= 1 ? suffix : '')
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('[data-count]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
