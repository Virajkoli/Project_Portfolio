"use client";

import { Meteors } from "@/components/ui/meteors";
import { HyperText } from "@/components/ui/hyper-text";
import { Terminal, TypingAnimation } from "@/components/ui/terminal";
import Carousel from "@/components/ui/Carousel";
import {
  Github,
  Linkedin,
  Instagram,
  User,
  Calendar,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { FiUser, FiCode, FiHeart } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiSpring,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiAmazon,
  SiFirebase,
  SiVercel,
  SiFigma,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { AuroraText } from "@/components/ui/aurora-text";

const carouselItems = [
  {
    title: "Developer",
    description: "Building elegant solutions with modern technologies",
    id: 1,
    icon: <FiCode className="h-4 w-4 text-white" />,
    image: "/Me.jpg",
  },
  {
    title: "Creator",
    description: "Crafting experiences that make a difference",
    id: 2,
    icon: <FiUser className="h-4 w-4 text-white" />,
    image: "/Me2.jpg",
  },
  {
    title: "Passionate",
    description: "Driven by curiosity and continuous learning",
    id: 3,
    icon: <FiHeart className="h-4 w-4 text-white" />,
    image: "/Me3.jpeg",
  },
  {
    title: "Problem Solver",
    description: "Turning vague requirements into clear, working systems",
    id: 4,
    icon: <FiHeart className="h-4 w-4 text-white" />,
    image: "/Me4.jpeg",
  },
  {
    title: "System Thinker",
    description: "Designing scalable architectures, not just features",
    id: 3,
    icon: <FiHeart className="h-4 w-4 text-white" />,
    image: "/Me5.jpeg",
  },
];

// Skills organized into categories with icons and names
const frontendSkills = [
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiHtml5 className="w-12 h-12 text-orange-500" />
        <span className="text-sm text-zinc-300 font-medium">HTML5</span>
      </div>
    ),
    alt: "HTML5",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiCss3 className="w-12 h-12 text-blue-500" />
        <span className="text-sm text-zinc-300 font-medium">CSS3</span>
      </div>
    ),
    alt: "CSS3",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiJavascript className="w-12 h-12 text-yellow-400" />
        <span className="text-sm text-zinc-300 font-medium">JavaScript</span>
      </div>
    ),
    alt: "JavaScript",
  },

  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiReact className="w-12 h-12 text-cyan-400" />
        <span className="text-sm text-zinc-300 font-medium">React</span>
      </div>
    ),
    alt: "React",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiNextdotjs className="w-12 h-12 text-white" />
        <span className="text-sm text-zinc-300 font-medium">Next.js</span>
      </div>
    ),
    alt: "Next.js",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiTailwindcss className="w-12 h-12 text-cyan-400" />
        <span className="text-sm text-zinc-300 font-medium">Tailwind CSS</span>
      </div>
    ),
    alt: "Tailwind CSS",
  },
];

const backendSkills = [
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiNodedotjs className="w-12 h-12 text-green-500" />
        <span className="text-sm text-zinc-300 font-medium">Node.js</span>
      </div>
    ),
    alt: "Node.js",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiExpress className="w-12 h-12 text-zinc-300" />
        <span className="text-sm text-zinc-300 font-medium">Express.js</span>
      </div>
    ),
    alt: "Express.js",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <FaJava className="w-12 h-12 text-orange-600" />
        <span className="text-sm text-zinc-300 font-medium">Java</span>
      </div>
    ),
    alt: "Java",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiSpring className="w-12 h-12 text-green-600" />
        <span className="text-sm text-zinc-300 font-medium">Spring Boot</span>
      </div>
    ),
    alt: "Spring Boot",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiSocketdotio className="w-12 h-12 text-white" />
        <span className="text-sm text-zinc-300 font-medium">Socket.io</span>
      </div>
    ),
    alt: "Socket.io",
  },
];

const databaseSkills = [
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiMongodb className="w-12 h-12 text-green-500" />
        <span className="text-sm text-zinc-300 font-medium">MongoDB</span>
      </div>
    ),
    alt: "MongoDB",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiMysql className="w-12 h-12 text-blue-500" />
        <span className="text-sm text-zinc-300 font-medium">MySQL</span>
      </div>
    ),
    alt: "MySQL",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiPostgresql className="w-12 h-12 text-blue-600" />
        <span className="text-sm text-zinc-300 font-medium">PostgreSQL</span>
      </div>
    ),
    alt: "PostgreSQL",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiRedis className="w-12 h-12 text-red-500" />
        <span className="text-sm text-zinc-300 font-medium">Redis</span>
      </div>
    ),
    alt: "Redis",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiSupabase className="w-12 h-12 text-green-400" />
        <span className="text-sm text-zinc-300 font-medium">Supabase</span>
      </div>
    ),
    alt: "Supabase",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiFirebase className="w-12 h-12 text-yellow-500" />
        <span className="text-sm text-zinc-300 font-medium">Firebase</span>
      </div>
    ),
    alt: "Firebase",
  },
];

const toolsSkills = [
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiGit className="w-12 h-12 text-orange-600" />
        <span className="text-sm text-zinc-300 font-medium">Git</span>
      </div>
    ),
    alt: "Git",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiGithub className="w-12 h-12 text-white" />
        <span className="text-sm text-zinc-300 font-medium">GitHub</span>
      </div>
    ),
    alt: "GitHub",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiDocker className="w-12 h-12 text-blue-500" />
        <span className="text-sm text-zinc-300 font-medium">Docker</span>
      </div>
    ),
    alt: "Docker",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiAmazon className="w-12 h-12 text-orange-500" />
        <span className="text-sm text-zinc-300 font-medium">AWS</span>
      </div>
    ),
    alt: "AWS",
  },
  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiVercel className="w-12 h-12 text-white" />
        <span className="text-sm text-zinc-300 font-medium">Vercel</span>
      </div>
    ),
    alt: "Vercel",
  },

  {
    node: (
      <div className="flex flex-col items-center gap-2 px-4">
        <SiFigma className="w-12 h-12 text-purple-400" />
        <span className="text-sm text-zinc-300 font-medium">Figma</span>
      </div>
    ),
    alt: "Figma",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Hero Section with Meteors */}
      <section
        id="home"
        className="relative flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      >
        {/* Meteors Background */}
        <Meteors number={30} />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Hi,
            </h1>
            <HyperText
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-500"
              duration={1000}
            >
              Viraj
            </HyperText>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Here
            </h1>
          </div>

          {/* Terminal Component */}
          <div className="flex justify-center mb-6">
            <Terminal className="max-w-2xl w-full">
              <TypingAnimation duration={50} className="text-green-500">
                $ npx viraj_koli achievements
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={1500}
                className="text-yellow-400"
              >
                🥈 1st Runner-up – GHR.Hack 1.0 (National Level Hackathon)
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={3500}
                className="text-amber-400"
              >
                🏆 Gold Rank (Top 2%) – JAVA Certification, NPTEL
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={9500}
                className="text-orange-400"
              >
                🥇 Gold Badge – SQL (HackerRank)
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={11500}
                className="text-purple-400"
              >
                🚀 Top 55 out of 5000+ teams – Odoo National Hackathon (Oct
                2025)
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={11500}
                className="text-purple-400"
              >
                🚀 Top 265 out of 5000+ teams – Odoo National Hackathon (July
                2025)
              </TypingAnimation>
            </Terminal>
          </div>

          {/* Status and Time Badges */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-300">Open to work</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-zinc-300">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}{" "}
                ID
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/VirajKoli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://instagram.com/_r4j.44_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/viraj-koli-a65637255"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 group"
              aria-label="Twitter/X"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <User className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
            <HyperText
              className="text-4xl sm:text-5xl font-bold mb-4"
              duration={1000}
            >
              About Me
            </HyperText>
            <p className="text-zinc-400 text-lg">
              A little bit of my journey, passion for technology, and something
              that drives me
            </p>
          </div>

          {/* Brief Introduction Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Carousel */}
            <div className="flex items-center justify-center">
              <div style={{ height: "600px", position: "relative" }}>
                <Carousel
                  items={carouselItems}
                  baseWidth={300}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-6 h-6" />A brief introduction
              </h3>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Hey, I'm{" "}
                  <span className="text-blue-500 font-semibold">
                    Viraj Koli
                  </span>{" "}
                  - a Full Stack Software Developer with a deep curiosity for
                  how things work, and why people build them the way they do. My
                  journey into tech quickly turned into a medium of
                  self-expression and continuous exploration. I'm most fluent in
                  Java, and enjoy working across the full stack — from backend
                  logic to crafting smooth, intuitive UIs.
                </p>
                <p>
                  As an introvert, writing and coding are how I process the
                  world. I care about more than just syntax — I'm interested in
                  the human layer of tech: how we work together, what we value
                  in software, and how digital tools shape our social behavior.
                  I'm not here to teach — I'm here to explore, connect dots, and
                  share what I find along the way.
                </p>
                <p>
                  Right now, I'm focused on growing as a builder — building
                  tools, ideas, and connections through thoughtful code and
                  writing. This site is my digital journal: a mix of side
                  projects, reflections, and ideas still in the making. If
                  you're into intentional tech and the questions behind it,
                  stick around — we might think alike.
                </p>
              </div>
            </div>
          </div>

          {/* Growth Journey and Current Work */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* My Growth Journey */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                My Growth Journey
              </h3>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-zinc-800">
                {/* 2026 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                    26
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2026 | Placements
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Got selected for placements. Focusing on honing my skills
                      and showcasing my work to potential employers.
                    </p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                    25
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2025 | Year of Hackathons
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Participated in many Hackathons, gaining valuable
                      experience and expanding my network. Qualified all of
                      them, Won 1 National Level Hackathon and got into top
                      performing teams bunch of times.
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                    24
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2024 | Journey to Full Stack
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Explored more open-source projects and mixed different
                      tech stacks together. Whether it is MERN or Java. Started
                      caring more about clean code and maintainable setups.
                    </p>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                    23
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2023 | Software Development Deep Dive
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Fell deep into the Software Development hole. Daily driver
                      became VSCode + Music, and I spent way too much time
                      discovering various tools and techniques.
                    </p>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                    22
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      2022 | Finding My Flow
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Started getting comfortable with a few tools and
                      languages. Discovered the software world and made tiny
                      projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What I'm Currently Doing */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                What I'm Currently Doing
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <p className="text-zinc-300">
                      Learning to build scalable and efficient applications by
                      learning Docker, Kubernetes and Testing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <p className="text-zinc-300">
                      Exploring Microservices Architecture along with design
                      patterns to build maintainable systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <div>
                    <p className="text-zinc-300">
                      Learning more about Springboot and Java based development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Code2 className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
            <HyperText
              className="text-4xl sm:text-5xl font-bold mb-4"
              duration={1000}
            >
              Skills & Technologies
            </HyperText>
            <p className="text-zinc-400 text-lg">
              Technologies I work with to build amazing projects
            </p>
          </div>

          {/* Skills Content - 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Frontend
              </h3>
              <div className="w-full overflow-hidden py-4">
                <div className="flex animate-marquee hover:pause-animation">
                  {[
                    ...frontendSkills,
                    ...frontendSkills,
                    ...frontendSkills,
                  ].map((skill, index) => (
                    <div key={index} className="flex-shrink-0 mx-6">
                      {skill.node}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Backend
              </h3>
              <div className="w-full overflow-hidden py-4">
                <div className="flex animate-marquee-reverse hover:pause-animation">
                  {[...backendSkills, ...backendSkills, ...backendSkills].map(
                    (skill, index) => (
                      <div key={index} className="flex-shrink-0 mx-6">
                        {skill.node}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Databases
              </h3>
              <div className="w-full overflow-hidden py-4">
                <div className="flex animate-marquee hover:pause-animation">
                  {[
                    ...databaseSkills,
                    ...databaseSkills,
                    ...databaseSkills,
                  ].map((skill, index) => (
                    <div key={index} className="flex-shrink-0 mx-6">
                      {skill.node}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Tools & Technologies
              </h3>
              <div className="w-full overflow-hidden py-4">
                <div className="flex animate-marquee-reverse hover:pause-animation">
                  {[...toolsSkills, ...toolsSkills, ...toolsSkills].map(
                    (skill, index) => (
                      <div key={index} className="flex-shrink-0 mx-6">
                        {skill.node}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Calendar className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
            <AuroraText className="text-6xl sm:text-7xl font-bold mb-4">
              Experience Roadmap
            </AuroraText>
            <p className="text-zinc-400 text-lg">
              My professional journey and milestones
            </p>
          </div>

          {/* Roadmap Container */}
          <div className="relative">
            {/* SVG Road Path */}
            <svg
              className="w-full h-auto"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* White Road with dashed center line */}
              <path
                d="M 50 400 Q 300 150, 600 400 T 1150 400"
                stroke="white"
                strokeWidth="80"
                fill="none"
                opacity="0.1"
              />
              <path
                d="M 50 400 Q 300 150, 600 400 T 1150 400"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="20 15"
                fill="none"
                opacity="0.5"
              />
            </svg>

            {/* Experience Items positioned along the road */}
            <div className="absolute inset-0">
              {/* Experience 1 - Start */}
              <div className="absolute" style={{ top: "48%", left: "5%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-white flex items-center justify-center mb-4 p-2">
                    <Image
                      src="/electrosoft.png"
                      alt="Electrosoft"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs">
                    <h4 className="text-white font-semibold mb-1">
                      Full Stack Web Developer Intern
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      June 2025 - July 2025
                    </p>
                    <p className="text-zinc-300 text-xs">Electrosoft Systems</p>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="absolute" style={{ top: "15%", left: "25%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center mb-4 p-2">
                    <Image
                      src="/infosys.png"
                      alt="Infosys"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs">
                    <h4 className="text-white font-semibold mb-1">
                      Java Developer Intern
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Aug 2025 - Oct 2025
                    </p>
                    <p className="text-zinc-300 text-xs">Infosys Springboard</p>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="absolute" style={{ top: "48%", left: "45%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-green-500 flex items-center justify-center mb-4 p-2">
                    <Image
                      src="/orbiq3.png"
                      alt="Orbiq"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs">
                    <h4 className="text-white font-semibold mb-1">
                      Full Stack Web Developer
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Oct 2025 - Dec 2025
                    </p>
                    <p className="text-lime-500 text-xs mb-2">OrbiQ Technologies</p>
                    <p className="text-zinc-300 text-xs">
                      orbiqtechnologies.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="absolute" style={{ top: "15%", left: "70%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-green-500 flex items-center justify-center mb-4 p-2">
                    <Image
                      src="/orbiq3.png"
                      alt="Orbiq"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs">
                    <h4 className="text-white font-semibold mb-1">
                      Content Manager
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Jan 2026 - Present
                    </p>
                    <p className="text-lime-500 text-xs mb-2">OrbiQ Technologies</p>
                    <p className="text-zinc-300 text-xs">
                      orbiqtechnologies.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 5 - Current */}
              <div className="absolute" style={{ top: "48%", left: "90%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border-4 border-pink-500 flex items-center justify-center mb-4 animate-pulse">
                    <FiHeart className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs">
                    <h4 className="text-white font-semibold mb-1">
                      Open to Opportunities
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">2026</p>
                    <p className="text-zinc-300 text-xs">
                      Currently seeking full-time roles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 bg-zinc-900"
      >
        <h2 className="text-3xl font-bold text-white">Projects Section</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <h2 className="text-3xl font-bold text-white">Contact Section</h2>
      </section>
    </main>
  );
}
