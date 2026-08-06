import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useUx4gTheme, useUx4gStyleSheet } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gSpace, Ux4gRadius } from '../../foundation/dimensions';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button';
import { Ux4gTextArea } from '../text-area';

export interface Ux4gFeedbackFormNpsProps {
  title?: string;
  unlikelyLabel?: string;
  likelyLabel?: string;
  commentPlaceholder?: string;
  submitButtonText?: string;
  skipButtonText?: string;
  successTitle?: string;
  successMessage?: string;
  minWords?: number;
  maxLength?: number;
  onSubmit?: (score: number, comment: string) => void;
  onSkip?: () => void;
  onCloseSuccess?: () => void;
}

export const Ux4gFeedbackFormNps: React.FC<Ux4gFeedbackFormNpsProps> = ({
  title = 'How likely are you to recommend us?',
  unlikelyLabel = '0 - Extremely Unlikely',
  likelyLabel = '10 - Extremely Likely',
  commentPlaceholder = 'Please tell us why you gave this score',
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
  const { colors, typography, isDark } = theme;

  const [score, setScore] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const getWordCount = (text: string) => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const isFormValid = () => {
    if (score === null) return false;
    if (minWords > 0 && getWordCount(comment) < minWords) return false;
    return true;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      setIsSubmitted(true);
      onSubmit?.(score!, comment);
    }
  };

  const handleClose = () => {
    if (onCloseSuccess) {
      onCloseSuccess();
    } else {
      setScore(null);
      setComment('');
      setIsSubmitted(false);
    }
  };

  const onBackgroundColor = colors.onBackground ?? colors.onSurface ?? (isDark ? UX4GColors.white : UX4GColors.neutral1000black);
  const surfaceColor = colors.surface ?? (isDark ? UX4GColors.neutral900 : UX4GColors.white);
  const onSurfaceAlpha = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

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
      <Text style={[typography.hM_strong, { color: onBackgroundColor, marginBottom: 24, textAlign: 'center' }]}>
        {title}
      </Text>

      <View style={styles.scoreScaleContainer}>
        {Array.from({ length: 11 }).map((_, index) => {
          const isHighlighted = score !== null && index <= score;

          let scoreBg = surfaceColor;
          let scoreText = onBackgroundColor;

          if (isHighlighted) {
            if (score! <= 3) {
              scoreBg = isDark ? UX4GColors.red900 : UX4GColors.red100;
              scoreText = isDark ? UX4GColors.red300 : UX4GColors.red800;
            } else if (score! <= 6) {
              scoreBg = isDark ? UX4GColors.orange900 : UX4GColors.orange100;
              scoreText = isDark ? UX4GColors.orange300 : UX4GColors.orange800;
            } else {
              scoreBg = isDark ? UX4GColors.green900 : UX4GColors.green100;
              scoreText = isDark ? UX4GColors.green300 : UX4GColors.green800;
            }
          }

          return (
            <Pressable
              key={index}
              onPress={() => setScore(index)}
              style={[
                styles.scoreBox,
                {
                  backgroundColor: scoreBg,
                  borderColor: isHighlighted ? 'transparent' : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'),
                  borderWidth: isHighlighted ? 0 : 1,
                },
              ]}
            >
              <Text style={[typography.bM_strong, { color: scoreText }]}>{index}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.scaleLabelsContainer}>
        <Text style={[typography.bXS_default, { color: onSurfaceAlpha }]}>{unlikelyLabel}</Text>
        <Text style={[typography.bXS_default, { color: onSurfaceAlpha }]}>{likelyLabel}</Text>
      </View>

      {score !== null && (
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
    scoreScaleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginHorizontal: -4,
    },
    scoreBox: {
      width: 32,
      height: 32,
      margin: 4,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scaleLabelsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
