import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Introduction } from './pages/Introduction';
import { ButtonDoc } from './pages/ButtonDoc';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('introduction');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const renderPage = () => {
    switch (activePage) {
      case 'introduction':
        return <Introduction isDark={isDark} onNavigate={setActivePage} />;
      case 'button':
        return <ButtonDoc isDark={isDark} />;
      default:
        // Placeholder for pages not yet built
        return (
          <div className="doc-container">
            <div className="doc-header">
              <h1 className="doc-title" style={{ textTransform: 'capitalize' }}>
                {activePage.replace(/-/g, ' ')}
              </h1>
              <p className="doc-description">
                Documentation for this component is coming soon. Currently only the
                Button component is documented with live preview and code.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
      <main className={`main-content ${isDark ? 'dark' : ''} ${activePage === 'introduction' ? 'no-padding' : ''}`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
