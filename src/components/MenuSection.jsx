import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Banana Choco Melt',
    price: 18000,
    img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1600&auto=format&fit=crop',
    desc: 'Pisang goreng renyah dengan lelehan cokelat premium.'
  },
  {
    name: 'Banana Crispy Original',
    price: 15000,
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
    desc: 'Kerenyahan sempurna, nikmat tanpa batas.'
  },
  {
    name: 'Banana Drink',
    price: 12000,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1600&auto=format&fit=crop',
    desc: 'Minuman pisang creamy yang menyegarkan.'
  }
];

const currency = (n) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const MenuSection = ({ onOrderClick }) => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-stone-900">Menu Unggulan</h2>
          <p className="mt-2 text-stone-700">Dibuat fresh setiap hari, dengan bahan berkualitas terbaik.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-yellow-200 overflow-hidden bg-yellow-50 hover:shadow-lg transition-shadow"
            >
              <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-stone-900">{p.name}</h3>
                    <p className="text-sm text-stone-700 mt-1">{p.desc}</p>
                  </div>
                  <span className="text-amber-600 font-extrabold whitespace-nowrap">{currency(p.price)}</span>
                </div>
                <button onClick={onOrderClick} className="mt-4 w-full px-4 py-2 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400">Pesan</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
