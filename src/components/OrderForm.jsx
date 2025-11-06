import React, { useMemo, useState } from 'react';
import { UploadCloud } from 'lucide-react';

const PRODUCTS = [
  'Banana Choco Melt',
  'Banana Crispy Original',
  'Banana Drink',
];

const PAYMENTS = [
  'Transfer BNI',
  'DANA',
  'Gopay',
  'ShopeePay',
  'COD',
];

const formatWhatsAppMessage = (data) => {
  const lines = [
    '*Pre-Order Banana Hitz*',
    `Nama: ${data.name}`,
    `WhatsApp: ${data.phone}`,
    `Produk: ${data.product}`,
    `Jumlah: ${data.qty}`,
    data.note ? `Catatan: ${data.note}` : null,
    `Metode Pembayaran: ${data.payment}`,
    data.proof ? `Bukti: ${data.proof}` : null,
  ].filter(Boolean);
  return encodeURIComponent(lines.join('\n'));
};

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(PRODUCTS[0]);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState('');
  const [payment, setPayment] = useState(PAYMENTS[0]);
  const [proofFile, setProofFile] = useState(null);

  const proofLabel = useMemo(() => (proofFile ? proofFile.name : 'Unggah bukti (opsional)'), [proofFile]);

  const submit = (e) => {
    e.preventDefault();
    const proof = proofFile ? proofFile.name : '';
    const message = formatWhatsAppMessage({ name, phone, product, qty, note, payment, proof });
    const waNumber = '6281234567890';
    const url = `https://wa.me/${waNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section id="order" className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-stone-900">Form Pemesanan</h2>
          <p className="mt-2 text-stone-700">Isi data di bawah ini untuk melakukan pre-order. Kami akan mengkonfirmasi melalui WhatsApp.</p>
        </div>
        <form onSubmit={submit} className="mt-10 bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-stone-900">Nama Lengkap</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} required type="text" className="mt-2 w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Nama kamu" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900">Nomor WhatsApp</label>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} required type="tel" className="mt-2 w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="08xxxxxxxxxx" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900">Pilihan Produk</label>
              <select value={product} onChange={(e)=>setProduct(e.target.value)} className="mt-2 w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-400">
                {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900">Jumlah Pesanan</label>
              <input value={qty} onChange={(e)=>setQty(Math.max(1, Number(e.target.value) || 1))} min={1} type="number" className="mt-2 w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-stone-900">Catatan Tambahan (opsional)</label>
              <textarea value={note} onChange={(e)=>setNote(e.target.value)} rows={3} className="mt-2 w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tingkat manis, topping, dll" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900">Metode Pembayaran</label>
              <select value={payment} onChange={(e)=>setPayment(e.target.value)} className="mt-2 w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-amber-400">
                {PAYMENTS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900">Bukti Pembayaran (opsional)</label>
              <div className="mt-2 flex items-center gap-3">
                <label className="flex-1 cursor-pointer inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-yellow-300 bg-yellow-50 text-stone-900 hover:bg-yellow-100">
                  <UploadCloud size={18} />
                  <span className="truncate">{proofLabel}</span>
                  <input onChange={(e)=>setProofFile(e.target.files?.[0] || null)} type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button type="submit" className="px-6 py-3 rounded-xl bg-amber-500 text-stone-900 font-bold hover:bg-amber-400">Kirim ke WhatsApp</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
