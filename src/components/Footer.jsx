import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="mt-16 md:mt-24 px-4 sm:px-6 lg:px-8 pb-6">
      {/* Large rounded container */}
      <div className="bg-surface/80 border border-primary/30 rounded-3xl overflow-hidden relative backdrop-blur-md">
        
        {/* Top/Main section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 px-6 py-10 md:px-12 md:py-16">
          
          {/* LEFT: Brand / Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center gap-3">
              <img src="/images/CoderForum.webp" alt="Coders' Forum Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" onError={(e) => { e.target.src = '/vite.svg'; }} />
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-xs font-mono text-secondary tracking-widest leading-none mb-1">FORESE SVCE</span>
                <span className="text-lg md:text-xl font-bold font-sans tracking-tight text-white uppercase">Coder's Forum</span>
              </div>
            </div>
            <p className="text-sm text-textMuted font-mono max-w-xs leading-relaxed">
              A student-driven community built to learn, build, and grow together through technology.
            </p>
          </div>

          {/* MIDDLE: Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:pl-8">
            <h3 className="font-mono text-white text-sm md:text-base tracking-widest uppercase">Quick Links</h3>
            <div className="flex flex-col items-center md:items-start space-y-3 font-mono text-sm text-textMuted">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/mentorship" className="hover:text-primary transition-colors">Mentorship</Link>
              <Link to="/events" className="hover:text-primary transition-colors">Events</Link>
              <Link to="/team" className="hover:text-primary transition-colors">Team</Link>
            </div>
          </div>

          {/* RIGHT: Contact / Connect */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:pl-8">
            <h3 className="font-mono text-white text-sm md:text-base tracking-widest uppercase">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-primary/30 rounded-lg text-textMuted hover:text-secondary hover:border-secondary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-primary/30 rounded-lg text-textMuted hover:text-secondary hover:border-secondary transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-primary/30 rounded-lg text-textMuted hover:text-secondary hover:border-secondary transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 border border-primary/30 rounded-lg text-textMuted hover:text-secondary hover:border-secondary transition-colors" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-primary/20 px-6 py-6 md:px-12 flex flex-col items-center md:items-start">
          <div className="flex gap-6">
            <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
