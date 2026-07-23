import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ux4gStatusBanner } from '../components/status-banner/StatusBanner';
import { Ux4gButton } from '../components/button/Button';
import { Ux4gTag } from '../components/tag/Tag';
import { Ux4gSpinner } from '../components/spinner/Spinner';
import { Ux4gIcons } from '../foundation/icons';
import { useUx4gTheme } from '../theme/Ux4gThemeContext';

export const StatusBannerShowcase: React.FC = () => {
  const theme = useUx4gTheme();
  const colors = theme.colors;

  const [dismissedBanners, setDismissedBanners] = useState<string[]>([]);
  const [isDraftExpanded, setIsDraftExpanded] = useState(false);

  const handleDismiss = (id: string) => {
    setDismissedBanners((prev) => [...prev, id]);
  };

  const isVisible = (id: string) => !dismissedBanners.includes(id);

  const cardStyle = [
    styles.card,
    {
      backgroundColor: theme.isDark ? '#1F1F1F' : '#FFFFFF',
      borderColor: theme.isDark ? '#333333' : '#E4E4E7',
    },
  ];

  const titleStyle = [
    styles.sectionTitle,
    { color: theme.isDark ? '#F4F4F5' : '#18181B' },
  ];

  const subtitleStyle = [
    styles.subText,
    { color: theme.isDark ? '#A1A1AA' : '#71717A' },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.onBackground }]}>
          📢 Status Banner Component (`Ux4gStatusBanner`)
        </Text>
        <Text style={subtitleStyle}>
          Ported from Flutter `status_banner.dart`. Supports 8 visual variants (`warningLight`, `warningSolid`, `errorLight`, `successLight`, `savingLight`, `infoLight`, `neutralLight`, `primaryLight`), leading/trailing icons, badges, bottom actions, and dismiss controls.
        </Text>
      </View>

      {/* 1. All 8 Visual Variants */}
      <View style={cardStyle}>
        <Text style={titleStyle}>1. Banner Variants (`variant`)</Text>
        <Text style={subtitleStyle}>
          Comprehensive display of all 8 status banner variants using default foundation icons and color tokens.
        </Text>
        <View style={styles.stackGroup}>
          <Ux4gStatusBanner
            variant="warningLight"
            title="Warning Light Banner"
            subtitle="Please complete your profile verification to unlock all features."
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="warningSolid"
            title="Warning Solid Banner"
            subtitle="Critical system maintenance scheduled in 15 minutes."
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="errorLight"
            title="Error Light Banner"
            subtitle="Transaction failed. Please check your account balance and retry."
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="successLight"
            title="Success Light Banner"
            subtitle="Document successfully verified and stored in DigiLocker."
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="primaryLight"
            title="Primary Light Banner"
            subtitle="New government scheme updates are now available for application."
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="infoLight"
            title="Info Light Banner"
            subtitle="Service portal undergoing scheduled upgrade tonight from 2:00 AM."
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="neutralLight"
            title="Neutral Light Banner"
            subtitle="Standard informational notification for administrative status."
            marginStyle={styles.zeroMargin}
          />
        </View>
      </View>

      {/* 2. Real-World Application & Draft Workflows (Matching User Design Images) */}
      <View style={cardStyle}>
        <Text style={titleStyle}>2. Real-World Application & Draft Workflows</Text>
        <Text style={subtitleStyle}>
          Exact reproduction of portal draft banners, saving progress indicators, and expandable application states.
        </Text>
        <View style={styles.stackGroup}>
          {/* Card 1: Expandable Application Draft Banner */}
          <Ux4gStatusBanner
            variant="warningLight"
            title="Income Certificate Application"
            subtitleWidget={
              <View style={{ marginTop: 4 }}>
                <Ux4gTag text="Step 3 of 5 Document Upload" colorScheme="warning" style="tonal" size="m" />
                <Text style={{ fontSize: 13, color: '#71717A', marginTop: 4 }}>Last saved: 10 Apr 2026</Text>
              </View>
            }
            trailingIcon={
              <Pressable onPress={() => setIsDraftExpanded((prev) => !prev)}>
                {isDraftExpanded
                  ? Ux4gIcons.arrowUp({ size: 20, color: '#18181B' })
                  : Ux4gIcons.arrowDropDown({ size: 20, color: '#18181B' })}
              </Pressable>
            }
            actionsAlignment="space-between"
            actions={
              isDraftExpanded
                ? [
                    <Ux4gButton
                      key="discard"
                      text="Discard"
                      size="small"
                      variant="ghost"
                      contentColor="#DB372D"
                      onPress={() => {}}
                    />,
                    <Ux4gButton
                      key="resume"
                      text="Resume"
                      size="small"
                      variant="primary"
                      backgroundColor="#4A2BC2"
                      onPress={() => {}}
                    />,
                  ]
                : undefined
            }
            marginStyle={styles.zeroMargin}
          />

          {/* Card 2: Warning Solid Draft Expiry Banner */}
          <Ux4gStatusBanner
            variant="warningSolid"
            title="Your draft expires tomorrow. Submit today"
            backgroundColor="#E65100"
            marginStyle={styles.zeroMargin}
          />

          {/* Card 3: Saving State Banner */}
          <Ux4gStatusBanner
            variant="warningLight"
            title=""
            trailingIcon={
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Ux4gSpinner size={20} strokeWidth={3} color="#6A4EFF" />
                <Text style={{ fontSize: 14, color: '#71717A' }}>Saving</Text>
              </View>
            }
            marginStyle={styles.zeroMargin}
          />

          {/* Card 4: Draft Saved Success Banner */}
          <Ux4gStatusBanner
            variant="successLight"
            title="Draft saved successfully at 3:14 PM"
            leadingIcon={Ux4gIcons.success({ size: 22, color: '#128937' })}
            marginStyle={styles.zeroMargin}
          />

          {/* Card 5: Draft Expiry Warning with Date Tag */}
          <Ux4gStatusBanner
            variant="warningLight"
            title="Your draft expires in 5 days"
            badge={<Ux4gTag text="16 Apr" colorScheme="warning" style="tonal" size="m" />}
            marginStyle={styles.zeroMargin}
          />

          {/* Card 6: Draft Expired Error Banner with Action Link */}
          <Ux4gStatusBanner
            variant="errorLight"
            title="Draft expired on 9 April 2026"
            leadingIcon={Ux4gIcons.error({ size: 22, color: '#DB372D' })}
            trailingIcon={
              <Pressable onPress={() => {}}>
                <Text style={{ fontSize: 15, fontWeight: '700', color: '#A46800' }}>Action</Text>
              </Pressable>
            }
            marginStyle={styles.zeroMargin}
          />

          {/* Card 7: Saved Right-Aligned Trailing Checkmark Banner */}
          <Ux4gStatusBanner
            variant="successLight"
            title=""
            trailingIcon={
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                {Ux4gIcons.success({ size: 20, color: '#128937' })}
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#128937' }}>
                  Saved 3:14 PM
                </Text>
              </View>
            }
            marginStyle={styles.zeroMargin}
          />
        </View>
      </View>

      {/* 3. Banner with Badges & Subtitle Widget */}
      <View style={cardStyle}>
        <Text style={titleStyle}>3. Banner with Badges (`badge` & `subtitleWidget`)</Text>
        <Text style={subtitleStyle}>
          Attach status tags or custom components inside the title wrap and subtitle area.
        </Text>
        <View style={styles.stackGroup}>
          <Ux4gStatusBanner
            variant="successLight"
            title="Aadhaar KYC Verification"
            badge={<Ux4gTag text="VERIFIED" colorScheme="success" style="filled" size="m" />}
            subtitle="Your Aadhaar number ending in 9821 is linked and verified."
            leadingIcon={Ux4gIcons.verification({ size: 22 })}
            marginStyle={styles.zeroMargin}
          />
          <Ux4gStatusBanner
            variant="warningLight"
            title="PAN Card Authentication"
            badge={<Ux4gTag text="PENDING" colorScheme="warning" style="tonal" size="m" />}
            subtitleWidget={
              <Text style={{ fontSize: 13, color: '#D46B08', fontWeight: '600' }}>
                ⚠️ Action required: Re-upload clear PAN document before July 31.
              </Text>
            }
            leadingIcon={Ux4gIcons.warning({ size: 20, color: '#FA8C16' })}
            marginStyle={styles.zeroMargin}
          />
        </View>
      </View>

      {/* 4. Banner with Action Buttons */}
      <View style={cardStyle}>
        <Text style={titleStyle}>4. Banner with Actions (`actions` & `actionsAlignment`)</Text>
        <Text style={subtitleStyle}>
          Inline call-to-action buttons aligned to start, end, or space-between.
        </Text>
        <View style={styles.stackGroup}>
          <Ux4gStatusBanner
            variant="primaryLight"
            title="Update Available"
            subtitle="Version 2.4.0 includes new security features and faster document downloads."
            leadingIcon={Ux4gIcons.shield({ size: 20, color: colors.primary })}
            actionsAlignment="start"
            actions={[
              <Ux4gButton
                key="1"
                text="Update Now"
                size="small"
                variant="primary"
                onPress={() => {}}
              />,
              <Ux4gButton
                key="2"
                text="Release Notes"
                size="small"
                variant="outline"
                onPress={() => {}}
              />,
            ]}
            marginStyle={styles.zeroMargin}
          />

          <Ux4gStatusBanner
            variant="errorLight"
            title="Session Expiring"
            subtitle="Your active session will expire in 2 minutes due to inactivity."
            leadingIcon={Ux4gIcons.error({ size: 20, color: '#DB372D' })}
            actionsAlignment="end"
            actions={[
              <Ux4gButton
                key="logout"
                text="Logout"
                size="small"
                variant="ghost"
                onPress={() => {}}
              />,
              <Ux4gButton
                key="extend"
                text="Extend Session"
                size="small"
                variant="primary"
                backgroundColor="#DB372D"
                onPress={() => {}}
              />,
            ]}
            marginStyle={styles.zeroMargin}
          />
        </View>
      </View>

      {/* 5. Interactive Dismissable Banners */}
      <View style={cardStyle}>
        <Text style={titleStyle}>5. Interactive Dismissable Banner (`onDismiss`)</Text>
        <Text style={subtitleStyle}>
          Tap the trailing ✕ icon button to dismiss the banner!
        </Text>
        <View style={styles.stackGroup}>
          {isVisible('banner-1') && (
            <Ux4gStatusBanner
              variant="warningLight"
              title="Dismissable Announcement"
              subtitle="This banner can be closed by tapping the trailing dismiss icon button."
              leadingIcon={Ux4gIcons.warning({ size: 20, color: '#FA8C16' })}
              onDismiss={() => handleDismiss('banner-1')}
              marginStyle={styles.zeroMargin}
            />
          )}
          {isVisible('banner-2') && (
            <Ux4gStatusBanner
              variant="infoLight"
              title="Tip of the Day"
              subtitle="Use DigiLocker integration for instant paperless document verification."
              leadingIcon={Ux4gIcons.info({ size: 20, color: '#13C2C2' })}
              onDismiss={() => handleDismiss('banner-2')}
              marginStyle={styles.zeroMargin}
            />
          )}
          {dismissedBanners.length > 0 && (
            <View style={{ marginTop: 8 }}>
              <Ux4gButton
                text="Reset Dismissed Banners"
                size="small"
                variant="outline"
                onPress={() => setDismissedBanners([])}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  subText: {
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  stackGroup: {
    marginTop: 14,
    gap: 14,
  },
  zeroMargin: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
});
