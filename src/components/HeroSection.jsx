import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            variants={itemVariants}
          >
            <span> Hi, I&apos;m</span>
            <span className="text-red-700 ml-2"> Abdessamad</span>
            <span className="text-gradient ml-2"> Najib</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto"
            variants={itemVariants}
          >
            Full-Stack Developer skilled in building responsive and dynamic web
            applications. Proficient in React, Node.js, and modern web
            technologies, with hands-on experience in both front-end and
            back-end development. Passionate about creating efficient, scalable,
            and user-friendly digital solutions
          </motion.p>

          <motion.div className="pt-4" variants={itemVariants}>
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-red-700" />
      </motion.div>
    </section>
  );
};
