import React, { useState, useRef, useEffect } from "react";
import logo from "@/assets/digicorner-logo.png";
import introVideoSrc from "@/assets/digicorner-intro.mp4?url";

type Props = {
  onFinish: () => void;
};

const IntroVideo: React.FC<Props> = ({ onFinish }) => {
  const [ended, setEnded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoSrc = introVideoSrc;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Prevent body scroll while intro is visible
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    // gentle entrance with slight delay for polish
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleEnded = () => {
    setEnded(true);
  };

  const handleVideoError = () => {
    setVideoFailed(true);
    setEnded(true);
  };

  const handleEnter = () => {
    // fade out then finish with smooth transition
    setVisible(false);
    setTimeout(() => {
      onFinish();
      // Scroll to top of page on homepage entry
      window.scrollTo(0, 0);
    }, 550);
  };

  const handleSkip = () => {
    setVisible(false);
    setTimeout(() => {
      onFinish();
      window.scrollTo(0, 0);
    }, 250);
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-700 w-screen h-screen ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#0B1221" }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={videoSrc}
        preload="metadata"
        playsInline
        muted
        autoPlay
        onEnded={handleEnded}
        onError={handleVideoError}
      />

      {/* Dark navy overlay for premium feel and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/50" />

      {/* Vignette effect - subtle darkening at edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Soft blue radial glow near bottom-center */}
      <div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
        style={{
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Logo and branding - top center/left */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-4 z-20">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
          <img src={logo} alt="DigiCorner" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs md:text-sm font-semibold text-[#F6F1EA] tracking-wide">DIGICORNER</div>
          <div className="text-xs text-[#F6F1EA]/70">Digital Intelligence Agency</div>
        </div>
      </div>

      {/* Main CTA Section - centered */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-6 text-center">
        {/* Enter button - premium styling */}
        <button
          onClick={handleEnter}
          className={`group relative px-10 md:px-12 py-4 rounded-full font-semibold text-[#F6F1EA] text-sm md:text-base transition-all duration-500 ${
            ended ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(79, 70, 229, 0.95) 0%, rgba(37, 99, 235, 0.95) 100%)",
            boxShadow: ended ? "0 20px 60px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)" : "none",
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Enter DigiCorner
            <span className="text-lg">→</span>
          </span>
          {/* Subtle hover effect glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            }}
          />
        </button>

        {/* Error fallback message */}
        {videoFailed && (
          <p className="text-xs md:text-sm text-[#F6F1EA]/60 mt-4 font-light">
            Intro video unavailable. Continue to DigiCorner.
          </p>
        )}
      </div>

      {/* Skip intro - subtle, bottom-right */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-xs md:text-sm text-[#F6F1EA]/50 hover:text-[#F6F1EA] transition-colors duration-300 font-light tracking-wide z-20 group"
      >
        <span className="group-hover:underline">Skip intro</span>
      </button>
    </div>
  );
};

export default IntroVideo;
