import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from 'recharts';
import {
    Smile,
    Frown,
    Shuffle,
    TrendingUp,
    BarChart3
} from 'lucide-react';

const sentimentData = [
    { name: 'Positive', value: 45, color: '#10B981' },
    { name: 'Neutral', value: 30, color: '#6366F1' },
    { name: 'Negative', value: 25, color: '#F43F5E' },
];

const sentimentTrendData = [
    { name: 'Mon', positive: 10, neutral: 5, negative: 3 },
    { name: 'Tue', positive: 15, neutral: 8, negative: 5 },
    { name: 'Wed', positive: 12, neutral: 10, negative: 4 },
    { name: 'Thu', positive: 20, neutral: 12, negative: 8 },
    { name: 'Fri', positive: 25, neutral: 15, negative: 10 },
    { name: 'Sat', positive: 18, neutral: 10, negative: 6 },
    { name: 'Sun', positive: 22, neutral: 14, negative: 7 },
];

export default function AnalyticsReports({ setActiveTab }) {
    return (
        <div className="space-y-10 animate-fade-in max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-3">Sentiment Insights</h2>
                    <p className="text-gray-500 text-lg font-medium">Linguistic emotional distribution across processed intelligence.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <button
                        onClick={() => setActiveTab('upload')}
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                    >
                        <BarChart3 size={18} />
                        Upload Intelligence
                    </button>
                    <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                        <TrendingUp size={18} className="text-emerald-500" />
                        <span className="text-sm font-bold text-emerald-600">82% Positive Reach</span>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Sentiment Distribution Pie Chart */}
                <div className="bg-white p-8 rounded-[48px] border border-gray-100 shadow-sm space-y-8 flex flex-col items-center">
                    <div className="w-full">
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Distribution Overview</h3>
                        <p className="text-sm font-medium text-gray-500">Current sentiment volume breakdown</p>
                    </div>

                    <div className="h-[300px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={sentimentData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {sentimentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-4xl font-black text-gray-900 leading-none">100</span>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Total Reports</span>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-3 gap-4">
                        <SentimentStat label="Positive" color="#10B981" icon={<Smile size={14} />} value="45" />
                        <SentimentStat label="Neutral" color="#6366F1" icon={<Shuffle size={14} />} value="30" />
                        <SentimentStat label="Negative" color="#F43F5E" icon={<Frown size={14} />} value="25" />
                    </div>
                </div>

                {/* Sentiment Trend Line Chart */}
                <div className="bg-white p-8 rounded-[48px] border border-gray-100 shadow-sm space-y-8">
                    <div>
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Sentiment Trends</h3>
                        <p className="text-sm font-medium text-gray-500">Weekly emotional progression tracking</p>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={sentimentTrendData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }}
                                />
                                <Tooltip
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Line type="monotone" dataKey="positive" name="Positive" stroke="#10B981" strokeWidth={4} dot={{ r: 4, fill: '#10B981', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="neutral" name="Neutral" stroke="#6366F1" strokeWidth={4} dot={{ r: 4, fill: '#6366F1', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="negative" name="Negative" stroke="#F43F5E" strokeWidth={4} dot={{ r: 4, fill: '#F43F5E', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SentimentStat({ label, color, icon, value }) {
    return (
        <div className="text-center p-4 rounded-3xl bg-gray-50/50 border border-gray-100">
            <div style={{ color }} className="flex justify-center mb-2">{icon}</div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-lg font-black text-gray-900">{value}%</p>
        </div>
    );
}
