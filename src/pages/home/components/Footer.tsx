const navLinks = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#cta' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-16 pb-0 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden">
        <p className="text-white/10 font-extrabold text-[120px] md:text-[180px] leading-none tracking-widest text-center whitespace-nowrap">
          ROSATI
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1 - Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://storage.helloreaddy.io/project_files/8d75c123-2ce4-44ac-b079-2294539168a7/c94daf35-4b85-40e1-83b4-77101f79133c_compressed_GustavoRosati-LogoBranco.webp"
              alt="Rosati Odontologia - Logo"
              className="h-20 md:h-24 w-auto object-contain mb-1"
            />
            <p className="text-[#d4af37] text-sm font-medium mb-3">Excelência em Odontologia</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Transformando sorrisos e vidas com tecnologia de ponta e atendimento humanizado.
            </p>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/60 hover:text-[#d4af37] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5511941061974"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#d4af37]/15 flex-shrink-0 mt-0.5">
                    <i className="ri-whatsapp-line text-[#d4af37] text-base" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">WhatsApp</p>
                    <p className="text-white/80 group-hover:text-[#d4af37] text-sm transition-colors duration-200">
                      +55 11 94106-1974
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#d4af37]/15 flex-shrink-0 mt-0.5">
                    <i className="ri-map-pin-line text-[#d4af37] text-base" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Endereço</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Avenida Marechal Juarez Távora, 203<br />
                      Super Quadra Morumbi<br />
                      CEP 05750-000
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 - Social */}
          <div>
            <h4 className="text-white font-bold text-base mb-5">Redes Sociais</h4>
            <a
              href="https://www.instagram.com/institutonovaros?igsh=MXRlOTdxMmNxdmI4bQ=="
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a84c] flex-shrink-0">
                <i className="ri-instagram-line text-white text-lg" />
              </div>
              <div>
                <p className="text-white/80 group-hover:text-[#d4af37] text-sm font-medium transition-colors duration-200">
                  @rosati.odonto
                </p>
                <p className="text-white/40 text-xs">Siga-nos no Instagram</p>
              </div>
            </a>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/5511941061974"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973b] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-sm"
              >
                <i className="ri-whatsapp-line text-base" />
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d4af37]/20 py-6 relative z-10">
          <p className="text-white/40 text-xs text-center">
            &copy; {new Date().getFullYear()} Rosati Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
