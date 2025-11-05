import { motion } from 'motion/react';

const highlights = [
  'Network Marketing Excellence',
  'Leadership Development',
  'Financial Freedom',
  'Personal Growth',
  'Innovation & Strategy',
  'Community Building',
  'Success Mindset',
  'Business Transformation',
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-black via-zinc-950 to-black border-y" style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}>
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black to-transparent z-10" />
      
      {/* Animated gradient line on top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #C6A35A 50%, transparent 100%)'
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="flex">
        {/* First Marquee */}
        <motion.div
          className="flex gap-12 pr-12 whitespace-nowrap"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...highlights, ...highlights, ...highlights].map((text, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-2xl md:text-3xl text-white/90 hover:text-[#C6A35A] transition-colors cursor-default">
                {text}
              </span>
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ 
                  backgroundColor: '#C6A35A',
                  boxShadow: '0 0 20px rgba(198, 163, 90, 0.5)'
                }} 
              />
            </div>
          ))}
        </motion.div>

        {/* Second Marquee (for seamless loop) */}
        <motion.div
          className="flex gap-12 pr-12 whitespace-nowrap"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...highlights, ...highlights, ...highlights].map((text, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-12">
              <span className="text-2xl md:text-3xl text-white/90 hover:text-[#C6A35A] transition-colors cursor-default">
                {text}
              </span>
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ 
                  backgroundColor: '#C6A35A',
                  boxShadow: '0 0 20px rgba(198, 163, 90, 0.5)'
                }} 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated gradient line on bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #C6A35A 50%, transparent 100%)'
        }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
