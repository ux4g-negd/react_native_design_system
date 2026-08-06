import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Introduction } from './pages/Introduction';
import { ButtonDoc } from './pages/ButtonDoc';
import { ColorsDoc, ColorsSection } from './pages/ColorsDoc';
import { TypographyDoc, TypographySection } from './pages/TypographyDoc';
import { ShadowDoc, ShadowSection } from './pages/ShadowDoc';
import { DimensionsDoc, DimensionsSection } from './pages/DimensionsDoc';
import {
  getPageFromUrl,
  updateUrlForPage,
} from './utils/router';

const getMobileBreadcrumb = (page: string) => {
  if (page === 'introduction') return 'Introduction';
  if (page === 'quickstart') return 'Quick Start Guide';
  if (page.startsWith('colors-')) {
    const s = page.replace('colors-', '');
    return `Token / Colors / ${s.charAt(0).toUpperCase() + s.slice(1)}`;
  }
  if (page.startsWith('typography')) return 'Token / Typography';
  if (page.startsWith('shadow')) return 'Token / Shadow';
  if (page.startsWith('dimensions') || ['spacing', 'radius'].includes(page)) return 'Token / Dimensions';
  if (page.startsWith('button')) return 'Components / Buttons';
  if (page.startsWith('date-picker')) return 'Components / Date Picker';
  return 'Documentation';
};

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('introduction');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleNavigate = useCallback((page: string) => {
    setActivePage(page);
    updateUrlForPage(page);
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const initialPage = getPageFromUrl();
    setActivePage(initialPage);

    const handleUrlChange = () => {
      const page = getPageFromUrl();
      setActivePage(page);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const renderPage = () => {
    if (activePage.startsWith('colors-')) {
      const section = activePage.replace('colors-', '') as ColorsSection;
      return <ColorsDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('typography')) {
      const section = (activePage.replace('typography-', '').replace('typography', 'header')) as TypographySection;
      return <TypographyDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('shadow')) {
      const section = (activePage.replace('shadow-', '').replace('shadow', 'scale')) as ShadowSection;
      return <ShadowDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('dimensions') || ['spacing', 'radius'].includes(activePage)) {
      let section: DimensionsSection = 'spacing';
      if (activePage === 'radius' || activePage === 'dimensions-radius') section = 'radius';
      else if (activePage === 'dimensions-border') section = 'border';
      else if (activePage === 'dimensions-usage') section = 'usage';
      return <DimensionsDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('button')) {
      return <ButtonDoc isDark={isDark} story={activePage} />;
    }

    switch (activePage) {
      case 'introduction':
        return <Introduction isDark={isDark} onNavigate={handleNavigate} />;
      default:
        return <ButtonDoc isDark={isDark} story={activePage} />;
    }
  };

  return (
    <div className="app-layout">
      {/* Mobile Top Navigation Bar */}
      <header className={`mobile-topbar ${isDark ? 'dark' : ''}`}>
        <div className="mobile-logo-wrapper" onClick={() => handleNavigate('introduction')}>
          <img src="/ux4g_logo.svg" alt="UX4G Logo" className="mobile-logo-img" />
        </div>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined theme-toggle-icon">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </header>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />
      <main className={`main-content ${isDark ? 'dark' : ''} ${activePage === 'introduction' ? 'no-padding' : ''}`}>
        {renderPage()}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <div
        className={`mobile-bottombar ${isDark ? 'dark' : ''}`}
        onClick={() => setIsMobileOpen((prev) => !prev)}
      >
        <div className="mobile-bottombar-left">
          <span className="material-symbols-outlined mobile-bottombar-icon">
            {isMobileOpen ? 'close' : 'menu'}
          </span>
          <span className="mobile-bottombar-path">{getMobileBreadcrumb(activePage)}</span>
        </div>
        <span className="material-symbols-outlined mobile-bottombar-chevron">
          {isMobileOpen ? 'expand_more' : 'expand_less'}
        </span>
      </div>
    </div>
  );
};

export default App;
