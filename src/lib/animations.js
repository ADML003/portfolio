/* ─────────────────────────────────────────────────────────
   Shared animation variants for Framer Motion
───────────────────────────────────────────────────────── */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT   = [0.4, 0, 0.2, 1];
export const SPRING_SOFT   = { type: 'spring', stiffness: 280, damping: 32 };
export const SPRING_STIFF  = { type: 'spring', stiffness: 400, damping: 28 };

/* ── Viewport defaults ── */
export const VIEWPORT = { once: true, margin: '-80px' };

/* ── Fade up ── */
export const fadeUp = {
  hidden:  { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

/* ── Fade in ── */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

/* ── Slide from left ── */
export const slideLeft = {
  hidden:  { opacity: 0, x: -24, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

/* ── Stagger container ── */
export const stagger = (delay = 0.07) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
});

/* ── Character clip reveal ── */
export const charReveal = {
  hidden:  { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

/* ── Scale in ── */
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92, filter: 'blur(4px)' },
  visible: {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};
