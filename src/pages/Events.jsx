import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, MapPin, Clock, ArrowRight } from 'lucide-react';

const EVENTS_DATA = [
  { id: 1, title: 'HackOverflow 4.0', category: 'Hackathons', desc: 'A 24-hour coding marathon to build solutions for a sustainable future.', date: 'OCT 12, 2026', time: '10:00 AM', location: 'Main Lab, SVCE', type: 'upcoming', tags: ['Coding', 'Hackathons'] },
  { id: 2, title: 'Intro to React & Vite', category: 'Workshops', desc: 'Learn the modern frontend stack from scratch. No prior experience required.', date: 'NOV 05, 2026', time: '02:00 PM', location: 'Lab 2', type: 'upcoming', tags: ['Workshop', 'Coding'] },
  { id: 3, title: 'Mentorship Induction', category: 'Workshops', desc: 'Kickoff session for the 2nd-year mentorship program.', date: 'DEC 01, 2026', time: '04:00 PM', location: 'Seminar Hall', type: 'upcoming', tags: ['Mentorship', 'Placement Prep'] },
  { id: 4, title: 'Java & OOP Basics', category: 'Workshops', desc: 'Deep dive into Object-Oriented Programming using Java.', date: 'AUG 15, 2025', time: '09:00 AM', location: 'Lab 1', type: 'past', tags: ['Java', 'Workshop'] },
  { id: 5, title: 'Graph Algorithms', category: 'Workshops', desc: 'Advanced DSA session focusing on Graph traversal and shortest paths.', date: 'JUL 10, 2025', time: '10:00 AM', location: 'Online', type: 'past', tags: ['DSA', 'Mentorship'] },
  { id: 6, title: 'Intro to Machine Learning', category: 'Workshops', desc: 'A beginner-friendly session on regression and classification.', date: 'JUN 20, 2025', time: '11:00 AM', location: 'Lab 3', type: 'past', tags: ['Machine Learning', 'Workshop'] },
];

const FILTERS = ['All Events', 'Workshops', 'Hackathons'];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = EVENTS_DATA.filter(event => {
    const matchesTab = event.type === activeTab;
    const matchesFilter = activeFilter === 'All Events' || event.category === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 border-b border-primary/30">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/campus.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 uppercase text-white">
              EVENTS
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-secondary font-mono">
              Ideas meet action.
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-8 sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
            {/* Tabs */}
            <div className="flex bg-surface p-1 pixel-border w-fit mx-auto lg:mx-0">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 md:px-6 py-2 font-mono text-xs md:text-sm transition-colors ${activeTab === 'upcoming' ? 'bg-primary text-white' : 'text-textMuted hover:text-white'}`}
              >
                [ Upcoming Events ]
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-4 md:px-6 py-2 font-mono text-xs md:text-sm transition-colors ${activeTab === 'past' ? 'bg-primary text-white' : 'text-textMuted hover:text-white'}`}
              >
                [ Past Events ]
              </button>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-primary/30 py-2 pl-10 pr-4 font-mono text-xs md:text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-textMuted" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8 justify-center lg:justify-start">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 md:px-4 py-1 border font-mono text-[10px] md:text-xs transition-colors ${
                  activeFilter === filter
                    ? 'border-secondary text-secondary bg-secondary/10 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                    : 'border-primary/30 text-textMuted hover:border-primary hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Event Grid */}
      <section className="py-12 md:py-16 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 md:py-24 terminal-panel pixel-border">
              <div className="font-mono text-primary mb-3 md:mb-4">[ SYSTEM NOTIFICATION ]</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">NO EVENTS FOUND</h3>
              <p className="text-textMuted font-mono text-xs md:text-sm">Adjust your filters or search query to try again.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {filteredEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="pixel-border bg-surface/50 group flex flex-col h-full hover:border-secondary transition-colors"
                >
                  <div className="h-36 md:h-48 relative overflow-hidden bg-background">
                    <div className="absolute inset-0 opacity-40 bg-[url('/images/campus.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 px-2 py-1 bg-primary/80 text-white text-[10px] font-mono backdrop-blur-sm">
                      {event.category.toUpperCase()}
                    </div>
                  </div>

                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 group-hover:text-secondary transition-colors">{event.title}</h3>

                    {/* Event Tags */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                      {event.tags?.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-background border border-primary/30 text-textMuted text-[10px] font-mono">
                          #{tag.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    <p className="text-textMuted text-xs md:text-sm font-mono mb-4 md:mb-6 flex-grow">{event.desc}</p>

                    <div className="space-y-1 md:space-y-2 mb-4 md:mb-6 pt-3 md:pt-4 border-t border-primary/20">
                      <div className="flex items-center text-[10px] md:text-xs font-mono text-textMain/80">
                        <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-primary" /> {event.date}
                      </div>
                      <div className="flex items-center text-[10px] md:text-xs font-mono text-textMain/80">
                        <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-primary" /> {event.time}
                      </div>
                      <div className="flex items-center text-[10px] md:text-xs font-mono text-textMain/80">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 md:mr-3 text-primary" /> {event.location}
                      </div>
                    </div>

                    <button className="btn-pixel w-full text-[10px] md:text-xs py-2 md:py-3 mt-auto">
                      {activeTab === 'upcoming' ? 'REGISTER NOW' : 'VIEW RECAP'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Events;
