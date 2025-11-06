import React from 'react';
import { Star, MapPin } from 'lucide-react';

const testimonials = [
  { name: 'Ayu', text: 'Banana Choco Melt-nya lumer dan nagih! Jadi favorit keluarga.', rating: 5 },
  { name: 'Rizky', text: 'Crispy-nya mantap, tetap renyah meski dibawa pulang.', rating: 5 },
  { name: 'Nadia', text: 'Banana drink segar banget, cocok diminum siang hari.', rating: 5 },
];

const Testimonials = () => {
  return (
    <section id="testi" className="py-16 bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-stone-900">Apa Kata Mereka</h2>
          <p className="mt-2 text-stone-700">Testimoni pelanggan setia Banana Hitz.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-yellow-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" className="text-amber-500" />
                ))}
              </div>
              <p className="mt-3 text-stone-900">“{t.text}”</p>
              <p className="mt-4 text-sm text-stone-700">— {t.name}</p>
            </div>
          ))}
        </div>
        <div id="lokasi" className="mt-14 rounded-2xl bg-white border border-yellow-200 p-6">
          <div className="flex items-center gap-2 text-stone-900">
            <MapPin />
            <h3 className="font-bold text-lg">Lokasi Outlet</h3>
          </div>
          <p className="mt-2 text-stone-700">Jl. Pisang Manis No. 12, Kota Hitz, Indonesia</p>
          <div className="mt-4 h-64 w-full overflow-hidden rounded-xl">
            <iframe
              title="Lokasi Banana Hitz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.699199659727!2d106.816666!3d-6.175387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e3d6e0a0d9%3A0x301576d14febd70!2sMonas!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
