import { motion } from 'framer-motion';
import { Terminal, Calendar, Users, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-primary/30">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-[url('/images/campus.jpg')] bg-cover bg-center bg-no-repeat"
        ></div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>

        {/* HUD Elements */}
        <div className="absolute top-8 left-8 z-20 hidden lg:block font-mono text-[10px] text-primary/70 tracking-widest">
          SYS.INIT(0x01) <br/>
          MEM: OK <br/>
          NET: CONNECTED
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden lg:block font-mono text-[10px] text-secondary/70 tracking-widest text-right">
          POS: 12.9803° N, 79.9725° E <br/>
          LOC: SVCE_CAMPUS <br/>
          STATUS: ACTIVE
        </div>

        {/* Vertical Indicator */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8 font-mono text-xs text-textMuted tracking-widest">
          {['CODE', 'LEARN', 'BUILD', 'BELONG'].map((item, i) => (
            <div key={item} className="flex items-center gap-4 origin-left rotate-90">
              <span className="text-primary">{`0${i + 1}`}</span>
              <span className="text-white/50">{item}</span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-1 pixel-border bg-primary/10 text-primary font-mono text-[10px] md:text-xs tracking-widest"
          >
            [ WELCOME TO THE GRID ]
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tighter"
          >
            <span className="block text-white">IDEAS.</span>
            <span className="block text-secondary">PEOPLE.</span>
            <span className="block text-primary">POSSIBILITIES.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-lg lg:text-xl text-textMuted max-w-2xl mx-auto mb-8 md:mb-12 font-mono px-2"
          >
            The premier student coding community at SVCE. We build, learn, and grow together in the digital frontier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <Link to="/events" className="btn-pixel w-full sm:w-auto px-8 py-3 text-sm">
              EXPLORE EVENTS →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Build Something That Matters */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">BUILD SOMETHING<br/><span className="text-primary">THAT MATTERS.</span></h2>
            <p className="text-textMuted max-w-2xl mx-auto font-mono text-sm md:text-base px-2">Coder's Forum is more than just a club. It's a platform for creators, thinkers, and builders to bring their ideas to life.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { id: '01', title: 'CODE', desc: 'Master new languages and frameworks through hands-on workshops.', icon: Code },
              { id: '02', title: 'CREATE', desc: 'Build projects that solve real problems in hackathons.', icon: Terminal },
              { id: '03', title: 'CONNECT', desc: 'Meet like-minded peers and industry professionals.', icon: Users },
              { id: '04', title: 'GROW', desc: 'Develop your skills with personalized mentorship.', icon: ArrowRight }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="terminal-panel p-5 md:p-6 pixel-border group hover:border-secondary transition-colors relative"
              >
                <div className="font-mono text-primary text-lg md:text-xl mb-3 md:mb-4 group-hover:text-secondary transition-colors">// {pillar.id}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{pillar.title}</h3>
                <p className="text-textMuted text-xs md:text-sm font-mono">{pillar.desc}</p>
                <pillar.icon className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 text-primary/10 group-hover:text-secondary/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-surface/50 border-t border-primary/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-4">
            <div className="text-center md:text-left">
              <div className="font-mono text-secondary mb-2 text-xs md:text-sm">[ LATEST LOGS ]</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">UPCOMING EVENTS</h2>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center text-primary hover:text-white font-mono text-sm uppercase transition-colors">
              VIEW ALL <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Coders Forum Hackathon', tag: 'HACKATHON', date: 'To Be Announced', desc: 'A 24-hour coding marathon to build solutions for a sustainable future.' },
              { name: 'Mini Hackathon', tag: 'HACKATHON', date: 'To Be Announced', desc: 'A shorter, intense coding challenge to test your skills and creativity.' }
            ].map((event, i) => (
              <div key={i} className="pixel-border bg-background group overflow-hidden flex flex-col">
                <div className="h-40 md:h-48 relative overflow-hidden bg-surface">
                  <div className="absolute inset-0 opacity-80 bg-[url('/images/campus.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-background/80 text-primary border border-primary/50 text-[10px] font-mono backdrop-blur-sm">
                    {event.tag}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-textMuted text-xs font-mono">{event.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{event.name}</h3>
                  <p className="text-textMuted text-xs md:text-sm font-mono mb-4 md:mb-6 flex-grow">{event.desc}</p>
                  <Link to="/events" className="text-xs md:text-sm font-mono text-white flex items-center hover:text-primary transition-colors mt-auto">
                    READ LOG <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 text-center md:hidden">
             <Link to="/events" className="btn-pixel-secondary w-full">
              VIEW ALL EVENTS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
