import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, MessageSquare, ChevronRight, User } from 'lucide-react';

const TEAM_DATA = [
  { id: 1, name: 'Mubashir Sheriff', role: 'Chief Mentor', team: 'Chief Mentors', avatar: '/images/c15.png', desc: 'Oversees the entire mentorship program and curriculum design.' },
  { id: 2, name: 'Sri Ananya I', role: 'Chief Mentor', team: 'Chief Mentors', avatar: '/images/sm96.jpg', desc: 'Focuses on advanced DSA problem solving and competitive programming.' },
  { id: 3, name: 'Tharun Vel K', role: 'Mentor', team: 'Mentors', avatar: '/images/m62.jpg', desc: 'Specializes in Core Java and object-oriented design.' },
  { id: 4, name: 'Sitharth', role: 'Mentor', team: 'Mentors', avatar: '/images/avatar.jpg', desc: 'Guides students through basic algorithms and data structures.' },
  { id: 5, name: 'Manibalan', role: 'Mentor', team: 'Mentors', avatar: '/images/avatar.jpg', desc: 'Machine Learning enthusiast, helps with predictive modeling.' },
  //{ id: 6, name: 'Elena Rodriguez', role: 'Mentor', team: 'Mentors', avatar: '/images/avatar.jpg', desc: 'Expert in dynamic programming and recursion techniques.' },
  //{ id: 7, name: 'James Wilson', role: 'Mentor', team: 'Mentors', avatar: '/images/avatar.jpg', desc: 'Helps 2nd-year students transition from theory to practical implementation.' },
];

const TEAMS = ['Chief Mentors', 'Mentors'];

const Team = () => {
  const [activeTeam, setActiveTeam] = useState('Chief Mentors');

  const filteredMembers = TEAM_DATA.filter(member => member.team === activeTeam);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 border-b border-primary/30">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/campus.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-primary mb-3 md:mb-4 tracking-widest text-xs md:text-sm">[ USER DIRECTORY ]</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 uppercase">
            THE TEAM
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-textMuted font-mono max-w-2xl mx-auto px-2">
            Different skills. Same vision.
          </p>
        </div>
      </section>

      {/* Team Tabs */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-8 sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-2 justify-center">
            {TEAMS.map(team => (
              <button
                key={team}
                onClick={() => setActiveTeam(team)}
                className={`px-5 md:px-6 py-2 md:py-3 whitespace-nowrap font-mono text-xs md:text-sm transition-all duration-300 ${
                  activeTeam === team
                    ? 'bg-primary/20 text-white border border-primary shadow-[0_0_15px_rgba(176,38,255,0.3)]'
                    : 'bg-surface text-textMuted border border-primary/30 hover:border-primary/60 hover:text-white'
                }`}
              >
                {team.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-20 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 md:gap-8 ${
            activeTeam === 'Chief Mentors'
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
          }`}>
            {filteredMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                <div className="pixel-border bg-surface relative z-10 h-full flex flex-col">
                  {/* Avatar */}
                  <div className="aspect-square relative overflow-hidden bg-background p-1 border-b border-primary/30">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pixelated"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-color group-hover:opacity-0 transition-opacity"></div>

                    {/* Status indicator */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3 flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-background"></div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 md:p-5 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-secondary transition-colors">{member.name}</h3>
                      <p className="text-primary font-mono text-[10px] md:text-xs tracking-wider mb-3 md:mb-4">{member.role.toUpperCase()}</p>
                      <p className="text-textMuted text-[10px] md:text-xs font-mono mb-3 md:mb-4">{member.desc}</p>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-primary/20">
                      <a href="#" className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 text-textMuted hover:text-white hover:border-primary transition-colors" aria-label="GitHub">
                        <Code className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                      <a href="#" className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 text-textMuted hover:text-white hover:border-secondary transition-colors" aria-label="LinkedIn">
                        <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                      <a href="#" className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 text-textMuted hover:text-white hover:border-primary transition-colors" aria-label="Contact">
                        <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 border-t border-primary/30 bg-surface/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,38,255,0.1),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <User className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6 opacity-50" />
          <h2 className="text-xl md:text-3xl lg:text-5xl font-sans font-bold mb-6 md:mb-8 text-white px-2">
            "A community is only as strong<br/>as the people in it."
          </h2>
          <button className="btn-pixel text-sm md:text-lg px-6 md:px-8 py-3 md:py-4">
            JOIN OUR TEAM <ChevronRight className="ml-2 w-4 h-4 md:w-6 md:h-6 inline" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
