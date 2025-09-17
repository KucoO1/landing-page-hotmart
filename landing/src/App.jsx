import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Navegação */}
      <nav className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-4">
        <div className="text-2xl sm:text-3xl font-bold text-amber-400">LuxuryPetBiz</div>
        <div className="flex gap-3 sm:gap-4">
          <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-md font-medium transition-colors text-base sm:text-lg">
            <a href="https://pay.hotmart.com/G101668978F">
              🔥 Get Access Now
            </a>
          </button>
        </div>
      </nav>

      {/* Seção Hero */}
      <motion.div
        className="w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 drop-shadow-lg">
          Stop Struggling & Start Building a Million-Dollar Pet Business
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
          While you{" "}
          <span className="text-red-400 font-semibold">hesitate</span>, others are making fortunes in the US luxury pet market.  
          Don’t waste years guessing strategies — grab the{" "}
          <span className="font-semibold text-amber-300">step-by-step roadmap</span> to dominate and profit big.
        </p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://pay.hotmart.com/G101668978F"
            className="px-8 py-4 rounded-2xl font-bold text-lg sm:text-xl shadow-lg bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-all transform hover:scale-105"
          >
            🚀 Yes! I Want the $1M Pet Biz Guide – Only $20
          </a>
        </motion.div>
        <p className="mt-4 text-sm text-gray-400">
          ⚠️ Every day you wait, competitors are stealing your clients.
        </p>
      </motion.div>

      {/* Imagens do Hero */}
      <motion.div
        className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center gap-8 sm:gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {/* Moldura estilizada */}
        <div className="relative min-w-[240px] min-h-[320px]">
          <div className="w-56 sm:w-72 h-80 sm:h-96 bg-amber-900 rounded-2xl shadow-2xl transform rotate-3"></div>
          <div className="absolute top-4 sm:top-6 -left-4 sm:-left-6 w-56 sm:w-72 h-80 sm:h-96 bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl shadow-xl transform -rotate-2 flex flex-col justify-center items-center p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="text-xl sm:text-2xl font-bold text-white mb-2">LUXURY PET MARKET</div>
              <div className="text-amber-300">Millionaire Blueprint</div>
            </div>
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-amber-800 flex items-center justify-center mb-6 border-4 border-amber-600">
              <span className="text-amber-200 text-xl sm:text-2xl">$</span>
            </div>
            <div className="text-amber-100 text-center">
              <div className="text-base sm:text-lg font-medium">Proven Secrets</div>
              <div className="text-xs sm:text-sm mt-2">For Ambitious Entrepreneurs</div>
            </div>
          </div>
        </div>

        {/* Imagem do eBook */}
        <div className="relative">
          <img
            src="/ebook.png"
            alt="Luxury pet with accessories"
            className="rounded-2xl shadow-2xl border-4 border-amber-500/40 w-60 sm:w-80 h-80 sm:h-96 object-cover"
          />
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-amber-700 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg text-xs sm:text-base">
            🔒 Exclusive Content Inside
          </div>
        </div>
      </motion.div>

      {/* Seção de Estatísticas */}
      <motion.div
        className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {[
          { value: "$100B+", label: "Market Value" },
          { value: "15%", label: "Annual Growth" },
          { value: "82%", label: "Affluent Pet Owners" },
          { value: "3.2x", label: "Higher Spending" },
        ].map((stat, index) => (
          <div key={index} className="bg-gradient-to-b from-amber-900/30 to-black p-4 sm:p-6 rounded-xl text-center border border-amber-800/50">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
            <div className="text-amber-200 mt-2 text-sm sm:text-base">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Seção de Benefícios */}
      <motion.div
        className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {[
          {
            title: "Billion-Dollar Market",
            desc: "Stop wasting time on small ideas. Learn how to dominate a $100B+ market growing 15% yearly.",
            icon: "📈",
            img: "/dinheiro.png",
          },
          {
            title: "Premium Clients",
            desc: "Get clients who happily pay 3x more for exclusivity. Stop chasing broke customers.",
            icon: "🎯",
            img: "/clientes.png",
          },
          {
            title: "Proven Strategies",
            desc: "No fluff. Just proven, battle-tested strategies to launch and scale fast.",
            icon: "🔑",
            img: "/estrategia.png",
          },
        ].map((benefit, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-b from-amber-900/10 to-black border border-amber-500/30 rounded-2xl p-4 sm:p-6 text-center shadow-xl hover:border-amber-400/50 transition-all"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          >
            <div className="text-2xl sm:text-4xl mb-4">{benefit.icon}</div>
            <img
              src={benefit.img}
              alt={benefit.title}
              className="rounded-xl mb-4 w-full h-24 sm:h-40 object-cover border border-amber-500/30"
            />
            <h3 className="text-lg sm:text-xl font-bold text-amber-400 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-200 text-sm sm:text-base">{benefit.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Depoimentos */}
      <motion.div
        className="mt-14 sm:mt-20 max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-amber-300">What Industry Leaders Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              name: "Sarah Johnson",
              title: "Founder, Posh Paws",
              quote: "I was stuck chasing clients with no money. This guide showed me how to attract premium buyers – now I charge 3x more.",
              avatar: "SJ"
            },
            {
              name: "Michael Torres",
              title: "Investor, Pet Venture Capital",
              quote: "If you’re serious about building wealth, this is the blueprint. I’ve invested millions thanks to these strategies.",
              avatar: "MT"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-900/20 to-black p-6 sm:p-8 rounded-xl border border-amber-800/50">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-amber-800 flex items-center justify-center text-amber-300 font-bold text-base sm:text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-amber-400 text-xs sm:text-sm">{testimonial.title}</div>
                </div>
              </div>
              <p className="text-gray-300 italic text-sm sm:text-base">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Seção CTA */}
      <motion.div
        className="mt-14 sm:mt-20 max-w-3xl w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-4">
          🚨 Limited Time – Don’t Miss Out
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
          This is your chance to{" "}
          <span className="font-semibold text-amber-300">escape mediocrity</span>  
          and tap into one of the{" "}
          <span className="text-amber-400 font-bold">most profitable markets on Earth</span>.
        </p>
        <a
          id="purchase"
          href="https://pay.hotmart.com/G101668978F"
          className="px-8 sm:px-10 py-4 rounded-2xl font-bold text-xl sm:text-2xl shadow-2xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-all transform hover:scale-105 inline-block"
        >
          💎 Get Instant Access – Only $20
        </a>
      </motion.div>

      {/* Seção FAQ */}
      <motion.div
        className="mt-14 sm:mt-20 max-w-4xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-amber-300">Frequently Asked Questions</h2>
        <div className="space-y-4 sm:space-y-6">
          {[
            { q: "Who is this guide for?", a: "Ambitious entrepreneurs tired of small profits, pet business owners who want to scale, and investors ready to make serious money." },
            { q: "What will I learn?", a: "Exactly how to find premium opportunities, attract wealthy clients, price high-ticket, and scale fast." },
            { q: "Is there a guarantee?", a: "Yes. 30-day money-back guarantee. If you don’t see value, you don’t pay." },
            { q: "How do I receive it?", a: "Instant digital access (PDF, ePub, Mobi) + lifetime updates." },
          ].map((faq, index) => (
            <div key={index} className="bg-gradient-to-b from-amber-900/10 to-black p-4 sm:p-6 rounded-xl border border-amber-800/50">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mb-2 sm:mb-3">{faq.q}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Final */}
      <motion.div
        className="mt-14 sm:mt-20 text-center w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4 sm:mb-6">Ready to Join the Pet Millionaires?</h2>
        <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Don’t let this opportunity slip away.{" "}
          <span className="text-amber-300 font-semibold">Hundreds are already profiting</span>.  
          The next success story could be yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pay.hotmart.com/G101668978F"
            className="px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-all"
          >
            🚀 Yes, I Want My $1M Pet Biz Guide – $20
          </a>
        </div>
      </motion.div>
    </div>
  );
}
