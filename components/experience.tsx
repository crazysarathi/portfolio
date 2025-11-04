"use client"

import { useState } from "react"

export default function Experience() {
  const [expandedExp, setExpandedExp] = useState<number | null>(0)

  const experiences = [
    {
      company: "SmartCliff",
      location: "Coimbatore",
      position: "MERN Developer",
      duration: "Jun 2024 – Oct 2025",
      highlights: [
        "Developed secure MERN-based company website with course management",
        "Built JWT-authenticated user modules and admin panel",
        "Integrated automated email notifications via SendGrid",
        "Implemented real-time updates using React-Redux",
      ],
    },
  ]

  const education = [
    {
      school: "Knowledge Institute of Technology",
      location: "Salem",
      degree: "B.E in Computer Science and Engineering",
      duration: "Aug 2020 - May 2024",
      cgpa: "CGPA: 7.9/10",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Experience & Education</h2>
          <p className="text-foreground/70">My professional journey and academic background</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-accent">Professional Experience</h3>
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                onClick={() => setExpandedExp(expandedExp === idx ? null : idx)}
                className={`mb-6 p-6 bg-card rounded-lg border transition-all duration-300 cursor-pointer ${
                  expandedExp === idx
                    ? "border-primary shadow-lg shadow-primary/20 bg-card/80"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-foreground">{exp.position}</h4>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.duration}</span>
                </div>
                <p className="text-primary font-semibold mb-4">
                  {exp.company} • {exp.location}
                </p>
                <ul
                  className={`space-y-2 text-foreground/80 transition-all duration-300 ${expandedExp === idx ? "max-h-96" : "max-h-0 overflow-hidden"}`}
                >
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-accent">Education</h3>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-foreground mb-2">{edu.school}</h4>
                <p className="text-primary font-semibold mb-2">{edu.degree}</p>
                <div className="flex justify-between text-sm text-muted-foreground mb-3">
                  <span>{edu.location}</span>
                  <span>{edu.duration}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-accent font-semibold">{edu.cgpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
