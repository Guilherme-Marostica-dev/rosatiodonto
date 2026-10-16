import { useState } from 'react';

const testimonials = [
  {
    name: 'Ana Paula Ferreira',
    treatment: 'Implante Dentário',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20brazilian%20woman%2035%20years%20old%20smiling%20warmly%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20friendly%20expression%2C%20professional%20portrait%20photography&width=120&height=120&seq=av001&orientation=squarish',
    text: 'A Rosati Odontologia transformou minha vida! Fiz meu implante há 6 meses e o resultado é incrível. A equipe é extremamente profissional e o atendimento é acolhedor do início ao fim. Recomendo de olhos fechados!',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo Lima',
    treatment: 'Ortodontia Invisível',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20brazilian%20man%2040%20years%20old%20smiling%20confidently%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20friendly%20expression%2C%20professional%20portrait%20photography&width=120&height=120&seq=av002&orientation=squarish',
    text: 'Sempre tive vergonha do meu sorriso. Com os alinhadores invisíveis da Rosati, em apenas 8 meses meus dentes ficaram perfeitos. Ninguém nem percebia que eu estava usando! Profissionais excepcionais.',
    stars: 5,
  },
  {
    name: 'Mariana Costa',
    treatment: 'Clareamento Dental',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20brazilian%20woman%2028%20years%20old%20smiling%20brightly%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20happy%20expression%2C%20professional%20portrait%20photography&width=120&height=120&seq=av003&orientation=squarish',
    text: 'Fiz o clareamento dental e fiquei impressionada com o resultado! Meus dentes ficaram 7 tons mais brancos e o procedimento foi totalmente indolor. A estrutura da clínica é linda e o atendimento é impecável.',
    stars: 5,
  },
  {
    name: 'Roberto Alves',
    treatment: 'Harmonização Orofacial',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20brazilian%20man%2045%20years%20old%20smiling%20naturally%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20confident%20expression%2C%20professional%20portrait%20photography&width=120&height=120&seq=av004&orientation=squarish',
    text: 'Realizei a harmonização orofacial e o resultado superou todas as minhas expectativas. A Dra. foi muito cuidadosa e explicou cada etapa do procedimento. Me sinto muito mais confiante agora!',
    stars: 5,
  },
  {
    name: 'Fernanda Oliveira',
    treatment: 'Prótese Dentária',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20brazilian%20woman%2050%20years%20old%20smiling%20gracefully%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20elegant%20expression%2C%20professional%20portrait%20photography&width=120&height=120&seq=av005&orientation=squarish',
    text: 'Minha prótese ficou tão natural que ninguém acredita que não são meus dentes originais! A Rosati Odontologia tem uma equipe fantástica e um cuidado com o paciente que raramente se encontra. Gratidão enorme!',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-[#d4af37]/15 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[#c9a84c] text-sm font-semibold tracking-wide">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
            O Que Nossos Pacientes<br />
            <span className="text-[#c9a84c]">Dizem Sobre Nós</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#fafafa] rounded-3xl p-8 md:p-12 border border-gray-100 relative">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <i key={i} className="ri-star-fill text-[#d4af37] text-lg" />
              ))}
              <span className="ml-2 text-black font-bold text-sm">5.0</span>
            </div>

            {/* Quote */}
            <i className="ri-double-quotes-l text-[#d4af37]/30 text-6xl absolute top-6 right-8 leading-none" />
            <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-8 relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author + Navigation */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4af37] flex-shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-black font-bold text-base">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.treatment}</p>
                </div>
              </div>

              {/* Nav Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 flex items-center justify-center rounded-xl border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-lg" />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-black text-white hover:bg-[#111111] transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-arrow-right-line text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  i === current ? 'w-6 h-2.5 bg-[#c9a84c]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#d4af37]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
