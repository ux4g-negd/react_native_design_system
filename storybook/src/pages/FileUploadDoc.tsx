import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface FileUploadDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const FileUploadDoc: React.FC<FileUploadDocProps> = ({ isDark, story = 'fileupload-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push("import { Ux4gFileUpload } from 'ux4g-react-native-design-system';");
    lines.push('');

    if (story === 'fileupload-dashed') {
      lines.push('<Ux4gFileUpload');
      lines.push("  borderStyle='dashed'");
      lines.push("  allowedExtensions={['jpg', 'png', 'pdf', 'docx']}");
      lines.push('  maxFileSize={10 * 1024 * 1024}');
      lines.push('/>');
    } else if (story === 'fileupload-preloaded') {
      lines.push('<Ux4gFileUpload');
      lines.push('  initialFiles={[');
      lines.push("    { id: '1', name: 'invoice.pdf', fileSize: 228200, status: 'success', progress: 1 },");
      lines.push("    { id: '2', name: 'pan-card.jpg', fileSize: 81520, status: 'uploading', progress: 0.64 },");
      lines.push('  ]}');
      lines.push('/>');
    } else {
      lines.push('<Ux4gFileUpload');
      lines.push("  allowedExtensions={['jpg', 'png', 'pdf']}");
      lines.push('  maxFiles={5}');
      lines.push('  maxFileSize={5 * 1024 * 1024}');
      lines.push('/>');
    }

    return lines.join('\n');
  }, [story]);

  const renderStoryPreview = () => {
    let fileUploadSnippet = '';

    if (story === 'fileupload-dashed') {
      fileUploadSnippet = `        <Ux4gFileUpload
          borderStyle='dashed'
          allowedExtensions={['jpg', 'png', 'pdf', 'docx']}
          maxFiles={3}
          maxFileSize={10 * 1024 * 1024}
        />`;
    } else if (story === 'fileupload-preloaded') {
      fileUploadSnippet = `        <Ux4gFileUpload
          initialFiles={[
            { id: '1', name: 'invoice.pdf', fileSize: 228200, status: 'success', progress: 1 },
            { id: '2', name: 'pan-card.jpg', fileSize: 81520, status: 'uploading', progress: 0.64 },
            { id: '3', name: 'aadhaar.png', fileSize: 149200, status: 'error', progress: 0.2, errorMessage: 'Network timeout' },
          ]}
        />`;
    } else {
      fileUploadSnippet = `        <Ux4gFileUpload
          allowedExtensions={['jpg', 'png', 'pdf']}
          maxFiles={5}
          maxFileSize={5 * 1024 * 1024}
        />`;
    }

    const snackCodeString = `import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ux4gFileUpload, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${fileUploadSnippet}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gFileUpload%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*,react-native-document-picker@*,react-native-image-picker@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack FileUpload Preview'
      />
    );
  };

  const propsData = [
    { name: 'maxFiles', type: 'number', default: '5', desc: 'Maximum number of files allowed.', required: false },
    { name: 'maxFileSize', type: 'number', default: '5 * 1024 * 1024', desc: 'Maximum file size in bytes.', required: false },
    { name: 'onFilesChanged', type: '(files: UploadedFile[]) => void', default: 'undefined', desc: 'Callback fired when files list changes.', required: false },
    { name: 'onUpload', type: '(file: UploadedFile) => Promise<boolean>', default: 'undefined', desc: 'Custom async upload handler.', required: false },
    { name: 'allowedExtensions', type: 'string[]', default: "['jpg','png','pdf']", desc: 'Allowed extensions for picking.', required: false },
    { name: 'borderStyle', type: "'solid' | 'dashed'", default: "'solid'", desc: 'Border style for upload container.', required: false },
    { name: 'buttonBorderRadius', type: 'number', default: '8', desc: 'Corner radius for action buttons.', required: false },
    { name: 'buttonColor', type: 'string', default: 'undefined', desc: 'Override text/icon color in action buttons.', required: false },
    { name: 'buttonBorderColor', type: 'string', default: 'undefined', desc: 'Override border color of upload button.', required: false },
    { name: 'errorTitle', type: 'string', default: 'undefined', desc: 'Override title shown for error state.', required: false },
    { name: 'errorText', type: 'string', default: 'undefined', desc: 'Override error message template.', required: false },
    { name: 'initialFiles', type: 'UploadedFile[]', default: 'undefined', desc: 'Pre-populated file list for showcase/testing.', required: false },
  ];

  const storyConfig = {
    'fileupload-basic': {
      title: 'FileUpload',
      description: 'Basic document upload with file type restrictions and size limits.',
    },
    'fileupload-dashed': {
      title: 'FileUpload',
      description: 'Dashed border variant with custom extension and size limits.',
    },
    'fileupload-preloaded': {
      title: 'FileUpload',
      description: 'Preloaded list variant showing success, uploading, and error statuses.',
    },
  };

  const config = storyConfig[story as keyof typeof storyConfig] ?? storyConfig['fileupload-basic'];

  return (
    <div className='wb-page'>
      <div className='wb-header'>
        <div className='wb-header-row'>
          <h1 className='wb-title'>{config.title}</h1>
          <span className='wb-badge'>Component</span>
        </div>
        <p className='wb-subtitle'>{config.description}</p>
        <p className='wb-subtitle' style={{ marginTop: 6 }}>
          This component has no required props.
        </p>
      </div>

      <div className='wb-body'>
        <div className='wb-main'>
          <div className='wb-tab-bar'>
            <button className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveMainTab('preview')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>visibility</span> Preview
            </button>
            <button className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`} onClick={() => setActiveMainTab('code')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>code</span> Code
            </button>
            <button className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`} onClick={() => setActiveMainTab('props')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>tune</span> Props
            </button>
          </div>

          <div className='wb-tab-content'>
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>{renderStoryPreview()}</div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className='wb-code-area'>
                <CodeBlock code={codeString} language='TSX' filename='FileUploadExample.tsx' />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className='wb-props-area'>
                <table className='props-table'>
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <span className='prop-name'>
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className='prop-type'>{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className='prop-default'>{p.default}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadDoc;
