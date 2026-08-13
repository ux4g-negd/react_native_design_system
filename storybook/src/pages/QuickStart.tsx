import React, { useState, useCallback } from 'react';

interface QuickStartProps {
  isDark: boolean;
  onNavigate: (page: string) => void;
}

interface DocSection {
  heading: string;
  body: string;
}

interface DocCode {
  label: string;
  code: string;
}

const OVERVIEW_SECTIONS: DocSection[] = [
  {
    heading: 'UX4G React Native Design System',
    body:
      'The React Native design system is built to deliver consistent, accessible, and trusted digital experiences across public service applications. It provides 45+ components, design tokens, and a theming system that follows UX4G accessibility guidelines.',
  },
  {
    heading: 'How to use this documentation',
    body:
      'Browse components using the left sidebar. Click any component to see its use cases.\n\n' +
      '• Preview tab — Live interactive component\n' +
      '• Code tab — Copy-ready React Native snippet\n' +
      '• Props tab — Parameter reference\n\n',
  },
];

const INSTALL_SECTIONS: DocSection[] = [
  {
    heading: 'Depend on it',
    body: 'Run this command:\nWith npm:',
  },
];

interface Requirement {
  name: string;
  version: string;
  required: boolean;
}

const REQUIREMENTS: Requirement[] = [
  { name: 'React Native', version: '>= 0.72.0', required: true },
  { name: 'React', version: '>= 18.0.0', required: true },
  // { name: 'react-native-svg', version: '>= 15.0.0', required: true },
  // { name: 'react-native-document-picker', version: '>= 9.0.0', required: false },
  // { name: 'react-native-image-picker', version: '>= 7.0.0', required: false },
];

const INSTALL_CODES: DocCode[] = [
  {
    label: 'Terminal',
    code: 'npm install ux4g-react-native-design-system',
  },
  {
    label: "This will add a line like this to your package's package.json\n(and run an implicit npm install):",
    code: '"dependencies": {\n  "ux4g-react-native-design-system": "^1.0.5"\n}',
  },
];

const IMPORT_SECTIONS: DocSection[] = [
  {
    heading: 'Import it',
    body: 'Now in your React Native code, you can use:',
  },
];

const IMPORT_CODES: DocCode[] = [
  {
    label: '',
    code: "import { Ux4gButton, Ux4gThemeProvider } from 'ux4g-react-native-design-system';",
  },
  {
    label: 'Wrap your app with Ux4gThemeProvider',
    code:
      "import React from 'react';\n" +
      "import { Ux4gThemeProvider, Ux4gButton } from 'ux4g-react-native-design-system';\n" +
      '\n' +
      'export default function App() {\n' +
      '  return (\n' +
      '    <Ux4gThemeProvider>\n' +
      "      <Ux4gButton text='Submit' onPress={() => {}} />\n" +
      '    </Ux4gThemeProvider>\n' +
      '  );\n' +
      '}',
  },
  {
    label: 'Use any component',
    code:
      "import { Ux4gButton } from 'ux4g-react-native-design-system';\n" +
      '\n' +
      "const MyScreen = () => (\n" +
      "  <Ux4gButton text='Submit' onPress={() => {}} />\n" +
      ');',
  },
];

const CopyButton: React.FC<{ text: string; isDark: boolean }> = ({ text, isDark }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      className={`qg-copy-btn ${isDark ? 'dark' : ''} ${copied ? 'copied' : ''}`}
      onClick={handleCopy}
      type="button"
    >
      {copied && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const CodeBlock: React.FC<{ block: DocCode; isDark: boolean }> = ({ block, isDark }) => (
  <div className="qg-code-wrap">
    {block.label && <div className={`qg-code-label ${isDark ? 'dark' : ''}`}>{block.label}</div>}
    <div className={`qg-code-block ${isDark ? 'dark' : ''}`}>
      <pre>{block.code}</pre>
      <div className="qg-copy-corner">
        <CopyButton text={block.code} isDark={isDark} />
      </div>
    </div>
  </div>
);

const Section: React.FC<{ section: DocSection; isDark: boolean }> = ({ section, isDark }) => (
  <div className="qg-section">
    <h3 className={`qg-section-heading ${isDark ? 'dark' : ''}`}>{section.heading}</h3>
    <p className={`qg-section-body ${isDark ? 'dark' : ''}`}>{section.body}</p>
  </div>
);

const Requirements: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className="qg-section">
    <h3 className={`qg-section-heading ${isDark ? 'dark' : ''}`}>Requirements</h3>
    <p className={`qg-section-body ${isDark ? 'dark' : ''}`}>
      Make sure your project meets the minimum versions below before installing. The package is
      built for React Native 0.72 and above — using an older version may cause runtime errors.
    </p>
    <div className="qg-req-table">
      <div className={`qg-req-row qg-req-head ${isDark ? 'dark' : ''}`}>
        <span className="qg-req-cell qg-req-name">Package</span>
        <span className="qg-req-cell qg-req-ver">Minimum version</span>
        <span className="qg-req-cell qg-req-req">Required</span>
      </div>
      {REQUIREMENTS.map((r) => (
        <div key={r.name} className={`qg-req-row ${isDark ? 'dark' : ''}`}>
          <span className={`qg-req-cell qg-req-name ${isDark ? 'dark' : ''}`}>
            <code>{r.name}</code>
          </span>
          <span className={`qg-req-cell qg-req-ver ${isDark ? 'dark' : ''}`}>
            <code>{r.version}</code>
          </span>
          <span className={`qg-req-cell qg-req-req ${isDark ? 'dark' : ''}`}>
            {r.required ? (
              <span className="qg-req-badge qg-req-badge-yes">Yes</span>
            ) : (
              <span className="qg-req-badge qg-req-badge-opt">Optional</span>
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// const NextSteps: React.FC<{ isDark: boolean; onNavigate: (page: string) => void }> = ({
//   isDark,
//   onNavigate,
// }) => (
//   <div className="qg-section">
//     <h3 className={`qg-section-heading ${isDark ? 'dark' : ''}`}>Next steps</h3>
//     <div className="qg-next-row">
//       <button className={`qg-next-chip ${isDark ? 'dark' : ''}`} onClick={() => onNavigate('colors-primary')}>
//         <span className="material-symbols-outlined qg-next-chip-icon">palette</span>
//         Design Tokens
//       </button>
//       <button className={`qg-next-chip ${isDark ? 'dark' : ''}`} onClick={() => onNavigate('button-introduction')}>
//         <span className="material-symbols-outlined qg-next-chip-icon">widgets</span>
//         Components
//       </button>
//       <a
//         className={`qg-next-chip ${isDark ? 'dark' : ''}`}
//         href="https://www.npmjs.com/package/ux4g-react-native-design-system"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <span className="material-symbols-outlined qg-next-chip-icon">open_in_new</span>
//         View on npm
//       </a>
//     </div>
//   </div>
// );

export const QuickStart: React.FC<QuickStartProps> = ({ isDark = false, onNavigate }) => {
  return (
    <div className={`qg-page ${isDark ? 'dark' : ''}`}>
      <div className="qg-content">
        <h1 className={`qg-title ${isDark ? 'dark' : ''}`}>Quick Start Guide</h1>
        <div className="qg-accent" />

        {OVERVIEW_SECTIONS.map((s) => (
          <Section key={s.heading} section={s} isDark={isDark} />
        ))}

        <Requirements isDark={isDark} />

        {INSTALL_SECTIONS.map((s) => (
          <Section key={s.heading} section={s} isDark={isDark} />
        ))}
        {INSTALL_CODES.map((c, i) => (
          <CodeBlock key={i} block={c} isDark={isDark} />
        ))}

        {IMPORT_SECTIONS.map((s) => (
          <Section key={s.heading} section={s} isDark={isDark} />
        ))}
        {IMPORT_CODES.map((c, i) => (
          <CodeBlock key={i} block={c} isDark={isDark} />
        ))}

        {/* <NextSteps isDark={isDark} onNavigate={onNavigate} /> */}
      </div>
    </div>
  );
};

export default QuickStart;