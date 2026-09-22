export interface RNPropMappingItem {
  component: string;
  propGroup: string;
  ux4gProp: string;
  paperProp: string;
  rneProp: string;
  description: string;
}

export const RN_PROPS_MAPPING_DATA: RNPropMappingItem[] = [
  // 1. Ux4gAccordion
  {
    component: "Ux4gAccordion",
    propGroup: "Header & Toggle",
    ux4gProp: "title={string} | expanded={boolean} | onExpandedChange={(exp) => void} | children={ReactNode} | content={ReactNode}",
    paperProp: "title={string} | description={string} | expanded={boolean} | onPress",
    rneProp: "isExpanded={boolean} | content={<ListItem.Content />}",
    description: "Header title and collapsible state control. Supports either children or content prop."
  },
  {
    component: "Ux4gAccordion",
    propGroup: "Icons & Positioning",
    ux4gProp: "chevronPosition='leading' | 'trailing' | leadingIcon={ReactNode} | enabled={boolean}",
    paperProp: "left={(props) => <List.Icon {...props} />}",
    rneProp: "expandIcon={ReactNode} | icon={ReactNode}",
    description: "Configurable chevron position ('leading' or 'trailing') with optional leading icon and enabled state."
  },
  {
    component: "Ux4gAccordionGroup",
    propGroup: "Group & Item Management",
    ux4gProp: "items={Ux4gAccordionItem[]} | expandedIndex={number | null} | onExpandedIndexChange={(idx) => void} | itemSpacing={number} | contentBuilder={(idx, item) => ReactNode}",
    paperProp: "<List.AccordionGroup>",
    rneProp: "<ListItem.Accordion>",
    description: "Accordion collection container with controlled expandedIndex and custom itemSpacing."
  },

  // 2. Ux4gAppHeader
  {
    component: "Ux4gAppHeader",
    propGroup: "Navigation & Title",
    ux4gProp: "title={string} | variant='light' | 'filled' | 'outlined' | showBackButton={boolean} | onBackPressed={() => void}",
    paperProp: "<Appbar.Header> | <Appbar.BackAction onPress={...} /> | <Appbar.Content title={...} />",
    rneProp: "leftComponent={<Header.BackButton />} | centerComponent={{ text: string }}",
    description: "Top screen navigation bar with government-compliant styling, theme variants, and back button handler."
  },
  {
    component: "Ux4gAppHeader",
    propGroup: "Actions & Avatar",
    ux4gProp: "actions={Ux4gAppHeaderAction[]} | avatar={ReactNode} | showAvatar={boolean} | avatarImageUrl={string} | avatarInitials={string} | onAvatarPressed={() => void} | leadingWidgets={ReactNode[]}",
    paperProp: "<Appbar.Action icon={...} onPress={...} />",
    rneProp: "rightComponent={<Header.RightAction />}",
    description: "Action buttons, custom leading widgets, and citizen profile avatar integration."
  },

  // 3. Ux4gAvatar
  {
    component: "Ux4gAvatar",
    propGroup: "Image, Initials & Icon",
    ux4gProp: "imageUrl={string} | initials={string} | icon={ReactNode} | shape='circle' | 'rounded' | 'square'",
    paperProp: "<Avatar.Image source={...} /> | <Avatar.Text label={...} /> | <Avatar.Icon icon={...} />",
    rneProp: "source={{ uri: string }} | title={string} | icon={{ name: string }}",
    description: "Citizen photo avatar with automatic initials text or icon fallback and shape modes."
  },
  {
    component: "Ux4gAvatar",
    propGroup: "Sizing & Colors",
    ux4gProp: "size='xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | containerColor={string} | contentColor={string}",
    paperProp: "size={number} (e.g. 48)",
    rneProp: "size='small' | 'medium' | 'large' | 'xlarge'",
    description: "Standard 7-tier sizing scale ('xs' to 'xxxl') with theme background and foreground coloring."
  },
  {
    component: "Ux4gAvatarGroup",
    propGroup: "Cluster & Overflow",
    ux4gProp: "items={Ux4gAvatarGroupItem[]} | size={Ux4gAvatarSize} | maxLimit={number} | collapsed={boolean} | borderColor={string}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Overlapping citizen avatar cluster with maxLimit cutoff pill indicator."
  },

  // 4. Ux4gBadge
  {
    component: "Ux4gBadge",
    propGroup: "Count & Variants",
    ux4gProp: "variant='dot' | 'count' | 'label' | 'icon' | 'readyToUse' | count={number} | limit='singleDigit' | 'doubleDigit' | label={string}",
    paperProp: "children={number} | size={number}",
    rneProp: "value={number} | status='primary' | 'success' | 'error' | 'warning'",
    description: "Notification counter badge with 9+ ('singleDigit') or 99+ ('doubleDigit') limit thresholds."
  },
  {
    component: "Ux4gBadge",
    propGroup: "Overlay & Placement",
    ux4gProp: "child={ReactNode} | alignment='topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | offset={Ux4gBadgeOffset}",
    paperProp: "visible={boolean}",
    rneProp: "badgeStyle={{ width: 8, height: 8 }}",
    description: "Wraps target component with absolute badge alignment and fine-grain coordinate offsets."
  },

  // 5. Ux4gButton
  {
    component: "Ux4gButton",
    propGroup: "Variants & Sizing",
    ux4gProp: "text={string} | variant='primary' | 'secondary' | 'outline' | 'ghost' | size='small' | 'medium' | 'large'",
    paperProp: "mode='contained' | 'outlined' | 'text' | 'elevated'",
    rneProp: "type='solid' | 'outline' | 'clear' | size='sm' | 'md' | 'lg'",
    description: "Visual hierarchy buttons adhering to UX4G AA-contrast tokens with standard sizes."
  },
  {
    component: "Ux4gButton",
    propGroup: "States, Icons & Press",
    ux4gProp: "enabled={boolean} | isLoading={boolean} | leadingIcon={Ux4gIconProp} | trailingIcon={Ux4gIconProp} | onPress={() => void}",
    paperProp: "disabled={boolean} | loading={boolean} | icon={string} | onPress={...}",
    rneProp: "disabled={boolean} | loading={boolean} | icon={{ name: string }} | onPress={...}",
    description: "Interactive button controls with loading spinner toggle, icons, and click handling."
  },

  // 6. Ux4gIconButton
  {
    component: "Ux4gIconButton",
    propGroup: "Icon, Sizing & Variants",
    ux4gProp: "icon={Ux4gIconProp} | variant='primary' | 'secondary' | 'outline' | 'ghost' | size={number} | enabled={boolean} | isLoading={boolean} | onPress={() => void}",
    paperProp: "<IconButton icon={...} mode='contained' size={...} disabled={...} onPress={...} />",
    rneProp: "<Button icon={{ name: string }} type='clear' onPress={...} />",
    description: "Icon-only button with variant styling, customizable pixel size, loading state, and 48px touch target."
  },

  // 7. Ux4gCard
  {
    component: "Ux4gCard",
    propGroup: "Layout & Content",
    ux4gProp: "title={string} | subtitle={string} | body={string} | mediaImageUrl={string} | direction='vertical' | 'horizontal' | isClickable={boolean} | onPress={() => void} | elevation={number}",
    paperProp: "<Card.Title> | <Card.Content> | <Card.Cover>",
    rneProp: "<Card.Title> | <Card.Image> | <Card.Divider>",
    description: "Citizen dashboard card with vertical or horizontal media orientation, elevation shadow, and press handler."
  },
  {
    component: "Ux4gCard",
    propGroup: "Footer Actions",
    ux4gProp: "footerType='none' | 'primaryOnly' | 'secondaryOnly' | 'primaryAndSecondary' | primaryButtonText={string} | secondaryButtonText={string} | onPrimaryClick={() => void} | onSecondaryClick={() => void}",
    paperProp: "<Card.Actions>",
    rneProp: "Custom child buttons",
    description: "Integrated card action footer supporting primary and secondary buttons."
  },

  // 8. Ux4gCarousel
  {
    component: "Ux4gCarousel",
    propGroup: "Items & Autoplay",
    ux4gProp: "items={ReactNode[]} | autoPlay={boolean} | autoPlayInterval={number} | showPagination={boolean} | showArrows={boolean} | height={number} | viewportFraction={number} | paginationVariant='default' | 'defaultVariant' | 'capsule'",
    paperProp: "Not Available (requires 3rd-party)",
    rneProp: "Not Available (requires 3rd-party)",
    description: "Smooth swipeable banner slider with auto-play interval timer and integrated dotted pagination."
  },

  // 9. Ux4gCheckbox
  {
    component: "Ux4gCheckbox",
    propGroup: "State & Sizing",
    ux4gProp: "value={boolean | null} | onChanged={(newValue) => void} | size='small' | 'medium' | 'large' | enabled={boolean}",
    paperProp: "status='checked' | 'unchecked' | 'indeterminate' | onPress",
    rneProp: "checked={boolean} | onPress",
    description: "Tri-state checkbox supporting true (checked), false (unchecked), and null (indeterminate dash)."
  },
  {
    component: "Ux4gCheckbox",
    propGroup: "Labels & Validation",
    ux4gProp: "label={string} | description={string} | isRequired={boolean} | hasError={boolean} | descriptionVariant='helper' | 'error' | 'warning' | 'success'",
    paperProp: "label={string} (inside <Checkbox.Item />)",
    rneProp: "title={string} | subtitle={string}",
    description: "Integrated primary label with required asterisk mark and semantic status descriptions."
  },

  // 10. Ux4gChoiceChip & Ux4gChipGroup
  {
    component: "Ux4gChoiceChip",
    propGroup: "Selection & Content",
    ux4gProp: "text={string} | selected={boolean} | onClick={() => void} | onPress={() => void} | size='s' | 'm' | enabled={boolean} | leadingContent={ReactNode} | trailingContent={ReactNode}",
    paperProp: "<Chip selected={boolean} onPress={...}>",
    rneProp: "<Chip type='solid' | 'outline' onPress={...}>",
    description: "Filter selection chip with size presets, active state highlighting, and icon slots."
  },
  {
    component: "Ux4gChipGroup",
    propGroup: "Arrangement & Spacing",
    ux4gProp: "chips={ReactNode[]} | children={ReactNode} | arrangement='horizontal' | 'wrap' | spacing={number} | runSpacing={number}",
    paperProp: "Custom flex wrap container",
    rneProp: "Custom flex wrap container",
    description: "Wraps multiple chips with horizontal scroll or auto-wrapping grid arrangement."
  },

  // 11. Ux4gDatePicker
  {
    component: "Ux4gDatePicker",
    propGroup: "Selection Modes & Dates",
    ux4gProp: "mode='single' | 'range' | initialDate={Date} | initialDateRange={DateRange} | minDate={Date} | maxDate={Date} | onDateSelected={(d) => void} | onDateRangeSelected={(r) => void}",
    paperProp: "date={Date} | onConfirm={...} (react-native-paper-dates)",
    rneProp: "Not Available",
    description: "Modal calendar picker supporting single date and date-range selection with min/max constraints."
  },
  {
    component: "Ux4gDatePicker",
    propGroup: "Labels & Status",
    ux4gProp: "label={string} | placeholder={string} | description={string} | required={boolean} | status='defaultStatus' | 'error' | 'warning' | 'success' | enabled={boolean}",
    paperProp: "label={string} | error={boolean}",
    rneProp: "Not Available",
    description: "Field trigger box with floating label, placeholder, and validation status border styling."
  },

  // 12. Ux4gDivider
  {
    component: "Ux4gDivider",
    propGroup: "Orientation & Styling",
    ux4gProp: "orientation='horizontal' | 'vertical' | thickness={number} | style='solid' | 'dashed' | 'dotted' | color={string} | startIndent={number} | endIndent={number}",
    paperProp: "horizontal={boolean} | bold={boolean}",
    rneProp: "orientation='horizontal' | 'vertical'",
    description: "Section separators supporting solid, dashed, and dotted line styles with start/end indents."
  },

  // 13. Ux4gSelectionDropdown & Ux4gActionDropdown
  {
    component: "Ux4gSelectionDropdown",
    propGroup: "Options & Search",
    ux4gProp: "options={Ux4gDropdownOption[]} | selectedOptionIds={string[]} | onSelectionChange={(ids) => void} | mode='single' | 'multi' | size='s' | 'm' | 'l' | searchEnabled={boolean} | filterType='contains' | 'startsWith' | 'startsWithPerTerm'",
    paperProp: "<Menu> with <Menu.Item>",
    rneProp: "Custom Overlay / Picker",
    description: "Single-select and multi-select dropdown with modal overlay, search filter, and chip tags."
  },
  {
    component: "Ux4gActionDropdown",
    propGroup: "Context Menu & Trigger",
    ux4gProp: "options={Ux4gActionDropdownOption[]} | onOptionClick={(opt) => void} | onOptionPress={(opt) => void} | triggerBuilder={(toggle) => ReactNode} | selectedOptionId={string}",
    paperProp: "<Menu anchor={...}><Menu.Item /></Menu>",
    rneProp: "<Overlay><ListItem /></Overlay>",
    description: "Anchored action menu popup with custom triggerBuilder button and option click handlers."
  },

  // 14. Ux4gEmptyState
  {
    component: "Ux4gEmptyState",
    propGroup: "Content & Actions",
    ux4gProp: "title={string} | subtitle={string} | description={string} | variant='noResults' | 'noData' | 'comingSoon' | 'error' | 'custom' | icon={ReactNode} | buttonText={string} | onButtonPressed={() => void} | buttonSize='small' | 'medium' | 'large'",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Zero-state display with semantic presets (noData, noResults, error), custom icon, and CTA action button."
  },

  // 15. Ux4gFeedbackFormStar
  {
    component: "Ux4gFeedbackFormStar",
    propGroup: "Rating & Feedback",
    ux4gProp: "title={string} | maxStars={number} | initialRating={number} | improvementOptions={string[]} | submitButtonText={string} | skipButtonText={string} | onSubmit={(rating, options, comment) => void} | onSkip={() => void}",
    paperProp: "Not Available",
    rneProp: "<Rating imageSize={...} /> (Stars only)",
    description: "Citizen satisfaction rating widget with 1-5 Star rating, improvement category chips, and comment text area."
  },

  // 16. Ux4gFileUpload
  {
    component: "Ux4gFileUpload",
    propGroup: "File Upload & Constraints",
    ux4gProp: "maxFiles={number} | maxFileSize={number} | allowedExtensions={string[]} | borderStyle='solid' | 'dashed' | onFilesChanged={(files) => void} | onUpload={(file) => Promise<boolean>}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Government document file picker with dashed dropzone, file size limit validation, and progress tracking."
  },

  // 17. Ux4gInputField
  {
    component: "Ux4gInputField",
    propGroup: "Value & Typography",
    ux4gProp: "value={string} | onValueChange={(val) => void} | label={string} | placeholder={string} | required={boolean} | type='text' | 'password' | 'number' | 'email' | size='small' | 'medium' | 'large' | 'xl'",
    paperProp: "value={string} | onChangeText={(t) => void} | label={string} | placeholder={string}",
    rneProp: "value={string} | onChangeText={(t) => void} | label={string} | placeholder={string}",
    description: "Core text input with floating label, 4 sizing tiers, input types, and required asterisk mark."
  },
  {
    component: "Ux4gInputField",
    propGroup: "Icons & Affixes",
    ux4gProp: "leadingIcon={ReactNode} | trailingIcon={ReactNode} | onTrailingIconPressed={() => void} | prefixText={string} | postfixText={string} | trailingIconLabel={ReactNode}",
    paperProp: "left={<TextInput.Icon />} | right={<TextInput.Icon />} | prefix={string} | affix={string}",
    rneProp: "leftIcon={{ name: string }} | rightIcon={{ name: string }}",
    description: "Leading/trailing icon slots, currency/country code affixes, and label accessory icons."
  },
  {
    component: "Ux4gInputField",
    propGroup: "Status & Validation",
    ux4gProp: "status='defaultStatus' | 'error' | 'warning' | 'success' | caption={string} | enabled={boolean} | readOnly={boolean} | singleLine={boolean}",
    paperProp: "error={boolean} + <HelperText type='error'>",
    rneProp: "errorMessage={string} | disabled={boolean}",
    description: "Encapsulates status border coloring, caption text helper, and interactive control states."
  },

  // 18. Ux4gAadhaarInputField
  {
    component: "Ux4gAadhaarInputField",
    propGroup: "Aadhaar Formatting & Checksum",
    ux4gProp: "value={string} | onValueChange={(val) => void} | label={string} | required={boolean} | placeholder='XXXX XXXX XXXX' | status='defaultStatus' | 'error' | 'warning' | 'success' | caption={string} | size='small' | 'medium' | 'large' | enabled={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Auto-formatting 12-digit Aadhaar number with UIDAI-compliant Verhoeff checksum algorithm validation."
  },

  // 19. Ux4gPanInputField
  {
    component: "Ux4gPanInputField",
    propGroup: "PAN Formatting & Regex",
    ux4gProp: "value={string} | onValueChange={(val) => void} | label={string} | required={boolean} | placeholder='ABCDE1234F' | status='defaultStatus' | 'error' | 'warning' | 'success' | caption={string} | size='small' | 'medium' | 'large' | enabled={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "10-character alphanumeric Income Tax PAN field with auto-capitalization and structure validation."
  },

  // 20. Ux4gOtpInput
  {
    component: "Ux4gOtpInput",
    propGroup: "Digits & Callbacks",
    ux4gProp: "value={string} | length={4 | 6} | onChanged={(otp) => void} | onCompleted={(otp) => void} | obscure={boolean} | boxSize={number} | gap={number} | showSeparator={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Segmented OTP digit boxes with automatic focus jumping, character masking, and completion trigger."
  },
  {
    component: "Ux4gOtpInput",
    propGroup: "Timer & Status",
    ux4gProp: "status='defaultStatus' | 'error' | 'warning' | 'success' | 'locked' | captionVariant='resendTimer' | 'resendAction' | 'attemptWithTimer' | 'locked' | 'success' | 'warning' | 'plain' | autoCountdownSeconds={number} | onCountdownComplete={() => void}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Built-in SMS resend countdown timer, attempt locking, and validation status indicators."
  },

  // 21. Ux4gJourneyTimeline
  {
    component: "Ux4gJourneyTimeline",
    propGroup: "Stages & Orientation",
    ux4gProp: "steps={Ux4gJourneyStep[]} | currentStep={number | null} | orientation='vertical' | 'horizontal' | indicatorSize={number} | header={Ux4gJourneyHeader} | activeColor={string} | inactiveColor={string}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Multi-stage citizen journey tracker (Submitted -> Verified -> Approved) with vertical/horizontal layout."
  },

  // 22. Ux4gLinearProgressBar
  {
    component: "Ux4gLinearProgressBar",
    propGroup: "Progress & Metrics",
    ux4gProp: "value={number} (0.0 to 1.0) | label={string} | hint={string} | height={number} | shape='sharp' | 'rounded' | progressColor={string} | trackColor={string} | gradientColors={string[]}",
    paperProp: "progress={number} | indeterminate={boolean} | color={string}",
    rneProp: "value={number} | color={string}",
    description: "Linear progress bar with top label and hint text, custom height, pill roundness, and gradient colors."
  },

  // 23. Ux4gCircularProgress
  {
    component: "Ux4gCircularProgress",
    propGroup: "Gauge & Scale",
    ux4gProp: "value={number} (0.0 to 1.0) | size='xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | diameter={number} | strokeWidth={number} | progressColor={string} | trackColor={string} | gradientColors={string[]} | centerValueText={string} | label={string}",
    paperProp: "<ActivityIndicator size={...} />",
    rneProp: "<ActivityIndicator size={...} />",
    description: "Determinate circular progress gauge with 7 size presets, strokeWidth control, and center text."
  },

  // 24. Ux4gHalfCircleProgress
  {
    component: "Ux4gHalfCircleProgress",
    propGroup: "Speedometer & Values",
    ux4gProp: "value={number} (0.0 to 1.0) | size='s' | 'm' | 'l' | 'xl' | width={number} | strokeWidth={number} | progressColor={string} | trackColor={string} | valueText={string} | description={string} | showScale={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Half-circle speedometer gauge for quota usage and performance score display."
  },

  // 25. Ux4gLink
  {
    component: "Ux4gLink",
    propGroup: "URL & Child",
    ux4gProp: "child={ReactNode} | url={string} | disabled={boolean} | accessibilityLabel={string} | style={StyleProp<ViewStyle>}",
    paperProp: "<Text onPress={...}>",
    rneProp: "<Text onPress={...}>",
    description: "Wraps any child element and launches external or deep links using platform URL handler."
  },

  // 26. Ux4gModal
  {
    component: "Ux4gModal",
    propGroup: "Visibility & Layout",
    ux4gProp: "visible={boolean} | onDismiss={() => void} | headerTitle={string} | showHeader={boolean} | showDescription={boolean} | descriptionText={string} | alignment='leftAligned' | 'centered'",
    paperProp: "visible={boolean} | onDismiss={() => void} | <Dialog.Title>",
    rneProp: "isVisible={boolean} | onBackdropPress={() => void}",
    description: "Modal dialog overlay with title header, subtitle, description, and left or center alignment."
  },
  {
    component: "Ux4gModal",
    propGroup: "Body & Footer Actions",
    ux4gProp: "bodyContent={ReactNode} | bodyText={string} | showFooter={boolean} | footerButtons='oneButton' | 'twoButtons' | 'oneButtonWithIcon' | 'twoButtonsWithIcon' | primaryButtonText={string} | secondaryButtonText={string} | onPrimaryClick={() => void} | onSecondaryClick={() => void}",
    paperProp: "<Dialog.Content> | <Dialog.Actions>",
    rneProp: "Custom child content and buttons",
    description: "Customizable modal body with standardized one-button or two-button action footers."
  },

  // 27. Ux4gPagination
  {
    component: "Ux4gPagination",
    propGroup: "Pages & Navigation",
    ux4gProp: "totalPageCount={number} | currentPageIndex={number} | onPageChange={(pageIndex) => void} | showArrows={boolean} | arrowsOnRight={boolean} | variant='default' | 'defaultVariant' | 'capsule' | size='small' | 'medium' | enabled={boolean}",
    paperProp: "<DataTable.Pagination page={...} numberOfPages={...} />",
    rneProp: "Not Available",
    description: "Animated pagination dots with navigation arrows, capsule container mode, and right-alignment."
  },

  // 28. Ux4gRadioButton
  {
    component: "Ux4gRadioButton",
    propGroup: "Value & Groups",
    ux4gProp: "value={T} | groupValue={T | null} | onChanged={(value: T) => void} | label={string} | description={string} | size='small' | 'medium' | 'large' | isRequired={boolean} | hasError={boolean} | status='defaultStatus' | 'error' | 'warning' | 'success' | enabled={boolean}",
    paperProp: "value={string} | status='checked' | 'unchecked' | onPress",
    rneProp: "checked={boolean} | onPress",
    description: "Single-choice radio button with group matching, helper description, and form status borders."
  },

  // 29. Ux4gResultList
  {
    component: "Ux4gResultList",
    propGroup: "Card Header & Metadata",
    ux4gProp: "title={string} | titleTrailing={ReactNode} | statusTag={string} | tagColorScheme={Ux4gTagColor} | metadataSegments={Ux4gPillSegment[]} | customMetadata={ReactNode}",
    paperProp: "<List.Item title={...} description={...} />",
    rneProp: "<ListItem><ListItem.Content /></ListItem>",
    description: "Structured government service result card with metadata pill segments and status tags."
  },
  {
    component: "Ux4gResultList",
    propGroup: "Details & Actions",
    ux4gProp: "actionButtonText={string} | onActionPressed={() => void} | details={Ux4gResultDetail[]} | initialExpanded={boolean} | onToggle={(expanded) => void} | expandedChild={ReactNode}",
    paperProp: "<List.Accordion>",
    rneProp: "<ListItem.Accordion>",
    description: "Key-value detail grid list with expandable details section and action CTA button."
  },

  // 30. Ux4gSearchField
  {
    component: "Ux4gSearchField",
    propGroup: "Search Value & Types",
    ux4gProp: "value={string} | onValueChange={(val) => void} | variant='basicSearch' | 'searchWithSubmit' | 'autocomplete' | size='small' | 'medium' | 'large' | 'xl' | placeholder={string} | label={string} | caption={string}",
    paperProp: "<Searchbar value={...} onChangeText={...} />",
    rneProp: "<SearchBar value={...} onChangeText={...} />",
    description: "Search input box supporting basic search, search button submit, and autocomplete popup list."
  },
  {
    component: "Ux4gSearchField",
    propGroup: "Actions & Autocomplete",
    ux4gProp: "options={string[]} | showClearIcon={boolean} | showVoiceIcon={boolean} | onClearClick={() => void} | onSubmitClick={(val) => void} | onOptionSelected={(opt) => void} | status='defaultStatus' | 'error' | 'warning' | 'success' | enabled={boolean}",
    paperProp: "onIconPress={...} | clearIcon={...}",
    rneProp: "showLoading={boolean} | onClear={...}",
    description: "Voice search mic action, clear button, submit button handler, and autocomplete selection callbacks."
  },

  // 31. Ux4gSlider
  {
    component: "Ux4gSlider",
    propGroup: "Single Slider",
    ux4gProp: "value={number} | onValueChange={(val) => void} | min={number} | max={number} | steps={number} | size='s' | 'm' | 'small' | 'medium' | enabled={boolean} | label={string} | isRequired={boolean} | caption={string} | captionVariant='helper' | 'error' | 'warning' | 'success'",
    paperProp: "Not Available (@react-native-community/slider)",
    rneProp: "<Slider value={...} onValueChange={...} />",
    description: "Continuous and discrete slider with tick marks, label row, caption, and indicator bubble."
  },
  {
    component: "Ux4gRangeSlider",
    propGroup: "Dual Range Slider",
    ux4gProp: "values={Ux4gRangeValues} | onValueChange={(vals) => void} | min={number} | max={number} | steps={number} | size='s' | 'm' | 'small' | 'medium' | enabled={boolean} | label={string} | showMarksAndValues={boolean} | showIndicator={boolean} | showInputFields={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Dual-thumb range slider for min-max bounds selection with tick marks and value input fields."
  },

  // 32. Ux4gSpinner
  {
    component: "Ux4gSpinner",
    propGroup: "Size & Gradients",
    ux4gProp: "size={number} | color={string} | gradientColors={string[]} | percentage={number} | strokeWidth={number} | rotationDurationMillis={number}",
    paperProp: "<ActivityIndicator size={...} color={...} />",
    rneProp: "<ActivityIndicator size={...} color={...} />",
    description: "Smooth rotating activity indicator with customizable diameter, strokeWidth, and multi-color gradients."
  },

  // 33. Ux4gStatusBanner
  {
    component: "Ux4gStatusBanner",
    propGroup: "Banner Content & Variants",
    ux4gProp: "title={string} | subtitle={string} | variant='warningLight' | 'warningSolid' | 'errorLight' | 'successLight' | 'savingLight' | 'infoLight' | 'neutralLight' | 'primaryLight' | leadingIcon={ReactNode} | trailingIcon={ReactNode} | actions={ReactNode[]} | onDismiss={() => void} | actionsAlignment='start' | 'center' | 'end' | 'space-between'",
    paperProp: "<Banner visible={...} actions={...}>",
    rneProp: "Not Available",
    description: "Full-width status alert banner with 8 color variants, action buttons, and dismiss callback."
  },

  // 34. Ux4gStatusPipeline
  {
    component: "Ux4gStatusPipeline",
    propGroup: "Pipeline Steps",
    ux4gProp: "steps={Ux4gPipelineStep[]} | currentStep={number} | orientation='vertical' | 'horizontal' | size='s' | 'm' | 'l' | showLabels={boolean} | showDescriptions={boolean} | completedColor={string} | currentColor={string}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Citizen process pipeline visualizing workflow steps with completed checkmarks and status lines."
  },

  // 35. Ux4gStepper
  {
    component: "Ux4gStepper",
    propGroup: "Wizard Steps & Orientation",
    ux4gProp: "totalSteps={number} | currentStep={number} | steps={Ux4gStepItem[]} | orientation='horizontal' | 'vertical' | lineStyle='solid' | 'dashed' | linePlacement='center' | 'bottom' | stepSize={number} | showLabels={boolean} | edgeLabelAlignment={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Multi-step form stepper with numbered circle bubbles, descriptions, solid/dashed lines, and alignment."
  },

  // 36. Ux4gSwitch
  {
    component: "Ux4gSwitch",
    propGroup: "Toggle & Labels",
    ux4gProp: "checked={boolean} | value={boolean} | onCheckedChange={(c) => void} | onChanged={(c) => void} | label={string} | description={string} | size='s' | 'm' | 'l' | 'small' | 'medium' | 'large' | labelPosition='noLabel' | 'left' | 'right' | 'bothSides' | enabled={boolean} | isRequired={boolean} | descriptionVariant='helper' | 'error' | 'warning' | 'success'",
    paperProp: "value={boolean} | onValueChange={(val) => void}",
    rneProp: "value={boolean} | onValueChange={(val) => void}",
    description: "Boolean toggle switch with size presets, label position options, and required asterisk mark."
  },

  // 37. Ux4gTag
  {
    component: "Ux4gTag",
    propGroup: "Tag Styling & Dismiss",
    ux4gProp: "text={string} | size='m' | 'l' | 'medium' | 'large' | shape='circular' | 'rectangular' | style='tonal' | 'filled' | 'outline' | 'text' | colorScheme='neutral' | 'brand' | 'success' | 'warning' | 'error' | 'info' | leadingContent={ReactNode} | onDismiss={() => void}",
    paperProp: "<Chip mode='outlined' onClose={...}>",
    rneProp: "<Badge value={...} />",
    description: "Metadata tag pill with 4 style modes (tonal, filled, outline, text), 6 color schemes, and close button."
  },

  // 38. Ux4gTextArea
  {
    component: "Ux4gTextArea",
    propGroup: "Multiline & Character Count",
    ux4gProp: "value={string} | onValueChange={(val) => void} | label={string} | placeholder={string} | required={boolean} | caption={string} | size='small' | 'large' | minHeight='small' | 'medium' | 'large' | number | status='defaultStatus' | 'error' | 'warning' | 'success' | showCaptionIcon={boolean} | characterCountText={string} | enabled={boolean}",
    paperProp: "<TextInput multiline numberOfLines={4} />",
    rneProp: "<Input multiline numberOfLines={4} />",
    description: "Multiline textarea with minHeight presets, live character counter, caption helper, and form statuses."
  },

  // 39. Ux4gTimePicker
  {
    component: "Ux4gTimePicker",
    propGroup: "Time Selection & Steps",
    ux4gProp: "initialTime={Ux4gTimeOfDay} | onTimeSelected={(time) => void} | placeholder={string} | label={string} | description={string} | required={boolean} | isRequired={boolean} | status='defaultStatus' | 'error' | 'warning' | 'success' | minuteInterval={1 | 5 | 10 | 15 | 30} | enabled={boolean}",
    paperProp: "react-native-paper-dates TimePicker",
    rneProp: "Not Available",
    description: "Modal time picker with 12-hour AM/PM and 24-hour modes, minute intervals, and validation status."
  },

  // 40. Ux4gTimeslot
  {
    component: "Ux4gTimeslot",
    propGroup: "Calendar Grid & Appointments",
    ux4gProp: "data={Ux4gTimeslotData} | onDateSelected={(date) => void} | onMonthChanged={(year, month) => void} | timeSlotProvider={(date) => SlotTimeEntry[]} | onSlotConfirmed={(date, slot) => void}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Interactive calendar date and time slot booking grid with capacity counters (Available, Limited, No Slots)."
  },

  // 41. Ux4gToast
  {
    component: "Ux4gToast",
    propGroup: "Hook & Categories",
    ux4gProp: "useUx4gToast().showToast({ category: 'info' | 'success' | 'warning' | 'error' | 'slot', title: string, subtitle?: string, actionText?: string, onActionClick?: () => void, durationMs?: number, isBottom?: boolean })",
    paperProp: "<Snackbar visible={visible} onDismiss={...}>",
    rneProp: "Not Available",
    description: "Imperative hook API for displaying floating alert snackbars across screens with action buttons."
  },

  // 42. Ux4gTooltip
  {
    component: "Ux4gTooltip",
    propGroup: "Placement & Trigger",
    ux4gProp: "children={ReactNode} | text={string} | title={string} | icon={ReactNode} | placement='topStart' | 'top' | 'topEnd' | 'bottomStart' | 'bottom' | 'bottomEnd' | 'left' | 'right' | trigger='press' | 'longPress' | action={ReactNode} | customContent={ReactNode} | isPersistent={boolean}",
    paperProp: "<Tooltip title={...}><Button ... /></Tooltip>",
    rneProp: "<Tooltip popover={...}><Text ... /></Tooltip>",
    description: "12-placement directional tooltip popup with arrow notch, rich title/body, actions, and press triggers."
  },

  // 43. Ux4gSocialLink
  {
    component: "Ux4gSocialLink",
    propGroup: "Social Media Icons",
    ux4gProp: "icon={SocialMediaIcon} | size='xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | color={string} | onPress={() => void} | tooltip={string} | enableBackground={boolean} | useColoredIcon={boolean}",
    paperProp: "<IconButton icon={...} onPress={...} />",
    rneProp: "<SocialIcon type={...} onPress={...} />",
    description: "Branded or monochrome vector social media icon links with circular background and tooltip support."
  }
];
