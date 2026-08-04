import React, { useState, useCallback } from 'react';
import { Ux4gShadowLevels, Ux4gShadowLevel } from '../../../src/foundation/shadow';
import CodeBlock from '../components/CodeBlock';

export type ShadowSection = 'scale' | 'usage';

interface ShadowDocProps {
  isDark: boolean;
  section?: ShadowSection;
}

const ShadowCardPreview: React.FC<{ item: Ux4gShadowLevel; isDark: boolean }> = ({ item, isDark }) => {
  return (
    <div className="shadow-card-wrapper">
      <div
        className={`shadow-card-box ${item.level === 0 ? 'level-0' : ''}`}
        style={{
          boxShadow: isDark ? item.cssBoxShadowDark : item.cssBoxShadow,
        }}
      >
        Shadow {item.level}
      </div>
      <div className="shadow-card-title">{item.title}</div>
      <div className="shadow-card-details">{item.details}</div>
    </div>
  );
};

const ShadowCodeRow: React.FC<{ item: Ux4gShadowLevel }> = ({ item }) => {
  const [copied, setCopied] = useState(false);
  const codeSnippet = `Ux4gShadow.${item.tokenName}`;

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
    } catch {
      /* fallback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [codeSnippet]);

  return (
    <div className="shadow-code-card">
      <div className="shadow-code-header">
        <span className="shadow-code-pill">Shadow {item.level}</span>
        <span className="shadow-code-title">{item.title}</span>
      </div>
      <div className="shadow-code-description">
        {item.details.replace(/\n/g, ' • ')}
      </div>
      <div className="shadow-code-box">
        <span className="shadow-code-snippet">{codeSnippet}</span>
        <button className="shadow-copy-btn" onClick={copy}>
          <span className="material-symbols-outlined" style={{ fontSize: 13, marginRight: 4 }}>
            {copied ? 'check' : 'content_copy'}
          </span>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

const ShadowUsage: React.FC = () => {
  return (
    <div className="typography-usage-section">
      <h2 className="semantic-title">Using UX4G Shadows</h2>
      <p className="semantic-description">
        UX4G provides five reusable shadow levels (<code>shadow0</code> to <code>shadow4</code>)
        to express depth, elevation, and hierarchy. Always apply predefined shadow tokens rather
        than setting custom shadow offsets manually.
      </p>

      <CodeBlock
        language="TSX"
        filename="React Native — Shadow Usage"
        code={`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gShadow, useUx4gTheme } from 'ux4g-react-native-design-system';

export const FloatingCard = () => {
  const { colors } = useUx4gTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Text style={{ color: colors.onSurface }}>Elevated Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    // Apply Shadow 2 (Floating Content)
    ...Ux4gShadow.shadow2,
  },
});`}
      />
    </div>
  );
};

export const ShadowDoc: React.FC<ShadowDocProps> = ({ isDark, section = 'scale' }) => {
  const isUsage = section === 'usage';

  return (
    <div className="doc-container">
      <div className="doc-header">
        <div className="doc-breadcrumb">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Token
          </a>{' '}
          / Shadow
        </div>
        <h1 className="doc-title">Shadow</h1>
        <p className="doc-description">
          Five reusable shadow styles. Each combines a key and an ambient shadow to express depth.
          Apply the matching effect style from UX4G Design System — never hand-set shadow values.
        </p>
      </div>

      {isUsage ? (
        <ShadowUsage />
      ) : (
        <div className="shadow-scale-section">
          {/* Top 5 visual preview cards row */}
          <div className="shadow-cards-row">
            {Ux4gShadowLevels.map((item) => (
              <ShadowCardPreview key={item.tokenName} item={item} isDark={isDark} />
            ))}
          </div>

          {/* Bottom Code Snippets section */}
          <div style={{ marginTop: 48 }}>
            <div className="palette-section-header">
              <div className="palette-section-title">Shadow Tokens & Code Snippets</div>
              <div className="palette-section-subtitle">Ux4gShadow.*</div>
            </div>
            <div className="shadow-code-rows-container">
              {Ux4gShadowLevels.map((item) => (
                <ShadowCodeRow key={item.tokenName} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShadowDoc;
