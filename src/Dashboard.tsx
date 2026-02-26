import { motion } from "motion/react";
import { 
  Search, 
  Bell, 
  ChevronDown,
  LayoutGrid,
  Image as ImageIcon,
  FileText,
  Video,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Home,
  Info,
  Zap,
  DollarSign,
  Package
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const [active, setActive] = useState("Dashboard");
  
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard" },
    { icon: ImageIcon, label: "Media Library" },
    { icon: FileText, label: "Content Generator" },
    { icon: ImageIcon, label: "Image Generator" },
    { icon: Video, label: "Video Generator" },
  ];

  const topNavItems = [
    { icon: Home, label: "Home" },
    { icon: Info, label: "About Us" },
    { icon: Zap, label: "Features" },
    { icon: DollarSign, label: "Pricing" },
    { icon: Package, label: "Product" },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
        <span className="text-xl font-bold text-brand-600">Cervantes AI</span>
      </div>

      {/* Top Navigation */}
      <div className="mb-6 pb-6 border-b border-slate-200">
        <div className="space-y-1">
          {topNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate?.(item.label.toLowerCase().replace(" ", "-"))}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-all text-sm"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              active === item.label
                ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="bg-linear-to-br from-brand-600 to-indigo-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-2">Try Content AI Pro now!</h3>
        <p className="text-sm text-white/80 mb-4">
          Enter in the creative world of content creation today and engage your audience!
        </p>
        <button className="w-full bg-white text-brand-600 font-bold py-2.5 rounded-xl hover:shadow-lg transition-all">
          Upgrade to Pro Today
        </button>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, isPositive }: any) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
    <div className="flex items-start justify-between mb-4">
      <span className="text-slate-500 text-sm font-medium">{title}</span>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        title.includes("Words") ? "bg-blue-50" : 
        title.includes("Keywords") ? "bg-amber-50" : "bg-purple-50"
      }`}>
        {title.includes("Words") ? (
          <FileText className="w-5 h-5 text-blue-600" />
        ) : title.includes("Keywords") ? (
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        ) : (
          <ImageIcon className="w-5 h-5 text-purple-600" />
        )}
      </div>
    </div>
    <div className="text-3xl font-bold mb-2">{value.toLocaleString()}</div>
    <div className={`flex items-center gap-1 text-sm font-medium ${
      isPositive ? "text-emerald-600" : "text-red-600"
    }`}>
      {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
      {change} Up from yesterday
    </div>
  </div>
);

const MediaLibraryPanel = () => {
  const images = [
    { id: 1, url: "https://picsum.photos/seed/1/400/400", title: "View of new york..." },
    { id: 2, url: "https://picsum.photos/seed/2/400/400", title: "View of universe par..." },
    { id: 3, url: "https://picsum.photos/seed/3/400/400", title: "Variousformation..." },
    { id: 4, url: "https://picsum.photos/seed/4/400/400", title: "Laptop and mobile ph..." },
    { id: 5, url: "https://picsum.photos/seed/5/400/400", title: "View of young model..." },
    { id: 6, url: "https://picsum.photos/seed/6/400/400", title: "Laptop on..." },
    { id: 7, url: "https://picsum.photos/seed/7/400/400", title: "Formal elegance..." },
    { id: 8, url: "https://picsum.photos/seed/8/400/400", title: "Professional certificate ph..." },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-brand-600" />
          </div>
          <h3 className="font-bold text-lg">Media Library</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
            General
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
            Pictures
          </button>
          <button className="px-4 py-2 text-sm font-medium text-brand-600 bg-brand-50 rounded-lg">
            Videos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 cursor-pointer">
            <img 
              src={img.url} 
              alt={img.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/60 to-transparent">
              <p className="text-white text-xs font-medium truncate">{img.title}</p>
            </div>
            <button className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Dashboard({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const chartData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 20000 },
    { month: "March", value: 5000 },
    { month: "April", value: 10000 },
    { month: "May", value: 0 },
    { month: "June", value: 18000 },
    { month: "July", value: 10000 },
    { month: "Aug", value: 8000 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar onNavigate={onNavigate} />
      
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <Bell className="w-6 h-6 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl">
              <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
              <span className="text-sm font-semibold text-brand-600">Credits - 914</span>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
              <span className="font-medium">Alfonso</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <StatCard title="Total Words" value={40689} change="8.5%" isPositive={true} />
                <StatCard title="Total Keywords" value={10293} change="1.3%" isPositive={true} />
                <StatCard title="Total Images" value={1745} change="4.3%" isPositive={false} />
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6">Content/Words Generated</h3>
                <div className="relative h-64">
                  <svg className="w-full h-full" viewBox="0 0 800 250">
                    {/* Grid lines */}
                    {[0, 5000, 10000, 15000, 20000].map((val, i) => (
                      <g key={val}>
                        <line
                          x1="50"
                          y1={200 - (val / maxValue) * 180}
                          x2="750"
                          y2={200 - (val / maxValue) * 180}
                          stroke="#f1f5f9"
                          strokeWidth="1"
                        />
                        <text
                          x="10"
                          y={205 - (val / maxValue) * 180}
                          fontSize="12"
                          fill="#94a3b8"
                        >
                          {val.toLocaleString()}
                        </text>
                      </g>
                    ))}

                    {/* Line chart */}
                    <polyline
                      points={chartData.map((d, i) => 
                        `${50 + (i * 100)},${200 - (d.value / maxValue) * 180}`
                      ).join(" ")}
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Points */}
                    {chartData.map((d, i) => (
                      <circle
                        key={i}
                        cx={50 + (i * 100)}
                        cy={200 - (d.value / maxValue) * 180}
                        r="5"
                        fill="white"
                        stroke="#6366f1"
                        strokeWidth="3"
                      />
                    ))}

                    {/* X-axis labels */}
                    {chartData.map((d, i) => (
                      <text
                        key={i}
                        x={50 + (i * 100)}
                        y="230"
                        fontSize="12"
                        fill="#94a3b8"
                        textAnchor="middle"
                      >
                        {d.month}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Recently Generated */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Recently Generated</h3>
                  <select className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-600/20">
                    <option>October</option>
                  </select>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Title</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Description</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Words</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="text-center py-16">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                            <FileText className="w-8 h-8 text-slate-300" />
                          </div>
                          <p className="text-slate-400 font-medium">No data</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Media Library */}
          <div className="col-span-1">
            <MediaLibraryPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
