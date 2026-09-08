"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function CountUp({
  value,
  duration = 1.8,
  className = "",
}) {
  const match = String(value).match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numeric = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : "";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, numeric, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        setDisplay(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [isInView, numeric, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
