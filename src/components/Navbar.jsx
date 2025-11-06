import React from 'react';
import { Instagram, Phone, ShoppingBag } from 'lucide-react';

const Navbar = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-yellow-50/70 border-b border-yellow-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center shadow-md">
            <span className="text-stone-900 font-black">BH</span>
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-stone-900 text-lg">Banana Hitz</p>
            <p className="text-xs text-stone-600">Pisang kekinian fresh setiap hari</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-stone-700">
          <a href="#menu" className="hover:text-stone-900 transition-colors">Menu</a>
          <a href="#testi" className="hover:text-stone-900 transition-colors">Testimoni</a>
          <a href="#lokasi" className="hover:text-stone-900 transition-colors">Lokasi</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/bananahitz"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-yellow-300 text-stone-900 hover:shadow-sm"
          >
            <Instagram size={18} />
            <span className="text-sm font-medium">@bananahitz</span>
          </a>
          <button
            onClick={onOrderClick}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-stone-900 font-semibold shadow hover:bg-amber-400"
          >
            <ShoppingBag size={18} /> Pesan
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
