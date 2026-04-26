export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-container">
        <div className="hero-text">
          <div className="title-wrapper">
            <h1 className="title">Flávio Dutra</h1>
          </div>
          <h2 className="subtitle">Front-end Tech Lead <br /><span className="highlight">| CRO & A/B Testing</span></h2>
          <p className="hero-desc">
            Especialista em desenvolvimento web com forte foco em performance, acessibilidade e impacto de negócio.
          </p>
          <div className="hero-cta">
            <a href="#sobre" className="btn-primary">Saber mais</a>
            <a href="#experiencia" className="btn-secondary">Ver Experiência</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/1350829?v=4"
            alt="Flávio Dutra"
            className="hero-profile-img"
          />
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </section>
  );
}
