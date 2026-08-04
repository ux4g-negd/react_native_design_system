import React, { useState, useCallback } from 'react';
import { Ux4gSpace, Ux4gRadius, Ux4gBorderWidth } from '../../../src/foundation/dimensions';
import CodeBlock from '../components/CodeBlock';

export type DimensionsSection = 'spacing' | 'radius' | 'border' | 'usage';

interface DimensionsDocProps {
  isDark: boolean;
  section?: DimensionsSection;
}

const SpacingRow: React.FC<{ token: string; value: number }> = ({ token, value }) => {
  return (
    <div className="dimensions-spacing-row">
      <div className="dimensions-spacing-token">Ux4gSpace.{token}</div>
      <div
        className="dimensions-spacing-bar"
        style={{
          width: `${value === 0 ? 2 : Math.min(Math.max(value, 2), 320)}px`,
        }}
      />
      <div className="dimensions-spacing-val">{value}px</div>
    </div>
  );
};

const RadiusCard: React.FC<{ token: string; value: number }> = ({ token, value }) => {
  const clampR = Math.min(Math.max(value, 0), 36);
  return (
    <div className="dimensions-radius-item">
      <div
        className="dimensions-radius-box"
        style={{
          borderRadius: value === 999 ? '999px' : `${clampR}px`,
        }}
      />
      <div className="dimensions-radius-token">{token}</div>
      <div className="dimensions-radius-val">{value}px</div>
    </div>
  );
};

const BorderWidthRow: React.FC<{ token: string; value: number }> = ({ token, value }) => {
  return (
    <div className="dimensions-border-row">
      <div className="dimensions-border-token">Ux4gBorderWidth.{token}</div>
      <div
        className="dimensions-border-line"
        style={{
          height: `${value === 0 ? 1 : value}px`,
        }}
      />
      <div className="dimensions-border-val">{value === 0 ? 'none' : `${value}px`}</div>
    </div>
  );
};

const DimensionsUsage: React.FC = () => {
  return (
    <div className="typography-usage-section">
      <h2 className="semantic-title">Using UX4G Dimensions</h2>
      <p className="semantic-description">
        Ux4gSpace provides a fixed scale of spacing constants used for padding, margins, gaps, and component dimensions.
        Always prefer these over raw numeric literals so your layout stays aligned with the rest of the design system.
      </p>

      <CodeBlock
        language="TSX"
        filename="React Native — Ux4gSpace & Ux4gRadius"
        code={`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gSpace, Ux4gRadius, Ux4gBorderWidth, useUx4gTheme } from 'ux4g-react-native-design-system';

export const MyCard = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useUx4gTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.outline,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: Ux4gSpace.space16,
    borderRadius: Ux4gRadius.radius12,
    borderWidth: Ux4gBorderWidth.thin,
  },
});`}
      />
    </div>
  );
};

export const DimensionsDoc: React.FC<DimensionsDocProps> = ({ section = 'spacing' }) => {
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
          / Dimensions
        </div>
        <h1 className="doc-title">Dimensions</h1>
        <p className="doc-description">
          Fixed scales for Spacing, Border Radius, and Border Width tokens across the UX4G design system.
        </p>
      </div>

      {isUsage ? (
        <DimensionsUsage />
      ) : section === 'radius' ? (
        <div className="dimensions-section">
          <div className="palette-section-header">
            <div className="palette-section-title">Border Radius Tokens</div>
            <div className="palette-section-subtitle">Ux4gRadius.*</div>
          </div>
          <div className="dimensions-radius-wrap">
            {Object.entries(Ux4gRadius).map(([token, val]) => (
              <RadiusCard key={token} token={token} value={val} />
            ))}
          </div>
        </div>
      ) : section === 'border' ? (
        <div className="dimensions-section">
          <div className="palette-section-header">
            <div className="palette-section-title">Border Width Tokens</div>
            <div className="palette-section-subtitle">Ux4gBorderWidth.*</div>
          </div>
          <div className="dimensions-border-rows-list">
            {Object.entries(Ux4gBorderWidth).map(([token, val]) => (
              <BorderWidthRow key={token} token={token} value={val} />
            ))}
          </div>
        </div>
      ) : (
        <div className="dimensions-section">
          <div className="palette-section-header">
            <div className="palette-section-title">Spacing Tokens</div>
            <div className="palette-section-subtitle">Ux4gSpace.*</div>
          </div>
          <div className="dimensions-spacing-rows-list">
            {Object.entries(Ux4gSpace).map(([token, val]) => (
              <SpacingRow key={token} token={token} value={val} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DimensionsDoc;
