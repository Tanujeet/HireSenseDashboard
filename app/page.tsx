"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          pointer-events: none;
        }

        .btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          outline: none;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.07);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .btn:hover::after { opacity: 1; }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(0); }

        .btn-primary {
          background: #7c5cfc;
          color: #fff;
          box-shadow: 0 0 0 1px rgba(124,92,252,0.4), 0 8px 32px rgba(124,92,252,0.3);
        }

        .btn-primary:hover {
          box-shadow: 0 0 0 1px rgba(124,92,252,0.6), 0 12px 40px rgba(124,92,252,0.45);
        }

        .btn-secondary {
          background: transparent;
          color: #c4b8f8;
          box-shadow: 0 0 0 1px rgba(196,184,248,0.25);
        }

        .btn-secondary:hover {
          box-shadow: 0 0 0 1px rgba(196,184,248,0.5);
          color: #fff;
        }

        .arrow-icon {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 256px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7c5cfc;
          margin-bottom: 28px;
        }

        .eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7c5cfc;
          display: inline-block;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .divider {
          width: 1px;
          height: 24px;
          background: linear-gradient(to bottom, transparent, rgba(196,184,248,0.2), transparent);
          display: inline-block;
          vertical-align: middle;
          margin: 0 8px;
        }

        .badge {
          font-size: 10px;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.05em;
          color: rgba(196,184,248,0.4);
          font-weight: 400;
          text-transform: none;
        }
      `}</style>

      {/* Grain overlay */}
      <div className="grain" />

      {/* Animated orbs */}
      <motion.div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #7c5cfc, transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #c084fc, transparent 70%)",
          bottom: "-15%",
          right: "-5%",
        }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="orb"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #38bdf8, transparent 70%)",
          top: "60%",
          left: "15%",
          opacity: 0.08,
        }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Horizontal line decoration */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(124,92,252,0.08), rgba(124,92,252,0.12), rgba(124,92,252,0.08), transparent)",
          pointerEvents: "none",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
      />

      {/* Main content */}
      <div
        style={{
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 700,
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Eyebrow label */}
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow-dot" />
          Your career, your terms
          <span className="divider" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 400,
            lineHeight: 1.08,
            color: "#f0ecff",
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          Build your future{" "}
          <em style={{ color: "#c4b8f8", fontStyle: "italic" }}>
            with clarity
          </em>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 300,
            color: "rgba(196,184,248,0.55)",
            letterSpacing: "0.01em",
            lineHeight: 1.6,
            marginBottom: 56,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.28 }}
        >
          Choose your path — or let us sharpen the resume that gets you there.
        </motion.p>

        {/* Buttons */}
        <motion.div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.42 }}
        >
          {/* Button 1 — Roadmap / Choose path */}
          <motion.a
            href="https://roadmap.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M13 6l6 6-6 6" />
            </svg>
            Choose Your Path
            <span className="arrow-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.a>

          {/* Button 2 — Resume optimizer */}
          <motion.a
            href="https://hire-sense-git-main-tanujeets-projects.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
            Optimize Resume
            <span className="arrow-icon">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Footer micro-text */}
        <motion.p
          style={{
            marginTop: 48,
            fontSize: 11,
            color: "rgba(196,184,248,0.2)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          No account required &nbsp;·&nbsp; Opens in new tab
        </motion.p>
      </div>
    </main>
  );
}
