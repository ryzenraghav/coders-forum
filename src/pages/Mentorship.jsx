import { motion } from 'framer-motion';
import { Terminal, Database, GitBranch, Code2, Users, Target, Award, ArrowRight, BrainCircuit, PlayCircle, Code, Briefcase, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const MENTORS = [
  { id: 1, name: 'Alex Mercer', year: '3rd Year / CSE', expertise: 'Data Structures & Java', intro: 'Passionate about algorithms and competitive coding.', avatar: '/images/avatar.jpg' },
  { id: 2, name: 'Sarah Chen', year: '3rd Year / IT', expertise: 'Algorithms & Logic', intro: 'Loves breaking down complex problems into simple steps.', avatar: '/images/avatar.jpg' },
  { id: 3, name: 'Marcus Johnson', year: '4th Year / CSE', expertise: 'System Design & Java', intro: 'Here to help you write cleaner, more efficient code.', avatar: '/images/avatar.jpg' },
];

const Mentorship = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-primary/30 bg-surface/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/campus.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-secondary mb-4 tracking-widest text-sm">[ CODERS' FORUM • MENTORSHIP PROGRAM ]</div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
              Level Up Your <br/>Coding Journey.
            </h1>
            <p className="text-xl text-primary font-mono mb-4">
              Learn. Solve. Build.
            </p>
            <p className="text-textMuted font-mono mb-10 max-w-lg">
              A mentorship program where experienced pre-final-year student mentors help 2nd-year students build a strong foundation in programming, DSA, Java, and Machine Learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="GOOGLE_FORM_URL_HERE" target="_blank" rel="noopener noreferrer" className="btn-pixel text-center w-full sm:w-auto">Join the Program</a>
              <Link to="/curriculum" className="btn-pixel-secondary text-center w-full sm:w-auto">Explore Curriculum</Link>
            </div>
          </div>
          
          {/* Animated Code Snippet / Terminal Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="terminal-panel p-6 pixel-border font-mono text-sm shadow-2xl relative z-10 bg-background/90 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-textMuted text-xs ml-2">mentorship.java</span>
              </div>
              <div className="text-secondary">class</div> <div className="text-white inline">MentorshipProgram</div> <div className="text-secondary inline">&#123;</div>
              <div className="pl-4 mt-2">
                <div className="text-textMuted">// Initialize 2nd year students</div>
                <div className="text-secondary inline">public void</div> <div className="text-primary inline">startJourney</div><div className="text-white inline">(Student s) &#123;</div>
                <div className="pl-4 mt-2">
                  <div className="text-white">s.learn(DataStructures.ALL);</div>
                  <div className="text-white mt-1">s.master(Algorithms.CORE);</div>
                  <div className="text-white mt-1">s.build(Java.FUNDAMENTALS);</div>
                  <div className="text-white mt-1">s.explore(MachineLearning.BASICS);</div>
                  <div className="text-primary mt-2">return</div> <div className="text-white inline">s.levelUp();</div>
                </div>
                <div className="text-white mt-2">&#125;</div>
              </div>
              <div className="text-secondary mt-2">&#125;</div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 blur-2xl z-0"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Terminal className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-bold mb-8">PROGRAM OVERVIEW</h2>
          <p className="text-lg text-textMuted font-mono leading-relaxed">
            Our <strong className="text-white">Student Mentors</strong> will guide participants through essential programming concepts. 
            This curriculum is meticulously designed to bridge the gap between classroom theory and practical application, 
            equipping you with the exact skills required for academics, personal projects, competitive programming, and upcoming placements.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 bg-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">WHAT YOU'LL LEARN</h2>
            <div className="font-mono text-secondary text-sm">[ CORE CURRICULUM ]</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Data Structures', desc: 'Arrays, linked lists, stacks, trees, graphs, and fundamental data-structure concepts.', icon: Database },
              { title: 'Algorithms', desc: 'Searching, sorting, recursion, complexity analysis, and problem-solving techniques.', icon: GitBranch },
              { title: 'Java', desc: 'Programming fundamentals, OOP concepts, syntax, implementation, and structuring code.', icon: Code2 },
              { title: 'Machine Learning', desc: 'Data preprocessing, model training, evaluation, and building predictive AI models.', icon: Cpu }
            ].map((module, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="pixel-border bg-surface p-8 group transition-all duration-300 hover:border-secondary flex flex-col"
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-primary/10 border border-primary/30 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-colors">
                  <module.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">{module.title}</h3>
                <p className="text-textMuted font-mono text-sm leading-relaxed flex-grow">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join? */}
      <section className="py-24 border-y border-primary/20 relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12">WHY JOIN?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Learn from experienced mentors', desc: 'Get guidance from pre-final-year students who have already navigated the learning path.', icon: Users },
                  { title: 'Hands-on coding', desc: 'Apply concepts through problems, exercises, and interactive sessions.', icon: Code },
                  { title: 'Build problem-solving skills', desc: 'Learn how to break down problems and approach them logically.', icon: BrainCircuit },
                  { title: 'Prepare for what’s ahead', desc: 'Develop foundations useful for projects, competitive programming, and placements.', icon: Briefcase },
                  { title: 'Earn PCD Hours', desc: 'Participation in the program contributes toward PCD hours.', icon: Award }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-textMuted font-mono text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md aspect-square pixel-border p-2 bg-surface/50">
                <div className="absolute inset-0 bg-[url('/images/campus.jpg')] bg-cover bg-center opacity-30 grayscale mix-blend-screen"></div>
                <div className="absolute inset-0 border border-primary/20 m-4 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
                  <Target className="w-16 h-16 text-secondary mb-4 opacity-80" />
                  <div className="font-mono text-white text-xl">[ TARGET LOCKED ]</div>
                  <div className="font-mono text-textMuted text-xs mt-2">SUCCESS.exe READY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">LEARNING JOURNEY</h2>
            <div className="font-mono text-textMuted text-sm">Follow the protocol.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-primary/30 -z-10"></div>
            
            {[
              { step: '01', title: 'Learn', desc: 'Understand programming, DSA, and ML fundamentals.' },
              { step: '02', title: 'Practice', desc: 'Solve problems and implement concepts through hands-on sessions.' },
              { step: '03', title: 'Apply', desc: 'Use your knowledge in projects and coding challenges.' },
              { step: '04', title: 'Prepare', desc: 'Build confidence for competitive programming, academics, and placements.' }
            ].map((item, i) => (
              <div key={i} className="relative group text-center md:text-left">
                <div className="w-24 h-24 mx-auto md:mx-0 mb-6 pixel-border bg-background flex items-center justify-center font-mono text-3xl text-primary group-hover:text-secondary transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-textMuted text-sm font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-24 bg-surface/30 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Think better. Solve better. Code better.</h2>
          <p className="text-textMuted font-mono mb-12">By the end of the program, students should be able to:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-mono text-sm text-textMain/90">
            {[
              'Understand and apply fundamental DSA, Java, and Machine Learning concepts',
              'Approach coding problems with stronger logic',
              'Write efficient, structured, and optimized code',
              'Tackle academic and placement-oriented coding problems with confidence',
              'Continue building their programming skills independently'
            ].map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-surface/50 border border-primary/10">
                <PlayCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">MEET YOUR MENTORS</h2>
            <div className="font-mono text-secondary text-sm">[ EXPERT POOL ]</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MENTORS.map((mentor) => (
              <motion.div 
                key={mentor.id}
                whileHover={{ y: -5 }}
                className="pixel-border bg-surface group transition-all duration-300 hover:shadow-[0_0_20px_rgba(176,38,255,0.15)] flex flex-col"
              >
                <div className="h-48 relative overflow-hidden bg-background border-b border-primary/30 p-2">
                  <img 
                    src={mentor.avatar} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pixelated" 
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-color group-hover:opacity-0 transition-opacity"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{mentor.name}</h3>
                  <div className="font-mono text-xs text-secondary mb-3">{mentor.year}</div>
                  
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-mono mb-4 w-fit border border-primary/20">
                    {mentor.expertise.toUpperCase()}
                  </div>
                  
                  <p className="text-textMuted text-sm font-mono mt-auto pt-4 border-t border-primary/10 italic">
                    "{mentor.intro}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden border-t border-primary/30 bg-surface/50 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,38,255,0.15),transparent_60%)]"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Don’t just learn to code.<br/>
            <span className="text-primary">Learn to think, solve, and build.</span>
          </h2>
          <p className="text-lg text-textMuted font-mono mb-10 max-w-2xl mx-auto">
            Join the Coders’ Forum Mentorship Classes and start building the coding foundation that will take you further.
          </p>
          <a href="GOOGLE_FORM_URL_HERE" target="_blank" rel="noopener noreferrer" className="btn-pixel text-lg px-10 py-5">
            Join the Mentorship Program <ArrowRight className="ml-2 w-5 h-5 inline" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
