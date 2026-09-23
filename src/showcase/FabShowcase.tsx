import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';
import {
  Ux4gFab,
  Ux4gFabVariant,
  Ux4gFabColorTheme,
  Ux4gFabPosition,
  Ux4gFabActionItem,
} from '../components/fab';

export const FabShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const [toastMessage, setToastMessage] = useState<string>('');

  // Floating FAB Playground Controls
  const [isFloatEnabled, setIsFloatEnabled] = useState<boolean>(true);
  const [floatVariant, setFloatVariant] = useState<Ux4gFabVariant>('menu-labelled');
  const [floatTheme, setFloatTheme] = useState<Ux4gFabColorTheme>('brand');
  const [floatPosition, setFloatPosition] = useState<Ux4gFabPosition>('bottom-right');
  const [floatBackdrop, setFloatBackdrop] = useState<boolean>(true);

  // Matrix Interactive States (Controlled open/close on click)
  const [matrixExpanded, setMatrixExpanded] = useState<boolean>(true);
  const [brandJoinedOpen, setBrandJoinedOpen] = useState<boolean>(true);
  const [surfaceJoinedOpen, setSurfaceJoinedOpen] = useState<boolean>(true);
  const [brandSpacedOpen, setBrandSpacedOpen] = useState<boolean>(true);
  const [surfaceSpacedOpen, setSurfaceSpacedOpen] = useState<boolean>(true);
  const [brandLabelledOpen, setBrandLabelledOpen] = useState<boolean>(true);
  const [surfaceLabelledOpen, setSurfaceLabelledOpen] = useState<boolean>(true);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  const actionItems: Ux4gFabActionItem[] = [
    { id: 'add', label: 'Add', icon: 'plus', onPress: () => triggerToast('Action: Add tapped!') },
    { id: 'message', label: 'Message', icon: 'message', onPress: () => triggerToast('Action: Message tapped!') },
    { id: 'share', label: 'Share', icon: 'share', onPress: () => triggerToast('Action: Share tapped!') },
    { id: 'call', label: 'Call', icon: 'call', onPress: () => triggerToast('Action: Call tapped!') },
  ];

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.white,
      borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    },
  ];

  const toggleAllMatrix = () => {
    const nextState = !matrixExpanded;
    setMatrixExpanded(nextState);
    setBrandJoinedOpen(nextState);
    setSurfaceJoinedOpen(nextState);
    setBrandSpacedOpen(nextState);
    setSurfaceSpacedOpen(nextState);
    setBrandLabelledOpen(nextState);
    setSurfaceLabelledOpen(nextState);
  };

  return (
    <View style={styles.outerWrapper}>
      {/* Floating FAB on top of screen stack */}
      {isFloatEnabled && (
        <Ux4gFab
          variant={floatVariant}
          colorTheme={floatTheme}
          position={floatPosition}
          showBackdrop={floatBackdrop}
          actions={actionItems}
          label="Button"
          onPress={() => {
            if (floatVariant === 'icon' || floatVariant === 'labelled') {
              triggerToast(`Floating FAB (${floatVariant}) Clicked!`);
            }
          }}
          onToggle={(open) => {
            triggerToast(open ? 'Speed-Dial Menu Opened' : 'Speed-Dial Menu Closed');
          }}
        />
      )}

      <ScrollView
        style={[styles.container, { backgroundColor: theme.isDark ? '#0B0F19' : '#F8FAFC' }]}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={[
            styles.header,
            { borderBottomColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 },
          ]}
        >
          <Text
            style={[styles.title, { color: theme.isDark ? UX4GColors.white : UX4GColors.primary }]}
          >
            Floating Action Button (FAB)
          </Text>
          <Text style={[styles.subtitle, { color: theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
            High-priority floating trigger and speed-dial actions. Click any button below to open/close menu items, or test the live floating FAB on the screen!
          </Text>
        </View>

        {/* Live Floating Status Alert */}
        {toastMessage ? (
          <View style={styles.toastBanner}>
            <Text style={styles.toastText}>🔔 {toastMessage}</Text>
          </View>
        ) : null}

        {/* Live Screen Overlay Controller Card */}
        <View style={cardStyle}>
          <View style={styles.cardHeaderRow}>
            <View>
              <Text style={[styles.sectionTitle, { color: theme.isDark ? UX4GColors.white : UX4GColors.neutral900 }]}>
                🚀 Live Floating Overlay (Top of Stack)
              </Text>
              <Text style={[styles.sectionSubtitle, { color: theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
                Experience how the FAB floats fixed over scrollable screen content with speed-dial animations.
              </Text>
            </View>
          </View>

          {/* Controls */}
          <View style={styles.controlsGrid}>
            {/* Toggle Float */}
            <View style={styles.controlGroup}>
              <Text style={[styles.controlLabel, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                Floating Button
              </Text>
              <View style={styles.chipRow}>
                <Pressable
                  onPress={() => setIsFloatEnabled(true)}
                  style={[
                    styles.chip,
                    isFloatEnabled && styles.activeChip,
                  ]}
                >
                  <Text style={[styles.chipText, isFloatEnabled && styles.activeChipText]}>
                    Visible (Active)
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setIsFloatEnabled(false)}
                  style={[
                    styles.chip,
                    !isFloatEnabled && styles.activeChip,
                  ]}
                >
                  <Text style={[styles.chipText, !isFloatEnabled && styles.activeChipText]}>
                    Hidden
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* Select Variant */}
            <View style={styles.controlGroup}>
              <Text style={[styles.controlLabel, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                Variant
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
                {(['menu-labelled', 'menu-spaced', 'menu-joined', 'icon', 'labelled'] as Ux4gFabVariant[]).map((v) => (
                  <Pressable
                    key={v}
                    onPress={() => setFloatVariant(v)}
                    style={[
                      styles.chip,
                      floatVariant === v && styles.activeChip,
                    ]}
                  >
                    <Text style={[styles.chipText, floatVariant === v && styles.activeChipText]}>
                      {v}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            {/* Select Theme & Position */}
            <View style={styles.rowControls}>
              <View style={[styles.controlGroup, { flex: 1 }]}>
                <Text style={[styles.controlLabel, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                  Theme
                </Text>
                <View style={styles.chipRow}>
                  <Pressable
                    onPress={() => setFloatTheme('brand')}
                    style={[styles.chip, floatTheme === 'brand' && styles.activeChip]}
                  >
                    <Text style={[styles.chipText, floatTheme === 'brand' && styles.activeChipText]}>
                      Brand
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setFloatTheme('surface')}
                    style={[styles.chip, floatTheme === 'surface' && styles.activeChip]}
                  >
                    <Text style={[styles.chipText, floatTheme === 'surface' && styles.activeChipText]}>
                      Surface
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View style={[styles.controlGroup, { flex: 1 }]}>
                <Text style={[styles.controlLabel, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral700 }]}>
                  Position
                </Text>
                <View style={styles.chipRow}>
                  <Pressable
                    onPress={() => setFloatPosition('bottom-right')}
                    style={[styles.chip, floatPosition === 'bottom-right' && styles.activeChip]}
                  >
                    <Text style={[styles.chipText, floatPosition === 'bottom-right' && styles.activeChipText]}>
                      Right
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setFloatPosition('bottom-left')}
                    style={[styles.chip, floatPosition === 'bottom-left' && styles.activeChip]}
                  >
                    <Text style={[styles.chipText, floatPosition === 'bottom-left' && styles.activeChipText]}>
                      Left
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Complete Design Matrix Section (Matching User Reference Image) */}
        <View style={cardStyle}>
          <View style={styles.cardHeaderRow}>
            <View>
              <Text style={[styles.sectionTitle, { color: theme.isDark ? UX4GColors.white : UX4GColors.neutral900 }]}>
                📐 Design System Matrix
              </Text>
              <Text style={[styles.sectionSubtitle, { color: theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600 }]}>
                Click any FAB button to test expanding and collapsing menu speed-dials.
              </Text>
            </View>
            <Pressable onPress={toggleAllMatrix} style={styles.toggleAllBtn}>
              <Text style={styles.toggleAllText}>
                {matrixExpanded ? 'Collapse All' : 'Expand All'}
              </Text>
            </Pressable>
          </View>

          {/* Matrix Headers */}
          <View style={styles.matrixHeaderRow}>
            <View style={styles.rowLabelCell} />
            <View style={styles.matrixHeaderCell}>
              <Text style={[styles.columnHeaderText, { color: theme.isDark ? UX4GColors.white : UX4GColors.neutral900 }]}>
                Brand
              </Text>
              <View style={styles.brandIndicator} />
            </View>
            <View style={styles.matrixHeaderCell}>
              <Text style={[styles.columnHeaderText, { color: theme.isDark ? UX4GColors.white : UX4GColors.neutral900 }]}>
                Surface
              </Text>
              <View style={styles.surfaceIndicator} />
            </View>
          </View>

          {/* Row 1: Icon */}
          <View style={styles.matrixRow}>
            <View style={styles.rowLabelCell}>
              <Text style={[styles.rowLabelText, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
                Icon
              </Text>
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="icon"
                colorTheme="brand"
                icon="plus"
                onPress={() => triggerToast('Brand Icon FAB pressed')}
              />
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="icon"
                colorTheme="surface"
                icon="plus"
                onPress={() => triggerToast('Surface Icon FAB pressed')}
              />
            </View>
          </View>

          <View style={styles.matrixDivider} />

          {/* Row 2: Labelled */}
          <View style={styles.matrixRow}>
            <View style={styles.rowLabelCell}>
              <Text style={[styles.rowLabelText, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
                Labelled
              </Text>
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="labelled"
                colorTheme="brand"
                icon="plus"
                label="Button"
                onPress={() => triggerToast('Brand Labelled FAB pressed')}
              />
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="labelled"
                colorTheme="surface"
                icon="plus"
                label="Button"
                onPress={() => triggerToast('Surface Labelled FAB pressed')}
              />
            </View>
          </View>

          <View style={styles.matrixDivider} />

          {/* Row 3: Menu - joined */}
          <View style={[styles.matrixRow, brandJoinedOpen || surfaceJoinedOpen ? styles.tallRow : null]}>
            <View style={styles.rowLabelCell}>
              <Text style={[styles.rowLabelText, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
                Menu - joined
              </Text>
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="menu-joined"
                colorTheme="brand"
                isOpen={brandJoinedOpen}
                onToggle={(open) => setBrandJoinedOpen(open)}
                actions={actionItems}
              />
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="menu-joined"
                colorTheme="surface"
                isOpen={surfaceJoinedOpen}
                onToggle={(open) => setSurfaceJoinedOpen(open)}
                actions={actionItems}
              />
            </View>
          </View>

          <View style={styles.matrixDivider} />

          {/* Row 4: Menu - spaced */}
          <View style={[styles.matrixRow, brandSpacedOpen || surfaceSpacedOpen ? styles.tallRow : null]}>
            <View style={styles.rowLabelCell}>
              <Text style={[styles.rowLabelText, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
                Menu - spaced
              </Text>
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="menu-spaced"
                colorTheme="brand"
                isOpen={brandSpacedOpen}
                onToggle={(open) => setBrandSpacedOpen(open)}
                actions={actionItems}
              />
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="menu-spaced"
                colorTheme="surface"
                isOpen={surfaceSpacedOpen}
                onToggle={(open) => setSurfaceSpacedOpen(open)}
                actions={actionItems}
              />
            </View>
          </View>

          <View style={styles.matrixDivider} />

          {/* Row 5: Menu - labelled */}
          <View style={[styles.matrixRow, brandLabelledOpen || surfaceLabelledOpen ? styles.extraTallRow : null]}>
            <View style={styles.rowLabelCell}>
              <Text style={[styles.rowLabelText, { color: theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral800 }]}>
                Menu - labelled
              </Text>
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="menu-labelled"
                colorTheme="brand"
                isOpen={brandLabelledOpen}
                onToggle={(open) => setBrandLabelledOpen(open)}
                actions={actionItems}
              />
            </View>
            <View style={styles.matrixCell}>
              <Ux4gFab
                variant="menu-labelled"
                colorTheme="surface"
                isOpen={surfaceLabelledOpen}
                onToggle={(open) => setSurfaceLabelledOpen(open)}
                actions={actionItems}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 110,
  },
  header: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  toastBanner: {
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  toastText: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: '600',
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  toggleAllBtn: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  toggleAllText: {
    color: UX4GColors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  // Controls
  controlsGrid: {
    marginTop: 8,
    gap: 14,
  },
  controlGroup: {
    gap: 6,
  },
  controlLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  activeChip: {
    backgroundColor: UX4GColors.primary,
    borderColor: UX4GColors.primary,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  activeChipText: {
    color: '#FFFFFF',
  },
  // Matrix Styles
  matrixHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    marginBottom: 14,
  },
  rowLabelCell: {
    width: 96,
    justifyContent: 'center',
  },
  rowLabelText: {
    fontSize: 13,
    fontWeight: '600',
  },
  matrixHeaderCell: {
    flex: 1,
    alignItems: 'center',
  },
  columnHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  brandIndicator: {
    width: 60,
    height: 3,
    backgroundColor: '#C0B3FF',
    borderRadius: 2,
  },
  surfaceIndicator: {
    width: 60,
    height: 3,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
  },
  matrixRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 14,
  },
  tallRow: {
    paddingVertical: 20,
  },
  extraTallRow: {
    paddingVertical: 24,
  },
  matrixCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  matrixDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 4,
  },
});
