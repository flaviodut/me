import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Flávio<span>.</span></div>
        <nav className="nav" aria-label="Navegação principal">
          <button
            className="mobile-menu-btn"
            aria-expanded={isMenuOpen}
            aria-controls="nav-list"
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <div className="hamburger"></div>
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="nav-list">
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#experiencia" onClick={closeMenu}>Experiência</a></li>
            <li><a href="#repositorios" onClick={closeMenu}>Repositórios</a></li>
            <li><a href="#educacao" onClick={closeMenu}>Educação</a></li>
            <li><a href="#habilidades" onClick={closeMenu}>Habilidades</a></li>
            <li><a href="#contato" className="btn-outline" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
