const diferenciais = [
  { icon: 'ri-award-line', text: 'Mais de 70 anos de tradição odontológica' },
  { icon: 'ri-microscope-line', text: 'Tecnologia de última geração' },
  { icon: 'ri-team-line', text: 'Equipe especializada e certificada' },
  { icon: 'ri-heart-pulse-line', text: 'Atendimento humanizado e personalizado' },
  { icon: 'ri-tooth-line', text: 'Mais de 5.000 implantes realizados pelo Dr. Luiz Gustavo Rosati' },
];

export default function About() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511941061974', '_blank');
  };

  return (
    <section id="sobre" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37]/40">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20dentist%20team%20in%20modern%20dental%20clinic%2C%20smiling%20dental%20professionals%20in%20white%20coats%2C%20warm%20and%20welcoming%20atmosphere%2C%20clean%20bright%20dental%20office%20background%2C%20navy%20blue%20and%20white%20color%20scheme%2C%20high-end%20dental%20practice%2C%20friendly%20and%20trustworthy%20medical%20team%20portrait&width=700&height=600&seq=about001&orientation=landscape"
                alt="Equipe Rosati Odontologia"
                className="w-full h-72 md:h-96 object-cover object-top"
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-[#d4af37]/40 rounded-2xl px-5 py-3">
                <p className="text-[#d4af37] font-bold text-2xl">70+</p>
                <p className="text-white/80 text-sm">Anos de Tradição</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[55%]">
            {/* Badge */}
            <div className="inline-flex items-center border border-[#d4af37]/60 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">Sobre a Rosati</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Rosati Odontologia:<br />
              <span className="text-[#d4af37]">Cuidado que Transforma</span>
            </h2>

            <div className="space-y-4 text-white/75 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Desde 1950, a família Rosati constrói uma trajetória dedicada à odontologia, unindo conhecimento, experiência e compromisso com o cuidado das pessoas.
              </p>
              <p>
                Uma história que começou com o Sr. Felipe Rosati, protético dentário, teve continuidade com seu filho, Luiz Felipe Rosati, que permanece em atividade no laboratório de prótese, e segue hoje com o Dr. Luiz Gustavo Rosati, nosso diretor.
              </p>
              <p>
                São gerações dedicadas à odontologia, compartilhando conhecimento e construindo uma história que atravessa décadas.
              </p>
              <p className="text-[#d4af37] font-semibold">
                Mais de 70 anos de tradição familiar, experiência e dedicação à odontologia.
              </p>
            </div>

            {/* Diferenciais */}
            <ul className="space-y-4 mb-10">
              {diferenciais.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37]/20 flex-shrink-0">
                    <i className={`${item.icon} text-[#d4af37] text-lg`} />
                  </div>
                  <span className="text-white/85 text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973b] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Agende sua Avaliação
              <i className="ri-arrow-right-line text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
