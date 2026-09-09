import React, { useState, useMemo, useEffect } from 'react';
import { RN_COMPONENTS_DATA, type RNComponentItem } from '../data/migration/rnComponentsData';
import { RN_PROPS_MAPPING_DATA } from '../data/migration/rnPropsMappingData';
import { RN_TOKENS_DATA } from '../data/migration/rnTokensData';
import { MIGRATION_MD_CONTENT } from '../data/migration/migrationMarkdown';
import './ComponentMappingDoc.css';

interface ComponentMappingDocProps {
  isDark?: boolean;
  onNavigate?: (page: string) => void;
}

function ReactNativePaperIcon({ className = 'mg-framework-icon' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="22" fill="#6200EE" />
      <path
        d="M28 28H72V72H28V28Z"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 44L58 44"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M42 56L58 56"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReactNativeElementsIcon({ className = 'mg-framework-icon' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="22" fill="#2089DC" />
      <circle cx="50" cy="50" r="10" fill="white" />
      <ellipse cx="50" cy="50" rx="34" ry="14" stroke="white" strokeWidth="4" transform="rotate(30 50 50)" />
      <ellipse cx="50" cy="50" rx="34" ry="14" stroke="white" strokeWidth="4" transform="rotate(-30 50 50)" />
      <ellipse cx="50" cy="50" rx="34" ry="14" stroke="white" strokeWidth="4" transform="rotate(90 50 50)" />
    </svg>
  );
}

type TabId = 'components' | 'props-mapping' | 'tokens' | 'gov-exclusive';

interface TabDef {
  id: TabId;
  label: string;
  badge?: string;
}

const TABS: TabDef[] = [
  { id: 'components', label: 'Components', badge: `${RN_COMPONENTS_DATA.length}` },
  { id: 'props-mapping', label: 'Props & API Mapping', badge: `${RN_PROPS_MAPPING_DATA.length} APIs` },
  { id: 'tokens', label: 'Tokens & Theming', badge: 'Parity' },
  { id: 'gov-exclusive', label: 'Gov-Exclusive Modules', badge: '8+' },
];

export const ComponentMappingDoc: React.FC<ComponentMappingDocProps> = ({
  isDark = false,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('components');
  const [scrolled, setScrolled] = useState(false);

  // Tab 1: Components state
  const [compSearch, setCompSearch] = useState('');
  const [compFilter, setCompFilter] = useState('all');

  // Tab 2: Props Mapping state
  const [propSearch, setPropSearch] = useState('');
  const [selectedCompFilter, setSelectedCompFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered Components
  const filteredComponents = useMemo(() => {
    const s = compSearch.toLowerCase().trim();
    return RN_COMPONENTS_DATA.filter((item: RNComponentItem) => {
      const matchText =
        `${item.name} ${item.ux4gText} ${item.paperText} ${item.rneText} ${item.notes} ${item.category}`.toLowerCase();
      const textMatches = !s || matchText.includes(s);
      if (!textMatches) return false;

      if (compFilter === 'all') return true;
      if (compFilter === 'all-three') return item.match === 'all-three';
      if (compFilter === 'has-ux4g') return item.ux4gText.includes('Yes');
      if (compFilter === 'ux4g-only') return item.match === 'ux4g-only';
      if (compFilter === 'has-paper') return item.paperText.includes('Yes');
      if (compFilter === 'only-paper') {
        return item.paperText.includes('Yes') && !item.ux4gText.includes('Yes');
      }
      if (compFilter === 'has-rne') return item.rneText.includes('Yes');
      if (compFilter === 'only-rne') {
        return item.rneText.includes('Yes') && !item.ux4gText.includes('Yes');
      }
      if (compFilter === 'partial') return item.match === 'partial';
      return true;
    });
  }, [compSearch, compFilter]);

  // Filtered Props
  const filteredProps = useMemo(() => {
    const s = propSearch.toLowerCase().trim();
    return RN_PROPS_MAPPING_DATA.filter((item) => {
      if (selectedCompFilter !== 'all' && item.component.toLowerCase() !== selectedCompFilter.toLowerCase()) {
        return false;
      }
      if (!s) return true;
      const combined =
        `${item.component} ${item.propGroup} ${item.ux4gProp} ${item.paperProp} ${item.rneProp} ${item.description}`.toLowerCase();
      return combined.includes(s);
    });
  }, [selectedCompFilter, propSearch]);

  const uniquePropComponents = useMemo(() => {
    return Array.from(new Set(RN_PROPS_MAPPING_DATA.map((p) => p.component))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);

  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadMigrationDoc = () => {
    try {
      const blob = new Blob([MIGRATION_MD_CONTENT], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'MIGRATION.md';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to download MIGRATION.md:', err);
    }
  };

  return (
    <div className={`mg-page ${isDark ? 'dark' : ''}`}>
      {/* Blocker to cover top header gap on scroll */}
      {scrolled && <div className="mg-scroll-blocker" />}

      {/* Hero Header */}
      <section className="mg-hero">
        <div className="mg-ambient-glow-1" />
        <div className="mg-ambient-glow-2" />

        <div className="mg-hero-content">
          {/* Top Eyebrow Badge */}
          <div className="mg-eyebrow-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>React Native Ecosystem Parity & Migration Report</span>
          </div>

          {/* Title with React Native framework logos */}
          <div className="mg-hero-logos">
            {/* UX4G React Native Logo Box */}
            <span className="mg-framework-logo-box">
              <img
                src="/ux4g_logo.svg"
                alt="UX4G"
                className="mg-framework-img"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              {/* <span className="mg-framework-text-logo">UX4G</span> */}
            </span>

            <span className="mg-framework-arrow">↔</span>

            {/* React Native Paper Logo */}
            <span className="mg-framework-logo-box" title="React Native Paper (Material Design 3)">
              <ReactNativePaperIcon className="mg-framework-icon" />
            </span>

            <span className="mg-framework-arrow">↔</span>

            {/* React Native Elements / NativeBase Logo */}
            <span className="mg-framework-logo-box" title="React Native Elements / NativeBase">
              <ReactNativeElementsIcon className="mg-framework-icon" />
            </span>
          </div>

          <p className="mg-hero-desc">
            Detailed cross-framework component mapping for 42+ UX4G React Native components, React Native Paper
            (Material Design 3) and React Native Elements equivalents, props parity, and migration guidelines.
          </p>
        </div>
      </section>

      {/* Pill-Segmented Developer Tab Bar */}
      <section className="mg-sticky-tab-bar">
        <div className="mg-tab-container">
          <div className="mg-tablist" role="tablist">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab(tab.id)}
                  className={`mg-tab ${isActive ? 'is-active' : ''}`}
                >
                  <span>{tab.label}</span>
                  {tab.badge && <span className="mg-tab-badge">{tab.badge}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mg-body-container">
        {/* TAB 1: COMPONENTS */}
        {activeTab === 'components' && (
          <section>
            <div className="mg-section-header">
              <div style={{ flex: 1, minWidth: 260 }}>
                <div className="mg-section-title-row">
                  <h2 className="mg-section-heading">Component Mapping</h2>
                  <span className="mg-count-pill">
                    {filteredComponents.length} of {RN_COMPONENTS_DATA.length} components
                  </span>
                </div>
                <p className="mg-section-desc">
                  Side-by-side component availability across UX4G React Native, React Native Paper (MD3), and React Native Elements.
                </p>
              </div>

              <div className="mg-header-actions" style={{ marginLeft: 'auto' }}>
                <button
                  type="button"
                  onClick={handleDownloadMigrationDoc}
                  className={`mg-download-btn ${downloadSuccess ? 'is-success' : ''}`}
                  title="Download MIGRATION.md guide"
                >
                  <span className="material-symbols-outlined mg-download-icon">
                    {downloadSuccess ? 'check' : 'download'}
                  </span>
                  <span>migration.md</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="mg-filter-bar">
              <div className="mg-search-wrapper">
                <span className="material-symbols-outlined mg-search-icon">search</span>
                <input
                  type="text"
                  placeholder="Search component name or framework..."
                  value={compSearch}
                  onChange={(e) => setCompSearch(e.target.value)}
                  className="mg-search-input"
                />
              </div>

              <select
                value={compFilter}
                onChange={(e) => setCompFilter(e.target.value)}
                className="mg-select"
              >
                <option value="all">All Components</option>
                <option value="all-three">In All 3 Libraries</option>
                <option value="has-ux4g">Has UX4G</option>
                <option value="ux4g-only">UX4G Exclusive</option>
                <option value="has-paper">Has RN Paper</option>
                <option value="only-paper">Only RN Paper</option>
                <option value="has-rne">Has NativeBase / RN Elements</option>
                <option value="only-rne">Only NativeBase / RN Elements</option>
                <option value="partial">Partial / Alternative</option>
              </select>
            </div>

            {/* Table */}
            <div className="mg-table-wrapper">
              <table className="mg-table">
                <thead>
                  <tr>
                    <th style={{ width: '4%' }}>#</th>
                    <th style={{ width: '22%' }}>Component Name</th>
                    <th className="mg-th-ux4g" style={{ width: '24%' }}>UX4G React Native</th>
                    <th className="mg-th-bs" style={{ width: '22%' }}>RN Paper (MD3)</th>
                    <th className="mg-th-m3" style={{ width: '20%' }}>RN Elements / NativeBase</th>
                    <th style={{ width: '8%' }}>Docs</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredComponents.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{item.name}</div>
                        <div style={{ fontSize: 11, color: isDark ? '#94a3b8' : '#64748b' }}>
                          {item.category}
                        </div>
                      </td>
                      <td dangerouslySetInnerHTML={{ __html: item.ux4gHtml }} />
                      <td dangerouslySetInnerHTML={{ __html: item.paperHtml }} />
                      <td dangerouslySetInnerHTML={{ __html: item.rneHtml }} />
                      <td>
                        {onNavigate && (
                          <button
                            type="button"
                            onClick={() => onNavigate(item.storybookId)}
                            className="mg-page-btn"
                            style={{ padding: '2px 8px', fontSize: '11px', height: 'auto' }}
                            title={`View ${item.name} story`}
                          >
                            View &rarr;
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 2: PROPS & API MAPPING */}
        {activeTab === 'props-mapping' && (
          <section>
            <div className="mg-section-header">
              <div>
                <div className="mg-section-title-row">
                  <h2 className="mg-section-heading">Props & API Migration Mapping</h2>
                  <span className="mg-count-pill">
                    {filteredProps.length} of {RN_PROPS_MAPPING_DATA.length} Props ({uniquePropComponents.length} Components)
                  </span>
                </div>
                <p className="mg-section-desc">
                  Direct prop translation reference between React Native Paper, React Native Elements, and UX4G React Native components.
                </p>
              </div>
            </div>

            {/* Component Filter Pills */}
            <div className="mg-pill-toolbar">
              <button
                type="button"
                onClick={() => setSelectedCompFilter('all')}
                className={`mg-pill-btn ${selectedCompFilter === 'all' ? 'is-active' : ''}`}
              >
                All Components ({RN_PROPS_MAPPING_DATA.length})
              </button>
              {uniquePropComponents.map((comp) => {
                const count = RN_PROPS_MAPPING_DATA.filter((p) => p.component === comp).length;
                return (
                  <button
                    key={comp}
                    type="button"
                    onClick={() => setSelectedCompFilter(comp)}
                    className={`mg-pill-btn ${selectedCompFilter === comp ? 'is-active' : ''}`}
                  >
                    {comp} ({count})
                  </button>
                );
              })}
            </div>

            {/* Filter Bar */}
            <div className="mg-filter-bar">
              <div className="mg-search-wrapper">
                <span className="material-symbols-outlined mg-search-icon">search</span>
                <input
                  type="text"
                  placeholder="Search prop name, component, or description..."
                  value={propSearch}
                  onChange={(e) => setPropSearch(e.target.value)}
                  className="mg-search-input"
                />
              </div>
            </div>

            {/* Table */}
            <div className="mg-table-wrapper">
              <table className="mg-table">
                <thead>
                  <tr>
                    <th style={{ width: '13%' }}>Component</th>
                    <th style={{ width: '13%' }}>Prop Area</th>
                    <th className="mg-th-ux4g" style={{ width: '22%' }}>UX4G React Native Prop</th>
                    <th className="mg-th-bs" style={{ width: '18%' }}>RN Paper Equivalent</th>
                    <th className="mg-th-m3" style={{ width: '18%' }}>RN Elements Equivalent</th>
                    <th style={{ width: '16%' }}>Description & Migration</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProps.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{item.component}</td>
                      <td>
                        <span className="mg-count-pill" style={{ fontSize: '11px' }}>
                          {item.propGroup}
                        </span>
                      </td>
                      <td>
                        <code className="mg-css-code">{item.ux4gProp}</code>
                      </td>
                      <td>
                        <code className="mg-css-code" style={{ color: '#7952b3' }}>
                          {item.paperProp}
                        </code>
                      </td>
                      <td>
                        <code className="mg-css-code" style={{ color: '#0284c7' }}>
                          {item.rneProp}
                        </code>
                      </td>
                      <td style={{ fontSize: 13, color: isDark ? '#cbd5e1' : '#475569' }}>
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 3: TOKENS & THEMING */}
        {activeTab === 'tokens' && (
          <section>
            <div className="mg-section-header">
              <div>
                <h2 className="mg-section-heading">Tokens & Theming Parity</h2>
                <p className="mg-section-desc">
                  Complete design tokens calibration for React Native: Colors, Typography Scale, Dimensions/Spacing, and WCAG AA contrast.
                </p>
              </div>
            </div>

            {/* Metric Cards Dashboard */}
            <div className="mg-stats-grid">
              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">RN Paper Parity</span>
                  <div className="mg-stat-card__icon">
                    <span className="material-symbols-outlined">layers</span>
                  </div>
                </div>
                <div className="mg-stat-card__pct">{RN_TOKENS_DATA.stats.paperParity.pct}</div>
                <div className="mg-stat-card__label">{RN_TOKENS_DATA.stats.paperParity.label}</div>
                <p className="mg-stat-card__desc">{RN_TOKENS_DATA.stats.paperParity.text}</p>
                <div className="mg-progress-track">
                  <div className="mg-progress-fill" style={{ width: RN_TOKENS_DATA.stats.paperParity.pct }} />
                </div>
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">RN Elements Parity</span>
                  <div className="mg-stat-card__icon">
                    <span className="material-symbols-outlined">widgets</span>
                  </div>
                </div>
                <div className="mg-stat-card__pct">{RN_TOKENS_DATA.stats.rneParity.pct}</div>
                <div className="mg-stat-card__label">{RN_TOKENS_DATA.stats.rneParity.label}</div>
                <p className="mg-stat-card__desc">{RN_TOKENS_DATA.stats.rneParity.text}</p>
                <div className="mg-progress-track">
                  <div className="mg-progress-fill" style={{ width: RN_TOKENS_DATA.stats.rneParity.pct }} />
                </div>
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Government Accessibility</span>
                  <div className="mg-stat-card__icon">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                </div>
                <div className="mg-stat-card__pct">{RN_TOKENS_DATA.stats.a11yCompliance.pct}</div>
                <div className="mg-stat-card__label">{RN_TOKENS_DATA.stats.a11yCompliance.label}</div>
                <p className="mg-stat-card__desc">{RN_TOKENS_DATA.stats.a11yCompliance.text}</p>
                <div className="mg-progress-track">
                  <div className="mg-progress-fill" style={{ width: '100%' }} />
                </div>
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Cross-Platform Sync</span>
                  <div className="mg-stat-card__icon">
                    <span className="material-symbols-outlined">devices</span>
                  </div>
                </div>
                <div className="mg-stat-card__pct">{RN_TOKENS_DATA.stats.crossPlatform.pct}</div>
                <div className="mg-stat-card__label">{RN_TOKENS_DATA.stats.crossPlatform.label}</div>
                <p className="mg-stat-card__desc">{RN_TOKENS_DATA.stats.crossPlatform.text}</p>
                <div className="mg-progress-track">
                  <div className="mg-progress-fill" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Colors Table */}
            <div style={{ marginTop: '2.5rem' }}>
              <div className="mg-matrix-card" style={{ marginBottom: '2rem' }}>
                <div className="mg-matrix-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#5b3ae6' }} />
                    <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>
                      1. Color Tokens & Theme Mapping (WCAG 2.1 AA)
                    </h3>
                  </div>
                  <span className="mg-count-pill" style={{ fontSize: '11px' }}>Theme Colors</span>
                </div>
                <div className="mg-table-wrapper">
                  <table className="mg-table">
                    <thead>
                      <tr>
                        <th>UX4G Token</th>
                        <th>Paper MD3 Equivalent</th>
                        <th>Color Preview & Hex</th>
                        <th>Functional Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RN_TOKENS_DATA.colorTokens.map((c, idx) => (
                        <tr key={idx}>
                          <td><code>{c.token}</code></td>
                          <td><code>{c.paper}</code></td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: c.hex, border: '1px solid rgba(0,0,0,0.1)' }} />
                              <code>{c.hex}</code>
                            </div>
                          </td>
                          <td style={{ fontSize: 13 }}>{c.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Typography Scale */}
              <div className="mg-matrix-card" style={{ marginBottom: '2rem' }}>
                <div className="mg-matrix-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#5b3ae6' }} />
                    <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>
                      2. Typography Scale (Multilingual Indian Script Optimized)
                    </h3>
                  </div>
                  <span className="mg-count-pill" style={{ fontSize: '11px' }}>Typography</span>
                </div>
                <div className="mg-table-wrapper">
                  <table className="mg-table">
                    <thead>
                      <tr>
                        <th>Style Level</th>
                        <th>Font Size</th>
                        <th>Line Height</th>
                        <th>Font Weight</th>
                        <th>Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RN_TOKENS_DATA.typeScale.map((t, idx) => (
                        <tr key={idx}>
                          <td style={{ fontWeight: 600 }}>{t.level}</td>
                          <td><code>{t.fontSize}</code></td>
                          <td><code>{t.lineHeight}</code></td>
                          <td>{t.weight}</td>
                          <td style={{ fontSize: 13 }}>{t.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Spacing Scale */}
              <div className="mg-matrix-card">
                <div className="mg-matrix-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#5b3ae6' }} />
                    <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>
                      3. Spacing Scale & Dimensions (4px Grid)
                    </h3>
                  </div>
                  <span className="mg-count-pill" style={{ fontSize: '11px' }}>Spacing Scale</span>
                </div>
                <div className="mg-table-wrapper">
                  <table className="mg-table">
                    <thead>
                      <tr>
                        <th>Token</th>
                        <th>Pixel Value</th>
                        <th>Application Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RN_TOKENS_DATA.spacingScale.map((s, idx) => (
                        <tr key={idx}>
                          <td><code>{s.token}</code></td>
                          <td><code>{s.px}</code></td>
                          <td style={{ fontSize: 13 }}>{s.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: GOV-EXCLUSIVE MODULES */}
        {activeTab === 'gov-exclusive' && (
          <section>
            <div className="mg-section-header">
              <div>
                <div className="mg-section-title-row">
                  <h2 className="mg-section-heading">Government-Exclusive Native Modules</h2>
                  <span className="mg-count-pill">8 Exclusive Components</span>
                </div>
                <p className="mg-section-desc">
                  High-value UI modules built specifically for digital governance, citizen verification, and public service apps.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Aadhaar Input Field</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">fingerprint</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  Auto-formatting 12-digit input with built-in Verhoeff checksum algorithm and masked peek toggle.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('input-aadhaar-basic')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore Aadhaar Input &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">PAN Card Input Field</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">credit_card</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  10-character alphanumeric PAN validator with uppercase formatting and structural syntax checks.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('input-pan-basic')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore PAN Input &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Secure OTP Box</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">password</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  4/6-digit secure PIN inputs with auto-focus, SMS auto-fill, resend timer, and attempt lockouts.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('input-otp-basic')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore OTP Input &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Journey Timeline</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">timeline</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  Multi-stage citizen application tracker (Submitted &rarr; Verified &rarr; Approved) with timestamps.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('journey-timeline-basic')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore Journey Timeline &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Status Pipeline</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">alt_route</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  Horizontal & vertical workflow stage pipeline with completed, active, pending, and error states.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('status-pipeline-vertical')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore Status Pipeline &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">CSAT & NPS Feedback</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">rate_review</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  Official citizen satisfaction survey collection with 1-5 Star scoring, CSAT faces, and 0-10 NPS rating.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('feedbackformstar')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore Feedback Forms &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Time Slot Booking Grid</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">calendar_month</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  Appointment slot selector (Available, Selected, Booked, Inactive) for citizen service centers.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('timeslot-introduction')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore Time Slot Grid &rarr;
                  </button>
                )}
              </div>

              <div className="mg-stat-card">
                <div className="mg-stat-card__top">
                  <span className="mg-stat-card__title">Draft Status Banner</span>
                  <div className="mg-stat-card__icon"><span className="material-symbols-outlined">drafts</span></div>
                </div>
                <p className="mg-stat-card__desc" style={{ marginTop: '0.75rem' }}>
                  Persistent application draft indicators with auto-save timers and submission reminders.
                </p>
                {onNavigate && (
                  <button type="button" onClick={() => onNavigate('status-banner-basic')} className="mg-page-btn" style={{ marginTop: '1rem', width: 'max-content' }}>
                    Explore Status Banner &rarr;
                  </button>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ComponentMappingDoc;
