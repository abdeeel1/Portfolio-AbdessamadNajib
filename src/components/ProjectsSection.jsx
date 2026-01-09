import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ElectroShop Dashboard",
    description:
      "A responsive administrative dashboard built with React, Vite, and Tailwind CSS to manage products and sales data, powered by a live Railway API.",
    image: "/projects/project1.webp",
    tags: ["Html", "React", "Motion UI", "TailwindCss"],
    demoUrl: "https://electroshopma.netlify.app/",
    githubUrl: "https://github.com/abdeeel1/ElectroShop-Dashboard",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A simple weather application built with React, The app fetches real-time weather",
    image: "/projects/project2.jpg",
    tags: ["TypeScript", "React", "Css", "API"],
    demoUrl: "https://abdeeel1.github.io/Weather-App/",
    githubUrl: "https://github.com/abdeeel1/Weather-App?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Student Management",
    description:
      "Student Management App built with React + Online API, With Functions Like Add, Edit, Delete Students.",
    image: "/projects/project3.jpg",
    tags: ["React", "Bootstrap", "API"],
    demoUrl: "https://abdeeel1.github.io/Student-Management/",
    githubUrl:
      "https://github.com/abdeeel1/Student-Management?tab=readme-ov-file",
  },
];

export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-red-700"> Projects </span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of the key projects completed during my Digital
          Development program. Each project demonstrates my foundational skills
          in web development, with a focus on practical application,
          problem-solving, and efficient implementation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="overflow-hidden h-48"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="p-3">
                <motion.div
                  className="flex flex-wrap justify-center items-center gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 mt-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-red-700 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-red-700 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/abdeeel1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check My Github <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
