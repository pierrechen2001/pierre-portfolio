'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TerminalHistory {
  type: 'system' | 'input' | 'output' | 'error' | 'success';
  content: string;
}

export default function TerminalContact() {
  const { t, language } = useLanguage();
  const [history, setHistory] = useState<TerminalHistory[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'start' | 'name' | 'email' | 'subject' | 'message' | 'confirm' | 'sending' | 'done'>('start');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 初始化終端機
  useEffect(() => {
    const now = new Date().toString();
    setHistory([
      { type: 'system', content: `Last login: ${now} on ttys000` },
      { type: 'system', content: t('term_welcome') },
      { type: 'system', content: t('term_initial_help') },
      { type: 'system', content: '' }, // Empty line for spacing
    ]);
  }, [t]);

  // 自動滾動到底部
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // 聚焦輸入框
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim();
    
    // 記錄用戶輸入
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);

    if (step === 'start') {
      if (trimmedCmd === 'help') {
         setHistory(prev => [...prev, 
           { type: 'output', content: t('term_available_commands') },
           { type: 'output', content: t('term_cmd_start') },
           { type: 'output', content: t('term_cmd_clear') },
           { type: 'output', content: t('term_cmd_whoami') },
         ]);
      } else if (trimmedCmd === 'clear') {
        setHistory([]);
      } else if (trimmedCmd === 'whoami') {
        setHistory(prev => [...prev, { type: 'output', content: 'guest@pierre-portfolio' }]);
      } else if (trimmedCmd === 'start') {
        setStep('name');
        setHistory(prev => [...prev, { type: 'system', content: t('term_initializing') }]);
        setTimeout(() => {
           setHistory(prev => [...prev, { type: 'output', content: t('term_enter_name') }]);
        }, 500);
      } else if (trimmedCmd !== '') {
        setHistory(prev => [...prev, { type: 'error', content: `${t('term_cmd_not_found')} ${trimmedCmd}` }]);
      }
    } else {
      // 處理表單輸入流程
      switch (step) {
        case 'name':
          if (trimmedCmd) {
            setFormData(prev => ({ ...prev, name: trimmedCmd }));
            setStep('email');
            setHistory(prev => [...prev, { type: 'output', content: t('term_enter_email') }]);
          } else {
             setHistory(prev => [...prev, { type: 'error', content: t('term_name_empty') }]);
          }
          break;
          
        case 'email':
          if (trimmedCmd.includes('@')) {
            setFormData(prev => ({ ...prev, email: trimmedCmd }));
            setStep('subject');
            setHistory(prev => [...prev, { type: 'output', content: t('term_enter_subject') }]);
          } else {
             setHistory(prev => [...prev, { type: 'error', content: t('term_invalid_email') }]);
          }
          break;

        case 'subject':
            if (trimmedCmd) {
                setFormData(prev => ({ ...prev, subject: trimmedCmd }));
                setStep('message');
                setHistory(prev => [...prev, { type: 'output', content: t('term_enter_message') }]);
            } else {
                setHistory(prev => [...prev, { type: 'error', content: t('term_subject_empty') }]);
            }
            break;

        case 'message':
          if (trimmedCmd) {
            setFormData(prev => ({ ...prev, message: trimmedCmd }));
            setStep('confirm');
            setHistory(prev => [...prev, 
                { type: 'system', content: '----------------------------------------' },
                { type: 'output', content: t('term_ready_send') }
            ]);
          } else {
             setHistory(prev => [...prev, { type: 'error', content: t('term_message_empty') }]);
          }
          break;

        case 'confirm':
          // Support both English 'yes'/'y' and localized 'yes' if different
          const isYes = trimmedCmd.toLowerCase() === 'yes' || 
                        trimmedCmd.toLowerCase() === 'y' || 
                        trimmedCmd.toLowerCase() === t('term_confirm_yes').toLowerCase();
                        
          if (isYes) {
            setStep('sending');
            setHistory(prev => [...prev, { type: 'system', content: t('term_encrypting') }]);
            
            // 模擬發送過程
            setTimeout(() => {
                setHistory(prev => [...prev, { type: 'system', content: t('term_handshake') }]);
            }, 800);

            setTimeout(async () => {
                try {
                    // 實際發送請求
                    const res = await fetch("https://formsubmit.co/ajax/peathuchu@gmail.com", {
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: formData.name,
                            email: formData.email,
                            subject: formData.subject,
                            message: formData.message,
                            _subject: `Portfolio Contact: ${formData.subject}`
                        })
                    });

                    if (res.ok) {
                         setStep('done');
                         setHistory(prev => [...prev, 
                             { type: 'success', content: t('term_success') },
                             { type: 'system', content: t('term_connection_closed') },
                             { type: 'output', content: t('term_restart') }
                         ]);
                         setStep('start');
                         setFormData({ name: '', email: '', subject: '', message: '' });
                    } else {
                        throw new Error(t('term_failed'));
                    }
                } catch (error) {
                    setHistory(prev => [...prev, { type: 'error', content: t('term_error_failed') }]);
                    setStep('start');
                }
            }, 2000);

          } else {
            setStep('start');
            setHistory(prev => [...prev, { type: 'system', content: t('term_cancelled') }]);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }
          break;
      }
    }
    
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div 
      className="w-full h-[500px] bg-[#1e1e1e] rounded-lg overflow-hidden border border-[#333] shadow-2xl font-mono text-sm md:text-base flex flex-col"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#333]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs">guest@pierre-portfolio: ~</div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto text-gray-300 custom-scrollbar"
      >
        {history.map((item, i) => (
          <div key={i} className="mb-1 break-words">
            {item.type === 'input' && (
              <span className="text-[#F3C14B] font-bold mr-2">guest@pierre:~$</span>
            )}
            
            {item.type === 'error' ? (
              <span className="text-red-400">{item.content}</span>
            ) : item.type === 'success' ? (
              <span className="text-green-400">{item.content}</span>
            ) : item.type === 'system' ? (
              <span className="text-gray-500 italic">{item.content}</span>
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center">
           {step === 'start' ? (
              <span className="text-[#F3C14B] font-bold mr-2 shrink-0">guest@pierre:~$</span>
           ) : (
              <span className="text-green-400 font-bold mr-2 shrink-0">&gt;</span>
           )}
           <input
             ref={inputRef}
             type="text"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={handleKeyDown}
             className="bg-transparent border-none outline-none flex-1 text-white caret-white"
             autoComplete="off"
           />
        </div>
      </div>
    </div>
  );
}

