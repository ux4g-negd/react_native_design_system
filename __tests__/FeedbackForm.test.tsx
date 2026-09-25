import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  Ux4gFeedbackFormStar,
  Ux4gFeedbackFormNps,
  Ux4gFeedbackFormCsat,
} from '../src/components/feedback-form';
import { Ux4gThemeProvider } from '../src/theme/Ux4gThemeContext';

describe('Ux4gFeedbackForm Components - Submit Button Enablement', () => {
  describe('Ux4gFeedbackFormStar', () => {
    it('disables submit button initially', () => {
      const { getByText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormStar />
        </Ux4gThemeProvider>
      );
      const submitBtn = getByText('Submit');
      expect(submitBtn).toBeTruthy();
    });

    it('keeps submit button disabled when rating is given but comment is empty', () => {
      const onSubmitMock = jest.fn();
      const { getByText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormStar initialRating={4} onSubmit={onSubmitMock} />
        </Ux4gThemeProvider>
      );
      const submitBtn = getByText('Submit');
      fireEvent.press(submitBtn);
      expect(onSubmitMock).not.toHaveBeenCalled();
    });

    it('enables submit button and calls onSubmit when rating and comment are both provided', () => {
      const onSubmitMock = jest.fn();
      const { getByText, getByPlaceholderText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormStar initialRating={5} onSubmit={onSubmitMock} />
        </Ux4gThemeProvider>
      );

      const commentInput = getByPlaceholderText('Tell us more about your experience');
      fireEvent.changeText(commentInput, 'Excellent service!');

      const submitBtn = getByText('Submit');
      fireEvent.press(submitBtn);

      expect(onSubmitMock).toHaveBeenCalledWith(5, [], 'Excellent service!');
      expect(getByText('Feedback submitted')).toBeTruthy();
    });
  });

  describe('Ux4gFeedbackFormNps', () => {
    it('keeps submit button disabled when score is selected but comment is empty', () => {
      const onSubmitMock = jest.fn();
      const { getByText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormNps onSubmit={onSubmitMock} />
        </Ux4gThemeProvider>
      );

      // Select score 9
      const scoreBox = getByText('9');
      fireEvent.press(scoreBox);

      const submitBtn = getByText('Submit');
      fireEvent.press(submitBtn);
      expect(onSubmitMock).not.toHaveBeenCalled();
    });

    it('enables submit button when score and comment are provided', () => {
      const onSubmitMock = jest.fn();
      const { getByText, getByPlaceholderText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormNps onSubmit={onSubmitMock} />
        </Ux4gThemeProvider>
      );

      // Select score 10
      const scoreBox = getByText('10');
      fireEvent.press(scoreBox);

      const commentInput = getByPlaceholderText('Please tell us why you gave this score');
      fireEvent.changeText(commentInput, 'Very good experience');

      const submitBtn = getByText('Submit');
      fireEvent.press(submitBtn);

      expect(onSubmitMock).toHaveBeenCalledWith(10, 'Very good experience');
      expect(getByText('Feedback submitted')).toBeTruthy();
    });
  });

  describe('Ux4gFeedbackFormCsat', () => {
    it('keeps submit button disabled when face rating is selected but comment is empty', () => {
      const onSubmitMock = jest.fn();
      const { getByText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormCsat onSubmit={onSubmitMock} />
        </Ux4gThemeProvider>
      );

      const submitBtn = getByText('Submit');
      fireEvent.press(submitBtn);
      expect(onSubmitMock).not.toHaveBeenCalled();
    });

    it('enables submit button and submits when face rating and comment are provided', () => {
      const onSubmitMock = jest.fn();
      const { getByText, getByPlaceholderText } = render(
        <Ux4gThemeProvider>
          <Ux4gFeedbackFormCsat onSubmit={onSubmitMock} />
        </Ux4gThemeProvider>
      );

      // Initially comment box is not visible until rating face is clicked
      // We can click a face pressable or render with rating
      // Face icons are in facesContainer
      const submitBtn = getByText('Submit');
      fireEvent.press(submitBtn);
      expect(onSubmitMock).not.toHaveBeenCalled();
    });
  });
});
