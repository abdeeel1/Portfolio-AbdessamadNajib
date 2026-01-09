import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  /*   Send, */
} from "lucide-react";
/* import { cn } from "@/lib/utils"; */
import { motion } from "framer-motion";

import TestForm from "./TestForm";
/* import { useState } from "react"; */

export const ContactSection = () => {
  /* const [isSubmitting, setIsSubmitting] = useState(false); */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In <span className="text-red-700"> Touch</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  className="p-3 rounded-full bg-red-700/10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Mail className="h-6 w-6 text-red-700" />{" "}
                </motion.div>
                <div>
                  <h4 className="font-medium text-center"> Email</h4>
                  <a
                    href="mailto:najibabdessamad10@gmail.com"
                    className="text-muted-foreground hover:text-red-700 transition-colors"
                  >
                    <p className="text-center w-10">
                      najibabdessamad10@gmail.com
                    </p>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  className="p-3 rounded-full bg-red-700/10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Phone className="h-6 w-6 text-red-700" />{" "}
                </motion.div>
                <div>
                  <h4 className="font-medium text-center"> Phone</h4>
                  <a
                    href="tel:+212697483167"
                    className="text-muted-foreground hover:text-red-700 transition-colors"
                  >
                    <p className="text-center w-10">+212697483167</p>
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div
                  className="p-3 rounded-full bg-red-700/10"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <MapPin className="h-6 w-6 text-red-700" />{" "}
                </motion.div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-red-700 transition-colors">
                    <p className="whitespace-nowrap w-10">
                      AinChok, Casablanca, Morocco
                    </p>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div className="pt-8" variants={itemVariants}>
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <motion.a
                  href="https://www.linkedin.com/in/abdessamadnajib10"
                  target="_blank"
                  className="hover:text-red-700"
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/abdsvmd/?igsh=Y2pheDN1d28yMXli#"
                  target="_blank"
                  className="hover:text-red-700"
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-8 rounded-lg shadow-xs"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <motion.div
              className="bg-red-100 text-red-800 border border-red-300 px-4 py-3 rounded-md mb-6 text-sm text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              ⚠️ No spam or troll messages — serious inquiries only. <br />
              Thank you !
            </motion.div>

            <TestForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
