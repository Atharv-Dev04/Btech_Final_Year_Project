import { motion } from 'framer-motion';
import { BarChart3, CloudUpload, FileText, Sparkles, ChevronDown } from 'lucide-react';

export default function SentimentAnalysis() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sentiment Analysis</h2>
                <p className="text-gray-500">Pass an uploaded document (or pasted text) to compute overall verdict, polarity score, and confidence for accuracy.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Select Document */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Select Document</h3>
                            <p className="text-xs text-gray-400">Choose a document to run sentiment analysis</p>
                        </div>
                    </div>

                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Document</label>
                    <div className="relative">
                        <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700">
                            <option>Delhi_AQI-en.txt</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                </div>

                {/* Or Paste Text */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Or paste text</h3>
                            <p className="text-xs text-gray-400">Analyze inline text content</p>
                        </div>
                    </div>

                    <div className="relative mb-6">
                        <textarea
                            placeholder="Paste or type text here..."
                            className="w-full h-32 p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-gray-700"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20">
                            Run Analysis
                        </button>
                    </div>
                </div>
            </div>

            {/* Analysis Result */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                            <BarChart3 size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Analysis Result</h3>
                            <p className="text-xs text-gray-400">Overall verdict, polarity score, and confidence (accuracy).</p>
                        </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-red-50 text-red-500 text-sm font-bold flex items-center gap-2 border border-red-100">
                        <div className="w-2 h-2 rounded-full bg-red-500" /> Negative
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Verdict</p>
                        <p className="text-2xl font-black text-gray-900">Negative</p>
                    </div>

                    <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Polarity</p>
                        <p className="text-2xl font-black text-gray-900 mb-2">0.00</p>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-[10%] h-full bg-red-500 rounded-full" />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2">0 (negative) → 1 (positive)</p>
                    </div>

                    <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Confidence</p>
                        <p className="text-2xl font-black text-gray-900">99.1%</p>
                        <p className="text-[10px] text-gray-400 mt-2">Use as accuracy estimate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
