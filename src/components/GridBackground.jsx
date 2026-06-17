import { useEffect, useRef } from 'react';

/**
 * GridBackground — Refined Canvas Layer
 * ──────────────────────────────────────
 * Design: Barely-there grid that fades in on cursor proximity.
 * Inspired by Linear / Stripe aesthetic — the grid should feel
 * like it's BEHIND the page surface, glimpsed through a slit.
 *
 * Layers:
 *  1. Major grid (88px) — ultra-faint structural lines
 *  2. Minor grid (44px) — only visible very close to cursor
 *  3. Intersection dots — scale with proximity (cubic falloff)
 *  4. Soft radial glow — barely perceptible warmth
 *  5. Edge vignette — grid fades at viewport borders
 *  6. Drifting particles — near-invisible atmospheric dots
 */

const MINOR  = 44;
const MAJOR  = MINOR * 2;
const REVEAL = 340;
const FADE   = 1600;

// Per-section accent, extremely desaturated
const ACCENTS_D = [
  [0.00, 0.20, '62,207,142'],
  [0.20, 0.38, '99,102,241'],
  [0.38, 0.56, '168,85,247'],
  [0.56, 0.80, '245,158,11'],
  [0.80, 1.00, '99,102,241'],
];
const ACCENTS_L = [
  [0.00, 0.20, '79,70,229'],
  [0.20, 0.38, '59,130,246'],
  [0.38, 0.56, '124,58,237'],
  [0.56, 0.80, '217,119,6'],
  [0.80, 1.00, '79,70,229'],
];

const lerp  = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const rand  = (a, b) => Math.random() * (b - a) + a;

// Cubic ease-out for proximity — much softer falloff than linear
const ease = (t) => 1 - Math.pow(1 - t, 3);

class Mote {
  constructor(W, H) { this.W = W; this.H = H; this.reset(true); }
  reset(init = false) {
    this.x = rand(0, this.W);
    this.y = init ? rand(0, this.H) : this.H + 4;
    this.vx = rand(-0.04, 0.04);
    this.vy = rand(-0.12, -0.035);
    this.r  = rand(0.4, 1.2);
    this.life = rand(0.35, 0.85);
    this.decay = rand(0.0003, 0.0009);
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    this.life -= this.decay;
    if (this.life <= 0 || this.y < -6) this.reset();
  }
}

const GridBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    const c   = ref.current;
    const ctx = c.getContext('2d', { alpha: true });
    let raf, W = 0, H = 0;
    let mx = -9999, my = -9999;     // raw mouse
    let sx = -9999, sy = -9999;     // smoothed mouse
    let scrollY = 0;
    let gridA   = 0;                // master grid opacity
    let lastMove = 0;
    const motes = [];

    const resize = () => {
      W = c.width  = window.innerWidth;
      H = c.height = window.innerHeight;
      motes.length = 0;
      for (let i = 0; i < 35; i++) motes.push(new Mote(W, H));
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const onMouse  = (e) => { mx = e.clientX; my = e.clientY; lastMove = performance.now(); };
    const onLeave  = ()  => { mx = my = -9999; };

    const accent = (isDark) => {
      const dH = document.documentElement.scrollHeight - H;
      const p  = dH > 0 ? clamp(scrollY / dH, 0, 1) : 0;
      for (const [s, e, c] of (isDark ? ACCENTS_D : ACCENTS_L))
        if (p >= s && p < e) return c;
      return isDark ? ACCENTS_D[4][2] : ACCENTS_L[4][2];
    };

    // Edge vignette mask — grid fades near viewport edges
    const edgeFade = (x, y) => {
      const margin = 120;
      const fx = clamp(Math.min(x, W - x) / margin, 0, 1);
      const fy = clamp(Math.min(y, H - y) / margin, 0, 1);
      return fx * fy;
    };

    const draw = (ts) => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const col = accent(isDark);

      // Smooth cursor
      sx = lerp(sx, mx, 0.08);
      sy = lerp(sy, my, 0.08);

      // Master alpha — gentle fade
      const idle = ts - lastMove;
      const target = (idle < FADE && mx > 0) ? 1 : 0;
      gridA = lerp(gridA, target, target > gridA ? 0.04 : 0.018);

      ctx.clearRect(0, 0, W, H);

      if (gridA > 0.005) {
        // ── Major grid (88px) ─────────────────────────────
        //    Extremely faint — structural skeleton
        const majorBase = isDark ? 0.028 : 0.035;
        const majorPeak = isDark ? 0.09  : 0.08;

        for (let x = 0; x <= W; x += MAJOR) {
          const d   = Math.abs(x - sx);
          const prx = d < REVEAL ? ease(1 - d / REVEAL) : 0;
          const ef  = edgeFade(x, H / 2);
          const a   = (majorBase + prx * majorPeak) * gridA * ef;
          if (a < 0.003) continue;
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H);
          ctx.strokeStyle = `rgba(${col},${a})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        for (let y = 0; y <= H; y += MAJOR) {
          const d   = Math.abs(y - sy);
          const prx = d < REVEAL ? ease(1 - d / REVEAL) : 0;
          const ef  = edgeFade(W / 2, y);
          const a   = (majorBase + prx * majorPeak) * gridA * ef;
          if (a < 0.003) continue;
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y);
          ctx.strokeStyle = `rgba(${col},${a})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // ── Minor grid (44px) ─────────────────────────────
        //    Only visible within inner reveal zone
        const minorPeak = isDark ? 0.06 : 0.05;
        const innerReveal = REVEAL * 0.55;

        for (let x = 0; x <= W; x += MINOR) {
          if (x % MAJOR === 0) continue; // skip majors
          const d   = Math.abs(x - sx);
          const prx = d < innerReveal ? ease(1 - d / innerReveal) : 0;
          const ef  = edgeFade(x, H / 2);
          const a   = prx * minorPeak * gridA * ef;
          if (a < 0.003) continue;
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H);
          ctx.strokeStyle = `rgba(${col},${a})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        for (let y = 0; y <= H; y += MINOR) {
          if (y % MAJOR === 0) continue;
          const d   = Math.abs(y - sy);
          const prx = d < innerReveal ? ease(1 - d / innerReveal) : 0;
          const ef  = edgeFade(W / 2, y);
          const a   = prx * minorPeak * gridA * ef;
          if (a < 0.003) continue;
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y);
          ctx.strokeStyle = `rgba(${col},${a})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // ── Intersection dots ─────────────────────────────
        //    Major intersections are slightly larger
        const dotBase = isDark ? 0.05 : 0.04;
        const dotPeak = 0.22;
        for (let x = 0; x <= W; x += MINOR) {
          for (let y = 0; y <= H; y += MINOR) {
            const d   = Math.hypot(x - sx, y - sy);
            const prx = d < REVEAL ? ease(1 - d / REVEAL) : 0;
            if (prx < 0.01) continue;
            const ef    = edgeFade(x, y);
            const a     = (dotBase + prx * dotPeak) * gridA * ef;
            const isMaj = (x % MAJOR === 0 && y % MAJOR === 0);
            const r     = isMaj ? 1.0 + prx * 1.2 : 0.6 + prx * 0.7;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${col},${a})`;
            ctx.fill();
          }
        }

        // ── Spotlight glow ────────────────────────────────
        //    Very muted radial warmth
        if (sx > -999) {
          const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, 260);
          grd.addColorStop(0,   `rgba(${col},${isDark ? 0.025 : 0.018})`);
          grd.addColorStop(0.6, `rgba(${col},${isDark ? 0.008 : 0.005})`);
          grd.addColorStop(1,   'rgba(0,0,0,0)');
          ctx.fillStyle = grd;
          ctx.fillRect(sx - 260, sy - 260, 520, 520);
        }
      }

      // ── Scroll vignette — barely-there tint ─────────────
      const vg = ctx.createRadialGradient(W * 0.5, 0, 0, W * 0.5, 0, H * 0.6);
      vg.addColorStop(0, `rgba(${accent(isDark)},${isDark ? 0.02 : 0.012})`);
      vg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      // ── Particles ───────────────────────────────────────
      const pCol = isDark ? '62,207,142' : '99,102,241';
      for (const m of motes) {
        m.update();
        const a = m.life * (isDark ? 0.18 : 0.12);
        if (a < 0.008) continue;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pCol},${a})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize',      resize,  { passive: true });
    window.addEventListener('scroll',      onScroll,{ passive: true });
    window.addEventListener('mousemove',   onMouse, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',      resize);
      window.removeEventListener('scroll',      onScroll);
      window.removeEventListener('mousemove',   onMouse);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default GridBackground;
