import { Code, Briefcase, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-surface/80 mt-16 md:mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src="/images/CoderForum.webp" alt="Coders' Forum" className="w-8 h-8 object-contain" onError={(e) => { e.target.src = '/vite.svg'; }} />
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-mono text-secondary tracking-widest leading-none">FORESE SVCE</span>
            <span className="text-base md:text-xl font-bold font-sans tracking-tight text-white uppercase">Coder's Forum</span>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6">
          <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="GitHub">
            <Code className="w-5 h-5" />
          </a>
          <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="LinkedIn">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href="#" className="text-textMuted hover:text-white transition-colors" aria-label="Instagram">
            <Camera className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
