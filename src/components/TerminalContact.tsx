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
  const endRef = useRef<HTMLDivElement>(null);

  // 初始化終端機
  useEffect(() => {
    const now = new Date().toString();
    setHistory([
      { type: 'system', content: `Last login: ${now} on ttys000` },
      { type: 'system', content: 'Pierre Contact System v2.0.0' },
      { type: 'system', content: 'Type "help" for available commands, or "start" to send a message.' },
      { type: 'system', content: '' }, // Empty line for spacing
    ]);
  }, []);

  // 自動滾動到底部
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
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
           { type: 'output', content: 'Available commands:' },
           { type: 'output', content: '  start    - Start the secure messaging protocol' },
           { type: 'output', content: '  clear    - Clear terminal screen' },
           { type: 'output', content: '  whoami   - Display current user' },
         ]);
      } else if (trimmedCmd === 'clear') {
        setHistory([]);
      } else if (trimmedCmd === 'whoami') {
        setHistory(prev => [...prev, { type: 'output', content: 'guest@pierre-portfolio' }]);
      } else if (trimmedCmd === 'start') {
        setStep('name');
        setHistory(prev => [...prev, { type: 'system', content: 'Initializing secure connection...' }]);
        setTimeout(() => {
           setHistory(prev => [...prev, { type: 'output', content: 'Please enter your name:' }]);
        }, 500);
      } else if (trimmedCmd !== '') {
        setHistory(prev => [...prev, { type: 'error', content: `Command not found: ${trimmedCmd}` }]);
      }
    } else {
      // 處理表單輸入流程
      switch (step) {
        case 'name':
          if (trimmedCmd) {
            setFormData(prev => ({ ...prev, name: trimmedCmd }));
            setStep('email');
            setHistory(prev => [...prev, { type: 'output', content: 'Enter your email address:' }]);
          } else {
             setHistory(prev => [...prev, { type: 'error', content: 'Name cannot be empty.' }]);
          }
          break;
          
        case 'email':
          if (trimmedCmd.includes('@')) {
            setFormData(prev => ({ ...prev, email: trimmedCmd }));
            setStep('subject');
            setHistory(prev => [...prev, { type: 'output', content: 'Enter message subject:' }]);
          } else {
             setHistory(prev => [...prev, { type: 'error', content: 'Invalid email format.' }]);
          }
          break;

        case 'subject':
            if (trimmedCmd) {
                setFormData(prev => ({ ...prev, subject: trimmedCmd }));
                setStep('message');
                setHistory(prev => [...prev, { type: 'output', content: 'Enter your message:' }]);
            } else {
                setHistory(prev => [...prev, { type: 'error', content: 'Subject cannot be empty.' }]);
            }
            break;

        case 'message':
          if (trimmedCmd) {
            setFormData(prev => ({ ...prev, message: trimmedCmd }));
            setStep('confirm');
            setHistory(prev => [...prev, 
                { type: 'system', content: '----------------------------------------' },
                { type: 'output', content: 'Ready to send. Type "yes" to confirm or "no" to cancel.' }
            ]);
          } else {
             setHistory(prev => [...prev, { type: 'error', content: 'Message cannot be empty.' }]);
          }
          break;

        case 'confirm':
          if (trimmedCmd.toLowerCase() === 'yes' || trimmedCmd.toLowerCase() === 'y') {
            setStep('sending');
            setHistory(prev => [...prev, { type: 'system', content: 'Encrypting packet... [OK]' }]);
            
            // 模擬發送過程
            setTimeout(() => {
                setHistory(prev => [...prev, { type: 'system', content: 'Establishing handshake... [OK]' }]);
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
                             { type: 'success', content: 'Message transmitted successfully.' },
                             { type: 'system', content: 'Connection closed.' },
                             { type: 'output', content: 'Type "start" to send another message.' }
                         ]);
                         setStep('start');
                         setFormData({ name: '', email: '', subject: '', message: '' });
                    } else {
                        throw new Error('Transmission failed');
                    }
                } catch (error) {
                    setHistory(prev => [...prev, { type: 'error', content: 'Error: Transmission failed. Please try again later.' }]);
                    setStep('start');
                }
            }, 2000);

          } else {
            setStep('start');
            setHistory(prev => [...prev, { type: 'system', content: 'Operation cancelled.' }]);
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
      <div className="flex-1 p-4 overflow-y-auto text-gray-300 custom-scrollbar">
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
             autoFocus
             autoComplete="off"
           />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}

