const PARTICLES = [
  { top: '12%', left: '8%', size: 6, delay: 0 },
  { top: '22%', left: '46%', size: 4, delay: 1.2 },
  { top: '8%', left: '72%', size: 5, delay: 2.1 },
  { top: '38%', left: '92%', size: 4, delay: 0.6 },
  { top: '62%', left: '4%', size: 5, delay: 1.8 },
  { top: '78%', left: '38%', size: 4, delay: 2.8 },
  { top: '70%', left: '64%', size: 6, delay: 0.9 },
  { top: '88%', left: '86%', size: 4, delay: 3.4 },
  { top: '46%', left: '28%', size: 3, delay: 2.4 },
  { top: '30%', left: '60%', size: 3, delay: 3.8 },
]

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, oklch(0.52 0.2 268 / 0.18) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
        }}
      />
      <div className="absolute -top-24 left-[8%] size-[420px] animate-drift rounded-full bg-chart-2/15 blur-3xl" />
      <div
        className="absolute top-32 right-[4%] size-[380px] animate-drift rounded-full bg-primary/12 blur-3xl"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 size-[300px] animate-drift rounded-full bg-chart-4/15 blur-3xl"
        style={{ animationDelay: '-11s' }}
      />
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute animate-twinkle rounded-full bg-primary/40"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
