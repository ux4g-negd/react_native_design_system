const fs = require('fs');
const https = require('https');

// Read TourismEventSponsorshipFlowDoc.tsx and publish App.js to Expo Snack
const docPath = 'storybook/src/pages/TourismEventSponsorshipFlowDoc.tsx';
if (!fs.existsSync(docPath)) {
  console.log('Doc file not yet created.');
  process.exit(1);
}

const docSrc = fs.readFileSync(docPath, 'utf8');
const startToken = 'const fullAppCodeString = useMemo';
const startIdx = docSrc.indexOf(startToken);
if (startIdx === -1) throw new Error('Could not find fullAppCodeString');
const appStart = docSrc.indexOf('import React', startIdx);
const closeMemo = docSrc.indexOf('}, []);', appStart);
const tickEnd = docSrc.lastIndexOf(String.fromCharCode(96), closeMemo);
const appJs = docSrc.slice(appStart, tickEnd).trim();

console.log('Extracted App.js length:', appJs.length);

const emblemSrc = fs.readFileSync('storybook/src/utils/nationalEmblemSource.ts', 'utf8');
const eqIdx = emblemSrc.indexOf('= "');
const endIdx = emblemSrc.lastIndexOf('"');
if (eqIdx === -1 || endIdx <= eqIdx) throw new Error('Could not extract NATIONAL_EMBLEM_SOURCE');
let nationalEmblemJs = JSON.parse(emblemSrc.slice(eqIdx + 2, endIdx + 1));
nationalEmblemJs = nationalEmblemJs
  .replace('import * as React from "react";', "import React from 'react';")
  .replace('import Svg, { Path, SvgProps } from "react-native-svg";', 'import Svg, { Path } from "react-native-svg";')
  .replace('(props: SvgProps)', '(props)');

const payload = JSON.stringify({
  manifest: {
    sdkVersion: '51.0.0',
    name: 'UX4G Tourism Event Sponsorship Flow',
    description: '5-Step Government Service Tourism Event Sponsorship Flow built with UX4G components',
  },
  code: {
    'App.js': { type: 'CODE', contents: appJs },
    'NationalEmblem.js': { type: 'CODE', contents: nationalEmblemJs },
  },
  dependencies: {
    'react-native-svg': { version: '*' },
    'ux4g-react-native-components': { version: 'latest' },
  },
});

const req = https.request(
  'https://exp.host/--/api/v2/snack/save',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    let body = '';
    res.on('data', (chunk) => (body += chunk));
    res.on('end', () => {
      console.log('STATUS:', res.statusCode);
      console.log('BODY:', body);
    });
  }
);
req.on('error', (err) => {
  console.error(err);
  process.exit(1);
});
req.write(payload);
req.end();

