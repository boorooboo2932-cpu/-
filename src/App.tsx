/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Layout, 
  ShoppingBag, 
  Factory, 
  Mail, 
  Phone, 
  MessageSquare, 
  Award, 
  TrendingUp, 
  Camera,
  Layers,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Plus,
  Trash2,
  Edit2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { INITIAL_PORTFOLIO, EXPERIENCES, SKILLS, AWARDS, PortfolioItem } from './data';

// --- Types for Content Editing ---
interface SiteContent {
  heroTitle: string;
  heroSub: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  contactEmail: string;
  contactPhone: string;
  contactKakao: string;
  aboutSubtitle: string;
  skillTitle: string;
  portfolioTitle: string;
  experienceTitle: string;
  awardsTitle: string;
  link1Title: string;
  link1Url: string;
  link2Title: string;
  link2Url: string;
  link3Title: string;
  link3Url: string;
  link4Title: string;
  link4Url: string;
}

const DEFAULT_CONTENT: SiteContent = {
  heroTitle: "Design that sells.",
  heroSub: "디자인은 결과로 증명합니다. 브랜딩부터 상세페이지, 광고까지 13년 실무 경험으로 매출을 만드는 디자인을 합니다.",
  aboutTitle: "결과를 만드는 디자인",
  aboutText1: "단순한 디자인이 아닌, \"비즈니스 결과를 만드는 디자인\"을 해왔습니다.",
  aboutText2: "제품을 직접 만들고 판매하며, 고객이 반응하는 디자인을 이해했고 기업에서는 브랜드, 패키지, 광고까지 전체 흐름을 설계했습니다.",
  contactEmail: "boorooboo2932@gmail.com",
  contactPhone: "010-5797-4428",
  contactKakao: "Hi-ssuny",
  aboutSubtitle: "About HONG HEE SUN",
  skillTitle: "결과 중심 스킬",
  portfolioTitle: "Selected Works",
  experienceTitle: "Experience",
  awardsTitle: "Awards & Honors",
  link1Title: "(주)하이비코리아 - 유아용품",
  link1Url: "https://brand.naver.com/hibee",
  link2Title: "(주)테라솔루션-2차전지",
  link2Url: "https://tera-solution.co.kr",
  link3Title: "펀아트-명화/액자쇼핑몰",
  link3Url: "http://www.funart.co.kr",
  link4Title: "하하팩토리-실사출력",
  link4Url: "https://www.hahafactory.co.kr/",
};

// --- Components ---

const Navbar = ({ onAdminClick }: { onAdminClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skill' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <span className="text-zinc-950 text-xl font-black">H</span>
          </div>
          <span>HONG HEE SUN</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-brand transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onAdminClick}
            className="p-2 text-zinc-500 hover:text-brand transition-colors"
            title="Admin Login"
          >
            <Lock size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-brand"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsMenuOpen(false); onAdminClick(); }}
                className="flex items-center gap-2 text-zinc-400 hover:text-brand"
              >
                <Lock size={18} /> Admin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title }: { subtitle: string, title: string }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-brand font-mono text-sm tracking-widest uppercase mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-display font-bold tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

const AdminModal = ({ isOpen, onClose, onLogin }: { isOpen: boolean, onClose: () => void, onLogin: (pass: string) => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2932') {
      onLogin(password);
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/90 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-zinc-900 border border-white/10 p-8 rounded-2xl w-full max-w-md relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
          <X size={20} />
        </button>
        <h3 className="text-2xl font-display font-bold mb-6">Admin Access</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-zinc-800 border ${error ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-brand transition-colors`}
              placeholder="Enter password"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-2">Incorrect password. Please try again.</p>}
          </div>
          <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-zinc-950 font-bold py-3 rounded-lg transition-colors">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isContentEditOpen, setIsContentEditOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'전체' | '웹디자인' | '인쇄·패키지 디자인' | 'vmd·dp'>('전체');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    try {
      const savedPortfolio = localStorage.getItem('portfolio_data');
      if (savedPortfolio) {
        const parsed = JSON.parse(savedPortfolio);
        // Data migration: ensure all projects have an images array
        const migrated = parsed.map((p: any) => ({
          ...p,
          images: p.images || [p.image]
        }));
        setPortfolio(migrated);
      } else {
        setPortfolio(INITIAL_PORTFOLIO);
      }

      const savedContent = localStorage.getItem('site_content');
      if (savedContent) {
        const parsed = JSON.parse(savedContent);
        setContent({ ...DEFAULT_CONTENT, ...parsed });
      }
    } catch (e) {
      console.error('Failed to load data from localStorage:', e);
      setPortfolio(INITIAL_PORTFOLIO);
      setContent(DEFAULT_CONTENT);
    }
  }, []);

  const savePortfolio = (newData: PortfolioItem[]) => {
    try {
      setPortfolio(newData);
      localStorage.setItem('portfolio_data', JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save portfolio:', e);
      if (e instanceof Error && e.name === 'QuotaExceededError') {
        alert('저장 공간이 부족합니다. 이미지 용량을 줄이거나 일부 항목을 삭제해주세요.');
      }
    }
  };

  const saveContent = (newContent: SiteContent) => {
    try {
      setContent(newContent);
      localStorage.setItem('site_content', JSON.stringify(newContent));
    } catch (e) {
      console.error('Failed to save content:', e);
    }
  };

  const filteredPortfolio = activeCategory === '전체' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  const categories = ['전체', '웹디자인', '인쇄·패키지 디자인', 'vmd·dp'];

  // Admin Actions
  const [editingProject, setEditingProject] = useState<PortfolioItem | null>(null);

  const addProject = () => {
    const newProject: PortfolioItem = {
      id: Date.now().toString(),
      category: '웹디자인',
      title: '',
      description: '',
      image: '',
      images: [],
      tags: [],
      link: ''
    };
    setEditingProject(newProject);
  };

  const deleteProject = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      savePortfolio(portfolio.filter(p => p.id !== id));
    }
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    
    // Filter out empty strings from images array
    const cleanedProject = {
      ...editingProject,
      images: editingProject.images?.filter(img => img && img.trim() !== '') || []
    };
    
    const exists = portfolio.find(p => p.id === cleanedProject.id);
    if (exists) {
      savePortfolio(portfolio.map(p => p.id === cleanedProject.id ? cleanedProject : p));
    } else {
      savePortfolio([...portfolio, cleanedProject]);
    }
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden notranslate">
      <Navbar onAdminClick={() => setIsAdminModalOpen(true)} />
      
      {/* Admin Project Form Modal */}
      <AnimatePresence>
        {editingProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-zinc-950/95 backdrop-blur-md overflow-y-auto p-6"
          >
            <div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 rounded-[2rem] p-8 relative">
              <button onClick={() => setEditingProject(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-8">{portfolio.find(p => p.id === editingProject.id) ? 'Edit Project' : 'Add New Project'}</h3>
              
              <form onSubmit={handleSaveProject} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Title</label>
                    <input 
                      type="text" 
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Category</label>
                    <select 
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({...editingProject, category: e.target.value as any})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    >
                      <option value="웹디자인">웹디자인</option>
                      <option value="인쇄·패키지 디자인">인쇄·패키지 디자인</option>
                      <option value="vmd·dp">vmd·dp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Website Link (Optional)</label>
                  <div className="flex gap-2">
                    <div className="bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 flex items-center text-zinc-500">
                      <ExternalLink size={18} />
                    </div>
                    <input 
                      type="text" 
                      value={editingProject.link || ''}
                      onChange={(e) => setEditingProject({...editingProject, link: e.target.value})}
                      className="flex-1 bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Thumbnail Image</label>
                  <div className="flex gap-4 items-start">
                    <div className="flex-1">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-xl cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Plus className="w-8 h-8 text-zinc-500 mb-2" />
                          <p className="text-sm text-zinc-500">Click to upload thumbnail</p>
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setEditingProject({...editingProject, image: reader.result as string});
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                    </div>
                    {editingProject.image && (
                      <div className="w-32 h-32 rounded-xl overflow-hidden border border-white/10 bg-zinc-800 shrink-0 relative group">
                        <img 
                          src={editingProject.image} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                        <button 
                          type="button"
                          onClick={() => setEditingProject({...editingProject, image: ''})}
                          className="absolute inset-0 bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                        >
                          <Trash2 size={24} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Gallery Images (Image URLs)</label>
                  <div className="space-y-3 mb-4">
                    {editingProject.images?.map((img, idx) => (
                      <div key={idx} className="flex gap-2">
                        <input 
                          type="text" 
                          value={img}
                          onChange={(e) => {
                            const newImages = [...(editingProject.images || [])];
                            newImages[idx] = e.target.value;
                            setEditingProject({...editingProject, images: newImages});
                          }}
                          className="flex-1 bg-zinc-800 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand"
                          placeholder="https://example.com/image.jpg"
                        />
                        <button 
                          type="button"
                          onClick={() => {
                            const newImages = editingProject.images?.filter((_, i) => i !== idx);
                            setEditingProject({...editingProject, images: newImages});
                          }}
                          className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProject({
                          ...editingProject,
                          images: [...(editingProject.images || []), '']
                        });
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 transition-colors text-sm w-full justify-center border border-dashed border-white/20"
                    >
                      <Plus size={16} /> Add Image URL
                    </button>
                  </div>
                  
                  {/* Image Previews */}
                  {editingProject.images && editingProject.images.some(img => img.trim() !== '') && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {editingProject.images.map((img, idx) => (
                        img.trim() !== '' && (
                          <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-800 group">
                            <img 
                              src={img} 
                              alt={`Gallery Preview ${idx + 1}`} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>

                <button type="submit" className="w-full bg-brand text-zinc-950 font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors">
                  Save Project
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-mono text-sm tracking-[0.3em] uppercase mb-4 block">HONG HEE SUN</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-6 leading-[0.9]">
              {(content.heroTitle || DEFAULT_CONTENT.heroTitle).split(' ').map((word, i) => (
                word.toLowerCase() === 'sells.' ? <span key={i} className="text-brand">{word} </span> : word + ' '
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
              {content.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-zinc-950 font-bold rounded-full transition-all flex items-center justify-center gap-2 group">
                Portfolio 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all">
                작업 문의하기
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle={content.aboutSubtitle || "About HONG HEE SUN"} title={content.aboutTitle} />
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p className="text-white font-semibold text-xl leading-tight">
                  {content.aboutText1}
                </p>
                <p>
                  {content.aboutText2}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    "시각디자인 전공",
                    "디자인 팀장 경험",
                    "쇼핑몰 운영 경험",
                    "브랜드 운영 경험",
                    "제조/산업 디자인",
                    "13년 실무 경력"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className="text-brand" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
                alt="Professional Designer at work" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand font-display text-4xl font-bold">13+</p>
                <p className="text-sm uppercase tracking-widest text-zinc-400">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section id="skill" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Expertise" title={content.skillTitle || "결과 중심 스킬"} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-brand/30 transition-all group"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand transition-colors">
                  <skill.icon size={24} className="text-brand group-hover:text-zinc-950 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-zinc-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading subtitle="Portfolio" title={content.portfolioTitle || "Selected Works"} />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-brand text-zinc-950' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Website Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { title: content.link1Title, url: content.link1Url },
              { title: content.link2Title, url: content.link2Url },
              { title: content.link3Title, url: content.link3Url },
              { title: content.link4Title, url: content.link4Url },
            ].map((link, i) => (
              link.title && (
                <a
                  key={i}
                  href={link.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-4 bg-zinc-900 border border-white/5 rounded-2xl text-zinc-300 hover:bg-brand hover:text-zinc-950 hover:border-brand transition-all group"
                >
                  <span className="font-bold truncate">{link.title}</span>
                  <ExternalLink size={16} className="shrink-0 opacity-50 group-hover:opacity-100" />
                </a>
              )
            ))}
          </div>

          {isAdmin && (
            <div className="mb-8 flex justify-end">
              <button 
                onClick={addProject}
                className="flex items-center gap-2 px-6 py-3 bg-brand text-zinc-950 font-bold rounded-xl hover:bg-brand-dark transition-colors"
              >
                <Plus size={20} /> Add New Project
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer relative p-4 flex items-center justify-center"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-700">
                        <Camera size={48} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <span className="text-brand text-xs font-mono mb-2 uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        View Details <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>

                  {isAdmin && (
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setEditingProject(project); }}
                        className="p-2 bg-brand text-zinc-950 rounded-lg hover:bg-brand-dark"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteProject(project.id); }}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Recognition" title={content.awardsTitle || "Awards & Honors"} />
          <div className="grid sm:grid-cols-2 gap-6">
            {AWARDS.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-zinc-900 border border-white/5 flex items-center gap-6"
              >
                <div className="text-brand font-display text-3xl font-bold">{award.year}</div>
                <div>
                  <h3 className="text-xl font-bold">{award.title}</h3>
                  <p className="text-zinc-500">{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Career" title={content.experienceTitle || "Experience"} />
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-[250px_1fr] gap-8 p-8 rounded-3xl bg-zinc-900 border border-white/5"
              >
                <div>
                  <p className="text-brand font-mono text-sm mb-1">{exp.period}</p>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <p className="text-zinc-500">{exp.role}</p>
                </div>
                <div className="space-y-4">
                  {exp.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      <p className="text-zinc-300">{h}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-zinc-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-950/5 -skew-x-12 translate-x-1/4" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                  브랜드 성장에 도움이 되는 디자인이 필요하신가요?
                </h2>
                <p className="text-xl font-medium mb-10 opacity-80">
                  매출을 만드는 디자인, 지금 바로 상담하세요.
                </p>
                <div className="space-y-6">
                  <a href={`mailto:${content.contactEmail}`} className="flex items-center gap-4 text-lg font-bold hover:underline">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-brand">
                      <Mail size={24} />
                    </div>
                    {content.contactEmail}
                  </a>
                  <div className="flex items-center gap-4 text-lg font-bold">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-brand">
                      <Phone size={24} />
                    </div>
                    {content.contactPhone}
                  </div>
                  <div className="flex items-center gap-4 text-lg font-bold">
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-brand">
                      <MessageSquare size={24} />
                    </div>
                    카카오톡: {content.contactKakao}
                  </div>
                </div>
              </div>
              <div className="bg-zinc-950 p-8 rounded-[2rem] text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Name" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand" />
                  <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand" />
                  <textarea placeholder="Message" rows={4} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand resize-none"></textarea>
                  <button className="w-full bg-brand text-zinc-950 font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-top border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">© 2026 HONG HEE SUN. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 z-[110] w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-zinc-800 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-12">
                <span className="text-brand font-mono text-sm tracking-widest uppercase mb-4 block">{selectedProject.category}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{selectedProject.title}</h2>
                
                {/* Image Gallery */}
                <div className="space-y-6 mb-12">
                  {selectedProject.images?.filter(img => img && img.trim() !== '').map((img, idx) => (
                    <div key={idx} className="rounded-[2rem] overflow-hidden bg-zinc-900">
                      <img 
                        src={img} 
                        alt={`${selectedProject.title} ${idx + 1}`} 
                        className="w-full h-auto object-contain" 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Login Modal */}
      <AdminModal 
        isOpen={isAdminModalOpen} 
        onClose={() => setIsAdminModalOpen(false)} 
        onLogin={(pass) => {
          setIsAdmin(true);
          setIsAdminModalOpen(false);
        }}
      />

      {/* Admin Content Edit Modal */}
      <AnimatePresence>
        {isContentEditOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-zinc-950/95 backdrop-blur-md overflow-y-auto p-6"
          >
            <div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 rounded-[2rem] p-8 relative">
              <button onClick={() => setIsContentEditOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-8">Edit Site Content</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Hero Title</label>
                  <input 
                    type="text" 
                    value={content.heroTitle}
                    onChange={(e) => setContent({...content, heroTitle: e.target.value})}
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Hero Subtitle</label>
                  <textarea 
                    value={content.heroSub}
                    onChange={(e) => setContent({...content, heroSub: e.target.value})}
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand h-24 resize-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">About Title</label>
                    <input 
                      type="text" 
                      value={content.aboutTitle}
                      onChange={(e) => setContent({...content, aboutTitle: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Skill Section Title</label>
                    <input 
                      type="text" 
                      value={content.skillTitle}
                      onChange={(e) => setContent({...content, skillTitle: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Portfolio Title</label>
                    <input 
                      type="text" 
                      value={content.portfolioTitle}
                      onChange={(e) => setContent({...content, portfolioTitle: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Experience Title</label>
                    <input 
                      type="text" 
                      value={content.experienceTitle}
                      onChange={(e) => setContent({...content, experienceTitle: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Email</label>
                    <input 
                      type="text" 
                      value={content.contactEmail}
                      onChange={(e) => setContent({...content, contactEmail: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Phone</label>
                    <input 
                      type="text" 
                      value={content.contactPhone}
                      onChange={(e) => setContent({...content, contactPhone: e.target.value})}
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Kakao ID</label>
                  <input 
                    type="text" 
                    value={content.contactKakao}
                    onChange={(e) => setContent({...content, contactKakao: e.target.value})}
                    className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">Portfolio Quick Links</h4>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="grid grid-cols-2 gap-2">
                        <input 
                          type="text" 
                          placeholder={`Link ${num} Title`}
                          value={(content as any)[`link${num}Title`]}
                          onChange={(e) => setContent({...content, [`link${num}Title`]: e.target.value})}
                          className="bg-zinc-800 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand"
                        />
                        <input 
                          type="text" 
                          placeholder={`Link ${num} URL`}
                          value={(content as any)[`link${num}Url`]}
                          onChange={(e) => setContent({...content, [`link${num}Url`]: e.target.value})}
                          className="bg-zinc-800 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => { saveContent(content); setIsContentEditOpen(false); }}
                  className="w-full bg-brand text-zinc-950 font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors"
                >
                  Save All Changes
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Floating Indicator */}
      {isAdmin && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2 items-end">
          <button 
            onClick={() => {
              if (window.confirm('모든 데이터를 초기 상태로 되돌리시겠습니까? 커스텀한 데이터가 모두 삭제됩니다.')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-red-600 transition-colors"
          >
            <Trash2 size={18} /> Reset Data
          </button>
          <button 
            onClick={() => setIsContentEditOpen(true)}
            className="bg-white text-zinc-950 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-zinc-200 transition-colors"
          >
            <Edit2 size={18} /> Edit Content
          </button>
          <div className="flex items-center gap-4 bg-brand text-zinc-950 px-4 py-2 rounded-full font-bold shadow-2xl shadow-brand/20">
            <div className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse" />
            Admin Mode
            <button onClick={() => setIsAdmin(false)} className="ml-2 p-1 hover:bg-zinc-950/10 rounded">
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
