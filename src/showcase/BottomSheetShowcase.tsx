import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';
import { Ux4gIcons } from '../foundation/icons';
import { Ux4gButton } from '../components/button';
import {
  Ux4gBottomSheet,
  Ux4gBottomSheetSize,
  Ux4gBottomSheetFooterAlign,
} from '../components/bottom-sheet';

/** Filler used as the sheet body so scrolling behaviour is visible. */
const DemoBody: React.FC<{ lines?: number; color: string }> = ({ lines = 6, color }) => (
  <>
    {Array.from({ length: lines }).map((_, i) => (
      <Text key={i} style={{ color, marginBottom: 12, fontSize: 14, lineHeight: 20 }}>
        {i + 1}. Bottom sheet body content. Pass anything you like as `children` — this slot maps
        to the `Content` slot in the Figma component.
      </Text>
    ))}
  </>
);

export const BottomSheetShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const muted = theme.isDark ? UX4GColors.neutral300 : UX4GColors.neutral700;

  const [sizeSheet, setSizeSheet] = useState<Ux4gBottomSheetSize | null>(null);
  const [basicOpen, setBasicOpen] = useState(false);
  const [iconOpen, setIconOpen] = useState(false);
  const [noHeaderOpen, setNoHeaderOpen] = useState(false);
  const [destructiveOpen, setDestructiveOpen] = useState(false);
  const [noFooterOpen, setNoFooterOpen] = useState(false);
  const [dividerOpen, setDividerOpen] = useState(false);
  const [noBackdropOpen, setNoBackdropOpen] = useState(false);
  const [footerAlign, setFooterAlign] = useState<Ux4gBottomSheetFooterAlign | null>(null);

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? UX4GColors.neutral900 : UX4GColors.neutral50,
      borderColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200,
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.header,
          { borderBottomColor: theme.isDark ? UX4GColors.neutral800 : UX4GColors.neutral200 },
        ]}
      >
        <Text
          style={[styles.title, { color: theme.isDark ? UX4GColors.white : theme.colors.primary }]}
        >
          Ux4gBottomSheet (`Ux4gBottomSheetProps`)
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.secondary }]}>
          Modal bottom sheet built to the UX4G Figma `Bottom Sheet` component set: four size
          presets, optional header/footer, swipe-to-dismiss and Android back handling.
        </Text>
      </View>

      {/* 1. Sizes */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          1. Sizes (`peek`, `half`, `expanded`, `full`)
        </Text>
        <View style={cardStyle}>
          <Text style={[styles.note, { color: muted }]}>
            Heights come from the Figma `Size` variant, as a ratio of screen height: peek 26%, half
            50%, expanded 75%, full 94%.
          </Text>
          <View style={styles.buttonRow}>
            {(['peek', 'half', 'expanded', 'full'] as Ux4gBottomSheetSize[]).map((s) => (
              <Ux4gButton
                key={s}
                variant="outline"
                size="small"
                text={s}
                onPress={() => setSizeSheet(s)}
              />
            ))}
          </View>
        </View>
      </View>

      {/* 2. Header variations */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          2. Header variations
        </Text>
        <View style={cardStyle}>
          <View style={styles.buttonRow}>
            <Ux4gButton
              variant="outline"
              size="small"
              text="Title + description"
              onPress={() => setBasicOpen(true)}
            />
            <Ux4gButton
              variant="outline"
              size="small"
              text="Icon + subtle text"
              onPress={() => setIconOpen(true)}
            />
            <Ux4gButton
              variant="outline"
              size="small"
              text="No header"
              onPress={() => setNoHeaderOpen(true)}
            />
          </View>
        </View>
      </View>

      {/* 3. Footer */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          3. Footer (`footerAlign`, `isDestructive`, `showFooter`)
        </Text>
        <View style={cardStyle}>
          <Text style={[styles.note, { color: muted }]}>
            `split` is the Figma default — both actions stretch to fill the row.
          </Text>
          <View style={styles.buttonRow}>
            {(['split', 'left', 'center', 'right'] as Ux4gBottomSheetFooterAlign[]).map((a) => (
              <Ux4gButton
                key={a}
                variant="outline"
                size="small"
                text={a}
                onPress={() => setFooterAlign(a)}
              />
            ))}
          </View>
          <View style={styles.buttonRow}>
            <Ux4gButton
              variant="outline"
              size="small"
              text="Destructive"
              onPress={() => setDestructiveOpen(true)}
            />
            <Ux4gButton
              variant="outline"
              size="small"
              text="No footer"
              onPress={() => setNoFooterOpen(true)}
            />
          </View>
        </View>
      </View>

      {/* 4. Options */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          4. Options (`showBottomDivider`, `showBackdrop`)
        </Text>
        <View style={cardStyle}>
          <View style={styles.buttonRow}>
            <Ux4gButton
              variant="outline"
              size="small"
              text="Bottom divider"
              onPress={() => setDividerOpen(true)}
            />
            <Ux4gButton
              variant="outline"
              size="small"
              text="No backdrop"
              onPress={() => setNoBackdropOpen(true)}
            />
          </View>
        </View>
      </View>

      {/* 5. Draggable & Snap Points */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
          5. Draggable & Snap Points (`draggable`, `enableDragToExpand`)
        </Text>
        <View style={cardStyle}>
          <Text style={[styles.note, { color: muted }]}>
            Drag the handle or header UP to expand through snap points (peek 26% → half 50% → expanded 75% → full 94%), or drag DOWN to collapse and dismiss.
          </Text>
          <View style={styles.buttonRow}>
            <Ux4gButton
              variant="primary"
              size="small"
              text="Open Draggable Multi-Snap Sheet"
              onPress={() => setBasicOpen(true)}
            />
          </View>
        </View>
      </View>

      {/* ── Sheets ── */}

      <Ux4gBottomSheet
        visible={sizeSheet != null}
        onDismiss={() => setSizeSheet(null)}
        size={sizeSheet ?? 'half'}
        title={`Size = ${sizeSheet ?? ''}`}
        description="Drag the handle down to dismiss."
        onPrimaryPress={() => setSizeSheet(null)}
      >
        <DemoBody lines={10} color={muted} />
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={basicOpen}
        onDismiss={() => setBasicOpen(false)}
        size="half"
        title="Header"
        description="Write description here"
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        onPrimaryPress={() => setBasicOpen(false)}
      >
        <DemoBody color={muted} />
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={iconOpen}
        onDismiss={() => setIconOpen(false)}
        size="half"
        icon={Ux4gIcons.info({ size: 24, color: theme.colors.primary })}
        title="Header"
        subtleText="Subtle text"
        description="The description indents to align with the title when an icon is present."
        onPrimaryPress={() => setIconOpen(false)}
      >
        <DemoBody color={muted} />
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={noHeaderOpen}
        onDismiss={() => setNoHeaderOpen(false)}
        size="peek"
        showHeader={false}
        onPrimaryPress={() => setNoHeaderOpen(false)}
      >
        <Text style={{ color: muted, fontSize: 14, lineHeight: 20 }}>
          `showHeader={'{false}'}` hides the whole header block — useful for simple action sheets.
        </Text>
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={footerAlign != null}
        onDismiss={() => setFooterAlign(null)}
        size="peek"
        title={`footerAlign = ${footerAlign ?? ''}`}
        footerAlign={footerAlign ?? 'split'}
        onPrimaryPress={() => setFooterAlign(null)}
      >
        <Text style={{ color: muted, fontSize: 14 }}>Compare the footer arrangement.</Text>
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={destructiveOpen}
        onDismiss={() => setDestructiveOpen(false)}
        size="peek"
        title="Delete this item?"
        description="This action cannot be undone."
        isDestructive
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onPrimaryPress={() => setDestructiveOpen(false)}
      >
        <Text style={{ color: muted, fontSize: 14 }}>
          `isDestructive` renders the primary action in the error color.
        </Text>
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={noFooterOpen}
        onDismiss={() => setNoFooterOpen(false)}
        size="half"
        title="No footer"
        showFooter={false}
      >
        <DemoBody color={muted} />
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={dividerOpen}
        onDismiss={() => setDividerOpen(false)}
        size="half"
        title="Bottom divider"
        description="Figma `? Bottom Divider` boolean, off by default."
        showBottomDivider
        onPrimaryPress={() => setDividerOpen(false)}
      >
        <DemoBody color={muted} />
      </Ux4gBottomSheet>

      <Ux4gBottomSheet
        visible={noBackdropOpen}
        onDismiss={() => setNoBackdropOpen(false)}
        size="peek"
        title="No backdrop"
        showBackdrop={false}
        onPrimaryPress={() => setNoBackdropOpen(false)}
      >
        <Text style={{ color: muted, fontSize: 14 }}>
          The scrim is hidden, so content behind stays visible. Tap the close button or swipe down.
        </Text>
      </Ux4gBottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 16, paddingBottom: 40 },
  header: { paddingBottom: 16, marginBottom: 20, borderBottomWidth: 1 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 6 },
  subtitle: { fontSize: 14, lineHeight: 20 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  card: { borderWidth: 1, borderRadius: 12, padding: 16 },
  note: { fontSize: 13, lineHeight: 18, marginBottom: 12 },
  buttonRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
