import { motion } from 'framer-motion';
import { FileText, Download, Trash2, ExternalLink, Search, Clock, FileType } from 'lucide-react';

const documents = [
    { id: 1, name: 'Delhi_AQI-en.txt', date: '2025-12-25', size: '1.2 MB', type: 'TXT' },
    { id: 2, name: 'Sports_news-gr.txt', date: '2025-12-24', size: '450 KB', type: 'TXT' },
    { id: 3, name: 'Market_Trends_Q4.pdf', date: '2025-12-22', size: '2.8 MB', type: 'PDF' },
    { id: 4, name: 'AI_Research_Paper.docx', date: '2025-12-20', size: '1.5 MB', type: 'DOCX' },
];

export default function DocumentList() {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">My Documents</h2>
                    <p className="text-gray-500">Manage and browse your uploaded news articles and reports.</p>
                </div>

                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search documents..."
                        className="pl-12 pr-6 py-3 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all w-full md:w-64 shadow-sm"
                    />
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-50 bg-gray-50/50">
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Name</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Upload Date</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Size</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Type</th>
                                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {documents.map((doc, i) => (
                                <motion.tr
                                    key={doc.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="hover:bg-gray-50/50 transition-colors group"
                                >
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                                <FileText size={20} />
                                            </div>
                                            <span className="font-bold text-gray-900">{doc.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                                            <Clock size={16} />
                                            {doc.date}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 font-semibold text-gray-500">{doc.size}</td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black rounded-lg uppercase tracking-widest border border-gray-200">
                                            {doc.type}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2.5 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all" title="Open Analysis">
                                                <ExternalLink size={18} />
                                            </button>
                                            <button className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all" title="Download">
                                                <Download size={18} />
                                            </button>
                                            <button className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Delete">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
