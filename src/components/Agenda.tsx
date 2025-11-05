import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Users, TrendingUp, Sparkles } from 'lucide-react';

const topics = [
  {
    title: 'Innovation in Network Marketing',
    description: 'Discover cutting-edge strategies and technologies',
    icon: Lightbulb,
  },
  {
    title: 'Leadership & Vision',
    description: 'Build teams that inspire and achieve greatness',
    icon: Users,
  },
  {
    title: 'Financial Freedom Strategies',
    description: 'Master wealth-building principles and tactics',
    icon: TrendingUp,
  },
  {
    title: 'Personal Growth & Empowerment',
    description: 'Unlock your potential and transform your mindset',
    icon: Sparkles,
  },
];

export function Agenda() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="agenda" ref={ref} className="relative py-32 px-4 bg-zinc-950 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        
        className="absolute top-40 left-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#C6A35A',y }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border backdrop-blur-sm"
            style={{ borderColor: 'rgba(198, 163, 90, 0.3)', backgroundColor: 'rgba(198, 163, 90, 0.05)' }}
          >
            <span className="text-[#C6A35A] text-sm tracking-wider uppercase">Conference Themes</span>
          </motion.div>

          <h2 className="text-white mb-6 text-5xl md:text-6xl tracking-tight">
            What You'll <br/>
            <span className="bg-gradient-to-r from-[#C6A35A] via-[#D4B574] to-[#C6A35A] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="relative overflow-hidden backdrop-blur-xl bg-white/5 p-8 rounded-2xl border hover:border-[#C6A35A] transition-all duration-500 h-full"
                  style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
                >
                  {/* Icon with Glow */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#C6A35A] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                    <div
                      className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C6A35A] to-[#8B7239] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ boxShadow: '0 0 30px rgba(198, 163, 90, 0.3)' }}
                    >
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-2xl mb-3 group-hover:text-[#C6A35A] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Hover Effect Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6A35A] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/5 border"
            style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
          >
            <p className="text-white/90 text-lg">
              And much more valuable insights to accelerate your success
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
