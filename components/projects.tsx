"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "SmartCliff",
      description:
        "A secure MERN-based company website featuring course management and comprehensive company profile. Includes JWT-authenticated user modules, automated email notifications via SendGrid, and a responsive admin panel.",
      tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
      link: "https://smartcliff.in/",
      highlight: true,
    },
    {
      title: "Placement Hub",
      description:
        "Placement Management System with student profiles, eligibility tracking, and recruitment scheduling. Features role-based dashboards for Admin, Staff, and Student with real-time statistics and automated report generation.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-foreground/70">A selection of projects showcasing my skills in full-stack development</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-8 rounded-lg border transition-all duration-300 ${
                project.highlight
                  ? "bg-gradient-to-r from-primary/10 to-accent/10 border-primary/50"
                  : "bg-card border-border"
              } ${hoveredIndex === idx ? "border-primary shadow-lg shadow-primary/20 transform -translate-y-1" : "hover:border-primary/70"}`}
            >
              <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  {project.highlight && (
                    <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors hover:scale-110 duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6a8 8 0 100 16 8 8 0 000-16zM9 11h6v2H9v-2zm0-4h6v2H9V7zm0 8h6v2H9v-2z" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30 transition-all duration-300 hover:bg-accent/20 hover:border-accent/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
