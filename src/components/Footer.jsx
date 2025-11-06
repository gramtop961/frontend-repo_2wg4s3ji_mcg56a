import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-yellow-50 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-extrabold">Banana Hitz</h4>
          <p className="mt-2 text-yellow-100/90">
            Olahan pisang kekinian: crispy, choco melt, dan minuman pisang. Fresh dibuat setiap hari.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Kontak</h4>
          <ul className="mt-3 space-y-2 text-yellow-100/90">
            <li className="flex items-center gap-2"><Phone size={18}/> <a href="https://wa.me/6281234567890" className="hover:underline">+62 812-3456-7890</a></li>
            <li className="flex items-center gap-2"><Instagram size={18}/> <a href="https://instagram.com/bananahitz" className="hover:underline" target="_blank" rel="noreferrer">@bananahitz</a></li>
            <li className="flex items-center gap-2"><MapPin size={18}/> Jl. Pisang Manis No. 12, Kota Hitz</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold">Jam Operasional</h4>
          <p className="mt-3 text-yellow-100/90">Setiap hari 10.00 - 21.00</p>
        </div>
      </div>
      <div className="mt-8 border-t border-yellow-200/20" />
      <p className="text-center text-yellow-100/70 text-sm mt-4">© {new Date().getFullYear()} Banana Hitz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
