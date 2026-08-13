import React, { useState, useMemo } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface CarouselDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const CarouselDoc: React.FC<CarouselDocProps> = ({ isDark, story = 'carousel-intro' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  /* ── Code Generator ── */
  const codeString = useMemo(() => {
    const lines: string[] = [];
    lines.push(`import { Ux4gCarousel, View, Text, StyleSheet } from 'ux4g-react-native-design-system';`);
    lines.push('');

    if (story === 'carousel-rich-hero') {
      lines.push('// Rich Hero Carousel with Gradient Slides');
      lines.push('const slides = [');
      lines.push('  {');
      lines.push('    id: "1",');
      lines.push('    title: "Featured",');
      lines.push('    description: "Discover our latest collection",');
      lines.push('    gradient: ["#667eea", "#764ba2"],');
      lines.push('    badge: "FEATURED",');
      lines.push('    buttonText: "Explore Now",');
      lines.push('  },');
      lines.push('  {');
      lines.push('    id: "2",');
      lines.push('    title: "New Update",');
      lines.push('    description: "Check out what is new",');
      lines.push('    gradient: ["#f093fb", "#f5576c"],');
      lines.push('    badge: "NEW",');
      lines.push('    buttonText: "Learn More",');
      lines.push('  },');
      lines.push('];');
      lines.push('');
      lines.push('<Ux4gCarousel');
      lines.push('  height={240}');
      lines.push('  autoPlay={true}');
      lines.push('  autoPlayInterval={3500}');
      lines.push('  showPagination={true}');
      lines.push('  showArrows={true}');
      lines.push('  items={slides.map((slide) => (');
      lines.push('    <View key={slide.id} style={styles.slide}>');
      lines.push('      <View style={styles.badge}><Text style={styles.badgeText}>{slide.badge}</Text></View>');
      lines.push('      <Text style={styles.title}>{slide.title}</Text>');
      lines.push('      <Text style={styles.desc}>{slide.description}</Text>');
      lines.push('    </View>');
      lines.push('  ))}');
      lines.push('/>');
    } else if (story === 'carousel-image') {
      lines.push('// Image Carousel');
      lines.push('const images = [');
      lines.push('  "https://picsum.photos/seed/slide1/400/200",');
      lines.push('  "https://picsum.photos/seed/slide2/400/200",');
      lines.push('  "https://picsum.photos/seed/slide3/400/200",');
      lines.push('  "https://picsum.photos/seed/slide4/400/200",');
      lines.push('];');
      lines.push('');
      lines.push('<Ux4gCarousel');
      lines.push('  height={200}');
      lines.push('  autoPlay={true}');
      lines.push('  items={images.map((url, i) => (');
      lines.push('    <Image key={i} source={{ uri: url }} style={styles.image} />');
      lines.push('  ))}');
      lines.push('/>');
    } else {
      lines.push('// Introduction - Hero Banner + Image Gallery');
      lines.push('<Ux4gCarousel');
      lines.push('  height={240}');
      lines.push('  autoPlay={true}');
      lines.push('  showPagination={true}');
      lines.push('  items={[...]}');
      lines.push('/>');
    }

    return lines.join('\n');
  }, [story]);

  /* ── Live Preview (Expo Snack) ── */
  const renderStoryPreview = () => {
    let snackCodeString = '';

    if (story === 'carousel-rich-hero') {
      snackCodeString = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ux4gCarousel, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const heroSlides = [
  {
    id: '1',
    title: 'Featured',
    description: 'Discover our latest collection of design tokens and components.',
    gradient: ['#667eea', '#764ba2'],
    badge: 'FEATURED',
    buttonText: 'Explore Now',
  },
  {
    id: '2',
    title: 'New Update',
    description: 'Check out the newest features and improvements.',
    gradient: ['#f093fb', '#f5576c'],
    badge: 'NEW UPDATE',
    buttonText: 'Learn More',
  },
  {
    id: '3',
    title: 'Popular',
    description: 'Trending components loved by developers worldwide.',
    gradient: ['#4facfe', '#00f2fe'],
    badge: 'POPULAR',
    buttonText: 'View All',
  },
];

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCarousel
          height={240}
          autoPlay={true}
          autoPlayInterval={3500}
          showPagination={true}
          showArrows={true}
          items={heroSlides.map((slide) => (
            <View key={slide.id} style={[styles.slide, { background: \`linear-gradient(135deg, \${slide.gradient[0]}, \${slide.gradient[1]})\` }]}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{slide.badge}</Text>
              </View>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.desc}>{slide.description}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{slide.buttonText}</Text>
              </View>
            </View>
          ))}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  slide: { flex: 1, borderRadius: 16, padding: 24, justifyContent: 'center' },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 12 },
  badgeText: { color: '#FFF', fontSize: 11, fontWeight: '700', letterSpacing: 0.5 },
  title: { color: '#FFF', fontSize: 24, fontWeight: '800', marginBottom: 8 },
  desc: { color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: 16 },
  button: { backgroundColor: '#FFF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8, alignSelf: 'flex-start' },
  buttonText: { color: '#333', fontSize: 14, fontWeight: '600' },
});`;
    } else if (story === 'carousel-image') {
      snackCodeString = `import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ux4gCarousel, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const images = [
  'https://picsum.photos/seed/carousel1/400/200',
  'https://picsum.photos/seed/carousel2/400/200',
  'https://picsum.photos/seed/carousel3/400/200',
  'https://picsum.photos/seed/carousel4/400/200',
];

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <View style={styles.container}>
        <Ux4gCarousel
          height={200}
          autoPlay={true}
          autoPlayInterval={3000}
          showPagination={true}
          items={images.map((url, i) => (
            <Image
              key={i}
              source={{ uri: url }}
              style={styles.image}
            />
          ))}
        />
      </View>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  image: { width: '100%', height: '100%', borderRadius: 12 },
});`;
    } else {
      // Introduction - both demos
      snackCodeString = `import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ux4gCarousel, Ux4gThemeProvider } from 'ux4g-react-native-design-system';

const heroSlides = [
  { id: '1', title: 'Featured', desc: 'Discover our latest collection.', gradient: ['#667eea', '#764ba2'], badge: 'FEATURED' },
  { id: '2', title: 'New Update', desc: 'Check out what is new.', gradient: ['#f093fb', '#f5576c'], badge: 'NEW' },
  { id: '3', title: 'Popular', desc: 'Trending components.', gradient: ['#4facfe', '#00f2fe'], badge: 'POPULAR' },
];

const images = [
  'https://picsum.photos/seed/gallery1/400/200',
  'https://picsum.photos/seed/gallery2/400/200',
  'https://picsum.photos/seed/gallery3/400/200',
];

export default function App() {
  return (
    <Ux4gThemeProvider isDark={false}>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Hero Banner Carousel</Text>
        <Ux4gCarousel height={240} autoPlay={true} showPagination={true} showArrows={true}
          items={heroSlides.map((s) => (
            <View key={s.id} style={[styles.heroSlide, { background: \`linear-gradient(135deg, \${s.gradient[0]}, \${s.gradient[1]})\` }]}>
              <View style={styles.badge}><Text style={styles.badgeText}>{s.badge}</Text></View>
              <Text style={styles.heroTitle}>{s.title}</Text>
              <Text style={styles.heroDesc}>{s.desc}</Text>
            </View>
          ))}
        />
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Image Gallery Carousel</Text>
        <Ux4gCarousel height={200} viewportFraction={0.85} autoPlay={false}
          items={images.map((url, i) => (
            <Image key={i} source={{ uri: url }} style={styles.image} />
          ))}
        />
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12, color: '#1F2937' },
  heroSlide: { flex: 1, borderRadius: 16, padding: 24, justifyContent: 'center' },
  badge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 12 },
  badgeText: { color: '#FFF', fontSize: 11, fontWeight: '700' },
  heroTitle: { color: '#FFF', fontSize: 22, fontWeight: '800', marginBottom: 6 },
  heroDesc: { color: 'rgba(255,255,255,0.85)', fontSize: 13 },
  image: { width: '100%', height: '100%', borderRadius: 12 },
});`;
    }

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gCarousel%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.5,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '500px', border: 'none', borderRadius: '8px' }}
        title="Expo Snack Carousel Preview"
      />
    );
  };

  /* ── Props Table Data ── */
  const propsData = [
    { name: 'items', type: 'ReactNode[]', default: 'required', desc: 'Array of slide widgets to display in carousel.', required: true },
    { name: 'autoPlay', type: 'boolean', default: 'true', desc: 'Enable auto-play scrolling.', required: false },
    { name: 'autoPlayInterval', type: 'number', default: '3000', desc: 'Auto-play interval in milliseconds.', required: false },
    { name: 'showPagination', type: 'boolean', default: 'true', desc: 'Show bottom pagination dots.', required: false },
    { name: 'showArrows', type: 'boolean', default: 'false', desc: 'Show arrow navigation buttons.', required: false },
    { name: 'height', type: 'number', default: '200', desc: 'Carousel container height.', required: false },
    { name: 'viewportFraction', type: 'number', default: '1.0', desc: 'Fraction of viewport occupied by each item.', required: false },
    { name: 'paginationVariant', type: 'Ux4gPaginationVariant', default: "'default'", desc: 'Pagination indicator style variant.', required: false },
    { name: 'paginationSize', type: 'Ux4gPaginationSize', default: "'small'", desc: 'Pagination indicator size.', required: false },
    { name: 'activeColor', type: 'string', default: 'undefined', desc: 'Active indicator color override.', required: false },
    { name: 'inactiveColor', type: 'string', default: 'undefined', desc: 'Inactive indicator and arrow background color override.', required: false },
    { name: 'style', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Custom container style override.', required: false },
  ];

  /* ── Story Title & Description ── */
  const storyConfig = {
    'carousel-intro': {
      title: 'Carousel',
      description: 'Carousel displays horizontally scrollable content with auto-play, pagination dots, and optional arrow navigation. Below are two showcase demos: a Hero Banner carousel and an Image Gallery carousel.',
    },
    'carousel-rich-hero': {
      title: 'Carousel',
      description: 'Rich hero carousel with gradient slides, badges, titles, descriptions, and CTA buttons. Perfect for featured content banners.',
    },
    'carousel-image': {
      title: 'Carousel',
      description: 'Image-based carousel displaying network images with auto-play and pagination. Minimal configuration for simple image galleries.',
    },
  };

  const config = storyConfig[story as keyof typeof storyConfig] || storyConfig['carousel-intro'];

  return (
    <div className="wb-page">
      {/* Header */}
      <div className="wb-header">
        <div className="wb-header-row">
          <h1 className="wb-title">{config.title}</h1>
          <span className="wb-badge">Component</span>
        </div>
        <p className="wb-subtitle">{config.description}</p>
        <p className="wb-subtitle" style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      {/* Main Body */}
      <div className="wb-body">
        <div className="wb-main">
          {/* Main Tab Bar: Preview / Code / Props */}
          <div className="wb-tab-bar">
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">visibility</span>
              Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">code</span>
              Code
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type="button"
            >
              <span className="material-symbols-outlined wb-tab-icon">tune</span>
              Props
            </button>
          </div>

          <div className="wb-tab-content">
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>
                  {renderStoryPreview()}
                </div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className="wb-code-area">
                <CodeBlock code={codeString} language="TSX" filename="CarouselExample.tsx" />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className="wb-props-area">
                <table className="props-table">
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
                          <span className="prop-name">
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className="prop-type">{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className="prop-default">{p.default}</span></td>
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

export default CarouselDoc;
