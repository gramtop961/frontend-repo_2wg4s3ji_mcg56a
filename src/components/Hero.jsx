import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onOrderClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-yellow-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-amber-200/50 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-stone-900"
          >
            Nikmati Lezatnya Pisang Kekinian
            <span className="block text-amber-600">Banana Hitz</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-stone-700 leading-relaxed"
          >
            Bisnis lokal F&B yang fokus pada olahan pisang modern. Selalu fresh,
            dibuat setiap hari dengan bahan berkualitas. Rasakan kombinasi cita rasa
            manis, crunchy, dan creamy di setiap gigitan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onOrderClick}
              className="px-5 py-3 rounded-xl bg-amber-500 text-stone-900 font-bold shadow-lg shadow-amber-200 hover:bg-amber-400"
            >
              Pesan Sekarang
            </button>
            <a href="#menu" className="px-5 py-3 rounded-xl bg-white border border-yellow-300 text-stone-900 font-semibold hover:shadow">
              Lihat Menu
            </a>
          </motion.div>
        </div>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            src="https://images.unsplash.com/photo-1610440042657-612c34d77b4e?q=80&w=1600&auto=format&fit=crop"
            alt="Produk Banana Hitz"
            className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-xl ring-4 ring-yellow-200/60"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
