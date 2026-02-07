import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { LiveSession } from './components/LiveSession';
import { ImageTools } from './components/ImageTools';
import { ChatInterface } from './components/ChatInterface';
import { Relaxation } from './components/Relaxation';
import { MoodMap } from './components/MoodMap';
import { AppMode } from './types';

const App: React.FC = () => {
  const [currentMode, setMode] = useState<AppMode>(AppMode.DASHBOARD);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderContent = () => {
    switch (currentMode) {
      case AppMode.DASHBOARD: return <Dashboard isDarkMode={isDarkMode} />;
      case AppMode.OMNI_SENSE: return <LiveSession />; // LiveSession is natively dark
      case AppMode.FOCUS_VISION: return <ImageTools />;
      case AppMode.CHAT: return <ChatInterface isDarkMode={isDarkMode} />;
      case AppMode.RELAXATION: return <Relaxation />;
      case AppMode.MOOD_MAP: return <MoodMap />;
      default: return <Dashboard isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors duration-200">
      <Sidebar 
        currentMode={currentMode} 
        setMode={setMode} 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <div className="flex-1 flex flex-col h-full relative">
        {/* Mobile Header */}
        <div className="lg:hidden p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-white dark:bg-slate-900 shadow-sm z-10 transition-colors">
            <h1 className="font-bold text-blue-600">OMNIGEN™</h1>
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="p-2 text-slate-600 dark:text-slate-300"
              aria-label="Open sidebar"
              aria-expanded={isSidebarOpen}
            >
                ☰
            </button>
        </div>

        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 transition-colors">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;