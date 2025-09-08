"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const achievements = [
  {
    title: "AI Automation Challenge - Award Winner (August 2025)",
    description:
      "Received Junior Award at AI Automation Challenge for innovative automation solution hosted by Old St Labs",
    images: [
      { src: "/achievements/old-st-labs-cert.png", type: "certificate" },
      { src: "/achievements/old-st-results.png", type: "certificate" },
    ],
  },
  {
    title: "Indie Hacker Champion (2024)",
    description:
      "Awarded Indie Hacker Award at HOSTARI Labs SI AI-Enabled Hackathon",
    images: [
      { src: "/achievements/hostari1.jpg", type: "photo" },
      { src: "/achievements/hostari2.jpg", type: "photo" },
      { src: "/achievements/hostari4.jpg", type: "photo" },
    ],
  },
  {
    title: "Top 10% TOPCIT Nationwide (April 2024)",
    description:
      "Placed in top 10% at Test of Practical Competency in ICT (TOPCIT)",
    images: [
      { src: "/achievements/topcit1.jpg", type: "certificate" },
      { src: "/achievements/topcit2.jpg", type: "certificate" },
    ],
  },
  {
    title: "Google Solution Challenge Finalist",
    description: "4th Place at a Google Solution Challenge event in 2022",
    images: [
      { src: "/achievements/google1.jpg", type: "photo" },
      { src: "/achievements/google2.jpg", type: "photo" },
      { src: "/achievements/google3.jpg", type: "photo" },
    ],
  },
];

const workExperiences = [
  {
    title: "Full Stack Mobile and Web Developer Contractual",
    company: "Symph",
    logo: "/companies/symph-logo.png",
  },
  {
    title: "Fullstack Developer and Automation Engineer",
    company: "Humanlike",
    logo: "/companies/humanlike-logo.png",
  },
  {
    title: "Lead Fullstack Engineer",
    company: "Nurture Your Leads",
    logo: "/companies/nyl-logo.png",
  },
  {
    title: "Software Engineer",
    company: "Hostari Labs",
    logo: "/companies/hostari-labs-logo.png",
  },
  {
    title: "Computer Science Lead",
    company: "Google Developer Group on Campus",
    logo: "/companies/gdsc-logo.png",
  },
  {
    title: "Core Team Lead",
    company: "Academic Research Group",
    logo: "/companies/cs3.png",
  },
];

export function AboutSection() {
  const stats = [
    {
      number: "3+",
      label: "Years of Experience",
      detail: {
        title: "Experience Breakdown",
        items: [
          "2 years of personal experience",
          "1 year and 6+ months professional experience",
        ],
      },
    },
    {
      number: "5+",
      label: "Projects Completed",
    },
    {
      number: "4",
      label: "Companies Worked With",
    },
    {
      number: "10+",
      label: "Technologies Mastered",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20 bg-background"
    >
      <div className="w-full">
        {/* Work & Collaborations Section */}

        <div className="mb-16 sm:mb-24 lg:mb-32">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-evenly items-center gap-6 sm:gap-8 lg:gap-16">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3 group"
              >
                <motion.div
                  className="relative w-12 h-12 sm:w-16 sm:h-16"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -5, 0],
                    y: -5,
                  }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    hover: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.5 }}
                  />
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-contain filter transition-all duration-500 relative z-10"
                    sizes="64px"
                  />
                </motion.div>
                <motion.p
                  className="text-sm font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {experience.company}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                About Me
              </h2>
              <p className="text-muted-foreground">
                A passionate software engineer crafting digital experiences
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Throughout my journey as a software engineer, combining 2 years
                of hands-on personal projects with 1 year and 6 months of
                professional experience, I&apos;ve had the privilege of working
                on impactful ventures. As a freelancer, product engineer, and
                fullstack developer, for startups such as{" "}
                <span className="text-primary font-bold">
                  Nurture Your Leads
                </span>{" "}
                and{" "}
                <span className="text-primary font-bold">
                  Flying Tigers Express (Symph)
                </span>
                , I&apos;ve architected and delivered innovative solutions that
                directly address real business challenges and user needs. My
                experience spans from conceptualization to deployment,
                consistently focusing on building scalable and maintainable
                applications.
              </p>
              <p>
                What drives me is the opportunity to transform ideas into
                reality through technology. With experience in developing
                alongside AI, I&apos;m always excited to take on new challenges
                and push the boundaries of what&apos;s possible.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Curriculum Vitae
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Updated Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                {"detail" in stat ? (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 sm:p-6 bg-muted/50 rounded-lg space-y-2 text-center cursor-pointer hover:bg-muted/70 transition-colors"
                      >
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                          {stat.number}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </motion.div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          {stat.detail?.title}
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {stat.detail?.items.map((item, i) => (
                            <li key={i} className="flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 sm:p-6 bg-muted/50 rounded-lg space-y-2 text-center hover:bg-muted/70 transition-colors"
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                      {stat.number}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Achievements
            </h2>
            <p className="text-muted-foreground">
              Recognition and awards from my journey in tech
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-12 space-y-6 lg:space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-lg p-4 sm:p-6 transition-all duration-300"
              >
                <div className="space-y-4">
                  <h4 className="font-bold text-lg sm:text-xl text-primary">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {achievement.images.map((img, i) => (
                      <motion.div
                        key={i}
                        className={`relative overflow-hidden rounded-lg bg-muted ${
                          img.type === "certificate"
                            ? "aspect-auto"
                            : "aspect-video"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={img.src}
                          alt={`${achievement.title} image ${i + 1}`}
                          width={img.type === "certificate" ? 400 : undefined}
                          height={img.type === "certificate" ? 600 : undefined}
                          fill={img.type === "photo"}
                          className={`transition-transform group-hover:scale-105 ${
                            img.type === "certificate"
                              ? "object-contain w-full h-auto"
                              : "object-cover"
                          }`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
