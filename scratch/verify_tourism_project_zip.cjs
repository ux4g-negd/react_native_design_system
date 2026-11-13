const fs = require('fs');
const docSrc = fs.readFileSync('storybook/src/pages/TourismProjectApprovalFlowDoc.tsx', 'utf8');
const match = docSrc.match(/return `([\s\S]*?)`;\r?\n  \}, \[\]\);/);
if (!match) throw new Error('Could not extract fullAppCodeString');
const appJs = match[1];

// Test the extractScreenJsx logic
const startIdx = appJs.indexOf('{/* ─── STEP 1: APPROVAL DETAILS ─── */}');
const viewStart = appJs.indexOf('<View style={styles.formContainer}>', startIdx);
const endIdx = appJs.indexOf('{/* ─── STEP 2:', viewStart);

console.log('step 1 indices:', { startIdx, viewStart, endIdx });
if (startIdx === -1 || viewStart === -1 || endIdx === -1) {
  throw new Error('JSX markers not found!');
}
console.log('Step 1 JSX extracted length:', endIdx - viewStart);
console.log('Verification PASSED!');

