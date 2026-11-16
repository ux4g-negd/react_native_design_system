import JSZip from 'jszip';

export interface EntryAndAreaPermitZipOptions {
  appCode: string;
}

export async function generateEntryAndAreaPermitZip(options: EntryAndAreaPermitZipOptions): Promise<Blob> {
  const zip = new JSZip();

  // Root project files
  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'ux4g-entry-and-area-permit-flow',
        version: '1.0.0',
        private: true,
        scripts: {
          start: 'expo start',
          android: 'expo start --android',
          ios: 'expo start --ios',
          web: 'expo start --web',
        },
        dependencies: {
          expo: '~51.0.0',
          react: '18.2.0',
          'react-native': '0.74.5',
          'react-native-svg': '15.2.0',
          'ux4g-react-native-components': 'latest',
        },
        devDependencies: {
          '@babel/core': '^7.20.0',
          typescript: '~5.3.3',
        },
      },
      null,
      2
    )
  );

  zip.file(
    'app.json',
    JSON.stringify(
      {
        expo: {
          name: 'Entry and Area Permit Flow',
          slug: 'ux4g-entry-and-area-permit-flow',
          version: '1.0.0',
          orientation: 'portrait',
          userInterfaceStyle: 'light',
          splash: {
            resizeMode: 'contain',
            backgroundColor: '#4F46E5',
          },
          ios: {
            supportsTablet: true,
          },
          android: {
            adaptiveIcon: {
              backgroundColor: '#4F46E5',
            },
          },
        },
      },
      null,
      2
    )
  );

  zip.file(
    'README.md',
    `# UX4G Entry and Area Permit Flow (9-Step Service Pattern)

This project contains the complete 9-step Citizen Service Pattern for **Entry and Area Permit** (Inner Line Permit / Protected Area Permit / Restricted Area Permit) built using the official UX4G React Native design system components and color palette.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run on Expo:
   \`\`\`bash
   npx expo start
   \`\`\`

## Features
- **Aadhaar Verification & eKYC**: Masked Aadhaar/VID input, consent gate, 6-digit OTP authentication, and auto-fetched citizen profile.
- **Official UX4G Components**: Integrated with \`Ux4gOtpInput\`, \`Ux4gAadhaarInputField\`, \`Ux4gRadioButton\`, \`Ux4gCheckbox\`, \`Ux4gButton\`, and \`UX4GColors\` palette.
- **Full 9-Step End-to-End Navigation**: Stepper progress bar, side drawer, review declarations, and permit generation.
`
  );

  // Source files
  zip.file('App.js', options.appCode);

  return zip.generateAsync({ type: 'blob' });
}

