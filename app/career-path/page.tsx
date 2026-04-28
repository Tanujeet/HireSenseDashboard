"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React and build modern UIs.",
    link: "https://frontend-two-kappa-58.vercel.app/",
  },
  {
    title: "Backend Development",
    description: "Work with servers, databases, APIs and system logic.",
    link: "https://backend-iota-nine-82.vercel.app/",
  },
  {
    title: "Data Analyst",
    description: "Analyze data, build dashboards, and derive insights.",
    link: "https://data-analyst-kappa.vercel.app/",
  },
  {
    title: "AI Engineer",
    description: "Build AI systems using LLMs, APIs, and real-world models.",
    link: "https://ai-engineer-delta.vercel.app/",
  },
  {
    title: "Machine Learning Engineer",
    description: "Train models, optimize pipelines, and deploy ML systems.",
    link: "https://machine-learning-six-pi.vercel.app/",
  },
  {
    title: "Data Scientist",
    description: "Work on statistics, ML, and predictive data modeling.",
    link: "https://data-scientist-silk.vercel.app/",
  },
];;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function CareerPathPage() {
    return (
      <>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(11,11,18,0.7)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "0 20px",
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* LEFT → LOGO */}
            <Link href="/">HireSense</Link>

            {/* RIGHT */}
            <span
              style={{
                fontSize: 13,
                color: "#9f9bbf",
              }}
            >
              Career Paths
            </span>
          </div>
        </header>
        <main
          style={{
            minHeight: "100vh",
            background:
              "radial-gradient(circle at 20% 20%, #1a1a2e, #0b0b12 60%)",
            color: "#eae7ff",
            fontFamily: "'DM Sans', sans-serif",
            padding: "80px 20px",
          }}
        >
          {/* HERO */}
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(42px, 7vw, 72px)",
                fontWeight: 400,
                marginBottom: 16,
              }}
            >
              Discover Your{" "}
              <span style={{ color: "#a78bfa", fontStyle: "italic" }}>
                Path
              </span>
            </h1>

            <p
              style={{
                color: "rgba(167,139,250,0.6)",
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              Choose a direction and start building real-world skills that
              matter.
            </p>
          </div>

          {/* CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            {cards.map((card) => (
              <Link key={card.title} href={card.link}>
                <motion.div
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    y: -6,
                    boxShadow: "0 20px 60px rgba(124,92,255,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  style={{
                    background: "#12121a",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 20,
                    padding: 30,
                    cursor: "pointer",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 22,
                      marginBottom: 12,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      color: "#9f9bbf",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {card.description}
                  </p>

                  <div
                    style={{
                      marginTop: 20,
                      color: "#a78bfa",
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    Explore →
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </main>
      </>
    );
}
