export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Parthasarathi V</h3>
            <p className="text-foreground/70 text-sm">MERN Stack Developer crafting amazing web experiences</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack</h4>
            <p className="text-foreground/70 text-sm">React • Next.js • Node.js • MongoDB • Tailwind CSS</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-foreground/60 text-sm">© {currentYear} Parthasarathi V. All rights reserved.</p>
          <p className="text-foreground/50 text-xs">Built with React, Next.js, Three.js, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
