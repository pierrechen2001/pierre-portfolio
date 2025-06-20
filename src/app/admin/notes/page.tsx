'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { notes, categories, Note } from '@/data/notes';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

// 視差背景組件
function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      ref.current.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden bg-[#181c24]">
      <div ref={ref} className="absolute inset-0 scale-110">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#e9a42e]/10 rounded-full blur-[50px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[15%] right-[-20%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-[15%] left-[10%] w-[60%] h-[60%] bg-slate-800/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[-15%] right-[30%] w-[30%] h-[30%] bg-blue-700/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '9s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[45%] h-[45%] bg-slate-700/20 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '11s' }}></div>
      </div>
    </div>
  );
}

export default function AdminNotesPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'list' | 'create' | 'edit'>('list');
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  
  // 新筆記表單狀態
  const [noteForm, setNoteForm] = useState({
    id: '',
    title: { en: '', zh: '' },
    description: { en: '', zh: '' },
    content: { en: '', zh: '' },
    category: { en: 'Web Development', zh: '網頁開發' },
    tags: [] as string[],
    publishedAt: new Date().toISOString().split('T')[0],
    featured: false
  });

  const [newTag, setNewTag] = useState('');

  // 設置頁面標題
  useEffect(() => {
    document.title = `${language === 'en' ? 'Admin - Notes Management' : '管理員 - 筆記管理'} | Pierre's Portfolio`;
  }, [language]);

  // 處理表單提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 生成 ID（簡單處理，實際應用中需要更完善的邏輯）
    const id = noteForm.id || noteForm.title.en.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    const newNote: Note = {
      ...noteForm,
      id,
      updatedAt: new Date().toISOString().split('T')[0]
    };

    // 生成可複製的程式碼
    const codeToCopy = `// Paste this into your src/data/notes.ts file

{
  id: '${newNote.id}',
  title: {
    en: \`${newNote.title.en.replace(/`/g, '\\`')}\`,
    zh: \`${newNote.title.zh.replace(/`/g, '\\`')}\`
  },
  description: {
    en: \`${newNote.description.en.replace(/`/g, '\\`')}\`,
    zh: \`${newNote.description.zh.replace(/`/g, '\\`')}\`
  },
  content: {
    en: \`${newNote.content.en.replace(/`/g, '\\`')}\`,
    zh: \`${newNote.content.zh.replace(/`/g, '\\`')}\`
  },
  category: {
    en: '${newNote.category.en}',
    zh: '${newNote.category.zh}'
  },
  tags: [${newNote.tags.map(t => `'${t}'`).join(', ')}],
  publishedAt: '${newNote.publishedAt}',
  ${newNote.updatedAt ? `updatedAt: '${newNote.updatedAt}',` : ''}
  ${newNote.featured ? `featured: true,` : ''}
},`;

    // 複製到剪貼簿並提示用戶
    navigator.clipboard.writeText(codeToCopy).then(() => {
      alert(language === 'en' 
        ? 'Note code copied to clipboard! Paste it into src/data/notes.ts' 
        : '筆記程式碼已複製到剪貼簿！請將其貼上到 src/data/notes.ts 檔案中。');
    }).catch(err => {
      console.error('Failed to copy code: ', err);
      alert(language === 'en' ? 'Failed to copy code.' : '複製程式碼失敗。');
    });
  };

  // 添加標籤
  const addTag = () => {
    if (newTag.trim() && !noteForm.tags.includes(newTag.trim())) {
      setNoteForm(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  // 移除標籤
  const removeTag = (tagToRemove: string) => {
    setNoteForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // 編輯筆記
  const editNote = (note: Note) => {
    setNoteForm({
      ...note,
      featured: note.featured ?? false,
    });
    setSelectedNote(note);
    setActiveTab('edit');
  };

  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        
        {/* 添加視差背景 */}
        <ParallaxBackground />
        
        {/* 覆蓋一層半透明背景以確保內容可讀性 */}
        <div className="fixed inset-0 z-[-1] bg-[var(--background)]/90 backdrop-blur-sm"></div>
        
        <main className="flex-grow bg-transparent">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
            
            {/* 標題區域 */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 leading-tight">
                {language === 'en' ? 'Notes Management' : '筆記管理'}
              </h1>
              <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? 'Create, edit and manage your development notes' 
                  : '創建、編輯和管理您的開發筆記'}
              </p>
            </div>

            {/* 選項卡導航 */}
            <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-2 mb-8">
              <div className="flex gap-2">
                {[
                  { key: 'list', label: language === 'en' ? 'Notes List' : '筆記列表' },
                  { key: 'create', label: language === 'en' ? 'Create Note' : '創建筆記' },
                  ...(activeTab === 'edit' ? [{ key: 'edit', label: language === 'en' ? 'Edit Note' : '編輯筆記' }] : [])
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === tab.key
                        ? 'bg-primary text-[var(--dark)] shadow-lg shadow-primary/25'
                        : 'text-[var(--foreground)] hover:bg-[var(--background-alt)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 筆記列表 */}
            {activeTab === 'list' && (
              <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-8">
                <div className="space-y-4">
                  {notes.map((note) => (
                    <div key={note.id} className="flex items-center justify-between p-6 bg-[var(--background-alt)]/80 border border-[var(--border-color)] rounded-lg">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                          {note.title[language]}
                        </h3>
                        <p className="text-[var(--foreground-muted)] mb-2">
                          {note.description[language]}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-[var(--foreground-muted)]">
                          <span>{note.publishedAt}</span>
                          <span className="px-2 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded">
                            {note.category[language]}
                          </span>
                          {note.featured && (
                            <span className="px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded">
                              {language === 'en' ? 'Featured' : '精選'}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-6">
                        <button
                          onClick={() => editNote(note)}
                          className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition-colors"
                        >
                          {language === 'en' ? 'Edit' : '編輯'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 創建/編輯筆記表單 */}
            {(activeTab === 'create' || activeTab === 'edit') && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* 表單區域 */}
                <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* ID 字段（編輯時顯示） */}
                    {activeTab === 'edit' && (
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          ID
                        </label>
                        <input
                          type="text"
                          value={noteForm.id}
                          onChange={(e) => setNoteForm(prev => ({ ...prev, id: e.target.value }))}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    )}

                    {/* 標題 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Title (English)' : '標題（英文）'}
                        </label>
                        <input
                          type="text"
                          value={noteForm.title.en}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            title: { ...prev.title, en: e.target.value }
                          }))}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Title (Chinese)' : '標題（中文）'}
                        </label>
                        <input
                          type="text"
                          value={noteForm.title.zh}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            title: { ...prev.title, zh: e.target.value }
                          }))}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    {/* 描述 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Description (English)' : '描述（英文）'}
                        </label>
                        <textarea
                          value={noteForm.description.en}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            description: { ...prev.description, en: e.target.value }
                          }))}
                          rows={3}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Description (Chinese)' : '描述（中文）'}
                        </label>
                        <textarea
                          value={noteForm.description.zh}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            description: { ...prev.description, zh: e.target.value }
                          }))}
                          rows={3}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    {/* 分類和發布日期 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Category (English)' : '分類（英文）'}
                        </label>
                        <input
                          type="text"
                          value={noteForm.category.en}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            category: { ...prev.category, en: e.target.value }
                          }))}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Category (Chinese)' : '分類（中文）'}
                        </label>
                        <input
                          type="text"
                          value={noteForm.category.zh}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            category: { ...prev.category, zh: e.target.value }
                          }))}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                          {language === 'en' ? 'Publish Date' : '發布日期'}
                        </label>
                        <input
                          type="date"
                          value={noteForm.publishedAt}
                          onChange={(e) => setNoteForm(prev => ({ ...prev, publishedAt: e.target.value }))}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    {/* 標籤 */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        {language === 'en' ? 'Tags' : '標籤'}
                      </label>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {noteForm.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="ml-2 text-primary/70 hover:text-primary"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder={language === 'en' ? 'Add a tag...' : '添加標籤...'}
                          className="flex-grow px-4 py-2 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent"
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        />
                        <button
                          type="button"
                          onClick={addTag}
                          className="px-4 py-2 bg-primary text-[var(--dark)] rounded-lg hover:bg-primary/80 transition-colors"
                        >
                          {language === 'en' ? 'Add' : '添加'}
                        </button>
                      </div>
                    </div>

                    {/* 精選選項 */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={noteForm.featured}
                        onChange={(e) => setNoteForm(prev => ({ ...prev, featured: e.target.checked }))}
                        className="w-4 h-4 text-primary bg-[var(--background-alt)] border-[var(--border-color)] rounded focus:ring-primary"
                      />
                      <label htmlFor="featured" className="ml-2 text-sm text-[var(--foreground)]">
                        {language === 'en' ? 'Featured Note' : '精選筆記'}
                      </label>
                    </div>

                    {/* 內容 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-[var(--foreground)]">
                            {language === 'en' ? `Content (English)` : `內容 (英文)`}
                          </label>
                          <button
                            type="button"
                            onClick={() => setPreviewMode(!previewMode)}
                            className="text-sm text-primary hover:text-primary/80"
                          >
                            {previewMode ? (language === 'en' ? 'Edit' : '編輯') : (language === 'en' ? 'Preview' : '預覽')}
                          </button>
                        </div>
                        <textarea
                          value={noteForm.content.en}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            content: { ...prev.content, en: e.target.value }
                          }))}
                          rows={15}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                          placeholder={language === 'en' ? 'Write your note content in Markdown...' : '使用 Markdown 格式撰寫筆記內容...'}
                          required
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-[var(--foreground)]">
                            {language === 'en' ? `Content (Chinese)` : `內容 (中文)`}
                          </label>
                        </div>
                        <textarea
                          value={noteForm.content.zh}
                          onChange={(e) => setNoteForm(prev => ({ 
                            ...prev, 
                            content: { ...prev.content, zh: e.target.value }
                          }))}
                          rows={15}
                          className="w-full px-4 py-3 bg-[var(--background-alt)] border border-[var(--border-color)] rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                          placeholder={language === 'en' ? 'Write your note content in Markdown...' : '使用 Markdown 格式撰寫筆記內容...'}
                          required
                        />
                      </div>
                    </div>

                    {/* 提交按鈕 */}
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex-grow bg-primary text-[var(--dark)] px-8 py-4 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
                      >
                        {activeTab === 'edit' 
                          ? (language === 'en' ? 'Update Note' : '更新筆記')
                          : (language === 'en' ? 'Create Note' : '創建筆記')
                        }
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('list')}
                        className="px-8 py-4 bg-[var(--background-alt)] border border-[var(--border-color)] text-[var(--foreground)] rounded-lg hover:bg-[var(--background-alt)]/80 transition-colors"
                      >
                        {language === 'en' ? 'Cancel' : '取消'}
                      </button>
                    </div>
                  </form>
                </div>

                {/* 預覽區域 */}
                <div className="backdrop-blur-md bg-[var(--background-alt)]/60 rounded-2xl shadow-2xl border border-[var(--border-color)]/20 p-8">
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">
                    {language === 'en' ? 'Preview' : '預覽'}
                  </h3>
                  
                  {/* 筆記頭部預覽 */}
                  <div className="mb-8 pb-6 border-b border-[var(--border-color)]">
                    <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                      {noteForm.title[language] || (language === 'en' ? 'Note Title' : '筆記標題')}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[var(--foreground-muted)]">
                      <span>{noteForm.publishedAt}</span>
                      <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full">
                        {noteForm.category[language]}
                      </span>
                      {noteForm.featured && (
                        <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full">
                          {language === 'en' ? 'Featured' : '精選'}
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      {noteForm.description[language] || (language === 'en' ? 'Note description...' : '筆記描述...')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {noteForm.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[var(--background-alt)]/80 border border-[var(--border-color)] text-[var(--foreground)] rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Markdown 內容預覽 */}
                  <div className="prose prose-lg prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight]}
                      components={{
                        h1: ({ children }) => (
                          <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-6 mt-12 first:mt-0 leading-tight border-b-2 border-primary/20 pb-3">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-4 mt-10 leading-tight relative">
                            <span className="absolute -left-4 top-0 w-1 h-full bg-primary/60 rounded-full"></span>
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-3 mt-8 leading-tight">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-3 mt-6 leading-tight">
                            {children}
                          </h4>
                        ),
                        p: ({ children }) => (
                          <p className="text-[var(--foreground-muted)] mb-4 leading-relaxed text-sm md:text-base font-normal">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="text-[var(--foreground-muted)] mb-6 pl-6 space-y-2 text-sm md:text-base font-normal">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="text-[var(--foreground-muted)] mb-6 pl-6 space-y-2 text-sm md:text-base font-normal">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-[var(--foreground-muted)] leading-relaxed relative font-normal">
                            <span className="absolute -left-3 top-2 w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                            {children}
                          </li>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg italic text-[var(--foreground-muted)] text-sm md:text-base leading-relaxed relative font-normal">
                            <svg className="absolute top-3 left-2 w-5 h-5 text-primary/40" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {children}
                          </blockquote>
                        ),
                        code: ({ children, className }) => {
                          const isInlineCode = !className;
                          if (isInlineCode) {
                            return (
                              <code className="bg-[var(--background-alt)] border border-[var(--border-color)] text-primary px-2 py-1 rounded font-mono text-xs md:text-sm font-medium">
                                {children}
                              </code>
                            );
                          }
                          return <code className={className}>{children}</code>;
                        },
                        pre: ({ children }) => (
                          <div className="relative my-6">
                            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-slate-800 to-transparent rounded-t-lg"></div>
                            <pre className="bg-[#0d1117] border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto text-xs md:text-sm">
                              {children}
                            </pre>
                          </div>
                        ),
                        table: ({ children }) => (
                          <div className="overflow-x-auto mb-8 rounded-lg border border-[var(--border-color)]">
                            <table className="w-full border-collapse">
                              {children}
                            </table>
                          </div>
                        ),
                        th: ({ children }) => (
                          <th className="bg-[var(--background-alt)] border-b border-[var(--border-color)] px-4 py-3 text-left font-semibold text-[var(--foreground)] text-xs md:text-sm">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="border-b border-[var(--border-color)] px-4 py-3 text-[var(--foreground-muted)] text-xs md:text-sm font-normal">
                            {children}
                          </td>
                        ),
                        a: ({ children, href }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-300 font-medium"
                          >
                            {children}
                            <svg className="inline w-3 h-3 ml-1 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ),
                        hr: () => (
                          <hr className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-[var(--foreground)] bg-gradient-to-r from-primary/10 to-secondary/10 px-1 rounded">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-[var(--foreground)] font-medium">
                            {children}
                          </em>
                        ),
                      }}
                    >
                      {noteForm.content[language] || (language === 'en' ? '# Start writing your note...' : '# 開始撰寫您的筆記...')}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </ParallaxProvider>
  );
} 