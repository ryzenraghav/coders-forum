import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User, Mail } from 'lucide-react';

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

const TEAM_DATA = [
  { id: 1, name: 'Mubashir Sheriff', role: 'Chief Mentor', team: 'Chief Mentors', avatar: '/images/c15.png', specialization: 'Program Management', linkedin: '#', github: '#', email: '#' },
  { id: 2, name: 'Sri Ananya I', role: 'Chief Mentor', team: 'Chief Mentors', avatar: '/images/sm96.jpg', specialization: 'Advanced DSA', linkedin: '#', github: '#', email: '#' },
  { id: 3, name: 'Tharun Vel K', role: 'Mentor', team: 'Mentors', avatar: '/images/m62.jpg', specialization: 'AI/ML domain', linkedin: 'https://www.linkedin.com/in/k-tharun-vel-4495a4338', github: 'https://github.com/TharunVel', email: '#' },
  { id: 4, name: 'Sitharth', role: 'Mentor', team: 'Mentors', avatar: '/images/image.png', specialization: 'Machine Learning', linkedin: 'https://www.linkedin.com/in/sitharth-a-cse', github: 'https://github.com/Sitharth2007', email: 'sitharth428@gmail.com' },
  { id: 5, name: 'Manibalan', role: 'Mentor', team: 'Mentors', avatar: '/src/assets/m3.jpeg', specialization: 'Competitive programming and dbms', linkedin: 'https://www.linkedin.com/in/manibalan-c?utm_source=share_via&utm_content=profile&utm_medium=member_ios', github: 'https://github.com/Manibalan1270', email: '#' },
  //{ id: 6, name: 'Elena Rodriguez', role: 'Mentor', team: 'Mentors', avatar: '/images/avatar.jpg', specialization: 'Dynamic Programming', linkedin: '#', github: '#', email: '#' },
  //{ id: 7, name: 'James Wilson', role: 'Mentor', team: 'Mentors', avatar: '/images/avatar.jpg', specialization: 'Practical Implementation', linkedin: '#', github: '#', email: '#' },
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
          <div className={`grid gap-6 md:gap-8 mx-auto ${
            activeTeam === 'Chief Mentors'
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl'
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
                  <div className="aspect-square relative overflow-hidden bg-background p-1 border-b border-primary/30 group/photo" tabIndex="0">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pixelated"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-color group-hover:opacity-0 transition-opacity pointer-events-none"></div>

                    {/* Status indicator */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3 flex items-center gap-1.5 z-20">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse border border-background"></div>
                    </div>

                    {/* Specialization Overlay */}
                    <div className="absolute bottom-1 left-1 right-1 bg-background/90 backdrop-blur-sm border-t border-primary/30 p-2 md:p-3 translate-y-full opacity-0 group-hover/photo:translate-y-0 group-hover/photo:opacity-100 group-focus/photo:translate-y-0 group-focus/photo:opacity-100 transition-all duration-300 z-10 flex items-center justify-center shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
                      <span className="text-[10px] md:text-xs font-mono text-primary font-bold text-center uppercase tracking-wider">
                        Specialized in: {member.specialization}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 md:p-5 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-secondary transition-colors">{member.name}</h3>
                      <p className="text-primary font-mono text-[10px] md:text-xs tracking-wider mb-3 md:mb-4">{member.role.toUpperCase()}</p>
                      <p className="text-textMuted text-[10px] md:text-xs font-mono mb-3 md:mb-4">Specialized in: {member.specialization}</p>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-primary/20">
                      {member.linkedin && (
                        <a href={member.linkedin} className="group/social w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 hover:border-secondary transition-colors text-white" aria-label="LinkedIn">
                          <LinkedinIcon className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-50 group-hover/social:opacity-100 transition-all" />
                        </a>
                      )}
                      {member.instagram && (
                        <a href={member.instagram} className="group/social w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 hover:border-primary transition-colors text-white" aria-label="Instagram">
                          <InstagramIcon className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-50 group-hover/social:opacity-100 transition-all" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} className="group/social w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 hover:border-primary transition-colors text-white" aria-label="GitHub">
                          <GithubIcon className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-50 group-hover/social:opacity-100 transition-all" />
                        </a>
                      )}
                      {member.email && (
                        <a href={member.email} className="group/social relative w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-background border border-primary/30 hover:border-primary transition-colors text-white" aria-label="Email">
                          <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-50 group-hover/social:opacity-100 transition-all" />
                          
                          {/* Email Tooltip Popup */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-surface border border-primary/40 rounded-md text-[10px] md:text-xs font-mono text-textMuted whitespace-nowrap opacity-0 pointer-events-none group-hover/social:opacity-100 group-hover/social:-translate-y-2 transition-all duration-300 z-50 shadow-[0_0_10px_rgba(176,38,255,0.15)] flex items-center justify-center">
                            {member.email.replace('mailto:', '')}
                          </div>
                        </a>
                      )}
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
