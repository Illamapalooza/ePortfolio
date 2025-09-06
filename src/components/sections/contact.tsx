"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-20 bg-background">
      <div className="w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind? Let&apos;s work together!
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 text-center max-w-2xl"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these platforms. I&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-8">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">{siteConfig.email}</span>
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Github className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    @Illamapalooza
                  </span>
                </Link>

                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Linkedin className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    @juliusbaliling
                  </span>
                </Link>

                <Link
                  href={siteConfig.links.instagram}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Instagram className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    @julio.ll
                  </span>
                </Link>

                <Link
                  href={siteConfig.links.facebook}
                  target="_blank"
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-background border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Facebook className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    @dagreatjulio
                  </span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium">Current Status</h4>
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Unavailable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
