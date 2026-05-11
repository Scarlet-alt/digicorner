import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseRevealOptions {
  margin?: string;
  threshold?: number;
}

export function useReveal({ margin = "-60px", threshold = 0 }: UseRevealOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin, amount: threshold });

  return { ref, isInView };
}
