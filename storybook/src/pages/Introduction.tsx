import React from 'react';

interface IntroductionProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ isDark, onNavigate }) => {
  return (
    <div className={`welcome-wrapper ${isDark ? 'dark' : ''}`}>
      <div className="welcome-container">
        {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
        <section className="hero-section">
          {/* Left Hero Column */}
          <div className="hero-left">
            <div className="hero-logo-wrapper">
              <img src="/ux4g_logo.svg" alt="UX4G Logo" className="hero-logo-img" />
            </div>
            <h1 className="hero-title">
              React Native Documentation |<br />
              UX4G Design System
            </h1>
            <div className="version-badge">3.0</div>

            <h2 className="hero-tagline">
              Government-grade UI foundations for trusted public digital experiences.
            </h2>

            <p className="hero-description">
              UX4G gives product, design, and engineering teams one coherent system for
              building accessible, consistent, and scalable citizen-facing services.
            </p>

            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={() => onNavigate('quickstart')}>
                Get Started
              </button>
              <button className="btn-hero-secondary" onClick={() => onNavigate('accordion-basic')}>
                Component Library
              </button>
            </div>
          </div>

          {/* Right Hero Overview Card */}
          <div className="hero-right">
            <div className="overview-card">
              <div className="overview-header-label">System overview</div>
              <h3 className="overview-card-title">
                One platform for<br />consistent public<br />service journeys.
              </h3>
              <p className="overview-card-desc">
                Start from shared tokens, move into reusable components, and document delivery paths in one place.
              </p>

              {/* Stats Row */}
              <div className="overview-stats-grid">
                <div className="stat-box">
                  <div className="stat-val">45+</div>
                  <div className="stat-lbl">Reusable<br />components</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-box">
                  <div className="stat-val">1K+</div>
                  <div className="stat-lbl">Design<br />tokens</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-box">
                  <div className="stat-val">10+</div>
                  <div className="stat-lbl">Patterns</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-box">
                  <div className="stat-val">AA</div>
                  <div className="stat-lbl">Accessibility<br />target</div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="overview-table-rows">
                <div className="overview-table-row">
                  <span className="table-row-cat">Tokens</span>
                  <span className="table-row-desc">Spacing, Radius, Colors</span>
                </div>
                <div className="overview-table-row">
                  <span className="table-row-cat">Components</span>
                  <span className="table-row-desc">Inputs, buttons, cards</span>
                </div>
                <div className="overview-table-row">
                  <span className="table-row-cat">Patterns</span>
                  <span className="table-row-desc">Headers, footers, forms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. CORE STRENGTHS SECTION ─────────────────────────────── */}
        <section className="section-block">
          <div className="section-kicker">Core strengths</div>
          <h2 className="section-heading">
            Built for design systems that need<br />to scale beyond one product team.
          </h2>
          <p className="section-subtext">
            UX4G combines visual consistency, engineering pragmatism, and accessibility expectations into a single documentation experience.
          </p>

          <div className="cards-grid cards-grid-2x2">
            <div className="feature-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <h3 className="feature-card-title">Scalable Architecture</h3>
              <p className="feature-card-desc">
                A structured system of foundations, patterns, and components that can scale across ministries, vendors, and service teams.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">accessibility_new</span>
              </div>
              <h3 className="feature-card-title">Accessible Components</h3>
              <p className="feature-card-desc">
                Interaction patterns are designed for clarity, contrast, keyboard use, and dependable public-facing experiences.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h3 className="feature-card-title">Token-Driven Design</h3>
              <p className="feature-card-desc">
                Color, typography, spacing, and elevation are governed through reusable tokens that keep every experience aligned.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h3 className="feature-card-title">Developer Friendly</h3>
              <p className="feature-card-desc">
                Composable utilities, production-ready components, and Storybook documentation reduce friction from exploration to delivery.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. LIBRARY MAP SECTION ────────────────────────────────── */}
        <section className="section-block">
          <div className="section-kicker">Library map</div>
          <h2 className="section-heading">
            Navigate the design system through the same<br />categories shown in the Storybook sidebar.
          </h2>
          <p className="section-subtext">
            Components, tokens, and Patterns are organized to help teams move from exploration to implementation without losing context.
          </p>

          <div className="cards-grid cards-grid-3">
            <div className="map-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">widgets</span>
              </div>
              <h3 className="feature-card-title">Components</h3>
              <p className="feature-card-desc">
                Form controls, navigation, feedback, and layout primitives designed for real government workflows.
              </p>
              <ul className="map-bullets">
                <li>Production-ready UI building blocks</li>
                <li>Interactive states documented in Storybook</li>
                <li>Consistent anatomy across surfaces</li>
              </ul>
            </div>

            <div className="map-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">style</span>
              </div>
              <h3 className="feature-card-title">Tokens</h3>
              <p className="feature-card-desc">
                Core design decisions captured as reusable color, typography, spacing, and semantic values.
              </p>
              <ul className="map-bullets">
                <li>Brand and neutral palettes</li>
                <li>Semantic mappings for surfaces and states</li>
                <li>A shared source of truth for scale</li>
              </ul>
            </div>

            <div className="map-card">
              <div className="feature-card-icon">
                <span className="material-symbols-outlined">dashboard_customize</span>
              </div>
              <h3 className="feature-card-title">Patterns</h3>
              <p className="feature-card-desc">
                Reusable block-level compositions like headers, footers, and complex forms used across applications.
              </p>
              <ul className="map-bullets">
                <li>Pre-built structural blocks</li>
                <li>Streamlined composition</li>
                <li>Accelerated feature delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 4. FOOTER ─────────────────────────────────────────────── */}
        <footer className="welcome-footer">
          <div className="footer-divider" />
          <div className="footer-content">
            <div className="footer-left">
              <img src="/ux4g_logo.svg" alt="UX4G Logo" className="footer-logo" />
              <span className="footer-tagline">
                A shared platform for accessible, consistent, and reliable public digital products.
              </span>
            </div>
            <div className="footer-right">
              <span className="footer-visit-text">Visit:</span>
              <a
                href="https://www.ux4g.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                ux4g.gov.in
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Introduction;
