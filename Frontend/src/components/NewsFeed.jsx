import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Globe,
    Trophy,
    Film,
    Cpu,
    TrendingUp,
    Clock,
    ExternalLink,
    ChevronRight,
    Newspaper
} from 'lucide-react';

const CATEGORIES = [
    { id: 'all', label: 'All News', icon: <Newspaper size={16} /> },
    { id: 'world', label: 'World', icon: <Globe size={16} /> },
    { id: 'sports', label: 'Sports', icon: <Trophy size={16} /> },
    { id: 'entertainment', label: 'Entertainment', icon: <Film size={16} /> },
    { id: 'technology', label: 'Technology', icon: <Cpu size={16} /> },
];

const MOCK_NEWS = [
    {
        id: 1,
        category: 'world',
        title: 'Global Summit on Climate Action Reaches Landmark Agreement',
        summary: 'World leaders have gathered in Geneva to sign a historic pact aimed at carbon neutrality by 2040.',
        source: 'World News Daily',
        time: '2 hours ago',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
        breaking: true
    },
    {
        id: 2,
        category: 'sports',
        title: 'Underdog Team Wins Championship in Stunning Final Minutes',
        summary: 'A dramatic goal in the 94th minute secured the trophy for the league newcomers.',
        source: 'Sports Central',
        time: '4 hours ago',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800',
        breaking: false
    },
    {
        id: 3,
        category: 'technology',
        title: 'AI Breakthrough: New Model Surpasses Human-Level Coding',
        summary: 'Researchers have unveiled a neural network capable of solving complex architectural problems.',
        source: 'TechPulse',
        time: '5 hours ago',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        breaking: true
    },
    {
        id: 4,
        category: 'entertainment',
        title: 'Cannes Film Festival Announces Highly Anticipated Lineup',
        summary: 'The 77th edition features new works from legendary directors and fresh talent alike.',
        source: 'Cinema Insider',
        time: '6 hours ago',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
        breaking: false
    },
    {
        id: 5,
        category: 'world',
        title: 'Space Agency Successfully Lands Probe on Jupiter Moon',
        summary: 'The first high-resolution images of the icy surface have begun transmitting back to Earth.',
        source: 'Galactic Times',
        time: '8 hours ago',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
        breaking: false
    },
    {
        id: 6,
        category: 'technology',
        title: 'Next-Gen Quantum Processor Achieves Unprecedented Speed',
        summary: 'The 1000-qubit milestone marks a new era for computational simulations and cryptography.',
        source: 'Silicon Valley Journal',
        time: '12 hours ago',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
        breaking: false
    }
];

export default function NewsFeed() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredNews = useMemo(() => {
        return MOCK_NEWS.filter(news => {
            const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                news.summary.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'all' || news.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const featuredNews = MOCK_NEWS.find(n => n.breaking);

    return (
        <div className="space-y-12 pb-20 animate-fade-in pt-10">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-red-50 text-red-500 text-[10px] font-black rounded-full uppercase tracking-widest border border-red-100 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live News
                        </span>
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">Real-Time News Feed</h2>
                    <p className="text-gray-500 max-w-lg">Stay updated with the latest headlines from around the globe, curated just for you.</p>
                </div>

                <div className="relative group w-full md:w-96">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search news, topics..."
                        className="w-full pl-14 pr-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                    />
                </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap border ${activeCategory === cat.id
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                                : 'bg-white border-gray-100 text-gray-500 hover:border-primary/30 hover:text-gray-700'
                            }`}
                    >
                        {cat.icon}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Breaking News Hero */}
            {featuredNews && !searchQuery && activeCategory === 'all' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-[450px] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl shadow-indigo-500/10"
                >
                    <img
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-12 w-full max-w-4xl space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em]">Breaking</span>
                            <span className="text-white/70 text-sm font-bold flex items-center gap-2">
                                <Clock size={16} /> {featuredNews.time}
                            </span>
                        </div>
                        <h3 className="text-5xl font-black text-white leading-tight">{featuredNews.title}</h3>
                        <p className="text-white/80 text-lg leading-relaxed">{featuredNews.summary}</p>
                        <button className="bg-white text-black px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-xl">
                            Read Full Article <ExternalLink size={18} />
                        </button>
                    </div>
                </motion.div>
            )}

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredNews.map((news, i) => (
                        <motion.div
                            layout
                            key={news.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="bg-white rounded-[32px] border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-primary border border-white">
                                    {news.category}
                                </span>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-3 text-gray-400 text-xs font-bold mb-4">
                                    <span className="hover:text-primary transition-colors cursor-pointer">{news.source}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>{news.time}</span>
                                </div>

                                <h4 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {news.title}
                                </h4>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {news.summary}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between group/btn">
                                    <span className="text-sm font-black text-gray-900 group-hover/btn:translate-x-1 transition-transform flex items-center gap-2">
                                        Read Story <ChevronRight size={16} className="text-primary" />
                                    </span>
                                    <div className="p-2 bg-gray-50 rounded-xl text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredNews.length === 0 && (
                <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                        <Search size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No news found</h3>
                    <p className="text-gray-500">Try adjusting your search or category filters.</p>
                </div>
            )}
        </div>
    );
}
