import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface PaginationDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';
type PaginationStory =
  | 'pagination-default-arrows'
  | 'pagination-capsule-arrows'
  | 'pagination-capsule-dots'
  | 'pagination-arrows-right';

const normalizeStory = (story?: string): PaginationStory => {
  if (story === 'pagination' || story === 'pagination-dotted') return 'pagination-default-arrows';

  const allowed: PaginationStory[] = [
    'pagination-default-arrows',
    'pagination-capsule-arrows',
    'pagination-capsule-dots',
    'pagination-arrows-right',
  ];
  return allowed.includes(story as PaginationStory) ? (story as PaginationStory) : 'pagination-default-arrows';
};

const storyMeta: Record<PaginationStory, { title: string; description: string }> = {
  'pagination-default-arrows': {
    title: 'Pagination',
    description: 'Default dotted pagination with left and right arrow controls.',
  },
  'pagination-capsule-arrows': {
    title: 'Pagination',
    description: 'Capsule container style with arrows and animated active dot.',
  },
  'pagination-capsule-dots': {
    title: 'Pagination',
    description: 'Capsule dots-only pagination without arrow controls.',
  },
  'pagination-arrows-right': {
    title: 'Pagination',
    description: 'Dotted pagination with both arrow controls aligned on the right.',
  },
};

const getStoryCode = (story: PaginationStory): string => {
  if (story === 'pagination-capsule-arrows') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationCapsuleArrowsExample() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='capsule'
        size='small'
        showArrows={true}
      />
    </View>
  );
}`;
  }

  if (story === 'pagination-capsule-dots') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationCapsuleDotsExample() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='capsule'
        size='small'
        showArrows={false}
      />
    </View>
  );
}`;
  }

  if (story === 'pagination-arrows-right') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationArrowsRightExample() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='default'
        size='small'
        showArrows={true}
        arrowsOnRight={true}
        width={360}
      />
    </View>
  );
}`;
  }

  return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPagination } from 'ux4g-react-native-design-system';

export default function PaginationDefaultArrowsExample() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <View style={{ padding: 20 }}>
      <Ux4gPagination
        totalPageCount={7}
        currentPageIndex={currentPage}
        onPageChange={setCurrentPage}
        variant='default'
        size='small'
        showArrows={true}
      />
    </View>
  );
}`;
};

const getSnackFields = (story: PaginationStory): string => {
  if (story === 'pagination-capsule-arrows') {
    return `        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='capsule'
          size='small'
          showArrows={true}
        />`;
  }

  if (story === 'pagination-capsule-dots') {
    return `        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='capsule'
          size='small'
          showArrows={false}
        />`;
  }

  if (story === 'pagination-arrows-right') {
    return `        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='default'
          size='small'
          showArrows={true}
          arrowsOnRight={true}
          width={360}
        />`;
  }

  return `        <Ux4gPagination
          totalPageCount={7}
          currentPageIndex={currentPage}
          onPageChange={setCurrentPage}
          variant='default'
          size='small'
          showArrows={true}
        />`;
};

export const PaginationDoc: React.FC<PaginationDocProps> = ({ isDark, story = 'pagination-default-arrows' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];
  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Ux4gPagination, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

export default function App() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${getSnackFields(activeStory)}
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

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gPagination%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack Pagination Preview'
      />
    );
  };

  const propsData = [
    { name: 'totalPageCount', type: 'number', default: 'required', desc: 'Total number of pages represented by dots.', required: true },
    { name: 'currentPageIndex', type: 'number', default: 'required', desc: 'Current active zero-based page index.', required: true },
    { name: 'onPageChange', type: '(pageIndex: number) => void', default: 'required', desc: 'Callback fired when user selects a dot or arrow.', required: true },
    { name: 'showArrows', type: 'boolean', default: 'true', desc: 'Shows previous and next arrow controls.', required: false },
    { name: 'arrowsOnRight', type: 'boolean', default: 'false', desc: 'Places arrows on right side while dots stay on the left.', required: false },
    { name: 'variant', type: "'default' | 'defaultVariant' | 'capsule'", default: "'default'", desc: 'Visual style of the pagination indicator.', required: false },
    { name: 'size', type: "'small' | 'medium'", default: "'small'", desc: 'Size of dots and arrow buttons.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Disables interactions when false.', required: false },
    { name: 'activeColor', type: 'string', default: 'theme primary', desc: 'Color used for active dot and arrows.', required: false },
    { name: 'inactiveColor', type: 'string', default: 'theme-based', desc: 'Color used for inactive dots.', required: false },
    { name: 'inactiveBorderColor', type: 'string', default: 'theme-based', desc: 'Border color for inactive dots.', required: false },
    { name: 'width', type: 'number', default: 'undefined', desc: 'Optional explicit width for container.', required: false },
    { name: 'height', type: 'number', default: 'undefined', desc: 'Optional explicit height for container.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom style override for outer container.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className='wb-page'>
      <div className='wb-header'>
        <div className='wb-header-row'>
          <h1 className='wb-title'>{config.title}</h1>
          <span className='wb-badge'>Component</span>
        </div>
        <p className='wb-subtitle'>{config.description}</p>
        <p className='wb-subtitle' style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      <div className='wb-body'>
        <div className='wb-main'>
          <div className='wb-tab-bar'>
            <button className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveMainTab('preview')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>visibility</span>
              Preview
            </button>
            <button className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`} onClick={() => setActiveMainTab('code')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>code</span>
              Code
            </button>
            <button className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`} onClick={() => setActiveMainTab('props')} type='button'>
              <span className='material-symbols-outlined wb-tab-icon'>tune</span>
              Props
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
                <CodeBlock code={codeString} language='TSX' filename='PaginationExample.tsx' />
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

export default PaginationDoc;
