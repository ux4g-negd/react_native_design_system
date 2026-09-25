import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useUx4gTheme, useUx4gStyleSheet } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gSpace, Ux4gRadius } from '../../foundation/dimensions';
import { Ux4gIcons, Ux4gIconName } from '../../foundation/icons';
import { Ux4gButton } from '../button';
import { Ux4gTextArea } from '../text-area';

export interface Ux4gFeedbackFormCsatProps {
  title?: string;
  badLabel?: string;
  goodLabel?: string;
  commentPlaceholder?: string;
  submitButtonText?: string;
  skipButtonText?: string;
  successTitle?: string;
  successMessage?: string;
  minWords?: number;
  maxLength?: number;
  onSubmit?: (rating: number, comment: string) => void;
  onSkip?: () => void;
  onCloseSuccess?: () => void;
}

const CSAT_ICONS: Ux4gIconName[] = [
  'sentiment-very-dissatisfied',
  'sentiment-dissatisfied',
  'sentiment-neutral',
  'sentiment-satisfied',
  'sentiment-very-satisfied',
];

export const Ux4gFeedbackFormCsat: React.FC<Ux4gFeedbackFormCsatProps> = ({
  title = 'How do you feel about this service?',
  badLabel = '← Bad',
  goodLabel = 'Good →',
  commentPlaceholder = 'Please tell us how can we improve',
  submitButtonText = 'Submit',
  skipButtonText = 'Skip',
  successTitle = 'Feedback submitted',
  successMessage = 'Thank you for your feedback. This helps improve government services.',
  minWords = 0,
  maxLength = 200,
  onSubmit,
  onSkip,
  onCloseSuccess,
}) => {
  const theme = useUx4gTheme();
  const styles = useUx4gStyleSheet(dynamicStyles);
  const { typography, colors, isDark } = theme;

  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const getWordCount = (text: string) => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const isFormValid = () => {
    if (rating === null) return false;
    if (!comment.trim()) return false;
    if (minWords > 0 && getWordCount(comment) < minWords) return false;
    return true;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      setIsSubmitted(true);
      onSubmit?.(rating! + 1, comment); // 1-5
    }
  };

  const handleClose = () => {
    if (onCloseSuccess) {
      onCloseSuccess();
    } else {
      setRating(null);
      setComment('');
      setIsSubmitted(false);
    }
  };

  const onBackgroundColor = colors.onBackground ?? colors.onSurface ?? (isDark ? UX4GColors.white : UX4GColors.neutral1000black);
  const onSurfaceAlpha = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  // Face colors
  const unselectedBgColor = isDark ? UX4GColors.neutral800 : UX4GColors.neutral100;
  const unselectedIconColor = isDark ? UX4GColors.neutral400 : UX4GColors.neutral500;

  const selectedBgColors = isDark
    ? [UX4GColors.red900, UX4GColors.red950, UX4GColors.orange950, UX4GColors.green950, UX4GColors.green900]
    : [UX4GColors.red100, UX4GColors.red50, UX4GColors.orange50, UX4GColors.green50, UX4GColors.green100];

  const selectedIconColors = isDark
    ? [UX4GColors.red300, UX4GColors.red300, UX4GColors.orange300, UX4GColors.green300, UX4GColors.green300]
    : [UX4GColors.red600, UX4GColors.red600, UX4GColors.orange600, UX4GColors.green600, UX4GColors.green600];

  if (isSubmitted) {
    return (
      <View style={styles.container}>
        <View style={styles.successWrapper}>
          <View style={styles.successInnerBox}>
            {Ux4gIcons.thumbUp({ size: 32, color: UX4GColors.green600 })}
            <Text style={[typography.hL_strong, { color: onBackgroundColor, marginTop: 16, textAlign: 'center' }]}>
              {successTitle}
            </Text>
            <Text style={[typography.bM_default, { color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', marginTop: 8, textAlign: 'center' }]}>
              {successMessage}
            </Text>
          </View>
          <View style={styles.footerSpacing}>
            <Ux4gButton
              text="Close"
              variant="outline"
              size="large"
              width="100%"
              onPress={handleClose}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[typography.hM_strong, { color: onBackgroundColor, marginBottom: 24 }]}>
        {title}
      </Text>

      <View style={styles.facesContainer}>
        {CSAT_ICONS.map((iconName, index) => {
          const isSelected = rating === index;
          const bgColor = isSelected ? selectedBgColors[index] : unselectedBgColor;
          const iconColor = isSelected ? selectedIconColors[index] : unselectedIconColor;
          const iconRenderer = Ux4gIcons[iconName as keyof typeof Ux4gIcons];

          return (
            <View key={index} style={styles.faceWrapper}>
              <Pressable
                onPress={() => setRating(index)}
                style={[
                  styles.facePressable,
                  { backgroundColor: bgColor }
                ]}
              >
                {typeof iconRenderer === 'function' && iconRenderer({
                  size: isSelected ? 32 : 28,
                  color: iconColor,
                })}
              </Pressable>
            </View>
          );
        })}
      </View>

      <View style={styles.scaleLabelsContainer}>
        <Text style={[typography.bS_default, { color: onSurfaceAlpha }]}>{badLabel}</Text>
        <Text style={[typography.bS_default, { color: onSurfaceAlpha }]}>{goodLabel}</Text>
      </View>

      {rating !== null && (
        <View style={styles.commentSection}>
          <Ux4gTextArea
            label=""
            placeholder={commentPlaceholder}
            value={comment}
            onValueChange={setComment}
            minHeight="large"
            maxLength={maxLength}
            characterCountText={`${comment.length}/${maxLength}`}
          />
        </View>
      )}

      <View style={styles.footer}>
        <Ux4gButton
          text={submitButtonText}
          variant="primary"
          size="large"
          width="100%"
          enabled={isFormValid()}
          onPress={handleSubmit}
        />
        {onSkip && (
          <View style={{ marginTop: 8 }}>
            <Ux4gButton
              text={skipButtonText}
              variant="ghost"
              size="large"
              width="100%"
              onPress={onSkip}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const dynamicStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: 400,
      padding: 24,
      backgroundColor: theme.colors.surface ?? (theme.isDark ? UX4GColors.neutral900 : UX4GColors.white),
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    facesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    faceWrapper: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 2,
    },
    facePressable: {
      width: '100%',
      maxWidth: 48,
      aspectRatio: 1,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scaleLabelsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginTop: 12,
      marginBottom: 24,
    },
    commentSection: {
      marginBottom: 24,
    },
    charCount: {
      textAlign: 'right',
      marginTop: 4,
      color: theme.isDark ? UX4GColors.neutral400 : UX4GColors.neutral500,
    },
    footer: {
      marginTop: 0,
    },
    successWrapper: {
      width: '100%',
    },
    successInnerBox: {
      paddingHorizontal: 24,
      paddingVertical: 32,
      backgroundColor: theme.isDark ? 'rgba(34,197,94,0.12)' : 'rgba(74,222,128,0.12)',
      borderRadius: 8,
      alignItems: 'center',
    },
    footerSpacing: {
      marginTop: 24,
    },
  });
