const services = [
  {
    icon: 'ri-tooth-line',
    title: 'Implantes Dentários',
    description: 'Recupere seu sorriso com implantes de titânio de alta qualidade. Solução permanente e natural para dentes perdidos, com resultado estético impecável.',
    image: 'https://readdy.ai/api/search-image?query=dental%20implant%20procedure%20close%20up%2C%20professional%20dental%20surgery%2C%20clean%20white%20background%2C%20modern%20dental%20equipment%2C%20titanium%20implant%2C%20high-end%20dental%20clinic%20atmosphere%2C%20minimalist%20medical%20photography&width=400&height=260&seq=srv001&orientation=landscape',
  },
  {
    icon: 'ri-align-center',
    title: 'Ortodontia Invisível',
    description: 'Alinhadores transparentes que corrigem o posicionamento dos dentes de forma discreta e confortável, sem interferir no seu dia a dia.',
    image: 'https://readdy.ai/api/search-image?query=clear%20dental%20aligners%20invisible%20braces%20on%20white%20background%2C%20modern%20orthodontic%20treatment%2C%20transparent%20teeth%20aligners%2C%20clean%20minimalist%20dental%20product%20photography%2C%20professional%20dental%20clinic%20setting&width=400&height=260&seq=srv002&orientation=landscape',
  },
  {
    icon: 'ri-sun-line',
    title: 'Clareamento Dental',
    description: 'Dentes até 8 tons mais brancos com técnicas seguras e eficazes. Resultados visíveis desde a primeira sessão, com protocolo personalizado.',
    image: 'https://readdy.ai/api/search-image?query=teeth%20whitening%20dental%20treatment%2C%20beautiful%20white%20smile%20close%20up%2C%20professional%20dental%20bleaching%20procedure%2C%20bright%20white%20teeth%2C%20clean%20dental%20clinic%20background%2C%20modern%20cosmetic%20dentistry&width=400&height=260&seq=srv003&orientation=landscape',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Próteses Dentárias',
    description: 'Próteses fixas e removíveis com materiais de alta durabilidade e estética natural. Devolvemos função e beleza ao seu sorriso.',
    image: 'https://readdy.ai/api/search-image?query=dental%20prosthetics%20porcelain%20crowns%20veneers%20on%20white%20background%2C%20high-quality%20dental%20ceramics%2C%20professional%20dental%20laboratory%20work%2C%20natural%20looking%20dental%20restorations%2C%20clean%20minimalist%20background&width=400&height=260&seq=srv004&orientation=landscape',
  },
  {
    icon: 'ri-magic-line',
    title: 'Harmonização Orofacial',
    description: 'Procedimentos estéticos que equilibram e valorizam os traços do rosto, proporcionando uma aparência mais jovem e harmoniosa.',
    image: 'https://readdy.ai/api/search-image?query=facial%20harmonization%20aesthetic%20treatment%2C%20beautiful%20woman%20with%20perfect%20smile%20and%20harmonious%20facial%20features%2C%20professional%20aesthetic%20clinic%2C%20clean%20white%20background%2C%20luxury%20beauty%20treatment%2C%20elegant%20medical%20setting&width=400&height=260&seq=srv005&orientation=landscape',
  },
  {
    icon: 'ri-emotion-happy-line',
    title: 'Odontopediatria',
    description: 'Cuidado especializado para os pequenos, com ambiente acolhedor e técnicas que tornam a visita ao dentista uma experiência positiva.',
    image: 'https://readdy.ai/api/search-image?query=pediatric%20dentistry%20child%20dental%20care%2C%20happy%20child%20at%20dentist%2C%20friendly%20colorful%20dental%20clinic%20for%20children%2C%20warm%20welcoming%20atmosphere%2C%20professional%20pediatric%20dental%20office%2C%20clean%20bright%20background&width=400&height=260&seq=srv006&orientation=landscape',
  },
];

export default function Services() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511941061974', '_blank');
  };

  return (
    <section id="servicos" className="bg-[#fafafa] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center border border-black/30 rounded-full px-4 py-1.5 mb-5">
            <span className="text-black text-sm font-medium tracking-wide">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-4">
            Tratamentos Completos<br />
            <span className="text-[#c9a84c]">Para Toda a Família</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Soluções odontológicas modernas com tecnologia de ponta e profissionais altamente qualificados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#d4af37]/40 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/10 mb-4">
                  <i className={`${service.icon} text-black text-lg`} />
                </div>
                <h3 className="text-black font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold text-sm hover:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  Saiba mais <i className="ri-arrow-right-line" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-black hover:bg-[#111111] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer text-base"
          >
            <i className="ri-whatsapp-line text-xl" />
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
}
