import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const speakers = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Network Marketing Leader',
    bio: '15+ years of experience in building global teams',
    image:
      'https://images.unsplash.com/photo-1553484771-4e29a68540f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYyMjEyNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'James Chen',
    title: 'Entrepreneur & Coach',
    bio: 'Transformed 1000+ entrepreneurs into industry leaders',
    image:
      'https://images.unsplash.com/photo-1551862390-7894b509f8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE1MDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

export function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="speakers" ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C6A35A] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C6A35A] rounded-full blur-3xl" />
      </div>

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
            <span className="text-[#C6A35A] text-sm tracking-wider uppercase">Featured Speakers</span>
          </motion.div>

          <h2 className="text-white mb-6 text-5xl md:text-6xl tracking-tight">
            Learn from the <br/>
            <span className="bg-gradient-to-r from-[#C6A35A] via-[#D4B574] to-[#C6A35A] bg-clip-text text-transparent">
              Best in the Industry
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border transition-all duration-500 hover:scale-[1.02]"
                style={{ 
                  borderColor: hoveredIndex === index ? '#C6A35A' : 'rgba(198, 163, 90, 0.2)',
                  boxShadow: hoveredIndex === index ? '0 0 50px rgba(198, 163, 90, 0.3)' : 'none'
                }}
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  
                  {/* Social Icons - Appear on Hover */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={speaker.socials.linkedin}
                      className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#C6A35A]/30 hover:bg-[#C6A35A] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={speaker.socials.twitter}
                      className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#C6A35A]/30 hover:bg-[#C6A35A] transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={speaker.socials.instagram}
                      className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#C6A35A]/30 hover:bg-[#C6A35A] transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-white text-3xl mb-2">{speaker.name}</h3>
                  <p className="text-[#C6A35A] mb-4">{speaker.title}</p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-[#C6A35A]/50 via-[#C6A35A] to-[#C6A35A]/50 mb-4" />
                  
                  <p className="text-white/70">{speaker.bio}</p>
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(198, 163, 90, 0.1) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -left-4 px-4 py-2 rounded-full border backdrop-blur-xl"
                style={{ 
                  backgroundColor: 'rgba(198, 163, 90, 0.9)',
                  borderColor: '#C6A35A',
                  boxShadow: '0 0 30px rgba(198, 163, 90, 0.5)'
                }}
                animate={{
                  y: hoveredIndex === index ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-black text-sm">Keynote Speaker</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More Speakers Coming Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border"
            style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
          >
            <p className="text-white/90">
              <span className="text-[#C6A35A]">+8 more speakers</span> to be announced soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
