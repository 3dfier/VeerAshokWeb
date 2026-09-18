import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled state if not on home page
  const isHome = location.pathname === '/';
  const navBackground = scrolled || !isHome ? 'bg-navy shadow-lg py-3' : 'bg-transparent py-5';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Clients', href: '/clients' },
    { name: 'Services', href: '/services' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Our Achievement', href: '/achievements' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="assets/logo.png" alt="Veer Ashok Group Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`transition-colors font-medium text-sm ${location.pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy absolute top-full left-0 w-full border-t border-gray-700">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)} 
                className={`py-2 text-lg ${location.pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-footer py-16 text-center text-white mt-auto">
    <div className="container border-t border-white/5 pt-16">
      <p className="text-lg opacity-80 mb-2 font-bold uppercase">VEER ASHOK GROUP OF COMPANIES</p>
      <p className="text-sm opacity-50 mb-8">© 2026 Veer Ashok Group. All Rights Reserved.</p>
      <p className="text-xs opacity-30 tracking-widest uppercase">Quality & Service Forever | Pune, India</p>
    </div>
  </footer>
);
