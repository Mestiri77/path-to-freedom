import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ExternalLink, Calendar, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import eventPoster from 'figma:asset/8f811393f82f2a3ac0b52e35b05ac84e03e5e50b.png';

export function Register() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const eventDetails = [
    { icon: Calendar, label: 'Date', value: 'November 16, 2025' },
    { icon: Clock, label: 'Time', value: '10:00 AM' },
    { icon: MapPin, label: 'Venue', value: 'Centre Ville, Tunis' },
  ];

  const benefits = [
    'Full-day conference access',
    'Networking with industry leaders',
    'Conference materials & resources',
    'Lunch & refreshments included',
    'Certificate of attendance',
    'Exclusive insights & strategies',
  ];

  return (
    <section id="register" ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C6A35A] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C6A35A] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            <span className="text-[#C6A35A] text-sm tracking-wider uppercase">Registration Open</span>
          </motion.div>

          <h2 className="text-white mb-6 text-5xl md:text-7xl tracking-tight">
            Join the <br/>
            <span className="bg-gradient-to-r from-[#C6A35A] via-[#D4B574] to-[#C6A35A] bg-clip-text text-transparent">
              Movement
            </span>
          </h2>

          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Take the first step towards your freedom. Register now and transform your future.
          </p>
        </motion.div>

        {/* Event Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-5xl mx-auto"
        >
          {eventDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-xl bg-white/5 p-6 rounded-2xl border text-center group"
                style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
              >
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-[#C6A35A] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  <Icon className="w-8 h-8 text-[#C6A35A] relative" />
                </div>
                <p className="text-white/60 text-sm mb-1">{detail.label}</p>
                <p className="text-white text-lg">{detail.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Event Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#C6A35A] to-[#8B7239] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative backdrop-blur-xl bg-white/5 p-4 rounded-3xl border overflow-hidden"
              style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
            >
              <img
                src={eventPoster}
                alt="Path to Freedom Event Poster"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Main CTA Card */}
            <div className="backdrop-blur-xl bg-white/5 p-10 rounded-3xl border relative overflow-hidden"
              style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, #C6A35A 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, #C6A35A 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, #C6A35A 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative">
                <h3 className="text-white text-3xl md:text-4xl mb-4">
                  Secure Your <span className="text-[#C6A35A]">Spot</span>
                </h3>
                <p className="text-white/70 mb-8 text-lg">
                  Limited seats available. Complete your registration through our form.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full py-8 text-lg text-black hover:scale-[1.02] transition-all duration-300 rounded-2xl group relative overflow-hidden"
                  style={{ backgroundColor: '#C6A35A', boxShadow: '0 0 40px rgba(198, 163, 90, 0.4)' }}
                >
                  <a href="https://forms.google.com/your-form-link" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Register Now
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>

                <p className="text-white/50 text-sm mt-4 text-center">
                  Registration takes less than 2 minutes
                </p>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border"
              style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
            >
              <h4 className="text-white text-xl mb-6 flex items-center gap-2">
                <span className="text-2xl">✨</span> What You'll Get
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C6A35A] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-white/80 group-hover:text-white transition-colors">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block px-8 py-4 rounded-2xl backdrop-blur-xl border relative overflow-hidden"
            style={{ 
              backgroundColor: 'rgba(198, 163, 90, 0.15)',
              borderColor: 'rgba(198, 163, 90, 0.5)',
              boxShadow: '0 0 40px rgba(198, 163, 90, 0.3)'
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(198, 163, 90, 0.3)',
                '0 0 60px rgba(198, 163, 90, 0.5)',
                '0 0 40px rgba(198, 163, 90, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-white text-lg">
              🔥 <span className="text-[#C6A35A]">Early Bird Offer</span> - Register before November 10th
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
