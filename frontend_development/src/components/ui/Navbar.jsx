import { useState, useEffect } from 'react';
import { NavLink, useLocation , useNavigate} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo2.png';

import { useCart } from "../../context/CartContext";


const serviceLinks = [
  { label: 'All Services', path: '/services' },
  { label: 'KRA', path: '/services/kra' },
  { label: 'eCitizen', path: '/services/ecitizen' },
  { label: 'NTSA', path: '/services/ntsa' },
  { label: 'Business Registration', path: '/services/business-registration' },
  { label: 'Graphic Design', path: '/services/graphic-design' },
  { label: 'Online Cyber Services', path: '/services/cyber' },
];

export default function Navbar() {

  const [search, setSearch] = useState("");
const navigate = useNavigate();

const { cartItems } = useCart();


const handleSearch = () => {
  const trimmed = search.trim();
  if (trimmed !== "") {
    navigate(`/services?search=${encodeURIComponent(trimmed)}`);
  }
};



  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const textTone = isHome && !scrolled ? 'text-sand' : 'text-white';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="w-full bg-gray-900 text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-between px-6 py-2">
          <span>frontenddev.co.ke</span>
          <span>+254 720 123 456</span>
        </div>
      </div>

      {/* MAIN NAV */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-8 left-0 w-full z-50 backdrop-blur-xl transition-colors duration-300 ${
          scrolled || !isHome
            ? 'bg-ebony/90 shadow-glow border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

        {/* MAIN ROW */}
        <div className="max-w-7xl mx-auto h-20 flex items-center gap-6 px-6">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-16 w-auto drop-shadow-lg"
              whileHover={{ scale: 1.03 }}
            />
          </NavLink>
          

          {/* Search */}

<div className="hidden lg:flex flex-1 relative">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    placeholder="Search services..."
    className="w-full pl-4 pr-12 py-2 rounded-full bg-white text-charcoalNoir placeholder:text-gray-400"
  />

  <span
    onClick={handleSearch}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoalNoir cursor-pointer"
  >
    🔍
  </span>
</div>

<NavLink to="/cart" className="relative ml-4">
  🛒
  {cartItems.length > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
      {cartItems.length}
    </span>
  )}
</NavLink>




          {/* Mobile trigger */}
          <button
            className="lg:hidden relative w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-sand hover:border-warmSandstone transition"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <motion.span
              className={`block h-0.5 w-6 bg-current ${textTone}`}
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-0.5 w-6 bg-current absolute ${textTone}`}
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-0.5 w-6 bg-current ${textTone}`}
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* SERVICES BAR (desktop) */}
        <div className="hidden lg:block bg-white border-t border-black/10">
          <div className="max-w-7xl mx-auto px-10 pt-6">
            <ul className="flex gap-10 text-base font-semibold overflow-x-auto">
              {serviceLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/services'}
                  className={({ isActive }) =>
                    `py-3 whitespace-nowrap ${
                      isActive
                        ? 'bg-yellow-400 text-black'
                        : 'text-charcoalNoir hover:bg-yellow-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE DROPDOWN WITH SERVICES ONLY */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden section-grid"
            >
              <div className="max-w-7xl mx-auto bg-ebony/95 border border-white/10 rounded-2xl shadow-glow overflow-hidden">
                <div className="flex flex-col gap-4 py-6 px-6">
                  {serviceLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-sm font-semibold tracking-[0.12em] ${
                          isActive
                            ? 'text-warmSandstone'
                            : 'text-sand hover:text-warmSandstone'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
