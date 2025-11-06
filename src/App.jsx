import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  const orderRef = useRef(null);

  const scrollToOrder = () => {
    const el = document.getElementById('order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navbar onOrderClick={scrollToOrder} />
      <main>
        <Hero onOrderClick={scrollToOrder} />
        <MenuSection onOrderClick={scrollToOrder} />
        <Testimonials />
        <OrderForm ref={orderRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
