import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        
        className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#C6A35A',y }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border backdrop-blur-sm"
            style={{ borderColor: 'rgba(198, 163, 90, 0.3)', backgroundColor: 'rgba(198, 163, 90, 0.05)' }}
          >
            <Sparkles className="w-4 h-4 text-[#C6A35A]" />
            <span className="text-[#C6A35A] text-sm tracking-wider uppercase">About the Event</span>
          </motion.div>

          <h2 className="text-white mb-8 text-5xl md:text-6xl tracking-tight">
            Your Journey to <br/>
            <span className="bg-gradient-to-r from-[#C6A35A] via-[#D4B574] to-[#C6A35A] bg-clip-text text-transparent">
              Success Starts Here
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 md:p-12 border"
          style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
        >
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed text-center mb-8">
            Path to Freedom is a professional network marketing business conference focused on{' '}
            <span className="text-[#C6A35A]">innovation</span>,{' '}
            <span className="text-[#C6A35A]">growth</span>, and{' '}
            <span className="text-[#C6A35A]">opportunity</span>.
          </p>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C6A35A] to-transparent mb-8" />
          
          <p className="text-white/70 text-lg text-center">
            Hosted by <span className="text-[#C6A35A]">Reborn Team</span> and <span className="text-[#C6A35A]">P4M (Phoenix 4 Marketing)</span>, 
            this transformative event is designed to inspire and empower future leaders in the network marketing industry.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { number: '500+', label: 'Expected Attendees' },
            { number: '10+', label: 'Expert Speakers' },
            { number: '8hrs', label: 'of Insights' },
          ].map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border text-center hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
            >
              <h3 className="text-5xl mb-2 bg-gradient-to-r from-[#C6A35A] via-[#D4B574] to-[#C6A35A] bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
