import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    ArrowRight,
    Languages,
    CheckCircle2,
    ArrowLeftRight,
    Copy,
    Check,
    RotateCcw,
    Zap
} from 'lucide-react';

export default function Translation() {
    const [sourceLang, setSourceLang] = useState('German');
    const [targetLang, setTargetLang] = useState('English');
    const [sourceText, setSourceText] = useState('Deutschland hat erstmals seit 2011 einen verurteilten Straftäter nach Syrien abgeschoben.');
    const [isCopied, setIsCopied] = useState(false);
    const [isTranslating, setIsTranslating] = useState(false);

    const handleSwap = () => {
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('Germany has deported a convicted criminal to Syria for the first time since 2011.');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleTranslate = () => {
        setIsTranslating(true);
        setTimeout(() => setIsTranslating(false), 800);
    };

    return (
        <div className="space-y-10 animate-fade-in max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-3">Multi-Language Bridge</h2>
                    <p className="text-gray-500 text-lg font-medium">Neural machine translation with enterprise-grade linguistic precision.</p>
                </div>
                {/* <div className="flex items-center gap-3 bg-indigo-50/50 px-5 py-3 rounded-2xl border border-indigo-100 shadow-sm">
                    <Zap size={18} className="text-primary" />
                    <span className="text-sm font-bold text-indigo-600">Llama-3 Neural Core</span>
                </div> */}
            </div>

            <div className="bg-white p-2 rounded-[48px] border border-gray-100 shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
                {/* Header Controls */}
                <div className="p-8 border-b border-gray-50 bg-gray-50/30 rounded-t-[46px]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="w-full md:w-auto flex items-center gap-4">
                            <div className="flex-1 md:w-64">
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Source Language</label>
                                <select
                                    value={sourceLang}
                                    onChange={(e) => setSourceLang(e.target.value)}
                                    className="w-full p-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-gray-700 shadow-sm transition-all appearance-none cursor-pointer"
                                >
                                    <option>German</option>
                                    <option>French</option>
                                    <option>Spanish</option>
                                    <option>Italian</option>
                                </select>
                            </div>

                            <button
                                onClick={handleSwap}
                                className="mt-6 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                                title="Swap Languages"
                            >
                                <ArrowLeftRight size={20} />
                            </button>

                            <div className="flex-1 md:w-64">
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Target Language</label>
                                <select
                                    value={targetLang}
                                    onChange={(e) => setTargetLang(e.target.value)}
                                    className="w-full p-4 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-gray-700 shadow-sm transition-all appearance-none cursor-pointer"
                                >
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Japanese</option>
                                    <option>Mandarin</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button
                                onClick={handleTranslate}
                                disabled={isTranslating}
                                className="flex-1 md:flex-none bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {isTranslating ? (
                                    <RotateCcw className="animate-spin" size={20} />
                                ) : (
                                    <Languages size={22} />
                                )}
                                Translate
                            </button>
                        </div>
                    </div>
                </div>

                {/* Text Areas */}
                <div className="grid lg:grid-cols-2">
                    {/* Source Text Area */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-50 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <span className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                <Globe size={14} className="text-primary" />
                                Input Detection: {sourceLang}
                            </span>
                            <span className="text-[10px] font-bold text-gray-300">
                                {sourceText.length} characters
                            </span>
                        </div>
                        <textarea
                            value={sourceText}
                            onChange={(e) => setSourceText(e.target.value)}
                            placeholder="Type something to translate..."
                            className="w-full flex-grow min-h-[300px] p-0 bg-transparent outline-none text-xl font-semibold text-gray-800 leading-relaxed resize-none placeholder:text-gray-200"
                        />
                    </div>

                    {/* Target Text Area */}
                    <div className="p-8 bg-slate-50/30 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                            <span className="flex items-center gap-2 text-xs font-black text-indigo-400 uppercase tracking-widest bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
                                <CheckCircle2 size={14} className="text-indigo-500" />
                                Output Result: {targetLang}
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleCopy}
                                    className={`p-2 rounded-xl border transition-all flex items-center gap-2 font-bold text-xs ${isCopied ? 'bg-success text-white border-success' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'}`}
                                >
                                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                                    {isCopied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                        <div className={`w-full flex-grow min-h-[300px] text-xl font-semibold leading-relaxed transition-all duration-500 ${isTranslating ? 'text-gray-300 blur-sm' : 'text-slate-700'}`}>
                            {sourceText === 'Deutschland hat erstmals seit 2011 einen verurteilten Straftäter nach Syrien abgeschoben.'
                                ? 'Germany has deported a convicted criminal to Syria for the first time since 2011.'
                                : 'Select and translate to see the magic happen across linguistic boundaries with our advanced neural engines.'}
                        </div>

                        {/* Accuracy Footer */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-primary shadow-inner">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Confidence Score</p>
                                    <p className="text-lg font-black text-indigo-600 leading-none">98.4%</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Latency</p>
                                <p className="text-lg font-black text-slate-700 leading-none">142ms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
