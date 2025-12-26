import { motion } from 'framer-motion';
import { FileText, Sparkles, ChevronDown, Clock, Layers } from 'lucide-react';

export default function Summarization() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Document Summary</h2>
                <p className="text-gray-500">Generate AI-powered summaries of your documents instantly.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="max-w-4xl space-y-6 mb-12">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Document</label>
                        <div className="relative">
                            <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-primary/20 font-medium text-gray-700">
                                <option>Delhi_AQI-en.txt</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                        </div>
                    </div>

                    <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                        <Sparkles size={18} />
                        Generate Summary
                    </button>
                </div>

                <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-primary border border-indigo-100">
                            <FileText size={20} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg tracking-tight">Generated Summary Analysis</h3>
                    </div>

                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-[32px] text-slate-700 leading-relaxed font-semibold text-lg shadow-inner">
                        A grey haze enveloped the capital on Tuesday as the 24-hour average Air Quality Index (AQI) stood at 412 in the severe category at 4 pm,
                        deteriorating sharply from 373 in the very poor category at the same time a day earlier, according to data from the Central Pollution Control Board (CPCB).
                        These were the only two cities among 230 monitored nationwide to record air quality in the severe category, the CPCB data showed.
                        Data from the Decision Support System (DSS) for Air Quality Management showed that vehicular emissions were the largest contributor, accounting for 14.4 per cent of the total pollution load.
                        Mohammad Rafiuddin, Programme Lead at the Council on Energy, Environment and Water (CEEW), said the city is experiencing foggy mornings and very calm wind conditions,
                        which are preventing dispersion of pollutants. He added that GRAP-IV restrictions remain in force, including curbs on older vehicles, construction activities and in-person classes.
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-[32px] bg-indigo-50 border border-indigo-100 shadow-sm relative overflow-hidden group">
                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Words Reduced</p>
                        <p className="text-4xl font-black text-indigo-600">71%</p>
                        <Sparkles className="absolute bottom-[-10%] right-[-10%] w-24 h-24 text-indigo-100 opacity-50 group-hover:scale-125 transition-transform duration-700" />
                    </div>

                    <div className="p-8 rounded-[32px] bg-blue-50 border border-blue-100 shadow-sm relative overflow-hidden group">
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Processing Time</p>
                        <p className="text-4xl font-black text-blue-600">0.07s</p>
                        <Clock className="absolute bottom-[-10%] right-[-10%] w-24 h-24 text-blue-100 opacity-50 group-hover:scale-125 transition-transform duration-700" />
                    </div>

                    <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200 shadow-sm relative overflow-hidden group">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Algorithm</p>
                        <p className="text-4xl font-black text-slate-700">LSA</p>
                        <Layers className="absolute bottom-[-10%] right-[-10%] w-24 h-24 text-slate-200 opacity-50 group-hover:scale-125 transition-transform duration-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}
