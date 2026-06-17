'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { Children, cloneElement, useEffect, useRef, useState, useMemo } from 'react';
import './Dock.css';

/* ── DockItem ─────────────────────────────────────────────── */
function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  label,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);
  const [hoveredByEvent, setHoveredByEvent] = useState(false);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  const distanceVal = useTransform(mouseDistance, val => Math.abs(val));

  useEffect(() => {
    const updateHoverState = () => {
      const isProximity = mouseX.get() !== Infinity && distanceVal.get() < baseItemSize * 0.8;
      isHovered.set((hoveredByEvent || isProximity) ? 1 : 0);
    };

    const unsubDistance = distanceVal.on('change', updateHoverState);
    const unsubMouseX = mouseX.on('change', updateHoverState);
    updateHoverState();

    return () => {
      unsubDistance();
      unsubMouseX();
    };
  }, [distanceVal, mouseX, baseItemSize, isHovered, hoveredByEvent]);

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => setHoveredByEvent(true)}
      onHoverEnd={() => setHoveredByEvent(false)}
      onFocus={() => setHoveredByEvent(true)}
      onBlur={() => setHoveredByEvent(false)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

/* ── DockLabel ────────────────────────────────────────────── */
function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsub = isHovered.on('change', v => setIsVisible(v === 1));
    return unsub;
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className={`dock-label ${className}`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── DockIcon ─────────────────────────────────────────────── */
function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

/* ── Dock ─────────────────────────────────────────────────── */
export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 58,
  distance = 140,
  panelHeight = 58,
  baseItemSize = 42,
}) {
  const mouseX = useMotionValue(Infinity);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const handlePointerMove = (e) => {
      mouseX.set(e.clientX);
    };

    const handlePointerUp = () => {
      setActive(false);
      mouseX.set(Infinity);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [active, mouseX]);

  return (
    <div className="dock-outer" aria-label="Navigation dock">
      <motion.div
        onPointerDown={(e) => {
          setActive(true);
          mouseX.set(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.pointerType === 'mouse') {
            mouseX.set(e.clientX);
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') {
            mouseX.set(Infinity);
          }
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, i) => (
          <DockItem
            key={i}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            label={item.label}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </div>
  );
}
