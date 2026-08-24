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
  if (page === 'pattern-signin-account') {
    return 'Patterns / Identity and Access / SignIn / Sign in to your account';
  }
  if (page === 'pattern-signin-otp' || page.includes('otp')) {
    return 'Patterns / Identity and Access / SignIn / Enter OTP';
  }
  if (page === 'pattern-signin-aadhaar' || page.includes('aadhaar')) {
    return 'Patterns / Identity and Access / SignIn / Sign in with Aadhaar';
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
    if (activePage === 'pattern-signin-account') {
      return <SignInDefaultDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-otp' || activePage === 'signin-otp' || activePage === 'enter-otp') {
      return <EnterOtpDoc isDark={isDark} />;
    }
    if (activePage === 'pattern-signin-aadhaar' || activePage === 'signin-aadhaar' || activePage === 'signin-with-aadhaar') {
      return <SignInAadhaarDoc isDark={isDark} />;
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
