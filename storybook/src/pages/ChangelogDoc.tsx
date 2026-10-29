import React, { useState, useMemo, useCallback } from 'react';
// UX4G React Native Design System - Changes Logs Documentation
import { CHANGELOG_DATA, LATEST_VERSION, type ReleaseVersion } from '../data/changelogData';
import './ChangelogDoc.css';

interface ChangelogDocProps {
  isDark?: boolean;
  onNavigate?: (page: string) => void;
}

export const ChangelogDoc: React.FC<ChangelogDocProps> = ({
  isDark = false,
  onNavigate,
}) => {
  const [selectedVersion, setSelectedVersion] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Latest release item
  const latestRelease = useMemo(() => {
    return CHANGELOG_DATA.find((r) => r.isLatest) || CHANGELOG_DATA[0];
  }, []);

  // Filtered versions based on selection, category, and search query
  const filteredVersions = useMemo(() => {
    let list = CHANGELOG_DATA;

    // Filter by specific version
    if (selectedVersion !== 'all') {
      list = list.filter((r) => r.version === selectedVersion);
    }

    // Filter by search query
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list
        .map((release) => {
          const matchVersion = release.version.toLowerCase().includes(q);
          const matchTitle = release.title.toLowerCase().includes(q);
          const matchOverview = release.overview.toLowerCase().includes(q);

          const matchingCategories = release.categories
            .map((cat) => {
              const matchingItems = cat.items.filter((item) => {
                const matchComp = item.component?.toLowerCase().includes(q);
                const matchSummary = item.summary.toLowerCase().includes(q);
                const matchDetails = item.details?.some((d) => d.toLowerCase().includes(q));
                return matchComp || matchSummary || matchDetails;
              });

              if (matchingItems.length > 0 || cat.type.toLowerCase().includes(q)) {
                return {
                  ...cat,
                  items: matchingItems.length > 0 ? matchingItems : cat.items,
                };
              }
              return null;
            })
            .filter(Boolean) as typeof release.categories;

          if (matchVersion || matchTitle || matchOverview || matchingCategories.length > 0) {
            return {
              ...release,
              categories: matchingCategories.length > 0 ? matchingCategories : release.categories,
            };
          }
          return null;
        })
        .filter(Boolean) as ReleaseVersion[];
    }

    // Filter by category type
    if (selectedCategory !== 'all') {
      list = list
        .map((release) => {
          const matchingCategories = release.categories.filter((cat) => {
            if (selectedCategory === 'Fixed') {
              return cat.type === 'Fixed' || cat.label?.toLowerCase().includes('fixed');
            }
            if (selectedCategory === 'Added') {
              return cat.type === 'Added' || cat.label?.toLowerCase().includes('added');
            }
            if (selectedCategory === 'Enhanced') {
              return cat.type === 'Enhanced' || cat.label?.toLowerCase().includes('enhanced');
            }
            if (selectedCategory === 'Changed') {
              return cat.type === 'Changed' || cat.label?.toLowerCase().includes('changed');
            }
            return cat.type.toLowerCase() === selectedCategory.toLowerCase();
          });

          if (matchingCategories.length > 0) {
            return {
              ...release,
              categories: matchingCategories,
            };
          }
          return null;
        })
        .filter(Boolean) as ReleaseVersion[];
    }

    return list;
  }, [selectedVersion, selectedCategory, searchQuery]);

  // Copy handler with visual feedback
  const handleCopy = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedText(id);
    setTimeout(() => {
      setCopiedText((prev) => (prev === id ? null : prev));
    }, 2000);
  }, []);

  // Jump to specific version
  const handleSelectVersion = useCallback((ver: string) => {
    setSelectedVersion(ver);
    const element = document.getElementById(`version-${ver.replace(/\./g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className={`cl-wrapper ${isDark ? 'dark' : ''}`}>
      {/* Header Section */}
      <header className="cl-header">
        <div className="cl-header-top">
          <div className="cl-header-badge">
            <span className="cl-header-badge-dot" />
            UX4G Design System
          </div>
          <div className="cl-latest-pill">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
              verified
            </span>
            Latest v{LATEST_VERSION}
          </div>
          <span className="cl-header-lib-tag">
            React Native Component Library
          </span>
        </div>

        <h1 className="cl-title">Changes Logs</h1>
        <p className="cl-subtitle">
          Keep track of recent updates, new components, bug fixes, enhancements, and breaking changes
          across every release of the UX4G React Native component library.
        </p>

        {/* Action Row */}
        <div className="cl-action-row">
          <div className="cl-install-pill">
            <span>npm i ux4g-react-native-components@{LATEST_VERSION}</span>
            <button
              className={`cl-copy-icon-btn ${copiedText === 'header-install' ? 'copied' : ''}`}
              onClick={() =>
                handleCopy(`npm install ux4g-react-native-components@${LATEST_VERSION}`, 'header-install')
              }
              title="Copy install command"
              type="button"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                {copiedText === 'header-install' ? 'check' : 'content_copy'}
              </span>
              {copiedText === 'header-install' ? 'Copied' : 'Copy'}
            </button>
          </div>

        </div>
      </header>

      {/* Spotlight Card: What's Introduced in Latest Version (v1.2.2) */}
      {(selectedVersion === 'all' || selectedVersion === latestRelease.version) && (
        <section className="cl-spotlight-card">
          <div className="cl-spotlight-top">
            <span className="cl-spotlight-tag">
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>
                star
              </span>
              Latest Version Highlights • v{latestRelease.version}
            </span>
            <span className="cl-spotlight-date">Released {latestRelease.relativeDate} ({latestRelease.date})</span>
          </div>

          <h2 className="cl-spotlight-title">{latestRelease.title}</h2>
          <p className="cl-spotlight-desc">{latestRelease.overview}</p>

          <div className="cl-spotlight-grid">
            {latestRelease.highlights?.map((highlight, idx) => (
              <div key={idx} className="cl-spotlight-item">
                <span className="material-symbols-outlined cl-spotlight-item-icon">
                  check_circle
                </span>
                <span className="cl-spotlight-item-text">{highlight}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Controls & Version Switcher Card */}
      <section className="cl-controls-card">
        <div className="cl-controls-top">
          {/* Real-time Search */}
          <div className="cl-search-box">
            <span className="material-symbols-outlined cl-search-icon">search</span>
            <input
              type="text"
              className="cl-search-input"
              placeholder="Search updates, components, or bug fixes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9ca3af',
                }}
                type="button"
                title="Clear search"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  close
                </span>
              </button>
            )}
          </div>

          {/* Quick Dropdown Version Selector */}
          <div className="cl-version-dropdown-wrap">
            <label htmlFor="version-selector" className="cl-version-dropdown-label">
              Jump to version:
            </label>
            <select
              id="version-selector"
              className="cl-version-select"
              value={selectedVersion}
              onChange={(e) => handleSelectVersion(e.target.value)}
            >
              <option value="all">All Releases ({CHANGELOG_DATA.length})</option>
              {CHANGELOG_DATA.map((rel) => (
                <option key={rel.version} value={rel.version}>
                  v{rel.version} {rel.isLatest ? '(Latest)' : ''} — {rel.relativeDate}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Horizontal Version Pills (Tabs) */}
        <div className="cl-version-pills-bar">
          <button
            type="button"
            className={`cl-version-pill ${selectedVersion === 'all' ? 'active' : ''}`}
            onClick={() => handleSelectVersion('all')}
          >
            All Releases
          </button>
          {CHANGELOG_DATA.map((rel) => (
            <button
              type="button"
              key={rel.version}
              className={`cl-version-pill ${selectedVersion === rel.version ? 'active' : ''}`}
              onClick={() => handleSelectVersion(rel.version)}
            >
              v{rel.version}
              {rel.isLatest && <span className="cl-pill-latest-badge">Latest</span>}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="cl-category-filter-row">
          <span className="cl-filter-label">Filter Category:</span>
          {['all', 'Added', 'Fixed', 'Enhanced'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cl-filter-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'All Updates' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Timeline / List of Versions */}
      <div className="cl-timeline">
        {filteredVersions.length === 0 ? (
          <div className="cl-empty-state">
            <span className="material-symbols-outlined cl-empty-icon">history_toggle_off</span>
            <h3 className="cl-empty-title">No changelog entries matched</h3>
            <p className="cl-empty-desc">
              Try adjusting your search query or selecting a different version filter.
            </p>
            <button
              className="cl-secondary-btn"
              style={{ margin: '14px auto 0 auto' }}
              onClick={() => {
                setSearchQuery('');
                setSelectedVersion('all');
                setSelectedCategory('all');
              }}
              type="button"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredVersions.map((release) => {
            const isReleaseLatest = release.isLatest;

            return (
              <article
                key={release.version}
                id={`version-${release.version.replace(/\./g, '-')}`}
                className={`cl-card ${isReleaseLatest ? 'latest-card' : ''}`}
              >
                {/* Card Header */}
                <div className="cl-card-header">
                  <div className="cl-card-header-left">
                    <div className="cl-version-title-group">
                      <span className="cl-version-number">v{release.version}</span>
                      {release.tag && (
                        <span className={`cl-tag-badge ${release.tag.toLowerCase()}`}>
                          {release.tag}
                        </span>
                      )}
                    </div>
                    <span className="cl-card-date">• Released {release.relativeDate} ({release.date})</span>
                  </div>

                  {/* Copy command for this specific version */}
                  <button
                    className={`cl-copy-icon-btn ${
                      copiedText === `install-${release.version}` ? 'copied' : ''
                    }`}
                    onClick={() =>
                      handleCopy(
                        `npm install ux4g-react-native-components@${release.version}`,
                        `install-${release.version}`
                      )
                    }
                    title={`Copy install command for v${release.version}`}
                    type="button"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                      {copiedText === `install-${release.version}` ? 'check' : 'content_copy'}
                    </span>
                    {copiedText === `install-${release.version}`
                      ? 'Copied'
                      : `npm i @${release.version}`}
                  </button>
                </div>

                <h3 className="cl-card-title">{release.title}</h3>
                <p className="cl-card-overview">{release.overview}</p>

                {/* Categories & Items inside this release */}
                {release.categories.map((cat, catIdx) => (
                  <div key={catIdx} className="cl-category-block">
                    <div className="cl-category-header">
                      <span className={`cl-type-chip ${cat.type.toLowerCase()}`}>
                        {cat.type}
                      </span>
                      <span className="cl-category-label">
                        {cat.label || `${cat.type} Updates`}
                      </span>
                    </div>

                    <div className="cl-item-list">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="cl-item-row">
                          <div className="cl-item-main">
                            {item.component && (
                              <>
                                {item.componentLink && onNavigate ? (
                                  <button
                                    className="cl-component-link"
                                    onClick={() => onNavigate(item.componentLink!)}
                                    title={`Go to ${item.component} documentation`}
                                    type="button"
                                  >
                                    <span>{item.component}</span>
                                    <span
                                      className="material-symbols-outlined"
                                      style={{ fontSize: 13 }}
                                    >
                                      arrow_forward
                                    </span>
                                  </button>
                                ) : (
                                  <span className="cl-component-link">{item.component}</span>
                                )}
                              </>
                            )}
                            <span className="cl-item-summary">{item.summary}</span>
                          </div>

                          {item.details && item.details.length > 0 && (
                            <ul className="cl-item-details-list">
                              {item.details.map((detail, dIdx) => (
                                <li key={dIdx} className="cl-item-detail-point">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};
