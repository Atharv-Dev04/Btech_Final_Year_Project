import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AnalysisCard from './components/AnalysisCard'
import Home from './components/Home'
import Analyze from './components/Analyze'
import NewsFeed from './components/NewsFeed'
import About from './components/About'
import Settings from './components/Settings'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPage, setAuthPage] = useState('login'); // 'login' or 'register'
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthPage('login');
  };

  if (!isAuthenticated) {
    return authPage === 'login' ? (
      <Login onLogin={handleLogin} onSwitchToRegister={() => setAuthPage('register')} />
    ) : (
      <Register onRegister={handleLogin} onSwitchToLogin={() => setAuthPage('login')} />
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] selection:bg-primary/20 selection:text-primary animate-fade-in">
      {/* Background Decorative Elements - Only on non-dashboard pages for better performance */}
      {currentPage !== 'analyze' && currentPage !== 'news' && currentPage !== 'about' && currentPage !== 'settings' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-success/5 rounded-full blur-[120px]" />
        </div>
      )}

      <Header onNavigate={setCurrentPage} currentPage={currentPage} onLogout={handleLogout} />

      <main className={`${currentPage === 'analyze' || currentPage === 'news' || currentPage === 'about' || currentPage === 'settings' ? 'w-full' : 'container mx-auto max-w-7xl'}`}>
        {currentPage === 'home' ? (
          <Home onGetStarted={() => setCurrentPage('analyze')} />
        ) : currentPage === 'analyze' ? (
          <Analyze />
        ) : currentPage === 'news' ? (
          <div className="container mx-auto max-w-7xl px-4">
            <NewsFeed />
          </div>
        ) : currentPage === 'about' ? (
          <About />
        ) : currentPage === 'settings' ? (
          <Settings />
        ) : (
          <>
            <Hero />
            <AnalysisCard />
          </>
        )}
      </main>

      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white">
              <span className="text-[10px] font-bold">IP</span>
            </div>
            <span className="font-bold text-gray-900">InsightPoint</span>
          </div>
          <p className="text-gray-400 text-sm">© 2025 InsightPoint AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
