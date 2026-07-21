'use client';

import React, { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorldStore } from '@/stores/useWorldStore';
import universeData from '@/data/universe.json';

const NovaChat: React.FC = () => {
  const { activeObject, activeWorld, navigateToWorld, navigateToObject, isNovaOpen, setNovaOpen } = useWorldStore();
  
  const currentId = activeObject?.id || activeWorld;
  const objectData = currentId ? universeData.objects.find(o => o.id === currentId) || activeObject : null;
  const extData = objectData as { description?: string, suggestedQuestions?: string[] } | null;
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: '/api/chat',
    body: {
      objectId: currentId,
      proceduralData: objectData
    },
    // Optional: add initial message dynamically
    initialMessages: objectData ? [
      {
        id: 'welcome',
        role: 'assistant',
        content: `Greetings, traveler.\n\nYou have discovered the **${objectData.name}**.\n\nHow may I assist you?`
      }
    ] : []
  });

  // Reset chat when switching objects
  useEffect(() => {
    if (objectData) {
      setMessages([
        {
          id: `welcome-${currentId}`,
          role: 'assistant',
          content: `Greetings, traveler.\n\nYou have discovered the **${objectData.name}**.\n\nHow may I assist you?`
        }
      ]);
    }
  }, [currentId, objectData, setMessages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isNovaOpen || !currentId || !objectData) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="fixed right-0 top-0 bottom-0 w-full max-w-md glass-strong border-l border-white/10 z-40 flex flex-col pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-start backdrop-blur-md bg-black/20">
        <div>
          <h2 className="font-heading text-2xl text-cyan-400 text-glow tracking-wider">NOVA</h2>
          <div className="text-xs text-white/50 font-mono uppercase tracking-widest mt-1">
            Analyzing: {objectData.name}
          </div>
        </div>
        <button 
          onClick={() => {
            setNovaOpen(false);
            if (activeObject) navigateToObject(null);
            if (activeWorld) navigateToWorld(null);
          }} 
          className="text-white/50 hover:text-white transition-colors p-2"
        >
          ✕
        </button>
      </div>

      {/* Info Panel Preview */}
      <div className="px-6 py-4 border-b border-white/5 bg-black/10 shrink-0">
        <h3 className="text-sm font-bold text-white/80 mb-2">{objectData.type?.toUpperCase() || 'UNKNOWN CLASSIFICATION'}</h3>
        {extData?.description && (
          <p className="text-sm text-white/60 line-clamp-2">{extData.description}</p>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        <AnimatePresence>
          {messages.map(m => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`text-xs text-white/30 mb-1 font-mono uppercase`}>
                {m.role === 'user' ? 'Traveler' : 'Nova'}
              </div>
              <div className={`
                max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed
                ${m.role === 'user' 
                  ? 'bg-blue-600/30 border border-blue-500/30 text-white rounded-tr-sm' 
                  : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm'}
              `}>
                {m.role === 'assistant' ? (
                  <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>
                      {m.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  m.content
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <div className="flex items-center gap-2 text-cyan-400/50 p-2">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && extData?.suggestedQuestions && extData.suggestedQuestions.length > 0 && (
        <div className="px-6 pb-2 flex flex-wrap gap-2 shrink-0">
          {extData.suggestedQuestions.map((q: string, i: number) => (
            <button
              key={i}
              onClick={() => handleInputChange({ target: { value: q } } as React.ChangeEvent<HTMLInputElement>)}
              className="text-xs px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-6 border-t border-white/10 bg-black/20 shrink-0">
        <form onSubmit={handleSubmit} className="relative">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Nova about this object..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 aspect-square rounded-lg bg-cyan-600/30 hover:bg-cyan-500/50 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-cyan-300 text-lg leading-none">↑</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default React.memo(NovaChat);
