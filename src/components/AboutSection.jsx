import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="text-red-700"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold"
              variants={itemVariants}
            >
              Certified Digital Developer
            </motion.h3>

            <motion.p className="text-muted-foreground" variants={itemVariants}>
              With comprehensive training from OFPPT and a Bac+2 in Digital
              Development, I specialize in building responsive, accessible, and
              performant web applications using modern, industry-standard
              technologies.
            </motion.p>

            <motion.p className="text-muted-foreground" variants={itemVariants}>
              I thrive on the challenge of complex problem-solving, leveraging
              my analytical skills and deep technical knowledge to architect
              innovative and robust digital solutions. My goal is to build
              secure, high-quality products that deliver tangible business
              value.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              variants={itemVariants}
            >
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/CV_Abdessamad_Najib.pdf"
                download
                className="px-6 py-2 rounded-full border border-red-700 font-medium  text-black-600 hover:bg-red-400 transition-colors duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-red-700" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-red-700" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-red-700" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Development</h4>
                  <p className="text-muted-foreground">
                    Designing, building, and documenting robust and secure
                    RESTful and GraphQL APIs to power modern web and mobile
                    applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
