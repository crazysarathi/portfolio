"use client"

import { useState } from "react"

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "CSS", "HTML5", "React.js", "Next.js", "Redux", "Tailwind CSS"],
      icon: "🎨",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      icon: "⚙️",
    },
    {
      category: "Database",
      skills: ["MongoDB", "Supabase"],
      icon: "💾",
    },
    {
      category: "Tools & Deployment",
      skills: ["Git Hub", "VS Code", "Postman", "Figma", "Vercel", "Render", "AWS"],
      icon: "🚀",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Skills & Expertise</h2>
          <p className="text-foreground/70">Technologies and tools I specialize in</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCategory(cat.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`p-6 bg-card rounded-lg border transition-all duration-300 ${
                hoveredCategory === cat.category
                  ? "border-primary shadow-lg shadow-primary/20 transform -translate-y-1"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    {skill}
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
