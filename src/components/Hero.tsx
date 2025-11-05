import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1654609160632-7324716196fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NjIxNDc4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Conference audience"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Gradient Orbs with slower animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: '#C6A35A', opacity: 0.15 }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: '#C6A35A', opacity: 0.15 }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-7xl mx-auto"
      >
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-white/60 tracking-[0.3em] uppercase text-sm">
            Reborn Team Present
          </p>
        </motion.div>

        {/* Main Title with staggered animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        >
          <motion.p 
            className="text-[#C6A35A] mb-4 text-2xl md:text-3xl italic"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Business conference
          </motion.p>

          <motion.h1 
            className="text-white mb-4 tracking-tight leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="block text-7xl md:text-9xl" style={{ fontFamily: 'var(--font-heading)' }}>
              PATH
            </span>
          </motion.h1>

          {/* Golden line separator */}
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="h-1 w-64 md:w-96 bg-gradient-to-r from-transparent via-[#C6A35A] to-transparent" />
          </motion.div>

          <motion.h2 
            className="text-white text-5xl md:text-7xl mb-8"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            TO FREEDOM
          </motion.h2>

          {/* Golden line separator */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <div className="h-1 w-64 md:w-96 bg-gradient-to-r from-transparent via-[#C6A35A] to-transparent" />
          </motion.div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 text-white/90">
            <MapPin className="w-5 h-5 text-[#C6A35A]" />
            <span className="text-lg">Centre Ville, Tunis</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-[#C6A35A]/30" />

          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-[#C6A35A] blur-2xl opacity-30" />
            <div 
              className="relative px-8 py-4 rounded-full flex flex-col items-center"
              style={{ backgroundColor: '#C6A35A' }}
            >
              <span className="text-black text-2xl">16th</span>
              <span className="text-black text-sm uppercase tracking-wider">Nov 2025</span>
              <span className="text-black text-lg">10 am</span>
            </div>
          </motion.div>

          <div className="hidden md:block w-px h-6 bg-[#C6A35A]/30" />

          <div className="text-white/90 text-lg">
            Innovation & Growth
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="px-12 py-7 text-lg text-black hover:opacity-90 transition-all duration-300 rounded-full relative overflow-hidden group"
              style={{ 
                backgroundColor: '#C6A35A', 
                boxShadow: '0 0 50px rgba(198, 163, 90, 0.4)' 
              }}
            >
              <a href="#register">
                <span className="relative z-10">Register Now</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-12 py-7 text-lg border-2 border-[#C6A35A] text-[#C6A35A] bg-black/30 backdrop-blur-sm hover:bg-[#C6A35A]/10 transition-all duration-300 rounded-full"
            >
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#C6A35A] text-sm tracking-wider uppercase">Discover</span>
          <ArrowDown className="w-5 h-5 text-[#C6A35A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
