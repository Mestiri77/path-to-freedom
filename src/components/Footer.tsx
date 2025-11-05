import { Instagram, Send, MessageCircle, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Event', href: '#about' },
    { name: 'Topics', href: '#agenda' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Register', href: '#register' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Centre Ville, Tunis, Tunisia' },
    { icon: Mail, text: 'info@pathfreedom.tn' },
    { icon: Phone, text: '+216 XX XXX XXX' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/rebornteam',
      icon: Instagram,
    },
    {
      name: 'Telegram',
      url: 'https://t.me/rebornteam',
      icon: Send,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/21600000000',
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="relative bg-black border-t overflow-hidden" style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A35A] rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A35A] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-white">Path to </span>
              <span className="bg-gradient-to-r from-[#C6A35A] via-[#D4B574] to-[#C6A35A] bg-clip-text text-transparent">
                Freedom
              </span>
            </h3>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Join us for an extraordinary business conference that will transform your network marketing journey and unlock new possibilities for success.
            </p>
            
            {/* Event Info Badge */}
            <div className="inline-block px-6 py-3 rounded-full backdrop-blur-xl bg-white/5 border mb-6"
              style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
            >
              <p className="text-[#C6A35A]">
                November 16, 2025 • 10:00 AM
              </p>
            </div>

            {/* Organizers */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white/60 text-sm">Organized by:</span>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border"
                  style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
                >
                  <span className="text-white text-sm">Reborn Team</span>
                </div>
                <div className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border"
                  style={{ borderColor: 'rgba(198, 163, 90, 0.3)' }}
                >
                  <span className="text-white text-sm">P4M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#C6A35A] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#C6A35A] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6 text-xl">Get in Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-[#C6A35A] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </li>
                );
              })}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-white/80 mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border transition-all duration-300 hover:bg-[#C6A35A] hover:scale-110 group"
                      style={{ borderColor: 'rgba(198, 163, 90, 0.5)' }}
                      aria-label={link.name}
                    >
                      <Icon className="w-4 h-4 text-[#C6A35A] group-hover:text-black transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 rounded-2xl backdrop-blur-xl bg-white/5 border"
          style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white text-xl mb-2">Stay Updated</h4>
              <p className="text-white/70">Get the latest updates about the event</p>
            </div>
            <Button
              asChild
              className="px-8 py-6 text-black hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#C6A35A' }}
            >
              <a href="#register">Register Now</a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(198, 163, 90, 0.2)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2025 Path to Freedom. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-[#C6A35A] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#C6A35A] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-4 rounded-full border backdrop-blur-xl transition-all duration-300 hover:scale-110 group"
        style={{ 
          backgroundColor: 'rgba(198, 163, 90, 0.1)',
          borderColor: 'rgba(198, 163, 90, 0.5)',
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-[#C6A35A] group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </footer>
  );
}
