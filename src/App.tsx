import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Terminal,
  Database,
  BarChart,
  Bot,
  Code2,
  Calculator,
  Cpu,
  Globe,
  Youtube,
  Menu,
  X,
  Briefcase,
  Award,
  Trophy,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-slate-900">M</div>
              <span className="font-bold tracking-tight text-white">AKBAR AZIZI</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-2">
              Muhammad <br className="hidden sm:block" /> <span className="text-cyan-400">Akbar Azizi</span>
            </h1>
            <p className="mt-4 text-cyan-500/80 font-mono text-sm mb-6 uppercase tracking-wider">
              AI Developer | Accountant | Creator
            </p>
            <p className="max-w-2xl mx-auto text-sm text-slate-400 leading-relaxed mb-8">
              "Transforming Ideas into AI-Powered Solutions"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm"
              >
                Hire Me
              </button>
              <button 
                onClick={() => scrollTo('projects')}
                className="px-6 py-2.5 rounded-full border border-slate-700 text-white hover:border-slate-500 transition-all text-sm"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-slate-500">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-xl font-bold mb-8 text-white">
              <span className="text-cyan-400">01.</span> About Me
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-left space-y-6">
              <p className="text-sm text-slate-400 leading-relaxed">
                With over a decade of solid experience in accounting and finance, I've developed a sharp analytical mind and an eye for precision. Currently pursuing a Master's in Artificial Intelligence, I am transitioning from traditional finance to cutting-edge AI and automation.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                My deep expertise in ERP systems and Arabic accounting software perfectly complements my technical skills. As an AI Developer and Digital Creator, I leverage this unique dual-expertise to build sophisticated automation workflows, smart chatbots, and intelligent software solutions that understand complex business contexts and deliver immediate, measurable ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Achievements Section */}
      <section id="experience" className="py-24 relative border-t border-slate-800 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-white mb-4">
              <span className="text-cyan-400">02.</span> Experience & Achievements
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              A decade of driving financial precision, now scaled through AI and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-cyan-400" size={24} />
                <h3 className="text-lg font-bold text-white">Professional Journey</h3>
              </div>
              
              <div className="relative border-l border-slate-800 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500" />
                  <h4 className="text-base font-bold text-white">Senior Accountant & Financial Controller</h4>
                  <p className="text-xs font-mono text-cyan-400 mb-3">UAE & Saudi Arabia • 10+ Years</p>
                  <ul className="text-sm text-slate-400 space-y-2 list-none">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" /> Managed comprehensive multi-company financial and accounting systems.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" /> Spearheaded successful ERP system implementations to streamline corporate reporting.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" /> Directed online wholesale business operations encompassing sales and customer relations.</li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500" />
                  <h4 className="text-base font-bold text-white">AI Automation Specialist</h4>
                  <p className="text-xs font-mono text-cyan-400 mb-3">Current</p>
                  <ul className="text-sm text-slate-400 space-y-2 list-none">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" /> Developing intelligent business solutions using Python, Node.js, and LLMs.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" /> Architecting automated content pipelines and custom chatbot frameworks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-cyan-400" size={24} />
                <h3 className="text-lg font-bold text-white">Key Achievements</h3>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs shrink-0">60%</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Workload Reduction</h4>
                    <p className="text-xs text-slate-400 mt-1">Reduced manual data entry by up to 60% through custom AI-based automation workflows.</p>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800" />
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0">ERP</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">System Implementations</h4>
                    <p className="text-xs text-slate-400 mt-1">Successfully deployed robust ERP systems across organizations.</p>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800" />
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-xs shrink-0">ROI</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Digital Expansion</h4>
                    <p className="text-xs text-slate-400 mt-1">Scaled digital operations with marketing strategies across YouTube, Facebook, and TikTok.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-white">
              <span className="text-cyan-400">03.</span> Arsenal & Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Tools */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group relative overflow-hidden flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-cyan-400" />
                <h3 className="text-sm font-bold text-cyan-400">AI & Automation</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> ChatGPT Prompt Engineering</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Claude Integration</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> LLM Fine-Tuning workflows</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Workflow (Make/Zapier)</li>
              </ul>
            </motion.div>

            {/* Web Dev */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group relative overflow-hidden flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-white" />
                <h3 className="text-sm font-bold text-white">Web Development</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex justify-between items-center">
                  <span>React.js & Modern UI</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-full h-full bg-cyan-500 rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Tailwind CSS Styling</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-4/5 h-full bg-cyan-500 rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Modern JavaScript</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-full h-full bg-cyan-500 rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Python for Backend</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-4/5 h-full bg-cyan-500 rounded-full"></div></div>
                </li>
              </ul>
            </motion.div>

            {/* Accounting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group relative overflow-hidden flex flex-col gap-4"
            >
              <div className="flex items-center gap-2">
                <BarChart className="w-6 h-6 text-white" />
                <h3 className="text-sm font-bold text-white">Finance & Operations</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex justify-between items-center">
                  <span>10+ Years Accounting</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-full h-full bg-cyan-500 rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Financial Data Modeling</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-4/5 h-full bg-cyan-500 rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center">
                  <span>ERP Systems</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-3/5 h-full bg-cyan-500 rounded-full"></div></div>
                </li>
                <li className="flex justify-between items-center">
                  <span>Process Optimization</span>
                  <div className="w-24 h-1.5 bg-slate-800 rounded-full"><div className="w-full h-full bg-cyan-500 rounded-full"></div></div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              <span className="text-cyan-400">04.</span> Featured Works
            </h2>
            <span className="text-xs text-slate-500 px-2 py-1 border border-slate-800 rounded">Selected Works</span>
          </div>

          <div className="space-y-16">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1 space-y-6">
                <div className="bg-slate-900/80 border-l-4 border-cyan-500 p-6 rounded-r-xl group hover:bg-slate-800/80 transition-colors">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-lg">Intelligent AI Chatbot</h3>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-cyan-400">LIVE</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    A context-aware AI assistant utilizing OpenAI's API. It features multi-turn memory, tailored system prompts for specific business domains, and seamless frontend integration.
                  </p>
                  <div className="mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">Business Impact</span>
                    <span className="text-xs text-slate-300">Automates 24/7 customer inquiries, reducing response times and decreasing manual support workload by over 40%.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">React</span>
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">OpenAI API</span>
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">Tailwind</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors text-sm font-bold ml-2">
                  Live Demo <ExternalLink size={14} />
                </button>
              </div>
              <div className="order-1 lg:order-2 aspect-video rounded-2xl bg-gradient-to-tr from-cyan-900/40 to-blue-900/40 border border-slate-800 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MessageCircle className="w-24 h-24 text-cyan-500/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Mock UI Overlay */}
                <div className="absolute right-[-10%] bottom-[-10%] w-[80%] h-[80%] bg-slate-950 rounded-tl-xl border-t border-l border-slate-700 p-4 shadow-2xl transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
                  <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2 max-w-[80%] mb-2 animate-pulse h-8"></div>
                  <div className="bg-cyan-900/50 rounded-lg p-2 max-w-[80%] ml-auto mt-2 h-12"></div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-video rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calculator className="w-16 h-16 text-slate-700 group-hover:scale-110 group-hover:text-cyan-500/20 transition-all duration-500" />
                </div>
                {/* Mock UI Overlay */}
                <div className="absolute left-4 bottom-4 w-[90%] h-[70%] bg-slate-950 rounded-xl border border-slate-800 p-4 shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-6 w-1/3 bg-slate-800 rounded mb-4"></div>
                  <div className="flex gap-4 mb-4">
                    <div className="h-20 flex-1 bg-slate-800/50 rounded"></div>
                    <div className="h-20 flex-1 bg-slate-800/50 rounded"></div>
                  </div>
                  <div className="h-16 w-full bg-slate-800/50 rounded"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-900/80 border-l-4 border-slate-700 p-6 rounded-r-xl group hover:border-cyan-500 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-lg">Custom Accounting CLI</h3>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded">STABLE</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Leveraging a decade of accounting experience to build a specialized Python software suite. Automates ledger balancing, generates rapid financial statements, and performs anomaly detection.
                  </p>
                  <div className="mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">Business Impact</span>
                    <span className="text-xs text-slate-300">Transforms manual financial processes into rapid reporting tools, enhancing data accuracy and securing reliable cash flow modeling.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">Python</span>
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">Pandas</span>
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">CLI</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-white hover:text-white transition-colors text-sm font-bold ml-2">
                  View Source <Github size={14} />
                </button>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1 space-y-6">
                <div className="bg-slate-900/80 border-l-4 border-slate-700 hover:border-cyan-500 p-6 rounded-r-xl group transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-lg">YouTube Automator System</h3>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded">BETA</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    An end-to-end pipeline for digital creators. Scripts generate trendy video ideas, craft scripts via Claude, coordinate voice generation, and organize assets for rapid video editing.
                  </p>
                  <div className="mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">Business Impact</span>
                    <span className="text-xs text-slate-300">Eliminates major friction in content creation, allowing creators to seamlessly scale output and accelerate audience growth.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">Node.js</span>
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">Claude API</span>
                    <span className="text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 border border-slate-700">AWS</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors text-sm font-bold ml-2">
                  Watch Process <ExternalLink size={14} />
                </button>
              </div>
              <div className="order-1 lg:order-2 aspect-video rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center">
                  <Youtube className="w-16 h-16 text-slate-700 group-hover:scale-110 group-hover:text-cyan-500/20 transition-all duration-500" />
                </div>
                {/* Mock UI Overlay */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 flex gap-4 group-hover:gap-6 transition-all duration-500">
                    <div className="w-1/3 bg-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-700">
                      <Bot size={20} className="text-cyan-400" />
                      <div className="w-1/2 h-1.5 bg-slate-600 rounded"></div>
                    </div>
                    <div className="w-1/3 bg-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-700">
                      <Cpu size={20} className="text-slate-400" />
                      <div className="w-1/2 h-1.5 bg-slate-600 rounded"></div>
                    </div>
                    <div className="w-1/3 bg-slate-800 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-700">
                      <Youtube size={20} className="text-slate-400" />
                      <div className="w-1/2 h-1.5 bg-slate-600 rounded"></div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 border-t border-slate-800 relative bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              <span className="text-cyan-400">05.</span> Certifications & Credentials
            </h2>
            <Award className="text-slate-500" size={24} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "AI for Beginners",
              "Prompt Engineering for LLMs",
              "Data Science & Analytics",
              "SEO Certification",
              "Digital Marketing Certification",
              "Social Media Marketing",
              "Business Communication",
              "Inventory Management",
              "Agile Project Management",
              "Cybersecurity Awareness",
              "Financial Management & Cash Flow",
              "Leadership Certifications",
              "Sales & Marketing Certifications"
            ].map((cert, i) => (
              <div key={i} className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3 hover:border-cyan-500/30 transition-colors">
                <CheckCircle2 className="text-cyan-500 shrink-0" size={16} />
                <span className="text-sm text-slate-300 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-white mb-2">
              <span className="text-cyan-400">06.</span> Get In Touch
            </h2>
            <p className="text-slate-500 text-sm">
              Available for new projects & collaborations in AI or web automation.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase text-slate-500 block mb-1">Email</label>
                  <div className="text-sm font-mono bg-slate-950 p-3 border border-slate-800 rounded">infolmakbar@gmail.com</div>
                </div>
                <button 
                  onClick={() => window.open('https://wa.me/yourwhatsappnumber', '_blank')}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> WhatsApp Message
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800 p-4 rounded-xl text-center flex flex-col items-center gap-2">
                    <span className="text-[10px] text-slate-500 block">GITHUB</span>
                    <Github size={20} className="text-slate-300" />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl text-center flex flex-col items-center gap-2">
                    <span className="text-[10px] text-slate-500 block">LINKEDIN</span>
                    <Linkedin size={20} className="text-slate-300" />
                  </div>
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest! In a real app, this would send an email."); }}>
                <h3 className="text-sm font-bold text-white mb-2">Send a Message</h3>
                <div>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <textarea 
                    id="message" 
                    rows={3}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Project details..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Mail size={16} /> Send Email
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-16 bg-slate-950 border-t border-slate-900 px-4 sm:px-8 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest mt-0">
        <div>&copy; {new Date().getFullYear()} Muhammad Akbar Azizi</div>
        <div className="flex gap-4">
          <span className="hidden sm:inline">Indonesia based</span>
          <span className="text-cyan-500">UTC+7</span>
        </div>
      </footer>
    </div>
  );
}
