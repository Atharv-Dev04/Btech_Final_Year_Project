import { motion } from 'framer-motion';
import {
    FileText,
    Languages,
    Target,
    Zap,
    Activity,
    Clock,
    CheckCircle2,
    BarChart3
} from 'lucide-react';

const detailedUsage = [
    { id: 'summary', label: 'Summarization', icon: <FileText size={20} />, count: 143, progress: 85, color: '#6366F1' },
    { id: 'translate', label: 'Translation', icon: <Languages size={20} />, count: 89, progress: 65, color: '#818CF8' },
    { id: 'keywords', label: 'Keyword Extraction', icon: <Target size={20} />, count: 1204, progress: 95, color: '#10B981' },
    { id: 'sentiment', label: 'Sentiment Analysis', icon: <Activity size={20} />, count: 52, progress: 45, color: '#F43F5E' },
];

export default function DetailedStats() {
    return (
        <div className="space-y-10 animate-fade-in max-w-6xl mx-auto">
            <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-3">Feature Engagement</h2>
                <p className="text-gray-500 text-lg font-medium">Detailed audit of AI function utilization and system throughput.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    {detailedUsage.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div style={{ backgroundColor: `${item.color}15`, color: item.color }} className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900 leading-none mb-1">{item.label}</h4>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active AI Module</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black text-gray-900 leading-none mb-1">{item.count.toLocaleString()}</p>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Total Invocations</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                    <span>Throughput Efficiency</span>
                                    <span style={{ color: item.color }}>{item.progress}%</span>
                                </div>
                                <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.progress}%` }}
                                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.5 }}
                                        style={{ backgroundColor: item.color }}
                                        className="h-full rounded-full shadow-lg"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-8">
                    <div className="bg-indigo-900 p-10 rounded-[48px] text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                        <Zap className="text-indigo-300 mb-6" size={40} />
                        <h3 className="text-3xl font-black tracking-tight mb-4">Zero-Shot Classifier <br />& BERT Neural Core</h3>
                        <p className="text-indigo-100/70 font-medium text-lg leading-relaxed mb-8">
                            Our specialized classification and representation models are currently processing at 99.8% uptime with an average latency of 142ms per request.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                                <Clock size={20} className="text-indigo-200 mb-2" />
                                <p className="text-xs font-bold text-indigo-200/60 uppercase tracking-widest mb-1">Avg Latency</p>
                                <p className="text-xl font-black">142ms</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                                <CheckCircle2 size={20} className="text-emerald-300 mb-2" />
                                <p className="text-xs font-bold text-indigo-200/60 uppercase tracking-widest mb-1">Uptime SLA</p>
                                <p className="text-xl font-black text-emerald-300">99.9%</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm flex items-center gap-6">
                        <div className="w-16 h-16 rounded-3xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary shadow-inner shrink-0 text-2xl font-black">
                            <BarChart3 size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black text-gray-900 mb-1 tracking-tight">Real-time Analytics</h4>
                            <p className="text-gray-500 font-medium">Usage statistics are updated every 60 seconds with live system sync.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
