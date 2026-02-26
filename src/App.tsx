import { motion, AnimatePresence } from "motion/react";
import { 
  Layout, 
  LayoutGrid,
  FileText, 
  Image as ImageIcon, 
  Video, 
  Share2, 
  RefreshCw, 
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  ChevronDown,
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Send,
  Search,
  TrendingUp
} from "lucide-react";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/image 1.png" alt="Cervantes AI" className="h-8" />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">Home</a>
          <a href="#" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">About Us</a>
          <a href="#" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Features</a>
          <a href="#" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Product</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all flex items-center gap-2">
            Log In <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all flex items-center gap-2">
            Start Free <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroMockup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const fullPrompt = "A modern cityscape at sunset with vibrant colors...";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 3;
        setShowPrompt(false);
        setPromptText("");
        setShowLoading(false);
        setShowResult(false);
        return next;
      });
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeStep >= 0) {
      const showPromptTimer = setTimeout(() => setShowPrompt(true), 1000);
      const startTyping = setTimeout(() => {
        let charIndex = 0;
        const typing = setInterval(() => {
          setPromptText(fullPrompt.slice(0, charIndex));
          charIndex++;
          if (charIndex > fullPrompt.length) {
            clearInterval(typing);
            setTimeout(() => {
              setShowPrompt(false);
              setShowLoading(true);
              setTimeout(() => {
                setShowLoading(false);
                setShowResult(true);
              }, 1500);
            }, 500);
          }
        }, 50);
      }, 1500);
      return () => {
        clearTimeout(showPromptTimer);
        clearTimeout(startTyping);
      };
    }
  }, [activeStep]);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden relative"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-purple-50/30 to-indigo-50/50 animate-gradient"></div>
        
        {/* Browser Header */}
        <div className="relative bg-slate-50/80 backdrop-blur-sm border-b border-slate-200 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/30 border border-red-400/40" />
            <div className="w-3 h-3 rounded-full bg-amber-400/30 border border-amber-400/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/30 border border-emerald-400/40" />
          </div>
          <div className="mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg px-4 py-1.5 text-xs text-slate-500 w-1/2 text-center">
            app.cervantesai.com/dashboard
          </div>
        </div>

        <div className="relative flex h-[450px] md:h-[550px]">
          {/* Sidebar */}
          <div className="w-20 md:w-64 border-r border-slate-200/80 bg-white/60 backdrop-blur-sm p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <span className="hidden md:block text-sm font-bold text-brand-600">Cervantes AI</span>
            </div>
            <div className="space-y-1.5">
              {[
                  { icon: LayoutGrid, label: "Dashboard" },
                  { icon: ImageIcon, label: "AI Image" },
                  { icon: Video, label: "AI Video" },
                  { icon: FileText, label: "AI Post" },
                  { icon: Share2, label: "Automation" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  animate={{
                    backgroundColor: activeStep === i - 1 ? "rgb(124 58 237)" : "transparent",
                    color: activeStep === i - 1 ? "rgb(255 255 255)" : "rgb(100 116 139)",
                    boxShadow: activeStep === i - 1 ? "0 0 0 2px rgba(124, 58, 237, 0.2)" : "none",
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden md:block text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-slate-50/50 backdrop-blur-sm p-6 overflow-hidden relative">
            {/* Prompt Overlay */}
            <AnimatePresence>
              {showPrompt && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex items-center justify-center p-8"
                >
                  <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
                      <div className="text-sm text-slate-500 mb-2">What would you like to create?</div>
                      <div className="text-lg font-medium text-slate-900">
                        {promptText}
                        <span className="inline-block w-0.5 h-5 bg-brand-600 ml-1 animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {showLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
                    <p className="text-brand-600 font-semibold">Creating your content...</p>
                  </div>
                </motion.div>
              )}

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex items-center justify-center p-8"
                >
                  <div className="relative">
                    <img 
                      src={`https://picsum.photos/seed/${activeStep}/600/600`}
                      alt="Generated"
                      className="w-64 h-64 rounded-2xl shadow-2xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    >
                      ✓ Content ready
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dashboard Content */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="h-5 w-32 bg-slate-200/60 rounded animate-pulse" />
                  <div className="h-3 w-48 bg-slate-100/60 rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-slate-200/60 rounded-full" />
                  <div className="h-8 w-24 bg-brand-100/60 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <motion.div 
                    key={num}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200/80 shadow-sm"
                  >
                    <div className="h-2 w-12 bg-slate-100 rounded mb-3" />
                    <div className="h-6 w-20 bg-slate-200 rounded mb-2" />
                    <div className="h-1.5 w-full bg-emerald-100 rounded" />
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-sm p-6">
                <div className="h-4 w-40 bg-slate-200 rounded mb-6" />
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <motion.div
                      key={num}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square bg-slate-100 rounded-lg overflow-hidden"
                    >
                      <img 
                        src={`https://picsum.photos/seed/media${num}/400/400`}
                        alt="Media"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Status Cards */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 hidden lg:block z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="text-emerald-600 w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">Scheduled</div>
            <div className="text-sm font-semibold text-slate-900">Automated</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 hidden lg:block z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
            <Clock className="text-brand-600 w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">Ready</div>
            <div className="text-sm font-semibold text-slate-900">To Publish</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const LiveDemo = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  
  const tabs = [
    { icon: LayoutGrid, label: "Dashboard" },
    { icon: FileText, label: "Templates" },
    { icon: Share2, label: "All Channels" },
    { icon: ImageIcon, label: "Media Library" },
    { icon: FileText, label: "Content Generator" },
    { icon: ImageIcon, label: "Image Generator" },
    { icon: Video, label: "AI Video Generation" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See How It Works In <span className="text-brand-600">Real Time</span>
          </h2>
          <p className="text-slate-600 text-lg">Type an idea. Watch it turn into content.</p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl transition-all text-left ${
                  activeTab === tab.label
                    ? "bg-brand-50 text-brand-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-slate-600 mb-8 leading-relaxed">
                Your intelligent content dashboard brings everything together in one streamlined workspace. Create, manage, and automate text, images, and videos without switching between tools.
              </p>

              {/* Dashboard Preview */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative flex-1 max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span className="font-semibold text-brand-600">Credits - 50.00</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                      <span>Nisha Shakeel</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6">Dashboard</h3>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Total Words", value: "0", icon: FileText, color: "blue" },
                    { label: "Total Credits Used", value: "0.00", icon: FileText, color: "amber" },
                    { label: "Total Images", value: "0", icon: ImageIcon, color: "emerald" },
                    { label: "Total Videos", value: "0", icon: Video, color: "orange" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-200">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-slate-500">{stat.label}</span>
                        <div className={`w-8 h-8 rounded-lg bg-${stat.color}-50 flex items-center justify-center`}>
                          <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="flex items-center gap-1 text-xs text-emerald-600">
                        <TrendingUp className="w-3 h-3" />
                        <span>0% Up from yesterday</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h4 className="font-semibold mb-4">Content/Words Generated</h4>
                  <div className="relative h-48">
                    <svg className="w-full h-full" viewBox="0 0 800 200">
                      <line x1="50" y1="180" x2="750" y2="180" stroke="#e2e8f0" strokeWidth="1" />
                      {[0, 0.2, 0.4, 0.6, 0.8, 1].map((val, i) => (
                        <g key={i}>
                          <line x1="50" y1={180 - val * 160} x2="750" y2={180 - val * 160} stroke="#f1f5f9" strokeWidth="1" />
                          <text x="20" y={185 - val * 160} fontSize="10" fill="#94a3b8">{val}</text>
                        </g>
                      ))}
                      {["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"].map((month, i) => (
                        <text key={i} x={50 + i * 60} y="195" fontSize="10" fill="#94a3b8" textAnchor="middle">{month}</text>
                      ))}
                      <polyline
                        points="50,180 110,180 170,180 230,180 290,180 350,180 410,180 470,100 530,180 590,180 650,180 710,180"
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="2"
                      />
                      <circle cx="470" cy="100" r="4" fill="#7c3aed" />
                    </svg>
                    <div className="absolute top-8 right-8 bg-white rounded-xl shadow-lg border border-slate-200 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-brand-600 rounded-lg"></div>
                      </div>
                      <div className="text-sm text-slate-600 mb-1">Month: Aug</div>
                      <div className="text-sm text-slate-600">Content: 0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    if (page === "home") {
      setCurrentPage("home");
    } else {
      setCurrentPage("home");
    }
  };

  if (currentPage === "dashboard") {
    return <Dashboard onNavigate={handleNavigation} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-6 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold mb-8"
            >
              Multi-Model AI Platform: Create. Automate. Scale.
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              The AI Platform<br />That Turns Ideas Into Content at Scale
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg mb-10 max-w-3xl mx-auto"
            >
              Generate text, images, and videos in seconds. Turn one idea into content for every platform — powered by advanced AI models and built-in automation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-brand-600/30 transition-all flex items-center gap-2">
                Start Free <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500">Get 50 free credits • No credit card required</p>
            </motion.div>
          </div>

          <HeroMockup />
        </div>
      </section>

      {/* Features Grid */}
      {/* <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you can create with <span className="text-brand-600">Cervantes AI</span></h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From a simple prompt to a complete content workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: () => (
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 4c11.1 0 20 8.9 20 20s-8.9 20-20 20-20-8.9-20-20 8.9-20 20-20z" fill="#7c3aed"/>
                    <circle cx="32" cy="24" r="3" fill="#7c3aed"/>
                    <circle cx="24" cy="32" r="3" fill="#7c3aed"/>
                    <circle cx="40" cy="32" r="3" fill="#7c3aed"/>
                    <circle cx="28" cy="40" r="3" fill="#7c3aed"/>
                    <circle cx="36" cy="40" r="3" fill="#7c3aed"/>
                    <path d="M32 20l-4 8h8l-4-8zM20 28l-4 8h8l-4-8zM36 28l-4 8h8l-4-8zM24 36l-4 8h8l-4-8zM32 36l-4 8h8l-4-8z" fill="#7c3aed" opacity="0.3"/>
                  </svg>
                ),
                title: "AI Content Generator", 
                desc: "Create blog posts, captions, scripts, emails, and product descriptions in seconds." 
              },
              { 
                icon: () => (
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <rect x="12" y="16" width="40" height="32" rx="4" stroke="#7c3aed" strokeWidth="3" fill="none"/>
                    <circle cx="32" cy="28" r="6" fill="#7c3aed"/>
                    <path d="M12 38l10-8 8 6 12-10 10 8v8a4 4 0 01-4 4H16a4 4 0 01-4-4v-4z" fill="#7c3aed" opacity="0.6"/>
                  </svg>
                ),
                title: "AI Image Generator", 
                desc: "Transform prompts into high-quality visuals for social media, ads, and branding." 
              },
              { 
                icon: () => (
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <rect x="12" y="12" width="40" height="40" rx="4" fill="#7c3aed" opacity="0.2"/>
                    <rect x="16" y="16" width="32" height="32" rx="2" stroke="#7c3aed" strokeWidth="3" fill="none"/>
                    <polygon points="28,24 28,40 38,32" fill="#7c3aed"/>
                    <rect x="20" y="20" width="4" height="4" fill="#7c3aed"/>
                    <rect x="40" y="20" width="4" height="4" fill="#7c3aed"/>
                    <rect x="20" y="40" width="4" height="4" fill="#7c3aed"/>
                    <rect x="40" y="40" width="4" height="4" fill="#7c3aed"/>
                  </svg>
                ),
                title: "AI Video Generator", 
                desc: "Generate engaging short-form videos and marketing content instantly." 
              },
              { 
                icon: () => (
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <rect x="16" y="12" width="24" height="32" rx="3" fill="#7c3aed" opacity="0.3"/>
                    <circle cx="28" cy="20" r="4" fill="#7c3aed"/>
                    <circle cx="20" cy="32" r="4" fill="#7c3aed"/>
                    <circle cx="36" cy="32" r="4" fill="#7c3aed"/>
                    <path d="M28 24l-8 8m8-8l8 8m-8 8l-8 8m8-8l8 8" stroke="#7c3aed" strokeWidth="2" opacity="0.5"/>
                    <rect x="44" y="28" width="8" height="8" rx="1" fill="#7c3aed"/>
                  </svg>
                ),
                title: "Social Media Automation", 
                desc: "Schedule, organize, and distribute content across platforms effortlessly." 
              },
              { 
                icon: () => (
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <rect x="12" y="16" width="20" height="28" rx="2" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
                    <path d="M16 20h12M16 24h12M16 28h8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 24l8 8-8 8" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="32" y="16" width="20" height="28" rx="2" stroke="#7c3aed" strokeWidth="2.5" fill="#7c3aed" opacity="0.2"/>
                    <path d="M36 28l6-6 6 6m-6 8l-6-6 6-6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Content Repurposing", 
                desc: "Turn one piece of content into multiple formats — automatically." 
              },
              { 
                icon: () => (
                  <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="20" r="4" fill="#7c3aed"/>
                    <circle cx="20" cy="32" r="4" fill="#7c3aed"/>
                    <circle cx="44" cy="32" r="4" fill="#7c3aed"/>
                    <circle cx="32" cy="44" r="4" fill="#7c3aed"/>
                    <path d="M32 24v16M24 28l16 8M40 28l-16 8" stroke="#7c3aed" strokeWidth="2.5"/>
                    <circle cx="32" cy="32" r="6" fill="#7c3aed" opacity="0.3"/>
                  </svg>
                ),
                title: "Multi-Model AI Access", 
                desc: "Choose the model that fits your workflow inside one unified dashboard." 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-100 transition-all group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-brand-50 transition-colors">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      {/* <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Creators Choose <span className="text-brand-600">Cervantes AI</span></h2>
            <p className="text-slate-600 text-lg">Built with creators in mind. Designed for real results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Secure & Private by Design", desc: "Your content stays protected. Create with confidence using secure workflows." },
              { icon: Zap, title: "Fast, Reliable AI", desc: "Generate content instantly with high-performance AI that keeps up with your ideas." },
              { icon: Layers, title: "All-in-One Solution", desc: "From ideation to publishing everything in one place. No switching tools. No wasted time." },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How it Works */}
      {/* <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 rounded-full bg-brand-600 text-white text-sm font-bold mb-8">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Create content in 3 simple steps</h2>
            <p className="text-slate-600 text-lg">From a simple prompt to a complete content workflow.</p>
          </div>

          <div className="relative">
            <div className="absolute top-16 left-0 w-full h-0.5 bg-slate-300 hidden md:block" style={{ top: '80px' }}>
              <div className="absolute inset-0 border-t-2 border-dashed border-slate-300"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                { step: "01", title: "Start with an idea", desc: "Describe your goal, topic, or campaign in a simple prompt." },
                { step: "02", title: "Choose what to create", desc: "Select text, images, videos, or social content all in one place." },
                { step: "03", title: "Generate & scale", desc: "Instantly produce, refine, and publish across multiple platforms." },
              ].map((item, i) => (
                <div key={i} className="text-center space-y-6 relative z-10">
                  <div className="w-32 h-32 bg-brand-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto shadow-xl shadow-brand-600/30">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* <LiveDemo /> */}

      {/* Footer */}
      {/* <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight">Cervantes AI</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Create smarter content with Cervantes AI — generate, automate, and scale everything from one powerful AI workspace.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 bg-slate-50 rounded-full border border-slate-100" />)}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Menu</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-brand-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-brand-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">System Status</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-600" />
                  </div>
                  +1 (800) 123-4567
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-brand-600" />
                  </div>
                  support@cervantesai.com
                </li>
                <li className="text-xs leading-relaxed opacity-60">
                  Remote-first company, serving creators worldwide.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <p>© 2026 Cervantes AI. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
