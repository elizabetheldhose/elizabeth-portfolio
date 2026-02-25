"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Elizabeth</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Elizabeth
          </span>{" "}
          👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-400 max-w-2xl"
        >
          React Developer passionate about building scalable,
          responsive and high-performance web applications.
        </motion.p>

      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-400 leading-8">
          I'm a Frontend Developer specializing in React, Next.js, and modern
          JavaScript technologies. I focus on building clean UI, reusable
          components, and scalable architecture. I enjoy turning complex
          problems into simple, beautiful solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "REST APIs",
            "Git",
            "Firebase",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 hover:bg-blue-500 transition px-5 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
       <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-900 p-8 rounded-2xl hover:scale-[1.02] transition duration-300"
>

  {/* Screenshot */}
  <div className="relative w-full h-[350px] mb-6 rounded-xl overflow-hidden border border-gray-800">
    <Image
      src="/images/hersync-dashboard.png"
      alt="HerSync Dashboard"
      fill
      className="object-cover"
    />
  </div>

  <h3 className="text-2xl font-bold mb-4">HerSync</h3>

  <p className="text-gray-400 mb-6 leading-7">
    A women's health management platform built using React and Node.js.
    Features include authentication, dashboard analytics, and user
    tracking functionalities.
  </p>

  <div className="flex gap-4 flex-wrap">
    <a
      href="https://her-sync-frontend.vercel.app"
      target="_blank"
      className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/elizabetheldhose/HerSync-frontend"
      target="_blank"
      className="border border-gray-600 px-4 py-2 rounded-md hover:border-blue-400 transition"
    >
      Frontend Code
    </a>

    <a
      href="https://github.com/elizabetheldhose/HerSync-backend"
      target="_blank"
      className="border border-gray-600 px-4 py-2 rounded-md hover:border-green-400 transition"
    >
      Backend Code
    </a>
  </div>

</motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400 mb-4">
          Let’s collaborate and build impactful products.
        </p>
        <p className="text-lg">elizabetheldhose001@email.com</p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Elizabeth. All rights reserved.
      </footer>

    </main>
  );
}