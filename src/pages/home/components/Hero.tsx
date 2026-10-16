export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511941061974', '_blank');
  };

  const handleServices = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20luxury%20dental%20clinic%20interior%20with%20elegant%20equipment%2C%20clean%20white%20and%20navy%20blue%20tones%2C%20professional%20dental%20chair%2C%20bright%20lighting%2C%20minimalist%20design%2C%20high-end%20dental%20office%20with%20sophisticated%20atmosphere%2C%20soft%20natural%20light%20coming%20through%20large%20windows%2C%20premium%20dental%20studio&width=1440&height=900&seq=hero001&orientation=landscape"
          alt="Rosati Odontologia - Clínica Odontológica"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#d4af37]/60 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[#d4af37] text-sm font-medium tracking-wide">Rosati Odontologia</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Seu Sorriso Perfeito<br />
            <span className="text-[#d4af37]">Começa Aqui</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            Excelência em odontologia com tecnologia de ponta e atendimento humanizado. Transforme seu sorriso com quem realmente entende de saúde bucal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleServices}
              className="bg-[#c9a84c] hover:bg-[#b8973b] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
            >
              Conheça Nossos Serviços
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 border-2 border-white/70 hover:border-[#d4af37] text-white hover:text-[#d4af37] font-semibold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
            >
              <i className="ri-whatsapp-line text-xl" />
              Fale no WhatsApp
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14">
            {[
              { value: '70+', label: 'Anos de Tradição' },
              { value: '5.000+', label: 'Implantes Realizados' },
              { value: '98%', label: 'Satisfação' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[#d4af37] text-3xl font-extrabold">{stat.value}</span>
                <span className="text-white/70 text-sm mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Role para baixo</span>
        <i className="ri-arrow-down-line text-[#d4af37] text-xl" />
      </div>
    </section>
  );
}
