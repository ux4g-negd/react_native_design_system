/**
 * FileUploadShowcase
 *
 * Interactive showcase for Ux4gFileUpload demonstrating:
 *  - Solid border style (default)
 *  - Dashed border style
 *  - Pre-populated file list with uploading / success / error states
 *  - Real file picking via Upload button (document picker)
 *  - Real camera scanning via Scan button (image picker)
 */

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ux4gFileUpload, UploadedFile, UploadStatus } from '../components/file-upload';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';
import { UX4GColors } from '../foundation/colors';

// ── Sample pre-populated files for showcasing states ─────────────────────
const sampleFiles: UploadedFile[] = [
  {
    id: 'sample-1',
    name: 'Aadhaar_Card_Verified.pdf',
    fileSize: 1843200,
    status: UploadStatus.success,
    progress: 1.0,
  },
  {
    id: 'sample-2',
    name: 'PAN_Card_Front.png',
    fileSize: 768000,
    status: UploadStatus.uploading,
    progress: 0.65,
  },
  {
    id: 'sample-3',
    name: 'Income_Tax_Form16.pdf',
    fileSize: 3276800,
    status: UploadStatus.error,
    progress: 0.3,
    errorMessage: 'Upload failed. Please try again.',
  },
];

export const FileUploadShowcase: React.FC = () => {
  const theme = useUx4gTheme();

  // Track files from the interactive instances
  const [interactiveFiles, setInteractiveFiles] = useState<UploadedFile[]>([]);

  const sectionTitleColor = theme.colors.onBackground;
  const subtitleColor = theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral600;

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Title */}
      <Text style={[styles.mainTitle, { color: sectionTitleColor }]}>
        📁 Ux4gFileUpload
      </Text>
      <Text style={[styles.mainSubtitle, { color: subtitleColor }]}>
        File upload component with document picker & camera scanner
      </Text>

      {/* ─── Section 1: Solid Border (Default) ─── */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          Solid Border (Default)
        </Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>
          Default border style with real file picking & camera integration
        </Text>
        <View style={styles.sectionCard}>
          <Ux4gFileUpload
            borderStyle="solid"
            maxFiles={5}
            maxFileSize={5 * 1024 * 1024}
            allowedExtensions={['jpg', 'png', 'pdf']}
            onFilesChanged={(files) => setInteractiveFiles(files)}
            onUpload={async (_file) => {
              // Simulate async upload success
              await new Promise((r) => setTimeout(r, 300));
              return true;
            }}
          />
        </View>
      </View>

      {/* ─── Section 2: Dashed Border ─── */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          Dashed Border
        </Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>
          Dashed border style variant using SVG stroke-dasharray
        </Text>
        <View style={styles.sectionCard}>
          <Ux4gFileUpload
            borderStyle="dashed"
            maxFiles={3}
            maxFileSize={10 * 1024 * 1024}
            allowedExtensions={['jpg', 'png', 'pdf', 'doc', 'docx']}
            onUpload={async (_file) => {
              await new Promise((r) => setTimeout(r, 300));
              return true;
            }}
          />
        </View>
      </View>

      {/* ─── Section 3: Pre-populated File States ─── */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          File States Showcase
        </Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>
          Demonstrates success ✅, uploading ⏳, and error ❌ states
        </Text>
        <View style={styles.sectionCard}>
          <Ux4gFileUpload
            borderStyle="solid"
            initialFiles={sampleFiles}
            onUpload={async (_file) => {
              await new Promise((r) => setTimeout(r, 500));
              return true;
            }}
          />
        </View>
      </View>

      {/* ─── Section 4: Custom Error Messages ─── */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
          Custom Error Messages
        </Text>
        <Text style={[styles.sectionDesc, { color: subtitleColor }]}>
          Custom errorTitle and errorText with 2 MB file size limit
        </Text>
        <View style={styles.sectionCard}>
          <Ux4gFileUpload
            borderStyle="dashed"
            maxFiles={2}
            maxFileSize={2 * 1024 * 1024}
            errorTitle="Upload Rejected"
            errorText="[File Name] is too large. Maximum allowed is 2 MB."
            onUpload={async (_file) => {
              await new Promise((r) => setTimeout(r, 300));
              return Math.random() > 0.5; // 50% failure rate for demo
            }}
          />
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  mainSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 12,
  },
  sectionCard: {
    paddingHorizontal: 4,
  },
});
