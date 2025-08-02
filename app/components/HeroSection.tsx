"use client";

import { useEffect, useState } from "react";
import { heroData } from "../lib/data";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { name, titles, backgroundImage } = heroData;

  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = titles[currentWordIndex];
    const shouldDelete = isDeleting;
    const timeout = setTimeout(
      () => {
        if (!shouldDelete) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      shouldDelete ? 100 : 150
    );
    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage.src})`,
        }}
      />
      <div className="relative z-10 flex items-center h-full px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-white mb-4 tracking-wide"
          >
            {name}
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-text-white"
          >
            <span>I'm </span>
            <span className="relative">
              <span className="pr-2">{displayText}</span>
              <span className="absolute left-0 bottom-[-0.25rem] h-[0.15rem] w-full bg-primary"></span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
