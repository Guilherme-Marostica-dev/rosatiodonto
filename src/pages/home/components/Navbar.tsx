import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#cta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center cursor-pointer"
          >
            <img
              src={
                scrolled
                  ? 'https://storage.helloreaddy.io/project_files/8d75c123-2ce4-44ac-b079-2294539168a7/e2542e7a-87e4-4f22-a137-b64da9bd0bb1_compressed_GustavoRosati-Logo.webp'
                  : 'https://storage.helloreaddy.io/project_files/8d75c123-2ce4-44ac-b079-2294539168a7/c94daf35-4b85-40e1-83b4-77101f79133c_compressed_GustavoRosati-LogoBranco.webp'
              }
              alt="Rosati Odontologia"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  scrolled ? 'text-black hover:text-[#c9a84c]' : 'text-white hover:text-[#d4af37]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#cta'); }}
              className="bg-[#c9a84c] hover:bg-[#b8973b] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Agende sua Consulta
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-black' : scrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0 bg-black' : scrolled ? 'bg-black' : 'bg-white'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-black' : scrolled ? 'bg-black' : 'bg-white'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="text-white text-2xl font-semibold hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#cta'); }}
          className="bg-[#c9a84c] hover:bg-[#b8973b] text-white text-lg font-bold px-8 py-3 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer mt-4"
        >
          Agende sua Consulta
        </a>
      </div>
    </>
  );
}