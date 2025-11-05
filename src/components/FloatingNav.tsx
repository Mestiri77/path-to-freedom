import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 300);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Topics', href: '#agenda' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div 
          className="backdrop-blur-xl bg-black/80 px-8 py-4 rounded-full border shadow-2xl"
          style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
        >
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/80 hover:text-[#C6A35A] transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6A35A] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Nav Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-4 rounded-full backdrop-blur-xl bg-black/80 border shadow-2xl"
        style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#C6A35A]" />
        ) : (
          <Menu className="w-6 h-6 text-[#C6A35A]" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden backdrop-blur-2xl bg-black/95"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : 50
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl hover:text-[#C6A35A] transition-colors duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
