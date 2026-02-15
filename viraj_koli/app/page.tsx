"use client";

import { Meteors } from "@/components/ui/meteors";
import { HyperText } from "@/components/ui/hyper-text";
import { Terminal, TypingAnimation } from "@/components/ui/terminal";
import Carousel from "@/components/ui/Carousel";
import { Globe } from "@/components/ui/globe";
import { GitHubContributions } from "@/components/ui/github-contributions";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import {
  Github,
  Linkedin,
  Instagram,
  User,
  Calendar,
  Code2,
  ExternalLink,
  Folder,
  Mail,
  Phone,
  MapPin,
  Send,
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
    icon: <FiCode className="h-4 w-4 text-blue-500" />,
    image: "/Mee.jpeg",
  },
  {
    title: "Creator",
    description: "Crafting experiences that make a difference",
    id: 2,
    icon: <FiUser className="h-4 w-4 text-blue-500" />,
    image: "/Me2.jpg",
  },
  {
    title: "Passionate",
    description: "Driven by curiosity and continuous learning",
    id: 3,
    icon: <FiHeart className="h-4 w-4 text-blue-500" />,
    image: "/Me3.jpeg",
  },
  {
    title: "Problem Solver",
    description: "Turning vague requirements into clear, working systems",
    id: 4,
    icon: <FiHeart className="h-4 w-4 text-blue-500" />,
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

// Projects array
const projects = [
  {
    name: "OrbiQ Technologies Website",
    description:
      "Orbiq Technologies stands as Pune's premier destination for Java, Spring Boot, and Microservices training. Our institute combines theoretical knowledge with practical, hands-on experience to create industry-ready developers. Provides content on Instagram as well as Youtube",
    techStack: ["NextJs", "Postgres", "zoho mail", "Tailwind CSS"],
    image: "/orbiqtechnologies.png", // Add your project image in public folder
    link: "https://orbiqtechnologies.com", // Leave empty string if no live link
    github: "https://github.com/VirajKoli/orbiq",
    gradientColors: { firstColor: "#3b82f6", secondColor: "#8b5cf6" }, // Blue to Purple
  },
  {
    name: "Campusconnect",
    description:
      "A platform to connect students, faculty, and campus communities.",
    techStack: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    image: "/campusconnect.png",
    link: "https://campus-connect-ten-theta.vercel.app/",
    github: "https://github.com/VirajKoli/campusconnect",
    gradientColors: { firstColor: "#f59e0b", secondColor: "#ef4444" }, // Orange to Red
  },
  {
    name: "Time Tracker",
    description:
      "A complete time-tracking and productivity monitoring platform built with React and Node.js",
    techStack: ["React", "NodeJs", "MongoDB", "Tailwind CSS"],
    image: "/timetracker.png",
    link: "",
    github: "https://github.com/0x1git/time-Machine",
    gradientColors: { firstColor: "#10b981", secondColor: "#06b6d4" }, // Green to Cyan
  },
  {
    name: "Car Polling and Ride Sharing System",
    description:
      "The primary objective centres on developing a sophisticated website-based platform that enables vehicle owners traveling long distances to efficiently share available seats with passengers heading in the same direction. Includes Driver document verification as well as platform charges calculations.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    image: "/drscp.png",
    link: "", // No live demo
    github: "https://github.com/Virajkoli/Infosys",
    gradientColors: { firstColor: "#f59e0b", secondColor: "#ef4444" }, // Orange to Red
  },
  {
    name: "College Event Website (Carvaan 2K25)",
    description:
      "A dynamic and visually appealing website created for Carvaan 2K25, the annual cultural festival of GCOEJ. The website showcases event details, schedules, and highlights, providing an engaging user experience for attendees and participants.",
    techStack: ["EJS", "GSAP", "NodeJs"],
    image: "/carvaan.png",
    link: "https://carvaan2k25-gcoej.onrender.com/",
    github: "https://github.com/Shubham07badgujar/Carvaan-2K25-Website",
    gradientColors: { firstColor: "#10b981", secondColor: "#06b6d4" }, // Orange to Red
  },
  // {
  //   name: "Suraksha - Tourist Safety PWA",
  //   description:
  //     "A Progressive Web App (PWA) designed to enhance tourist safety by providing real-time location tracking, emergency alerts, and quick access to local emergency services.",
  //   techStack: ["Nextjs", "Tailwind"],
  //   image: "/suraksha.png",
  //   link: "https://suraksha-pwa.vercel.app/", // No live demo
  //   github: "https://github.com/Virajkoli/tourist-safety-pwa",
  //   gradientColors: { firstColor: "#3b82f6", secondColor: "#8b5cf6" }, // Blue to Purple
  // },
  {
    name: "StackIt - Question and Answer Platform for Developers",
    description:
      "StackIt is a modern, minimal question-and-answer platform built with Next.js 15, PostgreSQL, and Cloudinary. It provides a clean, intuitive interface for users to ask questions, provide answers, and engage in collaborative learning.",
    techStack: ["Nextjs", "PostgreSQL", "Tailwind"],
    image: "/stackit.png",
    link: "", // No live demo
    github: "https://github.com/Virajkoli/StackIt_-Team-Hustlers-_Odoo",
    gradientColors: { firstColor: "#3b82f6", secondColor: "#8b5cf6" }, // Blue to Purple
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
          <div className="flex justify-center mb-6 px-2">
            <Terminal className="max-w-2xl w-full text-xs sm:text-sm md:text-base">
              <TypingAnimation
                duration={50}
                className="text-green-500 break-words"
              >
                $ npx viraj_koli achievements
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={1500}
                className="text-yellow-400 break-words"
              >
                🥈 1st Runner-up – GHR.Hack 1.0 (National Level Hackathon)
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={3500}
                className="text-amber-400 break-words"
              >
                🏆 Gold Rank (Top 2%) – JAVA Certification, NPTEL
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={9500}
                className="text-orange-400 break-words"
              >
                🥇 Gold Badge – SQL (HackerRank)
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={11500}
                className="text-purple-400 break-words"
              >
                🚀 Top 55 out of 5000+ teams – Odoo National Hackathon (Oct
                2025)
              </TypingAnimation>
              <TypingAnimation
                duration={30}
                delay={11500}
                className="text-purple-400 break-words"
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
              {/* Globe above heading */}
              <div className="relative h-[400px] w-full mb-8 flex items-center justify-center overflow-hidden">
                <Globe
                  className="opacity-80"
                  config={{
                    width: 600,
                    height: 600,
                    onRender: () => {},
                    devicePixelRatio: 2,
                    phi: 0,
                    theta: 0.3,
                    dark: 1,
                    diffuse: 0.4,
                    mapSamples: 16000,
                    mapBrightness: 1.2,
                    baseColor: [0.3, 0.3, 0.3],
                    markerColor: [59 / 255, 130 / 255, 246 / 255],
                    glowColor: [0.3, 0.3, 0.3],
                    markers: [{ location: [20.9974, 75.5626], size: 0.1 }],
                  }}
                />
              </div>
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
            <div className="border text-center border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <AuroraText className="text-xl text font-semibold text-white mb-4">
                Frontend
              </AuroraText>
              <div className="w-full overflow-hidden">
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
            <div className="border text-center border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <AuroraText className="text-xl font-semibold text-white mb-4">
                Backend
              </AuroraText>
              <div className="w-full overflow-hidden">
                <div className="flex animate-marquee-reverse hover:pause-animation">
                  {[...backendSkills, ...backendSkills, ...backendSkills].map(
                    (skill, index) => (
                      <div key={index} className="flex-shrink-0 mx-6">
                        {skill.node}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="border text-center border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <AuroraText className="text-xl font-semibold text-white mb-4">
                Databases
              </AuroraText>
              <div className="w-full overflow-hidden">
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
            <div className="border text-center border-zinc-800 rounded-lg p-6 bg-zinc-900/50">
              <AuroraText className="text-xl font-semibold text-white mb-4">
                Tools & Technologies
              </AuroraText>
              <div className="w-full overflow-hidden">
                <div className="flex animate-marquee-reverse hover:pause-animation">
                  {[...toolsSkills, ...toolsSkills, ...toolsSkills].map(
                    (skill, index) => (
                      <div key={index} className="flex-shrink-0 mx-6">
                        {skill.node}
                      </div>
                    ),
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

          {/* GitHub Contributions */}
          <div className="mb-8">
            <GitHubContributions username="VirajKoli" years={[2025, 2026]} />
          </div>

          {/* Roadmap Container */}
          <div className="relative">
            {/* Desktop SVG Road Path - Hidden on mobile */}
            <svg
              className="w-full h-auto hidden md:block"
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

            {/* Experience Items positioned along the road - Desktop Only */}
            <div className="absolute inset-0 hidden md:block">
              {/* Experience 1 - Start */}
              <div className="absolute" style={{ top: "24%", left: "-5%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center mb-4 p-2 hover:scale-120 transition-transform duration-300">
                    <Image
                      src="/gcoej.png"
                      alt="Gcoej"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
                    <h4 className="text-white font-semibold mb-1">
                      Software Development Cell Member
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Oct 2024 - Present
                    </p>
                    <p className="text-zinc-300 text-xs">
                      Government College of Engineering, Jalgaon
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 2 - Start */}
              <div className="absolute" style={{ top: "40%", left: "20%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center mb-4 p-2 hover:scale-120 transition-transform duration-300">
                    <Image
                      src="/gcoej.png"
                      alt="Gcoej"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
                    <h4 className="text-white font-semibold mb-1">
                      Managing Editor
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Oct 2024 - June 2025
                    </p>
                    <p className="text-zinc-300 text-xs">GCOEJ Media</p>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="absolute" style={{ top: "10%", left: "28%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-500 flex items-center justify-center mb-4 p-2 hover:scale-120 transition-transform duration-300">
                    <Image
                      src="/gcoej.png"
                      alt="Gcoej"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
                    <h4 className="text-white font-semibold mb-1">
                      SRC Member
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Nov 2024 - June 2025
                    </p>
                    <p className="text-zinc-300 text-xs">
                      Government College of Engineering, Jalgaon
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="absolute" style={{ top: "58%", left: "40%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-green-800 flex items-center justify-center mb-4 p-2 hover:scale-120 transition-transform duration-300">
                    <Image
                      src="/electrosoft.png"
                      alt="Electrosoft"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
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

              {/* Experience 5 */}
              <div className="absolute" style={{ top: "35%", left: "58%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center mb-4 p-2 hover:scale-120 transition-transform duration-300">
                    <Image
                      src="/infosys.png"
                      alt="Infosys"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
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

              {/* Experience 6 - Current */}
              <div className="absolute" style={{ top: "62%", left: "75%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-green-500 flex items-center justify-center mb-4 p-2 hover:scale-120 transition-transform duration-300">
                    <Image
                      src="/orbiq3.png"
                      alt="Orbiq"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
                    <h4 className="text-white font-semibold mb-1">
                      Full Stack Web Developer & <br />
                      Content Manager
                    </h4>
                    <p className="text-zinc-400 text-sm mb-2">
                      Oct 2025 - Present
                    </p>
                    <p className="text-lime-500 text-xs mb-2">
                      OrbiQ Technologies
                    </p>
                    <p className="text-zinc-300 text-xs">
                      orbiqtechnologies.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience 7 - Current */}
              <div className="absolute" style={{ top: "32%", left: "90%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border-4 border-pink-500 flex items-center justify-center mb-4 animate-pulse hover:scale-120 transition-transform duration-300">
                    <FiHeart className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-xs hover:scale-110 transition-transform duration-300">
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

            {/* Mobile Vertical Layout */}
            <div className="md:hidden space-y-6 px-4">
              {/* Experience 1 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center p-1.5">
                    <Image
                      src="/gcoej.png"
                      alt="Gcoej"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    Software Development Cell Member
                  </h4>
                  <p className="text-zinc-400 text-xs mb-1">
                    Oct 2024 - Present
                  </p>
                  <p className="text-zinc-300 text-xs">
                    Government College of Engineering, Jalgaon
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center p-1.5">
                    <Image
                      src="/gcoej.png"
                      alt="Gcoej"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    Managing Editor
                  </h4>
                  <p className="text-zinc-400 text-xs mb-1">
                    Oct 2024 - June 2025
                  </p>
                  <p className="text-zinc-300 text-xs">GCOEJ Media</p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center p-1.5">
                    <Image
                      src="/gcoej.png"
                      alt="Gcoej"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    SRC Member
                  </h4>
                  <p className="text-zinc-400 text-xs mb-1">
                    Nov 2024 - June 2025
                  </p>
                  <p className="text-zinc-300 text-xs">
                    Government College of Engineering, Jalgaon
                  </p>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-green-800 flex items-center justify-center p-1.5">
                    <Image
                      src="/electrosoft.png"
                      alt="Electrosoft"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    Full Stack Web Developer Intern
                  </h4>
                  <p className="text-zinc-400 text-xs mb-1">
                    June 2025 - July 2025
                  </p>
                  <p className="text-zinc-300 text-xs">Electrosoft Systems</p>
                </div>
              </div>

              {/* Experience 5 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center p-1.5">
                    <Image
                      src="/infosys.png"
                      alt="Infosys"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    Java Developer Intern
                  </h4>
                  <p className="text-zinc-400 text-xs mb-1">
                    Aug 2025 - Oct 2025
                  </p>
                  <p className="text-zinc-300 text-xs">Infosys Springboard</p>
                </div>
              </div>

              {/* Experience 6 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-green-500 flex items-center justify-center p-1.5">
                    <Image
                      src="/orbiq3.png"
                      alt="Orbiq"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    Full Stack Web Developer & Content Manager
                  </h4>
                  <p className="text-zinc-400 text-sm mb-2">
                    Oct 2025 - Present
                  </p>
                  <p className="text-lime-500 text-xs mb-2">
                    OrbiQ Technologies
                  </p>
                  <p className="text-zinc-300 text-xs">orbiqtechnologies.com</p>
                </div>
              </div>

              {/* Experience 7 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-800 border-2 border-pink-500 flex items-center justify-center animate-pulse">
                    <FiHeart className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 flex-1">
                  <h4 className="text-white font-semibold mb-1 text-xs sm:text-sm">
                    Open to Opportunities
                  </h4>
                  <p className="text-zinc-400 text-xs mb-1">2026</p>
                  <p className="text-zinc-300 text-xs">
                    Currently seeking full-time roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Folder className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
            <HyperText
              className="text-4xl sm:text-5xl font-bold mb-4"
              duration={1000}
            >
              Featured Projects
            </HyperText>
            <p className="text-zinc-400 text-lg">
              A showcase of my recent work and contributions
            </p>
          </div>

          {/* Projects List - Alternating Layout */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    {/* Subtle gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${project.gradientColors.firstColor}, ${project.gradientColors.secondColor})`,
                      }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-1 h-8 rounded-full"
                        style={{
                          background: `linear-gradient(to bottom, ${project.gradientColors.firstColor}, ${project.gradientColors.secondColor})`,
                        }}
                      />
                      <h3 className="text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-sm rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-sm border border-zinc-800 hover:border-zinc-700"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-white transition-colors text-sm"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradientColors.firstColor}, ${project.gradientColors.secondColor})`,
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-7xl w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Mail className="w-8 h-8 text-zinc-400 mx-auto mb-4" />
            <HyperText
              className="text-4xl sm:text-5xl font-bold mb-4"
              duration={1000}
            >
              Get In Touch
            </HyperText>
            <p className="text-zinc-400 text-lg">
              Let's collaborate and create something amazing together
            </p>
          </div>

          {/* Contact Header Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Heading & Background Image */}
            <div
              className="relative rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: "url('/Mee.jpeg')",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Reach Out to Us
                </h3>
                <p className="text-zinc-200 text-lg">
                  Need support, have a query, or looking for collaboration?
                  Let's talk!
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <a
                  href="tel:+"
                  className="text-zinc-400 hover:text-white transition-colors"
                ></a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <a
                  href="mailto:viraj.codes@gmail.com"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  viraj.codes@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-zinc-400">Jalgaon, Maharashtra, India</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-4 pt-8 border-t border-zinc-800">
              <a
                href="https://github.com/VirajKoli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com/_r4j.44_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/viraj-koli-a65637255"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-zinc-800">
        {/* Curved Overlay Design */}
        <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
          <svg
            className="absolute top-0 w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q360,100 720,50 T1440,0 L1440,100 L0,100 Z"
              fill="rgb(24, 24, 27)"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Viraj Koli</h3>
              <p className="text-zinc-400 mb-4">
                Full Stack Developer passionate about building elegant solutions
                with modern technologies.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/VirajKoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-zinc-400 hover:text-white" />
                </a>
                <a
                  href="https://instagram.com/_r4j.44_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-zinc-400 hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/viraj-koli-a65637255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-zinc-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-zinc-400">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:viraj.codes@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    viraj.codes@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:+"
                    className="hover:text-white transition-colors"
                  ></a>
                </li>
                <li className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="w-4 h-4" />
                  <span>Jalgaon, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Viraj Koli. All rights reserved.
              Built with Love 💓
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
