export default function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-primary">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              I am a MERN Stack Developer with 1 year of hands-on experience in building dynamic, responsive, and
              user-centric web applications. I specialize in developing both front-end and back-end systems, creating
              reusable components, and integrating secure RESTful APIs.
            </p>

            <p>
              Currently based in Coimbatore, Tamil Nadu, I graduated from Knowledge Institute of Technology, Salem with
              a B.E in Computer Science and Engineering (CGPA: 7.9/10). I'm passionate about clean architecture,
              performance optimization, and modern JavaScript frameworks.
            </p>

            <p>
              I'm a collaborative team player committed to delivering scalable, maintainable, and high-quality solutions
              in Agile environments. Let's build something amazing together!
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-secondary/20 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-2">Contact</h3>
              <p className="text-foreground/80">
                <a href="tel:+918056475103" className="hover:text-primary transition-colors">
                  +91 8056475103
                </a>
              </p>
              <p className="text-foreground/80">
                <a href="mailto:vijaysarathi68@gmail.com" className="hover:text-primary transition-colors">
                  vijaysarathi68@gmail.com
                </a>
              </p>
            </div>

            <div className="p-6 bg-secondary/20 rounded-lg border border-border hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
              <p className="text-foreground/80">Salem, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
