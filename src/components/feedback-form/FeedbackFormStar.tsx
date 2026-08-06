import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useUx4gTheme, useUx4gStyleSheet } from '../../theme/Ux4gThemeContext';
import { UX4GColors } from '../../foundation/colors';
import { Ux4gSpace, Ux4gRadius } from '../../foundation/dimensions';
import { Ux4gIcons } from '../../foundation/icons';
import { Ux4gButton } from '../button';
import { Ux4gChoiceChip } from '../chips';
import { Ux4gTextArea } from '../text-area';

export interface Ux4gFeedbackFormStarProps {
  title?: string;
  improvementTitle?: string;
  commentPlaceholder?: string;
  submitButtonText?: string;
  skipButtonText?: string;
  successTitle?: string;
  successMessage?: string;
  improvementOptions?: string[];
  maxStars?: number;
  initialRating?: number;
  minWords?: number;
  maxLength?: number;
  onSubmit?: (rating: number, selectedOptions: string[], comment: string) => void;
  onSkip?: () => void;
  onCloseSuccess?: () => void;
  activeRatingColor?: string;
  lowRatingColor?: string;
  highRatingColor?: string;
  inactiveRatingColor?: string;
  successIconColor?: string;
  successBackgroundColor?: string;
  lowRatingThreshold?: number;
}

export const Ux4gFeedbackFormStar: React.FC<Ux4gFeedbackFormStarProps> = ({
  title = 'Rate your experience',
  improvementTitle = 'What can we improve?',
  commentPlaceholder = 'Tell us more about your experience',
  submitButtonText = 'Submit',
  skipButtonText = 'Skip',
  successTitle = 'Feedback submitted',
  successMessage = 'Thank you for your feedback. This helps improve government services.',
  improvementOptions = ['Speed', 'Design', 'Reliability', 'Features', 'Other'],
  maxStars = 5,
  initialRating = 0,
  minWords = 0,
  maxLength = 200,
  onSubmit,
  onSkip,
  onCloseSuccess,
  activeRatingColor,
  lowRatingColor = UX4GColors.red600,
  highRatingColor = UX4GColors.yellow600,
  inactiveRatingColor,
  successIconColor,
  successBackgroundColor,
  lowRatingThreshold = 2,
}) => {
  const theme = useUx4gTheme();
  const styles = useUx4gStyleSheet(dynamicStyles);
  const { colors, typography, isDark } = theme;

  const [rating, setRating] = useState<number>(initialRating);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const getWordCount = (text: string) => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const isFormValid = () => {
    if (rating === 0) return false;
    if (selectedOptions.length === 0) return false;
    if (!comment.trim()) return false;
    if (minWords > 0 && getWordCount(comment) < minWords) return false;
    return true;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      setIsSubmitted(true);
      onSubmit?.(rating, selectedOptions, comment);
    }
  };

  const handleClose = () => {
    if (onCloseSuccess) {
      onCloseSuccess();
    } else {
      setRating(0);
      setSelectedOptions([]);
      setComment('');
      setIsSubmitted(false);
    }
  };

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const resolveActiveRatingColor = () => {
    if (activeRatingColor) return activeRatingColor;
    if (rating <= lowRatingThreshold) {
      if (lowRatingColor === UX4GColors.red600 && isDark) {
        return colors.error ?? UX4GColors.red300;
      }
      return lowRatingColor ?? (colors.info ?? colors.primary ?? UX4GColors.blue600);
    }
    if (highRatingColor === UX4GColors.yellow600 && isDark) {
      return UX4GColors.yellow500;
    }
    return highRatingColor ?? (colors.info ?? colors.primary ?? UX4GColors.blue600);
  };

  const currentActiveRatingColor = resolveActiveRatingColor();
  const currentInactiveRatingColor = inactiveRatingColor ?? (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)');

  const onBackgroundColor = colors.onBackground ?? colors.onSurface ?? (isDark ? UX4GColors.white : UX4GColors.neutral1000black);

  const finalSuccessIconColor = successIconColor ?? colors.success ?? UX4GColors.green600;

  if (isSubmitted) {
    return (
      <View style={[styles.container, successBackgroundColor ? { backgroundColor: successBackgroundColor } : {}]}>
        <View style={styles.successWrapper}>
          <View style={styles.successInnerBox}>
            {Ux4gIcons.thumbUp({ size: 32, color: finalSuccessIconColor })}
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
      <Text style={[typography.hL_strong, { color: onBackgroundColor, marginBottom: 16 }]}>
        {title}
      </Text>

      <View style={styles.starsContainer}>
        {Array.from({ length: maxStars }).map((_, i) => (
          <Pressable key={i} onPress={() => setRating(i + 1)} style={styles.starPressable}>
            {Ux4gIcons.star({
              size: 32,
              color: i < rating ? currentActiveRatingColor : currentInactiveRatingColor,
            })}
          </Pressable>
        ))}
      </View>

      <Text style={[typography.bM_strong, { color: onBackgroundColor, marginBottom: 12 }]}>
        {improvementTitle}
      </Text>

      <View style={styles.chipsContainer}>
        {improvementOptions.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <View key={option} style={styles.chipWrapper}>
              <Ux4gChoiceChip
                text={option}
                selected={isSelected}
                borderRadius={4}
                onClick={() => toggleOption(option)}
              />
            </View>
          );
        })}
      </View>

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
              variant="tertiary"
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
    starsContainer: {
      flexDirection: 'row',
      marginBottom: 24,
    },
    starPressable: {
      paddingRight: 8,
    },
    chipsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -4,
      marginBottom: 8,
    },
    chipWrapper: {
      margin: 4,
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
      backgroundColor: theme.isDark ? 'rgba(34,197,94,0.12)' : 'rgba(74,222,128,0.12)', // success with 0.12 alpha
      borderRadius: 8,
      alignItems: 'center',
    },
    footerSpacing: {
      marginTop: 24,
    },
  });

export const Ux4gFeedbackForm = Ux4gFeedbackFormStar;
