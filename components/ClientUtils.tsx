'use client'

import { useEffect, useRef, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (!visible) return null

  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971543392616"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}

export function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let n = 0
        const step = Math.max(1, Math.ceil(target / 60))
        const t = setInterval(() => {
          n += step
          if (n >= target) { setCount(target); clearInterval(t) }
          else setCount(n)
        }, 28)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="stat-number">{count}<span style={{ fontSize: '0.55em' }}>+</span></div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export function AnimateOnScroll({ children, delay = 0, className = '' }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function TestimonialSlider({ testimonials }: { testimonials: { name: string; role: string; avatar: string; text: string }[] }) {
  const [idx, setIdx] = useState(0)

  return (
    <div>
      <div className="testimonial-card" style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 28 }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#c8a96e"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ))}
        </div>
        <p style={{ color: '#999', fontStyle: 'italic', lineHeight: 2, marginBottom: 36, fontSize: 15, fontFamily: "'Playfair Display', serif" }}>
          &ldquo;{testimonials[idx].text}&rdquo;
        </p>
        <img
          src={testimonials[idx].avatar}
          alt={testimonials[idx].name}
          loading="lazy"
          style={{ width: 68, height: 68, borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover', display: 'block', border: '2px solid #c8a96e' }}
        />
        <h4 style={{ color: '#fff', fontWeight: 700, letterSpacing: 2, fontSize: 13, textTransform: 'uppercase' }}>{testimonials[idx].name}</h4>
        <p style={{ color: '#c8a96e', fontSize: 12, marginTop: 6, letterSpacing: 1 }}>{testimonials[idx].role}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32 }}>
        <button
          onClick={() => setIdx(i => (i === 0 ? testimonials.length - 1 : i - 1))}
          style={{ width: 46, height: 46, border: '1px solid #2a2a2a', background: 'transparent', color: '#c8a96e', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = '#c8a96e'}
          onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2a'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
          onClick={() => setIdx(i => (i === testimonials.length - 1 ? 0 : i + 1))}
          style={{ width: 46, height: 46, border: 'none', background: '#c8a96e', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{ width: i === idx ? 28 : 8, height: 8, borderRadius: 4, background: i === idx ? '#c8a96e' : '#1e1e1e', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }}
          />
        ))}
      </div>
    </div>
  )
}
