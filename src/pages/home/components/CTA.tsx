export default function CTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511941061974', '_blank');
  };

  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20woman%20with%20perfect%20white%20smile%20close%20up%2C%20happy%20confident%20expression%2C%20professional%20dental%20result%20photography%2C%20warm%20golden%20light%2C%20elegant%20background%2C%20luxury%20dental%20clinic%20atmosphere%2C%20high-end%20cosmetic%20dentistry%20result&width=1440&height=700&seq=cta001&orientation=landscape"
          alt="Transforme seu sorriso"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 mx-auto mb-8">
          <i className="ri-emotion-happy-line text-[#d4af37] text-3xl" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Pronto Para Sorrir<br />
          <span className="text-[#d4af37]">Com Confiança?</span>
        </h2>

        <p className="text-white/80 text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Agende sua avaliação e descubra o tratamento ideal para você. Nossa equipe está pronta para transformar seu sorriso com excelência e cuidado.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-[#c9a84c] hover:bg-[#b8973b] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
          >
            <i className="ri-whatsapp-line text-xl" />
            Agendar Avaliação Gratuita
          </button>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-[#d4af37] text-white hover:text-[#d4af37] font-semibold px-8 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
          >
            Falar com Especialista
            <i className="ri-arrow-right-line" />
          </button>
        </div>

        <p className="text-white/50 text-sm mt-6">
          <i className="ri-time-line mr-1" />
          Atendimento rápido via WhatsApp · Sem compromisso
        </p>
      </div>
    </section>
  );
}
