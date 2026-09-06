import { motion } from 'framer-motion';
import { BookOpen, Database, GitBranch, Code2, Cpu, ChevronRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const MODULES = [
  { 
    id: '01', 
    title: 'Programming Fundamentals', 
    desc: 'The bedrock of computer science. Variables, loops, conditionals, and logical thinking.',
    icon: BookOpen,
    topics: ['Syntax & Semantics', 'Control Flow', 'Functions & Scope', 'Memory Basics']
  },
  { 
    id: '02', 
    title: 'Data Structures', 
    desc: 'Organize and store data efficiently to build optimized applications.',
    icon: Database,
    topics: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees & Graphs']
  },
  { 
    id: '03', 
    title: 'Algorithms', 
    desc: 'Step-by-step procedures for calculations, data processing, and automated reasoning.',
    icon: GitBranch,
    topics: ['Time/Space Complexity', 'Sorting & Searching', 'Recursion', 'Dynamic Programming']
  },
  { 
    id: '04', 
    title: 'Java Mastery', 
    desc: 'Deep dive into Object-Oriented Programming and enterprise-level application architecture.',
    icon: Code2,
    topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Interfaces', 'Exception Handling']
  },
  { 
    id: '05', 
    title: 'Machine Learning', 
    desc: 'Train models, analyze datasets, and build intelligent predictive systems.',
    icon: Cpu,
    topics: ['Data Preprocessing', 'Regression Models', 'Classification', 'Neural Network Basics']
  }
];

const Curriculum = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 border-b border-primary/30 bg-surface/30">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/campus.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-secondary mb-4 tracking-widest">[ SYLLABUS ]</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase text-white">
            Program Curriculum
          </h1>
          <p className="text-lg text-textMuted font-mono">
            A comprehensive roadmap designed for 2nd-year developers.
          </p>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>

          <div className="space-y-24">
            {MODULES.map((mod, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={mod.id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-background border border-primary z-10 -translate-x-1/2 flex items-center justify-center pixel-border shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                    <span className="font-mono text-secondary font-bold">{mod.id}</span>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="pixel-border bg-surface p-8 relative group hover:border-secondary transition-colors"
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="p-3 bg-primary/10 border border-primary/30 text-primary">
                          <mod.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{mod.title}</h3>
                      </div>
                      
                      <p className="text-textMuted font-mono text-sm mb-6 leading-relaxed">
                        {mod.desc}
                      </p>

                      <div className="bg-background/50 border border-primary/20 p-4">
                        <div className={`font-mono text-xs text-secondary mb-3 ${isEven ? 'md:text-right' : ''}`}>[ TOPICS COVERED ]</div>
                        <ul className={`space-y-2 font-mono text-sm text-white/80 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                          {mod.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2">
                              {!isEven && <ChevronRight className="w-4 h-4 text-primary" />}
                              {topic}
                              {isEven && <ChevronRight className="w-4 h-4 text-primary md:order-first rotate-180" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-primary/20 bg-surface/50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Terminal className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
          <h2 className="text-2xl font-bold mb-6">Ready to start the journey?</h2>
          <a href="GOOGLE_FORM_URL_HERE" target="_blank" rel="noopener noreferrer" className="btn-pixel">
            Initialize Enrollment <ChevronRight className="ml-2 w-5 h-5 inline" />
          </a>
          <div className="mt-8">
            <Link to="/mentorship" className="font-mono text-sm text-textMuted hover:text-white transition-colors underline decoration-primary/50 underline-offset-4">
              Return to Mentorship Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
