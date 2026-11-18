import JSZip from 'jszip';
import { NATIONAL_EMBLEM_SOURCE } from './nationalEmblemSource';

export interface AdventureActivityApprovalZipOptions {
  appCode: string;
}

export async function generateAdventureActivityApprovalZip(
  options: AdventureActivityApprovalZipOptions
): Promise<Blob> {
  const zip = new JSZip();

  // Root project files
  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'ux4g-adventure-activity-approval-flow',
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
          name: 'Adventure Activity Approval Flow',
          slug: 'ux4g-adventure-activity-approval-flow',
          version: '1.0.0',
          orientation: 'portrait',
          userInterfaceStyle: 'light',
          splash: {
            resizeMode: 'contain',
            backgroundColor: '#4A2BC2',
          },
          ios: {
            supportsTablet: true,
          },
          android: {
            adaptiveIcon: {
              backgroundColor: '#4A2BC2',
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
    `# UX4G Adventure Activity Approval Flow (9-Step Service Pattern)

This project contains the complete 9-step Citizen/Operator Service Pattern for **Adventure Activity Approval** built using the official UX4G React Native design system components and color palette.

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
- **Prerequisite Registrations & Verification**: Explicit gatekeeping and checklist for Portal Account, Applicant Profile, Unit Registration, and Sector Tourism License.
- **Service Domain Classification**: Radio selection for Land, Water, and Air adventure activity operations.
- **Official UX4G Components**: Integrated with \`Ux4gCompactStepper\`, \`Ux4gRadioButton\`, \`Ux4gCheckbox\`, \`Ux4gButton\`, \`Ux4gStatusBanner\`, and \`UX4GColors\` palette.
- **Full 9-Step End-to-End Navigation**: Stepper progress bar, prerequisites check, enterprise info, safety protocols, inspection certs, guide credentials, liability insurance, payment, and issued approval tracking.
`
  );

  // Source files
  zip.file('App.js', options.appCode);
  zip.file('NationalEmblem.js', NATIONAL_EMBLEM_SOURCE);

  return zip.generateAsync({ type: 'blob' });
}

