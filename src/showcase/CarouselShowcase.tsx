import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { Ux4gCarousel } from '../components/carousel';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

import { UX4GColors } from '../foundation/colors';

const buildHeroSlide = (
  theme: any,
  bgColor: string,
  badgeText: string,
  title: string,
  description: string,
  buttonText: string
) => (
  <View
    style={{
      marginHorizontal: 4,
      padding: 20,
      borderRadius: 16,
      backgroundColor: bgColor,
      height: '100%',
      justifyContent: 'space-between',
    }}
  >
    {/* Badge Tag */}
    <View
      style={{
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
      }}
    >
      <Text
        style={[
          theme.typography.lS_strong,
          {
            color: '#FFFFFF',
            letterSpacing: 0.5,
          },
        ]}
      >
        {badgeText}
      </Text>
    </View>

    {/* Title & Description */}
    <View style={{ marginVertical: 8 }}>
      <Text
        style={[
          theme.typography.hS_strong,
          {
            color: '#FFFFFF',
          },
        ]}
      >
        {title}
      </Text>
      <View style={{ height: 6 }} />
      <Text
        style={[
          theme.typography.lM_default,
          {
            color: 'rgba(255, 255, 255, 0.85)',
          },
        ]}
        numberOfLines={2}
      >
        {description}
      </Text>
    </View>

    {/* Call to Action Button */}
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}
    >
      <Text
        style={[
          theme.typography.lM_strong,
          { color: bgColor },
        ]}
      >
        {buttonText}
      </Text>
    </View>
  </View>
);

export const CarouselShowcase: React.FC = () => {
  const theme = useUx4gTheme();

  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [showPagination, setShowPagination] = useState<boolean>(true);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [intervalSec, setIntervalSec] = useState<number>(3);

  const colors = [
    theme.colors.primary,
    theme.colors.secondary,
    theme.colors.info,
    theme.colors.success,
  ];

  const slideItems = Array.from({ length: 4 }).map((_, index) => (
    <View
      key={index}
      style={{
        marginHorizontal: 8,
        borderRadius: 12,
        height: '100%',
        backgroundColor: `${colors[index % colors.length]}1F`,
        borderWidth: 1,
        borderColor: `${colors[index % colors.length]}40`,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Text
        style={[
          theme.typography.hM_strong,
          { color: theme.colors.onSurface },
        ]}
      >
        Slide {index + 1}
      </Text>
      <View style={{ height: 8 }} />
      <Text
        style={[
          theme.typography.lS_default,
          { color: `${theme.colors.onSurface}99` },
        ]}
      >
        (Replace with desired banner content)
      </Text>
    </View>
  ));

  const imageItems = [
    { title: 'Digital Governance', subtitle: 'Empowering citizens with seamless digital services' },
    { title: 'Innovation Portal', subtitle: 'Building open-source tools for public design systems' },
    { title: 'Secure Authentication', subtitle: 'Fast and reliable citizen identity verification' },
    { title: 'Accessible UI Tokens', subtitle: 'WCAG AAA compliant theme colors and typography' },
  ].map((slide, index) => (
    <View
      key={index}
      style={{
        marginHorizontal: 8,
        borderRadius: 12,
        height: '100%',
        backgroundColor: theme.isDark ? '#1E1E2E' : theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
      }}
    >
      <Text style={[theme.typography.hS_strong, { color: '#FFFFFF', textAlign: 'center' }]}>
        {slide.title}
      </Text>
      <View style={{ height: 8 }} />
      <Text style={[theme.typography.bM_default, { color: '#E0E0E0', textAlign: 'center' }]}>
        {slide.subtitle}
      </Text>
    </View>
  ));

  const heroSlideItems = [
    buildHeroSlide(
      theme,
      theme.colors.primary,
      'FEATURED',
      'Digital Services Portal 2.0',
      'Seamlessly access government citizen services with single sign-on and instant verification.',
      'Explore Services'
    ),
    buildHeroSlide(
      theme,
      theme.colors.info,
      'NEW UPDATE',
      'Biometric Identity Capture',
      'Fast, secure face verification integration with real-time liveness checks.',
      'View Documentation'
    ),
    buildHeroSlide(
      theme,
      theme.colors.secondary,
      'POPULAR',
      'Unified Design System',
      'Production-ready accessible UI components built for digital infrastructure.',
      'Get Started'
    ),
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* Card 1: Rich Hero Banner Carousel */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: `${theme.colors.onSurface}1A`,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          Hero Banner Carousel
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Rich hero slides featuring top badge tag, bold title, description, call-to-action button, and arrow pagination.
        </Text>

        <View style={{ height: 16 }} />

        <Ux4gCarousel
          autoPlay={true}
          autoPlayInterval={3500}
          height={240}
          showArrows={true}
          items={heroSlideItems}
        />
      </View>

      {/* Card 3: Viewport Fraction Carousel */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            borderColor: `${theme.colors.onSurface}1A`,
          },
        ]}
      >
        <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
          Viewport Fraction Peek Carousel (85%)
        </Text>
        <Text style={[styles.cardSubtitle, { color: `${theme.colors.onSurface}99` }]}>
          Using `viewportFraction={0.85}` allows users to peek at the edges of neighboring cards.
        </Text>

        <View style={{ height: 16 }} />

        <Ux4gCarousel
          autoPlay={false}
          viewportFraction={0.85}
          height={180}
          items={slideItems}
        />
      </View>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 6,
  },
});
