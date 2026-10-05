export default function Home() {
  return (
    <main>
      <section className="header">
        <h1>[ patrick miller ]</h1>
        <p className="title">Software Designer & Computer Science Consulting</p>
        <p className="title">Actuarial Catastrophe Modelling Specialist</p>
      </section>

      <div className="ascii-art">
        {`╔═══════════════════════════════════════════════════════════════╗
║  SOFTWARE DESIGN ◆ COMPUTER SCIENCE ◆ ACTUARIAL CONSULTING  ║
╚═══════════════════════════════════════════════════════════════╝`}
      </div>

      <section className="section">
        <h2 className="section-title">► About</h2>
        <div className="section-content">
          <p>
            Specializing in software design and computer science consulting for actuarial 
            catastrophe modelling. I deliver robust solutions for complex risk assessment 
            and computational challenges in the actuarial and insurance domains.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">► Services</h2>
        <div className="section-content">
          <p>• Software Architecture & Design</p>
          <p>• Catastrophe Modelling Systems</p>
          <p>• Actuarial Computing Solutions</p>
          <p>• Risk Assessment Frameworks</p>
          <p>• High-Performance Computing</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">► Contact</h2>
        <div className="section-content">
          <div className="contact-item">
            <span className="contact-label">Name:</span>
            <span className="contact-value">Mr Patrick Miller</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <span className="contact-value">
              <a href="mailto:patrick.l.miller1299@gmail.com">
                patrick.l.miller1299@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <span className="contact-value">
              <a href="tel:+61432577927">+61 432 577 927</a>
            </span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Patrick Miller Consulting</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          Designed for clarity and simplicity
        </p>
      </footer>
    </main>
  )
}
