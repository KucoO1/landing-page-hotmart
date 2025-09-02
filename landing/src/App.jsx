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
            <a href="https://pay.hotmart.com/G101668978F?sck=HOTMART_PRODUCT_PAGE&off=i5djmkj6&hotfeature=32&_gl=1*tyeepi*_ga*MjAwODk3MDA1LjE3NTUwMTYxMDM.*_ga_GQH2V1F11Q*czE3NTY4MzM4MTAkbzEwJGcxJHQxNzU2ODM0MDkxJGo2MCRsMCRoMA..*_gcl_au*MTcyMTU0NTc4NC4xNzU1MDE2MTAzLjMzNDAyMDI4OC4xNzU2ODMzODIxLjE3NTY4MzQwNjM.&bid=1756834096562">Buy Now</a>
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
          How to Build a Million Dollar Business in the US Luxury Pet Market
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
          Discover how to tap into the multi-billion dollar luxury pet market in the US
          and build a <span className="font-semibold text-amber-300">highly profitable business</span> with our exclusive guide.
        </p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://pay.hotmart.com/G101668978F?sck=HOTMART_PRODUCT_PAGE&off=i5djmkj6&hotfeature=32&_gl=1*tyeepi*_ga*MjAwODk3MDA1LjE3NTUwMTYxMDM.*_ga_GQH2V1F11Q*czE3NTY4MzM4MTAkbzEwJGcxJHQxNzU2ODM0MDkxJGo2MCRsMCRoMA..*_gcl_au*MTcyMTU0NTc4NC4xNzU1MDE2MTAzLjMzNDAyMDI4OC4xNzU2ODMzODIxLjE3NTY4MzQwNjM.&bid=1756834096562"
            className="px-8 py-4 rounded-2xl font-bold text-lg sm:text-xl shadow-lg bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-all transform hover:scale-105"
          >
            📖 Get Your Copy Now - $20
          </a>
        </motion.div>
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
              <div className="text-amber-300">Exclusive Guide</div>
            </div>
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-amber-800 flex items-center justify-center mb-6 border-4 border-amber-600">
              <span className="text-amber-200 text-xl sm:text-2xl">$</span>
            </div>
            <div className="text-amber-100 text-center">
              <div className="text-base sm:text-lg font-medium">Premium Insights</div>
              <div className="text-xs sm:text-sm mt-2">For Serious Entrepreneurs</div>
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
            Premium Content Inside
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
            desc: "Learn how to exploit a sector growing over 15% annually in the US.",
            icon: "📈",
            img: "/dinheiro.png",
          },
          {
            title: "Premium Clients",
            desc: "Discover how to attract pet owners willing to spend generously for exclusivity.",
            icon: "🎯",
            img: "/clientes.png",
          },
          {
            title: "Proven Strategies",
            desc: "Use practical techniques to structure a million-dollar business step by step.",
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
              quote: "This guide perfectly captures the nuances of the luxury pet market. The business strategies are invaluable for any entrepreneur in this space.",
              avatar: "SJ"
            },
            {
              name: "Michael Torres",
              title: "Investor, Pet Venture Capital",
              quote: "The most comprehensive analysis of the high-end pet market I've encountered. The investment strategies alone are worth the price.",
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
          Exclusive Offer - Limited Time
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
          The knowledge in this guide can <span className="font-semibold text-amber-300">radically change your financial future</span>.
          This is your chance to enter one of the world's most lucrative markets.
        </p>
        <a
          id="purchase"
          href="https://pay.hotmart.com/G101668978F?sck=HOTMART_PRODUCT_PAGE&off=i5djmkj6&hotfeature=32&_gl=1*tyeepi*_ga*MjAwODk3MDA1LjE3NTUwMTYxMDM.*_ga_GQH2V1F11Q*czE3NTY4MzM4MTAkbzEwJGcxJHQxNzU2ODM0MDkxJGo2MCRsMCRoMA..*_gcl_au*MTcyMTU0NTc4NC4xNzU1MDE2MTAzLjMzNDAyMDI4OC4xNzU2ODMzODIxLjE3NTY4MzQwNjM.&bid=1756834096562"
          className="px-8 sm:px-10 py-4 rounded-2xl font-bold text-xl sm:text-2xl shadow-2xl bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-all transform hover:scale-105 inline-block"
        >
          🚀 Get Your Guide Now
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
            { q: "Who is this guide for?", a: "Aspiring entrepreneurs, existing pet business owners looking to premiumize their offerings, and investors interested in the lucrative pet industry." },
            { q: "What will I learn from this guide?", a: "You'll learn how to identify opportunities in the luxury pet market, develop premium products/services, target affluent customers, price for profit, and scale your business." },
            { q: "Is there a money-back guarantee?", a: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied with the content." },
            { q: "How will I receive the guide?", a: "Immediately after purchase, you'll get instant access to the digital version (PDF, ePub, Mobi). You'll also receive lifetime updates to the content." },
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
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4 sm:mb-6">Ready to Build Your Luxury Pet Business?</h2>
        <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">Join hundreds of successful entrepreneurs who have transformed their business with our guide</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://pay.hotmart.com/G101668978F?sck=HOTMART_PRODUCT_PAGE&off=i5djmkj6&hotfeature=32&_gl=1*tyeepi*_ga*MjAwODk3MDA1LjE3NTUwMTYxMDM.*_ga_GQH2V1F11Q*czE3NTY4MzM4MTAkbzEwJGcxJHQxNzU2ODM0MDkxJGo2MCRsMCRoMA..*_gcl_au*MTcyMTU0NTc4NC4xNzU1MDE2MTAzLjMzNDAyMDI4OC4xNzU2ODMzODIxLjE3NTY4MzQwNjM.&bid=1756834096562"
            className="px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 transition-all"
          >
            Get Instant Access - $20
          </a>
        </div>
      </motion.div>
    </div>
  );
}