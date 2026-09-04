import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Introduction } from './pages/Introduction';
import { QuickStart } from './pages/QuickStart';
import { ButtonDoc } from './pages/ButtonDoc';
import { ButtonShowcaseDoc } from './pages/ButtonShowcaseDoc';
import { IconButtonDoc } from './pages/IconButtonDoc';
import { DatePickerDoc } from './pages/DatePickerDoc';
import { DropdownDoc } from './pages/DropdownDoc';
import { InputFieldDoc } from './pages/InputFieldDoc';
import { SpinnerDoc } from './pages/SpinnerDoc';
import { FileUploadDoc } from './pages/FileUploadDoc';
import { AccordionDoc } from './pages/AccordionDoc';
import { AccordionGroupDoc } from './pages/AccordionGroupDoc';
import { AppHeaderDoc } from './pages/AppHeaderDoc';
import { AvatarDoc } from './pages/AvatarDoc';
import { BadgeDoc } from './pages/BadgeDoc';
import { CardDoc } from './pages/CardDoc';
import { CarouselDoc } from './pages/CarouselDoc';
import { JourneyTimelineDoc } from './pages/JourneyTimelineDoc';
import { LinkDoc } from './pages/LinkDoc';
import { ModalDoc } from './pages/ModalDoc';
import { PaginationDoc } from './pages/PaginationDoc';
import { PopoverDoc } from './pages/PopoverDoc';
import { ProgressIndicatorDoc } from './pages/ProgressIndicatorDoc';
import { RadioButtonDoc } from './pages/RadioButtonDoc';
import { ResultListDoc } from './pages/ResultListDoc';
import { CheckboxDoc } from './pages/CheckboxDoc';
import { ChipsDoc } from './pages/ChipsDoc';
import { ChipGroupDoc } from './pages/ChipGroupDoc';
import { DividerDoc } from './pages/DividerDoc';
import { StatusBannerDoc } from './pages/StatusBannerDoc';
import { StatusPipelineDoc } from './pages/StatusPipelineDoc';
import { StepperDoc } from './pages/StepperDoc';
import { TagDoc } from './pages/TagDoc';
import { TextAreaDoc } from './pages/TextAreaDoc';
import { TimePickerDoc } from './pages/TimePickerDoc';
import { ToastDoc } from './pages/ToastDoc';
import { SwitchDoc } from './pages/SwitchDoc';
import { TimeSlotDoc } from './pages/TimeSlotDoc';
import { TooltipDoc } from './pages/TooltipDoc';
import { EmptyStateDoc } from './pages/EmptyStateDoc';
import { FeedbackStarDoc } from './pages/FeedbackStarDoc';
import { FeedbackCsatDoc } from './pages/FeedbackCsatDoc';
import { FeedbackNpsDoc } from './pages/FeedbackNpsDoc';
import { SearchFieldDoc } from './pages/SearchFieldDoc';
import { SliderDoc } from './pages/SliderDoc';
import { ColorsDoc, ColorsSection } from './pages/ColorsDoc';
import { TypographyDoc, TypographySection } from './pages/TypographyDoc';
import { ShadowDoc, ShadowSection } from './pages/ShadowDoc';
import { DimensionsDoc, DimensionsSection } from './pages/DimensionsDoc';
import { PatternsFormsDoc } from './pages/PatternsFormsDoc';
import { PatternsHeadersDoc } from './pages/PatternsHeadersDoc';
import { PatternsAuthDoc } from './pages/PatternsAuthDoc';
import { PatternsCardsDoc } from './pages/PatternsCardsDoc';
import { PatternsFeedbackDoc } from './pages/PatternsFeedbackDoc';
import { SignInAccountDoc } from './pages/SignInAccountDoc';
import { SignInDefaultDoc } from './pages/SignInDefaultDoc';
import { EnterOtpDoc } from './pages/EnterOtpDoc';
import { SignInAadhaarDoc } from './pages/SignInAadhaarDoc';
import { SignedInSuccessDoc } from './pages/SignedInSuccessDoc';
import { VerifyMobileOtpDoc } from './pages/VerifyMobileOtpDoc';
import { VerifyMobileVoiceDoc } from './pages/VerifyMobileVoiceDoc';
import { VerifyMobileAttemptWarningDoc } from './pages/VerifyMobileAttemptWarningDoc';
import { VerifyMobileLastAttemptDoc } from './pages/VerifyMobileLastAttemptDoc';
import { VerifyMobileAccountLockedDoc } from './pages/VerifyMobileAccountLockedDoc';
import { OtpVerifiedSuccessDoc } from './pages/OtpVerifiedSuccessDoc';
import { SessionTimeoutDialogDoc } from './pages/SessionTimeoutDialogDoc';
import { AuthIncorrectOtpDoc } from './pages/AuthIncorrectOtpDoc';
import { AuthAttemptWarningDoc } from './pages/AuthAttemptWarningDoc';
import { AuthLastAttemptDoc } from './pages/AuthLastAttemptDoc';
import { AuthAccountLockedDoc } from './pages/AuthAccountLockedDoc';
import { AuthRetryUnlockedDoc } from './pages/AuthRetryUnlockedDoc';
import { AuthSuspiciousActivityDoc } from './pages/AuthSuspiciousActivityDoc';
import { AadhaarVerifyMethodDoc } from './pages/AadhaarVerifyMethodDoc';
import { AadhaarOtpEnterDoc } from './pages/AadhaarOtpEnterDoc';
import { AadhaarFaceAuthPermissionDoc } from './pages/AadhaarFaceAuthPermissionDoc';
import { AadhaarVerifiedSuccessDoc } from './pages/AadhaarVerifiedSuccessDoc';
import { AadhaarVerificationFailedDoc } from './pages/AadhaarVerificationFailedDoc';
import { AadhaarAccountLockedDoc } from './pages/AadhaarAccountLockedDoc';
import { OperatorAssistedAuthDoc } from './pages/OperatorAssistedAuthDoc';
import { SignUpCreateAccountDoc } from './pages/SignUpCreateAccountDoc';
import { SignUpVerifyMobileDoc } from './pages/SignUpVerifyMobileDoc';
import { SignUpCompleteProfileDoc } from './pages/SignUpCompleteProfileDoc';
import { SignUpPasswordSetupDoc } from './pages/SignUpPasswordSetupDoc';
import { SignUpAccountCreatedDoc } from './pages/SignUpAccountCreatedDoc';
import { ForgotPasswordResetDoc } from './pages/ForgotPasswordResetDoc';
import { ForgotPasswordEnterOtpDoc } from './pages/ForgotPasswordEnterOtpDoc';
import { ForgotPasswordCreatePasswordDoc } from './pages/ForgotPasswordCreatePasswordDoc';
import { ForgotPasswordSuccessDoc } from './pages/ForgotPasswordSuccessDoc';
import { ForgotPasswordAccountRecoveryDoc } from './pages/ForgotPasswordAccountRecoveryDoc';
import { NotificationPatternDoc } from './pages/NotificationPatternDoc';
import { ReminderAlertsDoc } from './pages/ReminderAlertsDoc';
import { NotificationChannelsDoc } from './pages/NotificationChannelsDoc';
import { UpdateFrequencyDoc } from './pages/UpdateFrequencyDoc';
import { PerServiceDoc } from './pages/PerServiceDoc';
import { LockedNotificationsDoc } from './pages/LockedNotificationsDoc';
import { WhatsAppConsentDoc } from './pages/WhatsAppConsentDoc';
import { ManageAllDoc } from './pages/ManageAllDoc';
import { AutoDismissBannerDoc } from './pages/AutoDismissBannerDoc';
import { LiveStatusDoc } from './pages/LiveStatusDoc';
import { ReconnectingStateDoc } from './pages/ReconnectingStateDoc';
import { ManualRefreshPromptDoc } from './pages/ManualRefreshPromptDoc';
import { PaymentDoc } from './pages/PaymentDoc';
import { ChoosePaymentMethodDoc } from './pages/ChoosePaymentMethodDoc';
import { PaymentProcessingDoc } from './pages/PaymentProcessingDoc';
import { PaymentSuccessDoc } from './pages/PaymentSuccessDoc';
import { PaymentFailedDoc } from './pages/PaymentFailedDoc';
import { PaymentWaivedDoc } from './pages/PaymentWaivedDoc';
import { ApplicationStatusTrackerDoc } from './pages/ApplicationStatusTrackerDoc';
import { GrievanceStatusTrackerDoc } from './pages/GrievanceStatusTrackerDoc';
import { ConsentCaptureDoc } from './pages/ConsentCaptureDoc';
import { ConsentCaptureNotGivenDoc } from './pages/ConsentCaptureNotGivenDoc';
import { ConsentManagementDoc } from './pages/ConsentManagementDoc';
import { DataSharingConsentDoc } from './pages/DataSharingConsentDoc';
import { ManageDataSharingConsentsDoc } from './pages/ManageDataSharingConsentsDoc';
import { WithdrawConsentDialogDoc } from './pages/WithdrawConsentDialogDoc';
import { ConsentHistoryDoc } from './pages/ConsentHistoryDoc';
import { DeclarationBeforeSubmissionDoc } from './pages/DeclarationBeforeSubmissionDoc';
import { DeclarationWithDigitalSignDoc } from './pages/DeclarationWithDigitalSignDoc';
import { SaveAndResumeDoc } from './pages/SaveAndResumeDoc';
import { ContinueApplicationDoc } from './pages/ContinueApplicationDoc';
import { ResumeApplicationMissingInfoDoc } from './pages/ResumeApplicationMissingInfoDoc';
import { AutoSaveFormDoc } from './pages/AutoSaveFormDoc';
import { DraftExpiryFormDoc } from './pages/DraftExpiryFormDoc';
import { UnsavedChangesDialogDoc } from './pages/UnsavedChangesDialogDoc';
import { DiscardDraftDialogDoc } from './pages/DiscardDraftDialogDoc';
import { ApplicationSubmittedDoc } from './pages/ApplicationSubmittedDoc';
import { ApplicationQueuedDoc } from './pages/ApplicationQueuedDoc';
import { CouldNotSubmitDoc } from './pages/CouldNotSubmitDoc';
import { DocumentScanUploadDoc } from './pages/DocumentScanUploadDoc';
import { DocumentUploadProgressDoc } from './pages/DocumentUploadProgressDoc';
import { DocumentUploadReviewDoc } from './pages/DocumentUploadReviewDoc';
import { DocumentUploadSuccessDoc } from './pages/DocumentUploadSuccessDoc';
import { EligibilityCheckLandingDoc } from './pages/EligibilityCheckLandingDoc';
import { EligibilityQuestionStepDoc } from './pages/EligibilityQuestionStepDoc';
import { EligibilityFinalQuestionStepDoc } from './pages/EligibilityFinalQuestionStepDoc';
import { EligibilitySuccessStepDoc } from './pages/EligibilitySuccessStepDoc';
import { EligibilityFailureStepDoc } from './pages/EligibilityFailureStepDoc';
import { EligibilityWarningStepDoc } from './pages/EligibilityWarningStepDoc';
import { JourneyProgressIndicatorDoc } from './pages/JourneyProgressIndicatorDoc';
import { ResumeJourneyDoc } from './pages/ResumeJourneyDoc';
import { ValidationErrorDoc } from './pages/ValidationErrorDoc';
import { GovernmentFormWithValidationDoc } from './pages/GovernmentFormWithValidationDoc';
import { GovernmentFormWithErrorsDoc } from './pages/GovernmentFormWithErrorsDoc';
import { GovernmentFormWithMultipleErrorsDoc } from './pages/GovernmentFormWithMultipleErrorsDoc';
import { ApplicationSentSuccessDoc } from './pages/ApplicationSentSuccessDoc';
import { MyApplicationsDoc } from './pages/MyApplicationsDoc';
import { NoApplicationsDoc } from './pages/NoApplicationsDoc';
import { SearchApplicationsDoc } from './pages/SearchApplicationsDoc';
import { BulkActionsDoc } from './pages/BulkActionsDoc';
import { PendingTasksDoc } from './pages/PendingTasksDoc';
import { NoPendingTasksDoc } from './pages/NoPendingTasksDoc';
import { CitizenProfileDoc } from './pages/CitizenProfileDoc';
import { EditProfileDoc } from './pages/EditProfileDoc';
import { DeleteAccountDialogDoc } from './pages/DeleteAccountDialogDoc';
import { SearchAndBrowseServicesDoc } from './pages/SearchAndBrowseServicesDoc';
import { SearchWithResultsDoc } from './pages/SearchWithResultsDoc';
import { SearchResultsListDoc } from './pages/SearchResultsListDoc';
import { NoResultsDoc } from './pages/NoResultsDoc';
import { GlobalServiceDiscoveryDoc } from './pages/GlobalServiceDiscoveryDoc';
import { CategoryServiceListDoc } from './pages/CategoryServiceListDoc';
import { ServiceDetailDoc } from './pages/ServiceDetailDoc';
import { SelectAdvocateDoc } from './pages/SelectAdvocateDoc';
import { SelectAppointmentTimeDoc } from './pages/SelectAppointmentTimeDoc';
import { ConfirmAppointmentV2Doc } from './pages/ConfirmAppointmentV2Doc';
import { AppointmentConfirmedDoc } from './pages/AppointmentConfirmedDoc';
import { InlineFeedbackDoc } from './pages/InlineFeedbackDoc';
import { InlineFeedbackErrorDoc } from './pages/InlineFeedbackErrorDoc';
import { InlineFeedbackHintDoc } from './pages/InlineFeedbackHintDoc';
import { InlineFeedbackGuidanceDoc } from './pages/InlineFeedbackGuidanceDoc';
import { InlineFeedbackVerificationDoc } from './pages/InlineFeedbackVerificationDoc';
import { InlineFeedbackNoteDoc } from './pages/InlineFeedbackNoteDoc';
import { ServiceCompletionDoc } from './pages/ServiceCompletionDoc';
import { RateExperienceDoc } from './pages/RateExperienceDoc';
import { RateExperienceCardDoc } from './pages/RateExperienceCardDoc';
import { HelpCenterDoc } from './pages/HelpCenterDoc';
import { FaqDetailDoc } from './pages/FaqDetailDoc';
import { ContactSupportDoc } from './pages/ContactSupportDoc';
import {
  getPageFromUrl,
  updateUrlForPage,
} from './utils/router';

const getMobileBreadcrumb = (page: string) => {
  if (page === 'introduction') return 'Introduction';
  if (page === 'quickstart') return 'Quick Start Guide';
  if (page.startsWith('colors-')) {
    const s = page.replace('colors-', '');
    return `Token / Colors / ${s.charAt(0).toUpperCase() + s.slice(1)}`;
  }
  if (page.startsWith('typography')) return 'Token / Typography';
  if (page.startsWith('shadow')) return 'Token / Shadow';
  if (page.startsWith('dimensions') || ['spacing', 'radius'].includes(page)) return 'Token / Dimensions';
  if (page === 'pattern-operator-assisted-auth' || page.includes('operator-assisted') || page.includes('operator')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Operator-assisted authentication';
  }
  if (page === 'pattern-aadhaar-account-locked' || page.includes('aadhaar-account-locked') || page.includes('aadhaar-locked')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Aadhaar account locked';
  }
  if (page === 'pattern-aadhaar-verification-failed' || page.includes('aadhaar-verification-failed') || page.includes('aadhaar-failed')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Aadhaar verification failed';
  }
  if (page === 'pattern-aadhaar-verified-success' || page.includes('aadhaar-verified-success')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Aadhaar verified — success';
  }
  if (page === 'pattern-aadhaar-face-auth-permission' || page.includes('aadhaar-face-auth-permission') || page.includes('camera-permission')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Aadhaar Face Auth — camera permission';
  }
  if (page === 'pattern-aadhaar-otp-enter' || page.includes('aadhaar-otp-enter') || page.includes('enter-code')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Aadhaar OTP — enter code';
  }
  if (page === 'pattern-aadhaar-verify-method' || page.includes('aadhaar-verify-method') || page.includes('choose-method')) {
    return 'Patterns / Identity and Access / Aadhaar Authentication Gate / Verify with Aadhaar — choose method';
  }
  if (page === 'pattern-auth-suspicious-activity' || page.includes('suspicious-activity')) {
    return 'Patterns / Identity and Access / Auth errors and lockout / OTP step-up — suspicious activity';
  }
  if (page === 'pattern-auth-retry-unlocked' || page.includes('retry-unlocked')) {
    return 'Patterns / Identity and Access / Auth errors and lockout / OTP retry — unlocked';
  }
  if (page === 'pattern-auth-account-locked' || (page.includes('auth-errors') && page.includes('account-locked'))) {
    return 'Patterns / Identity and Access / Auth errors and lockout / OTP error — account locked';
  }
  if (page === 'pattern-auth-last-attempt' || page.includes('last-attempt-warning') || page.includes('last-attempt')) {
    return 'Patterns / Identity and Access / Auth errors and lockout / OTP error — last-attempt warning';
  }
  if (page === 'pattern-signup-create-account' || (page.includes('signup') && page.includes('create-account'))) {
    return 'Patterns / Identity and Access / SignUp / Create your account';
  }
  if (page === 'pattern-signup-verify-mobile' || (page.includes('signup') && page.includes('verify'))) {
    return 'Patterns / Identity and Access / SignUp / Verify your mobile';
  }
  if (page === 'pattern-signup-complete-profile' || (page.includes('signup') && page.includes('profile'))) {
    return 'Patterns / Identity and Access / SignUp / Complete your profile';
  }
  if (page === 'pattern-signup-password-setup' || (page.includes('signup') && page.includes('password'))) {
    return 'Patterns / Identity and Access / SignUp / Password setup';
  }
  if (page === 'pattern-signup-account-created' || (page.includes('signup') && page.includes('created'))) {
    return 'Patterns / Identity and Access / SignUp / Account Created';
  }
  if (page === 'pattern-fp-reset-password' || (page.includes('forgot') && page.includes('reset'))) {
    return 'Patterns / Identity and Access / Forgot Password and Account Recovery / Reset Password';
  }
  if (page === 'pattern-fp-enter-otp' || (page.includes('forgot') && page.includes('otp'))) {
    return 'Patterns / Identity and Access / Forgot Password and Account Recovery / Enter OTP';
  }
  if (page === 'pattern-fp-create-password' || (page.includes('forgot') && page.includes('create'))) {
    return 'Patterns / Identity and Access / Forgot Password and Account Recovery / Create new password';
  }
  if (page === 'pattern-fp-success' || (page.includes('forgot') && page.includes('success')) || page.includes('password-reset-successfully')) {
    return 'Patterns / Identity and Access / Forgot Password and Account Recovery / Password reset successfully';
  }
  if (page === 'pattern-fp-account-recovery' || (page.includes('forgot') && page.includes('recovery')) || page.includes('account-recovery')) {
    return 'Patterns / Identity and Access / Forgot Password and Account Recovery / Account recovery';
  }
  if (page === 'pattern-save-and-resume' || page.includes('save-and-resume')) {
    return 'Patterns / Application and Submission / Save and Resume / Save and Resume';
  }
  if (page === 'pattern-continue-application' || page.includes('continue-application')) {
    return 'Patterns / Application and Submission / Save and Resume / Continue Application';
  }
  if (page === 'pattern-resume-application-missing-info' || page.includes('missing-info')) {
    return 'Patterns / Application and Submission / Save and Resume / Resume Application Missing Info';
  }
  if (page === 'pattern-auto-save-form' || page.includes('auto-save')) {
    return 'Patterns / Application and Submission / Save and Resume / Auto-save Form';
  }
  if (page === 'pattern-draft-expiry-form' || page.includes('draft-expiry')) {
    return 'Patterns / Application and Submission / Save and Resume / Draft Expiry Form';
  }
  if (page === 'pattern-unsaved-changes-dialog' || page.includes('unsaved-changes')) {
    return 'Patterns / Application and Submission / Save and Resume / Unsaved Changes Dialog';
  }
  if (page === 'pattern-discard-draft-dialog' || page.includes('discard-draft')) {
    return 'Patterns / Application and Submission / Save and Resume / Discard Draft Dialog';
  }
  if (page === 'pattern-application-submitted' || page.includes('application-submitted')) {
    return 'Patterns / Application and Submission / Submission Acknowledgement / Application Submitted';
  }
  if (page === 'pattern-application-queued' || page.includes('application-queued')) {
    return 'Patterns / Application and Submission / Submission Acknowledgement / Application Queued';
  }
  if (page === 'pattern-could-not-submit' || page.includes('could-not-submit')) {
    return 'Patterns / Application and Submission / Submission Acknowledgement / Could Not Submit';
  }
  if (page === 'pattern-validation-error' || page.includes('validation-error')) {
    return 'Patterns / Application and Submission / Journey Progress Indicator / Validation Error';
  }
  if (page === 'pattern-resume-journey' || page.includes('resume-journey')) {
    return 'Patterns / Application and Submission / Journey Progress Indicator / Resume Journey';
  }
  if (page === 'pattern-journey-progress-indicator' || page.includes('journey-progress-indicator') || page.includes('journey-progress')) {
    return 'Patterns / Application and Submission / Journey Progress Indicator / Journey Progress Indicator';
  }
  if (page === 'pattern-eligibility-warning-step' || page.includes('eligibility-warning-step')) {
    return 'Patterns / Application and Submission / Eligibility Check Wizard / Eligibility Warning Step';
  }
  if (page === 'pattern-eligibility-failure-step' || page.includes('eligibility-failure-step')) {
    return 'Patterns / Application and Submission / Eligibility Check Wizard / Eligibility Failure Step';
  }
  if (page === 'pattern-eligibility-success-step' || page.includes('eligibility-success-step')) {
    return 'Patterns / Application and Submission / Eligibility Check Wizard / Eligibility Success Step';
  }
  if (page === 'pattern-eligibility-final-question-step' || page.includes('eligibility-final-question-step')) {
    return 'Patterns / Application and Submission / Eligibility Check Wizard / Eligibility Final Question Step';
  }
  if (page === 'pattern-eligibility-question-step' || page.includes('eligibility-question-step')) {
    return 'Patterns / Application and Submission / Eligibility Check Wizard / Eligibility Question Step';
  }
  if (page === 'pattern-eligibility-check-landing' || page.includes('eligibility-check-landing') || page.includes('eligibility-check-wizard')) {
    return 'Patterns / Application and Submission / Eligibility Check Wizard / Eligibility Check Landing';
  }
  if (
    page === 'pattern-inline-feedback-error' ||
    page.includes('inline-feedback-error')
  ) {
    return 'Patterns / Feedback and Communication / Inline Feedback and Status Communication / Inline Feedback Error';
  }
  if (
    page === 'pattern-inline-feedback-hint' ||
    page.includes('inline-feedback-hint')
  ) {
    return 'Patterns / Feedback and Communication / Inline Feedback and Status Communication / Inline Feedback Hint';
  }
  if (
    page === 'pattern-inline-feedback-guidance' ||
    page.includes('inline-feedback-guidance')
  ) {
    return 'Patterns / Feedback and Communication / Inline Feedback and Status Communication / Inline Feedback Guidance';
  }
  if (
    page === 'pattern-inline-feedback-verification' ||
    page.includes('inline-feedback-verification')
  ) {
    return 'Patterns / Feedback and Communication / Inline Feedback and Status Communication / Inline Feedback Verification';
  }
  if (
    page === 'pattern-contact-support' ||
    page.includes('contact-support')
  ) {
    return 'Patterns / Feedback and Communication / Contact and Support / Contact Support';
  }
  if (
    page === 'pattern-faq-detail' ||
    page.includes('faq-detail') ||
    page.includes('faq-details')
  ) {
    return 'Patterns / Feedback and Communication / Contact and Support / FAQ Details';
  }
  if (
    page === 'pattern-help-center' ||
    page.includes('help-center') ||
    page.includes('help-centre')
  ) {
    return 'Patterns / Feedback and Communication / Contact and Support / Help Center';
  }
  if (
    page === 'pattern-rate-experience-card' ||
    page.includes('rate-experience-card')
  ) {
    return 'Patterns / Feedback and Communication / Service Completion and Feedback / Rate Experience Card';
  }
  if (
    page === 'pattern-rate-your-experience' ||
    page.includes('rate-your-experience') ||
    page.includes('rate-experience')
  ) {
    return 'Patterns / Feedback and Communication / Service Completion and Feedback / Rate Your Experience';
  }
  if (
    page === 'pattern-service-completed' ||
    page.includes('service-completed') ||
    page.includes('service-completion')
  ) {
    return 'Patterns / Feedback and Communication / Service Completion and Feedback / Service Completed';
  }
  if (
    page === 'pattern-inline-feedback-note' ||
    page.includes('inline-feedback-note')
  ) {
    return 'Patterns / Feedback and Communication / Inline Feedback and Status Communication / Inline Feedback Note';
  }
  if (
    page === 'pattern-inline-feedback' ||
    page.includes('inline-feedback')
  ) {
    return 'Patterns / Feedback and Communication / Inline Feedback and Status Communication / Inline Feedback';
  }
  if (
    page === 'pattern-appointment-confirmed' ||
    page.includes('appointment-confirmed')
  ) {
    return 'Patterns / Search and Discovery / Consultation Slot Booking / Appointment Confirmed';
  }
  if (
    page === 'pattern-confirm-appointment-v2' ||
    page.includes('confirm-appointment-v2') ||
    page.includes('confirm-appointment')
  ) {
    return 'Patterns / Search and Discovery / Consultation Slot Booking / Confirm Appointment V2';
  }
  if (
    page === 'pattern-select-appointment-time' ||
    page.includes('select-appointment-time') ||
    page.includes('appointment-time')
  ) {
    return 'Patterns / Search and Discovery / Consultation Slot Booking / Select Appointment Time';
  }
  if (
    page === 'pattern-select-advocate' ||
    page.includes('select-advocate')
  ) {
    return 'Patterns / Search and Discovery / Consultation Slot Booking / Select Advocate';
  }
  if (
    page === 'pattern-service-detail' ||
    page === 'pattern-service-details' ||
    page.includes('service-detail')
  ) {
    return 'Patterns / Search and Discovery / Global Service Discovery / Service Details';
  }
  if (
    page === 'pattern-category-service-list' ||
    page.includes('category-service-list') ||
    page.includes('category-service')
  ) {
    return 'Patterns / Search and Discovery / Global Service Discovery / Category Service List';
  }
  if (
    page === 'pattern-global-service-discovery' ||
    page.includes('global-service-discovery')
  ) {
    return 'Patterns / Search and Discovery / Global Service Discovery / Global Service Discovery';
  }
  if (
    page === 'pattern-no-results' ||
    page.includes('no-results') ||
    page.includes('no-result')
  ) {
    return 'Patterns / Search and Discovery / Search and Browse / No Results';
  }
  if (
    page === 'pattern-search-results-list' ||
    page.includes('search-results-list') ||
    page.includes('search-results')
  ) {
    return 'Patterns / Search and Discovery / Search and Browse / Search Results List';
  }
  if (
    page === 'pattern-search-with-results' ||
    page.includes('search-with-results')
  ) {
    return 'Patterns / Search and Discovery / Search and Browse / Search with Results';
  }
  if (
    page === 'pattern-search-and-browse-services' ||
    page.includes('search-and-browse-services') ||
    page.includes('search-and-browse')
  ) {
    return 'Patterns / Search and Discovery / Search and Browse / Search and Browse Services';
  }
  if (page === 'pattern-delete-account-dialog' || page.includes('delete-account-dialog') || page.includes('delete-account')) {
    return 'Patterns / Dashboard and My Application / Citizen Profile and Preferences / Delete Account Dialog';
  }
  if (page === 'pattern-edit-profile' || page.includes('edit-profile')) {
    return 'Patterns / Dashboard and My Application / Citizen Profile and Preferences / Edit Profile';
  }
  if (page === 'pattern-citizen-profile' || page.includes('citizen-profile')) {
    return 'Patterns / Dashboard and My Application / Citizen Profile and Preferences / Citizen Profile';
  }
  if (page === 'pattern-no-pending-tasks' || page.includes('no-pending-tasks')) {
    return 'Patterns / Dashboard and My Application / Pending Tasks / No Pending Tasks';
  }
  if (page === 'pattern-pending-tasks' || page.includes('pending-tasks')) {
    return 'Patterns / Dashboard and My Application / Pending Tasks / Pending Tasks';
  }
  if (page === 'pattern-bulk-actions' || page.includes('bulk-actions')) {
    return 'Patterns / Dashboard and My Application / My Applications / Bulk Actions';
  }
  if (page === 'pattern-search-applications' || page.includes('search-applications')) {
    return 'Patterns / Dashboard and My Application / My Applications / Search Applications';
  }
  if (page === 'pattern-no-applications' || page.includes('no-applications')) {
    return 'Patterns / Dashboard and My Application / My Applications / No Applications';
  }
  if (page === 'pattern-my-applications' || page.includes('my-applications')) {
    return 'Patterns / Dashboard and My Application / My Applications / My Applications';
  }
  if (page === 'pattern-application-sent-success' || page.includes('application-sent-success') || page.includes('application-sent')) {
    return 'Patterns / Application and Submission / Government form with validation / Application sent success';
  }
  if (page === 'pattern-government-form-with-multiple-errors' || page.includes('government-form-with-multiple-errors') || page.includes('multiple-errors')) {
    return 'Patterns / Application and Submission / Government form with validation / Government form with multiple errors';
  }
  if (page === 'pattern-government-form-with-errors' || page.includes('government-form-with-errors') || page.includes('form-errors') || page.includes('form-with-errors')) {
    return 'Patterns / Application and Submission / Government form with validation / Government form with errors';
  }
  if (page === 'pattern-government-form-with-validation' || page.includes('government-form-with-validation') || page.includes('government-form')) {
    return 'Patterns / Application and Submission / Government form with validation / Government form with validation';
  }
  if (page === 'pattern-document-upload-success' || page.includes('document-upload-success')) {
    return 'Patterns / Application and Submission / Document scan and upload / Document upload success';
  }
  if (page === 'pattern-document-upload-review' || page.includes('document-upload-review') || page.includes('document-upload-with-review')) {
    return 'Patterns / Application and Submission / Document scan and upload / Document upload with review';
  }
  if (page === 'pattern-document-upload-progress' || page.includes('document-upload-progress') || page.includes('document-upload-with-progress')) {
    return 'Patterns / Application and Submission / Document scan and upload / Document upload with progress';
  }
  if (page === 'pattern-document-scan-upload' || page.includes('document-scan-upload') || page.includes('document-scan-and-upload')) {
    return 'Patterns / Application and Submission / Document scan and upload / Document scan and upload';
  }
  if (page === 'pattern-declaration-with-digital-sign' || page.includes('declaration-with-digital-sign') || page.includes('digital-sign')) {
    return 'Patterns / Consent and Declaration / Declaration Before Submission / Declaration with Digital Sign';
  }
  if (page === 'pattern-declaration-before-submission' || page.includes('declaration-before-submission') || page.includes('declaration')) {
    return 'Patterns / Consent and Declaration / Declaration Before Submission / Declaration Before Submission';
  }
  if (page === 'pattern-consent-history' || page.includes('consent-history') || page.includes('history')) {
    return 'Patterns / Consent and Declaration / Data Sharing Consent / Consent History';
  }
  if (page === 'pattern-withdraw-consent-dialog' || page.includes('withdraw-consent') || page.includes('withdraw')) {
    return 'Patterns / Consent and Declaration / Data Sharing Consent / Withdraw Consent Dialog';
  }
  if (page === 'pattern-manage-data-sharing-consents' || page.includes('manage-data-sharing')) {
    return 'Patterns / Consent and Declaration / Data Sharing Consent / Manage Data Sharing Consents';
  }
  if (page === 'pattern-data-sharing-consent' || page.includes('data-sharing-consent')) {
    return 'Patterns / Consent and Declaration / Data Sharing Consent / Data Sharing Consent';
  }
  if (page === 'pattern-consent-management' || page.includes('consent-management')) {
    return 'Patterns / Consent and Declaration / Consent Capture / Consent Management';
  }
  if (page === 'pattern-consent-capture-not-given' || page.includes('consent-not-given') || page.includes('not-given')) {
    return 'Patterns / Consent and Declaration / Consent Capture / Consent Capture (Consent Not Given)';
  }
  if (page === 'pattern-consent-capture' || page.includes('consent-capture')) {
    return 'Patterns / Consent and Declaration / Consent Capture / Consent Capture';
  }
  if (page === 'pattern-grievance-status-tracker' || page.includes('grievance-status-tracker') || page.includes('grievance')) {
    return 'Patterns / Status and Tracking / Grievance Status Tracker';
  }
  if (page === 'pattern-application-status-tracker' || page.includes('application-status-tracker')) {
    return 'Patterns / Status and Tracking / Application Status Tracker';
  }
  if (page === 'pattern-payment-waived' || page.includes('payment-waived') || page.includes('waived')) {
    return 'Patterns / Payment and Confirmation / Payment Waived';
  }
  if (page === 'pattern-payment-failed' || page.includes('payment-failed') || page.includes('failed')) {
    return 'Patterns / Payment and Confirmation / Payment Failed';
  }
  if (page === 'pattern-payment-success' || page.includes('payment-success') || page.includes('payment-successful')) {
    return 'Patterns / Payment and Confirmation / Payment Successful';
  }
  if (page === 'pattern-payment-processing' || page.includes('payment-processing') || page.includes('processing')) {
    return 'Patterns / Payment and Confirmation / Payment Processing';
  }
  if (page === 'pattern-choose-payment-method' || page.includes('choose-payment-method')) {
    return 'Patterns / Payment and Confirmation / Choose Payment Method';
  }
  if (page === 'pattern-payment' || page.includes('payment')) {
    return 'Patterns / Payment and Confirmation / Payment';
  }
  if (page === 'pattern-manual-refresh-prompt' || (page.includes('proactive') && page.includes('refresh')) || page.includes('manual-refresh')) {
    return 'Patterns / Notification / Proactive Status Update / Manual Refresh Prompt';
  }
  if (page === 'pattern-reconnecting-state' || (page.includes('proactive') && page.includes('reconnecting')) || page.includes('reconnecting')) {
    return 'Patterns / Notification / Proactive Status Update / Reconnecting State';
  }
  if (page === 'pattern-live-status' || (page.includes('proactive') && page.includes('live')) || page.includes('live-status')) {
    return 'Patterns / Notification / Proactive Status Update / Live Status';
  }
  if (page === 'pattern-auto-dismiss-banner' || (page.includes('proactive') && page.includes('banner')) || page.includes('auto-dismiss')) {
    return 'Patterns / Notification / Proactive Status Update / Auto-dismiss Banner';
  }
  if (page === 'pattern-manage-all' || (page.includes('notification') && page.includes('manage'))) {
    return 'Patterns / Notification / Notification Preferences / Manage All';
  }
  if (page === 'pattern-whatsapp-consent' || (page.includes('notification') && page.includes('whatsapp'))) {
    return 'Patterns / Notification / Notification Preferences / WhatsApp Consent';
  }
  if (page === 'pattern-locked-notifications' || (page.includes('notification') && page.includes('locked'))) {
    return 'Patterns / Notification / Notification Preferences / Locked Notifications';
  }
  if (page === 'pattern-per-service' || (page.includes('notification') && page.includes('service'))) {
    return 'Patterns / Notification / Notification Preferences / Per Service';
  }
  if (page === 'pattern-update-frequency' || (page.includes('notification') && page.includes('frequency'))) {
    return 'Patterns / Notification / Notification Preferences / Update Frequency';
  }
  if (page === 'pattern-notification-channels' || (page.includes('notification') && page.includes('channels'))) {
    return 'Patterns / Notification / Notification Preferences / Notification Channels';
  }
  if (page === 'pattern-reminder-alerts' || (page.includes('reminder') && page.includes('alert'))) {
    return 'Patterns / Notification / Reminder Alerts';
  }
  if (page === 'pattern-notification' || page.includes('notification')) {
    return 'Patterns / Notification / Notification';
  }
  if (page === 'pattern-auth-attempt-warning' || page.includes('attempt-warning')) {
    return 'Patterns / Identity and Access / Auth errors and lockout / OTP error — attempt warning';
  }
  if (page === 'pattern-auth-incorrect-otp' || page.includes('incorrect-entry')) {
    return 'Patterns / Identity and Access / Auth errors and lockout / OTP error — incorrect entry';
  }
  if (page === 'pattern-session-ended' || (page.includes('session') && page.includes('ended'))) {
    return 'Patterns / Identity and Access / Session Time-out Dialog / Session ended';
  }
  if (page === 'pattern-session-expiring-soon' || page.includes('expiring-soon')) {
    return 'Patterns / Identity and Access / Session Time-out Dialog / Your session is expiring soon';
  }
  if (page === 'pattern-session-expiring' || page.includes('session')) {
    return 'Patterns / Identity and Access / Session Time-out Dialog / Your session is expiring';
  }
  if (page === 'pattern-otp-verify-success' || page.includes('otp-verified-success') || page.includes('otp-success')) {
    return 'Patterns / Identity and Access / OTP Verification / OTP verified — success';
  }
  if (page === 'pattern-otp-verify-account-locked' || page.includes('account-locked') || page.includes('locked')) {
    return 'Patterns / Identity and Access / OTP Verification / Verify mobile — account locked';
  }
  if (page === 'pattern-otp-verify-last-attempt' || page.includes('last-attempt') || page.includes('lats-attempt')) {
    return 'Patterns / Identity and Access / OTP Verification / Verify mobile with last-attempt warning';
  }
  if (page === 'pattern-otp-verify-attempt-warning' || page.includes('attempt-warning') || page.includes('verify-attempt')) {
    return 'Patterns / Identity and Access / OTP Verification / Verify mobile with attempt warning';
  }
  if (page === 'pattern-otp-verify-voice' || page.includes('verify-voice') || page.includes('voice-fallback')) {
    return 'Patterns / Identity and Access / OTP Verification / Verify mobile with voice fallback';
  }
  if (page === 'pattern-otp-verify-mobile' || page.includes('verify-mobile') || page.includes('verify-your-mobile-number')) {
    return 'Patterns / Identity and Access / OTP Verification / Verify your mobile number';
  }
  if (page === 'pattern-signin-account') {
    return 'Patterns / Identity and Access / SignIn / Sign in to your account';
  }
  if (page === 'pattern-signin-otp' || page.includes('otp')) {
    return 'Patterns / Identity and Access / SignIn / Enter OTP';
  }
  if (page === 'pattern-signin-aadhaar' || page.includes('aadhaar')) {
    return 'Patterns / Identity and Access / SignIn / Sign in with Aadhaar';
  }
  if (page === 'pattern-signin-success' || page.includes('success')) {
    return 'Patterns / Identity and Access / SignIn / Signed in success';
  }
  if (page === 'pattern-signin-mobile' || page.startsWith('signin') || page.startsWith('identity')) {
    return 'Patterns / Identity and Access / SignIn / Sign in account with Mobile No';
  }
  if (page.startsWith('patterns-forms') || page === 'forms') return 'Patterns / Forms & Inputs';
  if (page.startsWith('patterns-headers') || page === 'headers') return 'Patterns / App Headers';
  if (page.startsWith('patterns-auth') || page === 'auth') return 'Patterns / Authentication & OTP';
  if (page.startsWith('patterns-cards') || page === 'cards') return 'Patterns / Cards & Dashboards';
  if (page.startsWith('patterns-feedback') || page === 'feedback') return 'Patterns / Feedback & Surveys';
  if (page.startsWith('patterns')) return 'Patterns';
  if (page.startsWith('button')) return 'Components / Buttons';
  if (page.startsWith('carousel')) return 'Components / Carousel';
  if (page.startsWith('journey-timeline')) return 'Components / Journey Timeline';
  if (page.startsWith('link')) return 'Components / Link';
  if (page.startsWith('modal')) return 'Components / Modal';
  if (page.startsWith('pagination')) return 'Components / Pagination';
  if (page.startsWith('progress-sla')) return 'Components / Progress SLA Indicator';
  if (page.startsWith('progress')) return 'Components / Progress Indicator';
  if (page.startsWith('popover')) return 'Components / Popover';
  if (page.startsWith('radio')) return 'Components / Radio Button';
  if (page.startsWith('result-list')) return 'Components / Result List';
  if (page.startsWith('search')) return 'Components / Search Field';
  if (page.startsWith('checkbox')) return 'Components / Checkbox';
  if (page.startsWith('chips')) return 'Components / Chips';
  if (page.startsWith('chip-group')) return 'Components / Chip Group';
  if (page.startsWith('divider')) return 'Components / Divider';
  if (page.startsWith('status-banner')) return 'Components / Status Banner';
  if (page.startsWith('status-pipeline')) return 'Components / Status Pipeline';
  if (page.startsWith('tooltip')) return 'Components / Tooltip';
  if (page.startsWith('timeslot')) return 'Components / Time Slot';
  if (page.startsWith('switch')) return 'Components / Switch';
  if (page.startsWith('toast')) return 'Components / Toast';
  if (page.startsWith('timepicker')) return 'Components / Time Picker';
  if (page.startsWith('textarea')) return 'Components / Text Area';
  if (page.startsWith('tag')) return 'Components / Tag';
  if (page.startsWith('stepper')) return 'Components / Stepper';
  if (page.startsWith('compact-stepper')) return 'Components / Compact Stepper';
  if (page.startsWith('input-aadhaar')) return 'Components / Input Aadhaar';
  if (page.startsWith('input-pan')) return 'Components / Input Pan';
  if (page.startsWith('input-otp')) return 'Components / Input Otp';
  if (page.startsWith('input')) return 'Components / Input Field';
  if (page.startsWith('fileupload')) return 'Components / FileUpload';
  if (page.startsWith('feedbackform')) return 'Components / Feedback';
  if (page.startsWith('empty-state')) return 'Components / Empty State';
  if (page.startsWith('slider')) return 'Components / Slider';
  if (page.startsWith('date-picker')) return 'Components / Date Picker';
  if (page.startsWith('avatar')) return 'Components / Avatar';
  return 'Documentation';
};

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('introduction');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleNavigate = useCallback((page: string) => {
    setActivePage(page);
    updateUrlForPage(page);
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const initialPage = getPageFromUrl();
    setActivePage(initialPage);

    const handleUrlChange = () => {
      const page = getPageFromUrl();
      setActivePage(page);
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const renderPage = () => {
    if (activePage.startsWith('colors-')) {
      const section = activePage.replace('colors-', '') as ColorsSection;
      return <ColorsDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('typography')) {
      const section = (activePage.replace('typography-', '').replace('typography', 'header')) as TypographySection;
      return <TypographyDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('shadow')) {
      const section = (activePage.replace('shadow-', '').replace('shadow', 'scale')) as ShadowSection;
      return <ShadowDoc isDark={isDark} section={section} />;
    }
    if (activePage.startsWith('dimensions') || ['spacing', 'radius'].includes(activePage)) {
      let section: DimensionsSection = 'spacing';
      if (activePage === 'radius' || activePage === 'dimensions-radius') section = 'radius';
      else if (activePage === 'dimensions-border') section = 'border';
      else if (activePage === 'dimensions-usage') section = 'usage';
      return <DimensionsDoc isDark={isDark} section={section} />;
    }
    if (activePage === 'button-showcase') {
      return <ButtonShowcaseDoc isDark={isDark} />;
    }
    if (activePage === 'button-icon-button') {
      return <IconButtonDoc isDark={isDark} />;
    }
    if (activePage.startsWith('button')) {
      return <ButtonDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('date-picker')) {
      return <DatePickerDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('dropdown')) {
      return <DropdownDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('fileupload')) {
      return <FileUploadDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('input')) {
      return <InputFieldDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('spinner')) {
      return <SpinnerDoc isDark={isDark} story={activePage} />;
    }
    if (activePage === 'accordion-group') {
      return <AccordionGroupDoc isDark={isDark} />;
    }
    if (activePage.startsWith('accordion')) {
      return <AccordionDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('app-header')) {
      return <AppHeaderDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('avatar')) {
      return <AvatarDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('badge')) {
      return <BadgeDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('card')) {
      return <CardDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('carousel')) {
      return <CarouselDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('journey-timeline')) {
      return <JourneyTimelineDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('link')) {
      return <LinkDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('modal')) {
      return <ModalDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('pagination')) {
      return <PaginationDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('progress-sla')) {
      return <ProgressIndicatorDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('progress')) {
      return <ProgressIndicatorDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('popover')) {
      return <PopoverDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('radio')) {
      return <RadioButtonDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('result-list')) {
      return <ResultListDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('search')) {
      return <SearchFieldDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('checkbox')) {
      return <CheckboxDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('chips')) {
      return <ChipsDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('chip-group')) {
      return <ChipGroupDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('divider')) {
      return <DividerDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('status-banner')) {
      return <StatusBannerDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('status-pipeline')) {
      return <StatusPipelineDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('tag')) {
      return <TagDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('textarea')) {
      return <TextAreaDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('timepicker')) {
      return <TimePickerDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('toast')) {
      return <ToastDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('switch')) {
      return <SwitchDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('timeslot')) {
      return <TimeSlotDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('tooltip')) {
      return <TooltipDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('stepper') || activePage.startsWith('compact-stepper')) {
      return <StepperDoc isDark={isDark} story={activePage} />;
    }
    if (activePage === 'feedbackformstar') {
      return <FeedbackStarDoc isDark={isDark} />;
    }
    if (activePage === 'feedbackformcsat') {
      return <FeedbackCsatDoc isDark={isDark} />;
    }
    if (activePage === 'feedbackformnps') {
      return <FeedbackNpsDoc isDark={isDark} />;
    }
    if (activePage.startsWith('empty-state')) {
      return <EmptyStateDoc isDark={isDark} story={activePage} />;
    }
    if (activePage.startsWith('slider')) {
      return <SliderDoc isDark={isDark} story={activePage} />;
    }
    if (activePage === 'pattern-signup-create-account' || (activePage.includes('signup') && activePage.includes('create-account'))) {
      return <SignUpCreateAccountDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signup-verify-mobile' || (activePage.includes('signup') && activePage.includes('verify'))) {
      return <SignUpVerifyMobileDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signup-complete-profile' || (activePage.includes('signup') && activePage.includes('profile'))) {
      return <SignUpCompleteProfileDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signup-password-setup' || (activePage.includes('signup') && activePage.includes('password'))) {
      return <SignUpPasswordSetupDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signup-account-created' || (activePage.includes('signup') && activePage.includes('created'))) {
      return <SignUpAccountCreatedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-fp-reset-password' || (activePage.includes('forgot') && activePage.includes('reset'))) {
      return <ForgotPasswordResetDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-fp-enter-otp' || (activePage.includes('forgot') && activePage.includes('otp'))) {
      return <ForgotPasswordEnterOtpDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-fp-create-password' || (activePage.includes('forgot') && activePage.includes('create'))) {
      return <ForgotPasswordCreatePasswordDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-fp-success' || (activePage.includes('forgot') && activePage.includes('success')) || activePage.includes('password-reset-successfully')) {
      return <ForgotPasswordSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-fp-account-recovery' || (activePage.includes('forgot') && activePage.includes('recovery')) || activePage.includes('account-recovery')) {
      return <ForgotPasswordAccountRecoveryDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-save-and-resume' || activePage.includes('save-and-resume')) {
      return <SaveAndResumeDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-continue-application' || activePage.includes('continue-application')) {
      return <ContinueApplicationDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-resume-application-missing-info' || activePage.includes('missing-info')) {
      return <ResumeApplicationMissingInfoDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auto-save-form' || activePage.includes('auto-save')) {
      return <AutoSaveFormDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-draft-expiry-form' || activePage.includes('draft-expiry')) {
      return <DraftExpiryFormDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-unsaved-changes-dialog' || activePage.includes('unsaved-changes')) {
      return <UnsavedChangesDialogDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-discard-draft-dialog' || activePage.includes('discard-draft')) {
      return <DiscardDraftDialogDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-application-submitted' || activePage.includes('application-submitted')) {
      return <ApplicationSubmittedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-application-queued' || activePage.includes('application-queued')) {
      return <ApplicationQueuedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-could-not-submit' || activePage.includes('could-not-submit')) {
      return <CouldNotSubmitDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-validation-error' || activePage.includes('validation-error')) {
      return <ValidationErrorDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-resume-journey' || activePage.includes('resume-journey')) {
      return <ResumeJourneyDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-journey-progress-indicator' || activePage.includes('journey-progress-indicator') || activePage.includes('journey-progress')) {
      return <JourneyProgressIndicatorDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-eligibility-warning-step' || activePage.includes('eligibility-warning-step')) {
      return <EligibilityWarningStepDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-eligibility-failure-step' || activePage.includes('eligibility-failure-step')) {
      return <EligibilityFailureStepDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-eligibility-success-step' || activePage.includes('eligibility-success-step')) {
      return <EligibilitySuccessStepDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-eligibility-final-question-step' || activePage.includes('eligibility-final-question-step')) {
      return <EligibilityFinalQuestionStepDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-eligibility-question-step' || activePage.includes('eligibility-question-step')) {
      return <EligibilityQuestionStepDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-eligibility-check-landing' || activePage.includes('eligibility-check-landing') || activePage.includes('eligibility-check-wizard')) {
      return <EligibilityCheckLandingDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-document-upload-success' || activePage.includes('document-upload-success')) {
      return <DocumentUploadSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-document-upload-review' || activePage.includes('document-upload-review') || activePage.includes('document-upload-with-review')) {
      return <DocumentUploadReviewDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-document-upload-progress' || activePage.includes('document-upload-progress') || activePage.includes('document-upload-with-progress')) {
      return <DocumentUploadProgressDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-inline-feedback-error' ||
      activePage.includes('inline-feedback-error')
    ) {
      return <InlineFeedbackErrorDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-inline-feedback-hint' ||
      activePage.includes('inline-feedback-hint')
    ) {
      return <InlineFeedbackHintDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-inline-feedback-guidance' ||
      activePage.includes('inline-feedback-guidance')
    ) {
      return <InlineFeedbackGuidanceDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-inline-feedback-verification' ||
      activePage.includes('inline-feedback-verification')
    ) {
      return <InlineFeedbackVerificationDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-contact-support' ||
      activePage.includes('contact-support')
    ) {
      return <ContactSupportDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-faq-detail' ||
      activePage.includes('faq-detail') ||
      activePage.includes('faq-details')
    ) {
      return <FaqDetailDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-help-center' ||
      activePage.includes('help-center') ||
      activePage.includes('help-centre')
    ) {
      return <HelpCenterDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-rate-experience-card' ||
      activePage.includes('rate-experience-card')
    ) {
      return <RateExperienceCardDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-rate-your-experience' ||
      activePage.includes('rate-your-experience') ||
      activePage.includes('rate-experience')
    ) {
      return <RateExperienceDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-service-completed' ||
      activePage.includes('service-completed') ||
      activePage.includes('service-completion')
    ) {
      return <ServiceCompletionDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-inline-feedback-note' ||
      activePage.includes('inline-feedback-note')
    ) {
      return <InlineFeedbackNoteDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-inline-feedback' ||
      activePage.includes('inline-feedback')
    ) {
      return <InlineFeedbackDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-appointment-confirmed' ||
      activePage.includes('appointment-confirmed')
    ) {
      return <AppointmentConfirmedDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-confirm-appointment-v2' ||
      activePage.includes('confirm-appointment-v2') ||
      activePage.includes('confirm-appointment')
    ) {
      return <ConfirmAppointmentV2Doc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-select-appointment-time' ||
      activePage.includes('select-appointment-time') ||
      activePage.includes('appointment-time')
    ) {
      return <SelectAppointmentTimeDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-select-advocate' ||
      activePage.includes('select-advocate')
    ) {
      return <SelectAdvocateDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-service-detail' ||
      activePage === 'pattern-service-details' ||
      activePage.includes('service-detail')
    ) {
      return <ServiceDetailDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-category-service-list' ||
      activePage.includes('category-service-list') ||
      activePage.includes('category-service')
    ) {
      return <CategoryServiceListDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-global-service-discovery' ||
      activePage.includes('global-service-discovery')
    ) {
      return <GlobalServiceDiscoveryDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-no-results' ||
      activePage.includes('no-results') ||
      activePage.includes('no-result')
    ) {
      return <NoResultsDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-search-results-list' ||
      activePage.includes('search-results-list') ||
      activePage.includes('search-results')
    ) {
      return <SearchResultsListDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-search-with-results' ||
      activePage.includes('search-with-results')
    ) {
      return <SearchWithResultsDoc isDark={isDark} />;
    }
    if (
      activePage === 'pattern-search-and-browse-services' ||
      activePage.includes('search-and-browse-services') ||
      activePage.includes('search-and-browse')
    ) {
      return <SearchAndBrowseServicesDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-delete-account-dialog' || activePage.includes('delete-account-dialog') || activePage.includes('delete-account')) {
      return <DeleteAccountDialogDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-edit-profile' || activePage.includes('edit-profile')) {
      return <EditProfileDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-citizen-profile' || activePage.includes('citizen-profile')) {
      return <CitizenProfileDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-no-pending-tasks' || activePage.includes('no-pending-tasks')) {
      return <NoPendingTasksDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-pending-tasks' || activePage.includes('pending-tasks')) {
      return <PendingTasksDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-bulk-actions' || activePage.includes('bulk-actions')) {
      return <BulkActionsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-search-applications' || activePage.includes('search-applications')) {
      return <SearchApplicationsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-no-applications' || activePage.includes('no-applications')) {
      return <NoApplicationsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-my-applications' || activePage.includes('my-applications')) {
      return <MyApplicationsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-application-sent-success' || activePage.includes('application-sent-success') || activePage.includes('application-sent')) {
      return <ApplicationSentSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-government-form-with-multiple-errors' || activePage.includes('government-form-with-multiple-errors') || activePage.includes('multiple-errors')) {
      return <GovernmentFormWithMultipleErrorsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-government-form-with-errors' || activePage.includes('government-form-with-errors') || activePage.includes('form-errors') || activePage.includes('form-with-errors')) {
      return <GovernmentFormWithErrorsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-government-form-with-validation' || activePage.includes('government-form-with-validation') || activePage.includes('government-form')) {
      return <GovernmentFormWithValidationDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-document-scan-upload' || activePage.includes('document-scan-upload') || activePage.includes('document-scan-and-upload')) {
      return <DocumentScanUploadDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-declaration-with-digital-sign' || activePage.includes('declaration-with-digital-sign') || activePage.includes('digital-sign')) {
      return <DeclarationWithDigitalSignDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-declaration-before-submission' || activePage.includes('declaration-before-submission') || activePage.includes('declaration')) {
      return <DeclarationBeforeSubmissionDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-consent-history' || activePage.includes('consent-history') || activePage.includes('history')) {
      return <ConsentHistoryDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-withdraw-consent-dialog' || activePage.includes('withdraw-consent') || activePage.includes('withdraw')) {
      return <WithdrawConsentDialogDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-manage-data-sharing-consents' || activePage.includes('manage-data-sharing')) {
      return <ManageDataSharingConsentsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-data-sharing-consent' || activePage.includes('data-sharing-consent')) {
      return <DataSharingConsentDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-consent-management' || activePage.includes('consent-management')) {
      return <ConsentManagementDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-consent-capture-not-given' || activePage.includes('consent-not-given') || activePage.includes('not-given')) {
      return <ConsentCaptureNotGivenDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-consent-capture' || activePage.includes('consent-capture')) {
      return <ConsentCaptureDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-grievance-status-tracker' || activePage.includes('grievance-status-tracker') || activePage.includes('grievance')) {
      return <GrievanceStatusTrackerDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-application-status-tracker' || activePage.includes('application-status-tracker')) {
      return <ApplicationStatusTrackerDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-payment-waived' || activePage.includes('payment-waived') || activePage.includes('waived')) {
      return <PaymentWaivedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-payment-failed' || activePage.includes('payment-failed') || activePage.includes('failed')) {
      return <PaymentFailedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-payment-success' || activePage.includes('payment-success') || activePage.includes('payment-successful')) {
      return <PaymentSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-payment-processing' || activePage.includes('payment-processing') || activePage.includes('processing')) {
      return <PaymentProcessingDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-choose-payment-method' || activePage.includes('choose-payment-method')) {
      return <ChoosePaymentMethodDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-payment' || activePage.includes('payment')) {
      return <PaymentDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-manual-refresh-prompt' || activePage.includes('manual-refresh-prompt') || (activePage.includes('proactive') && activePage.includes('refresh'))) {
      return <ManualRefreshPromptDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-reconnecting-state' || (activePage.includes('proactive') && activePage.includes('reconnecting')) || activePage.includes('reconnecting')) {
      return <ReconnectingStateDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-live-status' || (activePage.includes('proactive') && activePage.includes('live')) || activePage.includes('live-status')) {
      return <LiveStatusDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auto-dismiss-banner' || (activePage.includes('proactive') && activePage.includes('banner')) || activePage.includes('auto-dismiss')) {
      return <AutoDismissBannerDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-manage-all' || (activePage.includes('notification') && activePage.includes('manage'))) {
      return <ManageAllDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-whatsapp-consent' || (activePage.includes('notification') && activePage.includes('whatsapp'))) {
      return <WhatsAppConsentDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-locked-notifications' || (activePage.includes('notification') && activePage.includes('locked'))) {
      return <LockedNotificationsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-per-service' || (activePage.includes('notification') && activePage.includes('service'))) {
      return <PerServiceDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-update-frequency' || (activePage.includes('notification') && activePage.includes('frequency'))) {
      return <UpdateFrequencyDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-notification-channels' || (activePage.includes('notification') && activePage.includes('channels'))) {
      return <NotificationChannelsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-reminder-alerts' || (activePage.includes('reminder') && activePage.includes('alert'))) {
      return <ReminderAlertsDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-notification' || activePage.includes('notification')) {
      return <NotificationPatternDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-operator-assisted-auth' || activePage.includes('operator-assisted') || activePage.includes('operator')) {
      return <OperatorAssistedAuthDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-aadhaar-account-locked' || activePage.includes('aadhaar-account-locked') || activePage.includes('aadhaar-locked')) {
      return <AadhaarAccountLockedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-aadhaar-verification-failed' || activePage.includes('aadhaar-verification-failed') || activePage.includes('aadhaar-failed')) {
      return <AadhaarVerificationFailedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-aadhaar-verified-success' || activePage.includes('aadhaar-verified-success')) {
      return <AadhaarVerifiedSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-aadhaar-face-auth-permission' || activePage.includes('aadhaar-face-auth-permission') || activePage.includes('camera-permission')) {
      return <AadhaarFaceAuthPermissionDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-aadhaar-otp-enter' || activePage.includes('aadhaar-otp-enter') || activePage.includes('enter-code')) {
      return <AadhaarOtpEnterDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-aadhaar-verify-method' || activePage.includes('aadhaar-verify-method') || activePage.includes('choose-method')) {
      return <AadhaarVerifyMethodDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auth-suspicious-activity' || activePage.includes('suspicious-activity') || (activePage.includes('auth-errors') && activePage.includes('suspicious'))) {
      return <AuthSuspiciousActivityDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auth-retry-unlocked' || activePage.includes('retry-unlocked') || (activePage.includes('auth-errors') && activePage.includes('unlocked'))) {
      return <AuthRetryUnlockedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auth-account-locked' || (activePage.includes('auth-errors') && activePage.includes('account-locked')) || (activePage.includes('auth-errors') && activePage.includes('locked'))) {
      return <AuthAccountLockedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auth-last-attempt' || activePage.includes('last-attempt-warning') || (activePage.includes('auth-errors') && activePage.includes('last-attempt'))) {
      return <AuthLastAttemptDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auth-attempt-warning' || activePage.includes('attempt-warning') || (activePage.includes('auth-errors') && activePage.includes('attempt'))) {
      return <AuthAttemptWarningDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-auth-incorrect-otp' || activePage.includes('incorrect-entry') || (activePage.includes('auth-errors') && activePage.includes('incorrect'))) {
      return <AuthIncorrectOtpDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-session-ended' || (activePage.includes('session') && activePage.includes('ended'))) {
      return <SessionTimeoutDialogDoc isDark={isDark} initialSubTab="session-ended" />;
    }
    if (activePage === 'pattern-session-expiring-soon' || activePage.includes('expiring-soon')) {
      return <SessionTimeoutDialogDoc isDark={isDark} initialSubTab="expiring-soon" />;
    }
    if (activePage === 'pattern-session-expiring' || activePage.includes('session-expiring') || activePage.includes('session-timeout')) {
      return <SessionTimeoutDialogDoc isDark={isDark} initialSubTab="expiring" />;
    }
    if (activePage === 'pattern-otp-verify-success' || activePage === 'otp-verified-success' || activePage.includes('otp-verified') || activePage.includes('otp-success')) {
      return <OtpVerifiedSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-otp-verify-account-locked' || activePage === 'verify-mobile-account-locked' || activePage.includes('account-locked')) {
      return <VerifyMobileAccountLockedDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-otp-verify-last-attempt' || activePage === 'verify-mobile-with-last-attempt-warning' || activePage === 'verify-last-attempt' || activePage.includes('last-attempt') || activePage.includes('lats-attempt')) {
      return <VerifyMobileLastAttemptDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-otp-verify-attempt-warning' || activePage === 'verify-mobile-with-attempt-warning' || activePage === 'verify-attempt') {
      return <VerifyMobileAttemptWarningDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-otp-verify-voice' || activePage === 'verify-mobile-with-voice-fallback' || activePage === 'verify-voice') {
      return <VerifyMobileVoiceDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-otp-verify-mobile' || activePage === 'verify-mobile' || activePage === 'verify-your-mobile-number') {
      return <VerifyMobileOtpDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-account') {
      return <SignInDefaultDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-otp' || activePage === 'signin-otp' || activePage === 'enter-otp') {
      return <EnterOtpDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-aadhaar' || activePage === 'signin-aadhaar' || activePage === 'signin-with-aadhaar') {
      return <SignInAadhaarDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-success' || activePage === 'signin-success' || activePage === 'signed-in-success') {
      return <SignedInSuccessDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-mobile' || activePage.startsWith('signin') || activePage.startsWith('identity')) {
      return <SignInAccountDoc isDark={isDark} />;
    }
    if (activePage === 'patterns-forms' || activePage === 'forms') {
      return <PatternsFormsDoc isDark={isDark} />;
    }
    if (activePage === 'patterns-headers' || activePage === 'headers') {
      return <PatternsHeadersDoc isDark={isDark} />;
    }
    if (activePage === 'patterns-auth' || activePage === 'auth') {
      return <PatternsAuthDoc isDark={isDark} />;
    }
    if (activePage === 'patterns-cards' || activePage === 'cards') {
      return <PatternsCardsDoc isDark={isDark} />;
    }
    if (activePage === 'patterns-feedback' || activePage === 'feedback') {
      return <PatternsFeedbackDoc isDark={isDark} />;
    }

    switch (activePage) {
      case 'introduction':
        return <Introduction isDark={isDark} onNavigate={handleNavigate} />;
      case 'quickstart':
        return <QuickStart isDark={isDark} onNavigate={handleNavigate} />;
      default:
        return <Introduction isDark={isDark} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-layout">
      {/* Mobile Top Navigation Bar */}
      <header className={`mobile-topbar ${isDark ? 'dark' : ''}`}>
        <div className="mobile-logo-wrapper" onClick={() => handleNavigate('introduction')}>
          <img src="/ux4g_logo.svg" alt="UX4G Logo" className="mobile-logo-img" />
        </div>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined theme-toggle-icon">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </header>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />
      <main className={`main-content ${isDark ? 'dark' : ''} ${activePage === 'introduction' ? 'no-padding' : ''}`}>
        {renderPage()}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <div
        className={`mobile-bottombar ${isDark ? 'dark' : ''}`}
        onClick={() => setIsMobileOpen((prev) => !prev)}
      >
        <div className="mobile-bottombar-left">
          <span className="material-symbols-outlined mobile-bottombar-icon">
            {isMobileOpen ? 'close' : 'menu'}
          </span>
          <span className="mobile-bottombar-path">{getMobileBreadcrumb(activePage)}</span>
        </div>
        <span className="material-symbols-outlined mobile-bottombar-chevron">
          {isMobileOpen ? 'expand_more' : 'expand_less'}
        </span>
      </div>
    </div>
  );
};

export default App;
