import React from 'react';

const createSvgComponent = (tag) => {
  const Component = React.forwardRef(({ children, style, fillRule, clipRule, strokeWidth, strokeDasharray, strokeDashoffset, strokeLinecap, strokeLinejoin, ...props }, ref) => {
    const webProps = {
      ref,
      ...props,
      style,
      fillRule,
      clipRule,
      strokeWidth,
      strokeDasharray,
      strokeDashoffset,
      strokeLinecap,
      strokeLinejoin,
    };
    return React.createElement(tag, webProps, children);
  });
  Component.displayName = `SvgStub(${tag})`;
  return Component;
};

export const Svg = createSvgComponent('svg');
export const Path = createSvgComponent('path');
export const Circle = createSvgComponent('circle');
export const Rect = createSvgComponent('rect');
export const Line = createSvgComponent('line');
export const G = createSvgComponent('g');
export const Polyline = createSvgComponent('polyline');
export const Polygon = createSvgComponent('polygon');
export const Text = createSvgComponent('text');
export const TSpan = createSvgComponent('tspan');
export const TextPath = createSvgComponent('textpath');
export const Defs = createSvgComponent('defs');
export const LinearGradient = createSvgComponent('linearGradient');
export const RadialGradient = createSvgComponent('radialGradient');
export const Stop = createSvgComponent('stop');
export const ClipPath = createSvgComponent('clipPath');
export const Pattern = createSvgComponent('pattern');
export const Image = createSvgComponent('image');
export const Mask = createSvgComponent('mask');
export const Use = createSvgComponent('use');
export const Symbol = createSvgComponent('symbol');

export const SvgXml = () => null;
export const SvgFromUri = () => null;
export const SvgUri = () => null;

// Stubs for react-native-document-picker & react-native-image-picker
export const pickDocument = async () => null;
export const launchCamera = async () => null;
export const launchImageLibrary = async () => null;
export const DocumentPickerTypes = {};

export default Svg;
