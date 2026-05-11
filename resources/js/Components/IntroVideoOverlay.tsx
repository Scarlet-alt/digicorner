import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type IntroVideoOverlayProps = {
  videoSource: string;
  buttonLabel: string;
};

const DEFAULT_SESSION_KEY = "digicorner-intro-seen";

export function IntroVideoOverlay({
  videoSource,
  buttonLabel,
}: IntroVideoOverlayProps) {
  const [visible, setVisible] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [enterVisible, setEnterVisible] = useState(false);
  const [exitDuration, setExitDuration] = useState(0.8);

  const fallbackBackground = useMemo(
    () =>
      "radial-gradient(circle at 20% 15%, oklch(0.3 0.07 40 / 0.25), transparent 45%), linear-gradient(160deg, oklch(0.15 0.035 260), oklch(0.11 0.03 258))",
    [],
  );

  useEffect(() => {
    const seen = window.sessionStorage.getItem(DEFAULT_SESSION_KEY);
    if (seen === "1") {
      setVisible(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);

  const closeOverlay = (mode: "enter" | "skip") => {
    setExitDuration(mode === "skip" ? 0.22 : 0.8);
    window.sessionStorage.setItem(DEFAULT_SESSION_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: exitDuration, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[210] overflow-hidden"
        >
          {!videoError ? (
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
              src={videoSource}
              onEnded={() => {
                setEnterVisible(true);
              }}
              onError={() => {
                setVideoError(true);
                setEnterVisible(true);
              }}
            />
          ) : (
            <div className="absolute inset-0" style={{ background: fallbackBackground }} />
          )}

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.07_0.02_260_/_0.45),oklch(0.08_0.02_260_/_0.62))]" />

          <div className="absolute right-5 bottom-5 z-20 sm:right-7 sm:bottom-7">
            <button
              type="button"
              onClick={() => closeOverlay("skip")}
              className="inline-flex items-center justify-center border border-cream/25 bg-background/15 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cream/75 backdrop-blur-sm transition duration-300 hover:border-copper/55 hover:text-copper"
            >
              Skip
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <AnimatePresence>
              {enterVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center"
                >
                  <button
                    type="button"
                    onClick={() => closeOverlay("enter")}
                    className="inline-flex min-w-[230px] items-center justify-center border border-copper/70 bg-copper/24 px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-cream shadow-[0_0_40px_oklch(0.68_0.11_45_/_0.18)] transition duration-300 hover:bg-copper/34"
                  >
                    {buttonLabel}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}