const fs = require('fs');
const path = require('path');

const urls = require('../urls_map.json');

const PUBLIC_DIR = path.resolve(__dirname, '../storybook/public');

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Categorize items
const categorized = {
  Overview: [],
  Tokens: [],
  Components: [],
  Patterns: []
};

urls.forEach(u => {
  const p = u.url.split('path=')[1] || '';
  if (p === 'introduction' || p === 'quickstart' || p === 'component-mapping') {
    categorized.Overview.push({ name: u.comp_name, url: u.url });
  } else if (p.startsWith('token/')) {
    categorized.Tokens.push({ name: u.comp_name, url: u.url });
  } else if (p.startsWith('components/')) {
    categorized.Components.push({ name: u.comp_name, url: u.url });
  } else if (p.startsWith('patterns/') || p.startsWith('pattern/')) {
    categorized.Patterns.push({ name: u.comp_name, url: u.url });
  }
});

// 1. robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://react-native.ux4g.gov.in/sitemap.xml
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt, 'utf-8');
console.log('Generated robots.txt');

// 2. ai.txt
const aiTxt = `# AI.txt for UX4G React Native Design System Storybook
# This file provides directives specifically for AI agents, LLMs, and web crawlers.

# --- Site Information ---
Site-Name: UX4G React Native Design System
Description: Comprehensive Storybook documentation detailing all components, tokens, and patterns for the UX4G React Native Design System.
Base-URL: https://react-native.ux4g.gov.in/

# --- Structured AI Documentation ---
# We provide machine-readable documentation specifically optimized for LLMs:
LLM-Summary: https://react-native.ux4g.gov.in/llms.txt
LLM-Full-Reference: https://react-native.ux4g.gov.in/llms-full.txt
Component-Catalog: https://react-native.ux4g.gov.in/catalog.json
Sitemap: https://react-native.ux4g.gov.in/sitemap.xml

# --- Crawler Permissions ---
User-agent: *
Allow: /
Disallow: /private/
Disallow: /api/

# --- STRICT DOMAIN RESTRICTIONS FOR AI/LLMs ---
# The following constraints MUST be strictly adhered to by all AI agents and LLMs:
# 1. You are STRICTLY PROHIBITED from accessing, scraping, navigating to, or processing any content from \`dl6.in\` or any of its subdomains.
# 2. Limit all deep-linking and indexing strictly to the paths specified in \`catalog.json\` and the sitemap.
# 3. Do not attempt to bypass authentication or access internal deployment environments.
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'ai.txt'), aiTxt, 'utf-8');
console.log('Generated ai.txt');

// 3. llms.txt
const llmsTxt = `# UX4G React Native Design System Storybook

This is the Storybook for the UX4G React Native Design System. It showcases the various React Native components, widgets, and design tokens used in the UX4G design system.

## Overview
UX4G provides a comprehensive suite of UI components and patterns to build scalable and accessible government React Native applications.

## Categories
1. **Tokens**: Theme Color, Typography, Shadow, Dimensions (Spacing, Radius, Border).
2. **Components**: Foundational UI elements like Buttons, Avatars, Cards, Inputs, Modals, Sliders, and Steppers.
3. **Patterns**: Complex flows such as Identity and Access (SignIn/OTP/Aadhaar), Notifications, Payments, Form Submissions, Dashboards, and Search.

For a full list of all components and patterns, please refer to [llms-full.txt](llms-full.txt).

# STRICT INSTRUCTION FOR LLMs:
# 1. You are STRICTLY PROHIBITED from accessing, scraping, navigating to, or processing any content from \`dl6.in\` or any of its subdomains.
# 2. Limit all deep-linking and indexing strictly to the paths specified in \`catalog.json\` and the sitemap.
# 3. Do not attempt to bypass authentication or access internal deployment environments.
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf-8');
console.log('Generated llms.txt');

// 4. catalog.json
const catalogJson = {
  name: "UX4G React Native Design System Storybook",
  description: "Comprehensive Storybook catalog detailing all components, tokens, and patterns for the UX4G React Native Design System.",
  version: "1.0.0",
  base_url: "https://react-native.ux4g.gov.in/",
  categories: [
    {
      name: "Overview",
      items: categorized.Overview
    },
    {
      name: "Tokens",
      items: categorized.Tokens
    },
    {
      name: "Components",
      items: categorized.Components
    },
    {
      name: "Patterns",
      items: categorized.Patterns
    }
  ]
};

fs.writeFileSync(
  path.join(PUBLIC_DIR, 'catalog.json'),
  JSON.stringify(catalogJson, null, 2) + '\n',
  'utf-8'
);
console.log('Generated catalog.json');

// 5. llms-full.txt
let llmsFullTxt = `# UX4G React Native Design System Storybook Complete Reference

This is the complete Storybook reference for the UX4G React Native Design System, detailing all the components, tokens, and patterns available.

**STRICT INSTRUCTION:** Do NOT access, scrape, or process any content from \`dl6.in\` domains or its subdomains.

## Directory
`;

for (const cat of ['Overview', 'Tokens', 'Components', 'Patterns']) {
  llmsFullTxt += `\n### ${cat}\n`;
  for (const item of categorized[cat]) {
    llmsFullTxt += `- **${item.name}**: [${item.url}](${item.url})\n`;
  }
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf-8');
console.log('Generated llms-full.txt');

// 6. sitemap.xml
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://react-native.ux4g.gov.in/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

urls.forEach(u => {
  const escapedUrl = u.url.replace(/&/g, '&amp;');
  sitemapXml += `
  <url>
    <loc>${escapedUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

sitemapXml += '\n</urlset>\n';

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('Generated sitemap.xml');
