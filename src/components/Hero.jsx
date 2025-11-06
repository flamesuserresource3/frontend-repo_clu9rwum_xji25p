import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-red-50" />
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Say Hello to a Beautiful Starter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              A clean, modern template powered by React and Tailwind. Perfect for landing pages, portfolios, and quick experiments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-white font-medium shadow hover:bg-red-700 transition">
                Explore Features
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-gray-800 font-medium shadow border border-red-100 hover:bg-rose-50 transition">
                Learn More
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-rose-500 via-red-600 to-orange-500 shadow-xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-rose-200 blur-2xl opacity-60" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-red-200 blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
