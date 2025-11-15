"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";

const HERO_TAGLINE = "Computer Science Student";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (typedText.length === HERO_TAGLINE.length) {
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(HERO_TAGLINE.slice(0, typedText.length + 1));
    }, 90);

    return () => clearTimeout(timeout);
  }, [typedText]);

  return (
    <section
      id="home"
      className="relative grid gap-12 pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-center"
    >
      <div className="space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm uppercase tracking-[0.4em] text-accent-2"
        >
          Hello there, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Bryan Chora.
          <span className="block text-transparent bg-gradient-to-r from-accent via-[#f5d27a] to-[#fff5c5] bg-clip-text">
            Building data-driven experiences.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-300"
        >
          Pursuing a focus in Data Science &amp; Software Engineering at UTSA,
          driven by curiosity, resilience, and a passion for shipping polished
          products. I thrive at the intersection of machine learning, backend
          systems, and delightful front-end interactions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-2 text-base text-slate-400"
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-400">
            Currently:
          </p>
          <div className="text-xl font-medium text-accent-2">
            <span className="mr-2 text-slate-500">›</span>
            {typedText}
            <span className="ml-1 animate-pulse text-accent">|</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-slate-900 transition hover:accent"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1vs_I7zWrNRrxrP00sxtL5dQcMzOJFXe-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-accent hover:text-white"
          >
            Download Resume
          </a>
        </motion.div>
        <SocialLinks />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="relative mx-auto w-64 max-w-sm rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 text-center shadow-[0_20px_120px_rgba(99,102,241,0.2)] md:w-72"
      >
        <div className="absolute -left-9 top-5 hidden rotate-90 text-xs uppercase tracking-[0.5em] text-slate-500 md:block">
          Resilience
        </div>
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-slate-800">
          <Image
            src="/images/pro_picture.jpg"
            alt="Bryan Chora portrait"
            fill
            className="object-cover"
            sizes="200px"
            priority
          />
        </div>
        <p className="mt-4 text-lg font-semibold text-white">
          Bryan Chora
        </p>
        <p className="text-sm text-slate-400">
          Mexican American, first-gen student, coffee enthusiast, and relentless
          builder.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(0,0,0,0)",
              "0 0 30px rgba(197,154,44,0.45)",
              "0 0 0 rgba(0,0,0,0)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-accent px-4 py-2 font-semibold text-slate-900 transition hover:bg-accent-2"
        >
          Contact Me
        </motion.a>
      </motion.div>
      <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/30 blur-[120px]" />
    </section>
  );
};

export default HeroSection;
