import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { getChatResponse } from '../services/geminiService';
import { ChatIcon, CloseIcon, SendIcon, UserIcon, SparklesIcon } from './icons/ChatIcons';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      sender: 'ai', 
      text: 'שלום! אני כאן כדי לענות על שאלות בנושא כלי AI למצגות. איך אפשר לעזור? הנה כמה רעיונות:',
      suggestions: [
        'מה ההבדל בין Gamma ל-Canva?',
        'איזה כלי הכי טוב למצגת עם נתונים?',
        'תן לי טיפ לעיצוב שקף פתיחה',
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isOpen]);
  
  const toggleChat = () => setIsOpen(!isOpen);

  const processUserMessage = async (message: string) => {
      const userMessage = message.trim();
      if (!userMessage || isLoading) return;

      setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
      setInputValue('');
      setIsLoading(true);

      const aiResponse = await getChatResponse(userMessage);
      
      setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
      setIsLoading(false);
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    processUserMessage(inputValue);
  };

  const handleSuggestionClick = (suggestion: string) => {
    processUserMessage(suggestion);
  }

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 end-5 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="פתח צ'אט"
      >
        {isOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </button>

      <div className={`fixed bottom-20 end-5 w-[calc(100%-2.5rem)] sm:w-96 h-[70vh] sm:h-[60vh] bg-white rounded-xl shadow-2xl flex flex-col z-40 border border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <header className="bg-indigo-600 text-white p-4 rounded-t-xl flex items-center justify-between">
            <h2 className="font-bold text-lg">צ'אט עזרה AI</h2>
            <button onClick={toggleChat} aria-label="סגור צ'אט" className="text-indigo-200 hover:text-white">
                <CloseIcon className="w-5 h-5" />
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index}>
                    <div className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.sender === 'ai' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white"><SparklesIcon className="w-5 h-5"/></div>}
                    <div className={`max-w-[80%] p-3 rounded-xl shadow-sm ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}>
                        <p className="text-sm">{msg.text}</p>
                    </div>
                    {msg.sender === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white"><UserIcon className="w-5 h-5"/></div>}
                    </div>
                    {msg.sender === 'ai' && msg.suggestions && index === messages.length - 1 && (
                        <div className="flex flex-wrap gap-2 mt-3 justify-start ms-10">
                            {msg.suggestions.map((s, i) => (
                                <button key={i} onClick={() => handleSuggestionClick(s)} className="text-sm bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full hover:bg-indigo-200 transition-colors">
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-end gap-2 justify-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white"><SparklesIcon className="w-5 h-5"/></div>
                    <div className="p-3 rounded-xl bg-white shadow-sm">
                        <div className="flex items-center justify-center space-s-1.5">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
	                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
	                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="שאלו אותי משהו..."
                className="flex-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-s-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white p-2.5 rounded-e-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isLoading || !inputValue}
                aria-label="שלח הודעה"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default ChatWidget;