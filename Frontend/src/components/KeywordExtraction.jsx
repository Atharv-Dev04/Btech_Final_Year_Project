import { motion } from 'framer-motion';
import { Target, ChevronDown, Activity, Globe, Zap, Languages } from 'lucide-react';

const keywords = [
    { text: 'Manuel Baum', color: 'bg-indigo-50 text-indigo-700 border-indigo-100', size: 'text-2xl' },
    { text: 'Baum', color: 'bg-slate-50 text-slate-600 border-slate-100', size: 'text-xl' },
    { text: 'Augsburg', color: 'bg-blue-50 text-blue-700 border-blue-100', size: 'text-2xl' },
    { text: 'Augsburg Manuel', color: 'bg-indigo-50 text-indigo-700 border-indigo-100', size: 'text-2xl' },
    { text: 'Baum convinces', color: 'bg-emerald-50 text-emerald-700 border-emerald-100', size: 'text-2xl' },
    { text: 'Manuel', color: 'bg-slate-50 text-slate-600 border-slate-100', size: 'text-xl' },
    { text: 'coach', color: 'bg-slate-50 text-slate-600 border-slate-100', size: 'text-xl' },
    { text: 'Bundesliga club', color: 'bg-blue-50 text-blue-700 border-blue-100', size: 'text-xl' },
    { text: 'remains coach', color: 'bg-indigo-50 text-indigo-700 border-indigo-100', size: 'text-2xl' },
    { text: 'season', color: 'bg-slate-50 text-slate-600 border-slate-100', size: 'text-xl' },
    { text: 'Bundesliga', color: 'bg-blue-50 text-blue-700 border-blue-100', size: 'text-xl' },
    { text: 'end', color: 'bg-slate-50 text-slate-600 border-slate-100', size: 'text-xl' },
    { text: 'Sandro Wagner', color: 'bg-indigo-50 text-indigo-700 border-indigo-100', size: 'text-2xl' },
    { text: 'club', color: 'bg-slate-50 text-slate-600 border-slate-100', size: 'text-lg' },
    { text: 'solution Manuel', color: 'bg-emerald-50 text-emerald-700 border-emerald-100', size: 'text-xl' }
];

const relevanceScores = [
    { id: 1, text: 'Manuel Baum', score: '5358.3%', width: 'w-full' },
    { id: 2, text: 'Baum', score: '4895.3%', width: 'w-[90%]' },
    { id: 3, text: 'Augsburg', score: '3181.0%', width: 'w-[75%]' },
    { id: 4, text: 'Augsburg Manuel', score: '2361.0%', width: 'w-[60%]' },
    { id: 5, text: 'Baum Convinces', score: '1872.1%', width: 'w-[55%]' },
    { id: 6, text: 'Manuel', score: '1851.6%', width: 'w-[54%]' },
    { id: 7, text: 'Coach', score: '1218.6%', width: 'w-[45%]' },
    { id: 8, text: 'Bundesliga Club', score: '1198.4%', width: 'w-[44%]' },
    { id: 9, text: 'Remains Coach', score: '1113.4%', width: 'w-[42%]' },
    { id: 10, text: 'Season', score: '1084.3%', width: 'w-[40%]' },
    { id: 11, text: 'Bundesliga', score: '1041.6%', width: 'w-[38%]' },
    { id: 12, text: 'End', score: '1002.0%', width: 'w-[35%]' },
    { id: 13, text: 'Sandro Wagner', score: '968.5%', width: 'w-[32%]' },
    { id: 14, text: 'Club', score: '774.1%', width: 'w-[25%]' },
    { id: 15, text: 'Solution Manuel', score: '715.2%', width: 'w-[20%]' }
];

export default function KeywordExtraction() {
    return (
        <div className="space-y-8 animate-fade-in pb-12">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Keyword Extraction</h2>
                <p className="text-gray-500">Extract high-quality keywords using advanced hybrid algorithms and robust filtering.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Document</label>
                        <div className="relative">
                            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-primary/20 font-medium text-gray-700">
                                <option>Sports_news-gr.txt (de)</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Extraction Strategy</label>
                        <div className="relative">
                            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-primary/20 font-medium text-gray-700">
                                <option>Balanced (Hybrid - Recommended)</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center block">Extraction Source</label>
                        <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                            <button className="flex-1 py-3 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-2 text-gray-400">
                                <Languages size={14} /> Original (de)
                            </button>
                            <button className="flex-1 py-3 px-4 rounded-lg bg-white shadow-sm border border-gray-100 text-xs font-bold flex items-center justify-center gap-2 text-primary">
                                <Globe size={14} /> Translated (EN)
                            </button>
                        </div>
                    </div>
                </div>

                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all mb-12">
                    <Zap size={18} />
                    Extract Keywords
                </button>

                <div className="space-y-12">
                    {/* Keyword Cloud */}
                    <div className="p-10 bg-gray-50/30 border border-gray-100 rounded-3xl">
                        <div className="flex items-center gap-3 mb-10">
                            <Activity className="text-primary" size={20} />
                            <h3 className="font-bold text-gray-900 text-lg">Keyword Insights (from English Translation)</h3>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {keywords.map((kw, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`${kw.color} ${kw.size} px-8 py-4 rounded-full font-bold shadow-sm border transition-all cursor-default hover:scale-110`}
                                >
                                    {kw.text}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Relevance Scores */}
                    <div className="p-10 bg-gray-50/30 border border-gray-100 rounded-3xl">
                        <div className="flex items-center gap-3 mb-10">
                            <span className="text-primary font-bold text-xl">#</span>
                            <h3 className="font-bold text-gray-900 text-lg">Keyword Relevance Scores</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                            {relevanceScores.map((score, i) => (
                                <motion.div
                                    key={score.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-primary font-black text-sm">
                                        {score.id}
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="font-bold text-gray-700">{score.text}</span>
                                            <span className="text-[10px] font-bold text-gray-400 tabular-nums">{score.score}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: score.width.replace('w-', '').replace('[', '').replace(']', '') }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                                                className="h-full bg-primary rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
