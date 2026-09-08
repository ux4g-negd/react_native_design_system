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
    ux4gProp: "title={string} | subtitle={string} | expanded={boolean} | onToggle={(exp) => void}",
    paperProp: "title={string} | description={string} | expanded={boolean} | onPress",
    rneProp: "isExpanded={boolean} | content={<ListItem.Content />}",
    description: "Header title and collapsible state control. UX4G includes accessible status pill support."
  },
  {
    component: "Ux4gAccordion",
    propGroup: "Group & Icons",
    ux4gProp: "iconPosition='left' | 'right' | leadingIcon={ReactNode}",
    paperProp: "left={(props) => <List.Icon {...props} />}",
    rneProp: "expandIcon={ReactNode} | icon={ReactNode}",
    description: "Customizable chevron arrow direction and optional leading status icons."
  },
  {
    component: "Ux4gAccordionGroup",
    propGroup: "Multi-expansion & State",
    ux4gProp: "allowMultiple={boolean} | defaultExpandedIds={string[]}",
    paperProp: "<List.AccordionGroup>",
    rneProp: "<ListItem.Accordion>",
    description: "Container component to manage single-accordion or multi-accordion expansion state."
  },

  // 2. Ux4gAppHeader
  {
    component: "Ux4gAppHeader",
    propGroup: "Navigation & Title",
    ux4gProp: "title={string} | showBackButton={boolean} | onBackPressed={() => void}",
    paperProp: "<Appbar.Header> | <Appbar.BackAction onPress={...} /> | <Appbar.Content title={...} />",
    rneProp: "leftComponent={<Header.BackButton />} | centerComponent={{ text: string }}",
    description: "Top screen navigation bar with government logo emblem and accessible back navigation."
  },
  {
    component: "Ux4gAppHeader",
    propGroup: "Actions & Avatar",
    ux4gProp: "actions={Ux4gAppHeaderAction[]} | avatar={ReactNode} | leadingWidgets={ReactNode[]}",
    paperProp: "<Appbar.Action icon={...} onPress={...} />",
    rneProp: "rightComponent={<Header.RightAction />}",
    description: "Right-hand actions menu, notifications badge, and citizen profile avatar integration."
  },

  // 3. Ux4gAvatar
  {
    component: "Ux4gAvatar",
    propGroup: "Image & Fallback",
    ux4gProp: "avatarImageUrl={string} | avatarInitials={string} | avatarIcon={ReactNode}",
    paperProp: "<Avatar.Image source={...} /> | <Avatar.Text label={...} /> | <Avatar.Icon icon={...} />",
    rneProp: "source={{ uri: string }} | title={string} | icon={{ name: string }}",
    description: "Citizen photo rendering with automatic initials fallback calculation."
  },
  {
    component: "Ux4gAvatar",
    propGroup: "Sizing & Status",
    ux4gProp: "size='xs' | 'sm' | 'md' | 'lg' | 'xl' | status='online' | 'offline' | 'busy'",
    paperProp: "size={number} (e.g. 48)",
    rneProp: "size='small' | 'medium' | 'large' | 'xlarge'",
    description: "Standardized sizing scale and presence indicator badge for government caseworkers."
  },
  {
    component: "Ux4gAvatarGroup",
    propGroup: "Group & Max Display",
    ux4gProp: "max={number} | size='sm' | 'md' | 'lg' | spacing={number}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Stacked overlapping citizen avatar cluster with +N overflow indicator pill."
  },

  // 4. Ux4gBadge
  {
    component: "Ux4gBadge",
    propGroup: "Count & Variants",
    ux4gProp: "count={number} | maxCount={99} | variant='primary' | 'success' | 'error' | 'warning'",
    paperProp: "children={number} | size={number}",
    rneProp: "value={number} | status='primary' | 'success' | 'error' | 'warning'",
    description: "Notification counter badge with 99+ truncation and semantic color coding."
  },
  {
    component: "Ux4gBadge",
    propGroup: "Dot Mode",
    ux4gProp: "isDot={boolean} | size='small' | 'medium'",
    paperProp: "visible={boolean} (empty children)",
    rneProp: "badgeStyle={{ width: 8, height: 8 }}",
    description: "Minimal dot status indicator for unread service alerts."
  },

  // 5. Ux4gButton
  {
    component: "Ux4gButton",
    propGroup: "Variants & Styling",
    ux4gProp: "variant='primary' | 'secondary' | 'outline' | 'ghost'",
    paperProp: "mode='contained' | 'outlined' | 'text' | 'elevated'",
    rneProp: "type='solid' | 'outline' | 'clear'",
    description: "Defines visual style hierarchy. UX4G uses standard semantic variants with built-in AA contrast."
  },
  {
    component: "Ux4gButton",
    propGroup: "States & Icons",
    ux4gProp: "isLoading={boolean} | leadingIcon={ReactNode} | trailingIcon={ReactNode}",
    paperProp: "loading={boolean} | icon={string}",
    rneProp: "loading={boolean} | icon={{ name: string }}",
    description: "Controls activity spinner indicator and leading/trailing icon attachments."
  },
  {
    component: "Ux4gButton",
    propGroup: "Sizing & Press",
    ux4gProp: "size='small' | 'medium' | 'large' | enabled={boolean} | onPress={() => void}",
    paperProp: "disabled={boolean} | onPress={() => void}",
    rneProp: "size='sm' | 'md' | 'lg' | disabled={boolean} | onPress={() => void}",
    description: "Standardized touch-target height (36px, 44px, 52px) adhering to mobile accessibility guidelines."
  },

  // 6. Ux4gIconButton
  {
    component: "Ux4gIconButton",
    propGroup: "Icon & Sizing",
    ux4gProp: "icon={Ux4gIconName | ReactNode} | size='small' | 'medium' | 'large'",
    paperProp: "icon={string} | size={number}",
    rneProp: "name={string} | size={number}",
    description: "Icon-only touch targets with minimum 48px touch bounding box."
  },
  {
    component: "Ux4gIconButton",
    propGroup: "Variants",
    ux4gProp: "variant='primary' | 'secondary' | 'outline' | 'ghost' | 'tonal'",
    paperProp: "mode='contained' | 'outlined' | 'contained-tonal'",
    rneProp: "type='solid' | 'outline' | 'clear'",
    description: "Surface background styling for header actions and form controls."
  },

  // 7. Ux4gCard
  {
    component: "Ux4gCard",
    propGroup: "Content & Header",
    ux4gProp: "title={string} | subtitle={string} | badge={ReactNode} | actions={ReactNode}",
    paperProp: "<Card.Title> | <Card.Content> | <Card.Actions>",
    rneProp: "<Card.Title> | <Card.Divider>",
    description: "Declarative props or compound composition for citizen dashboard cards."
  },
  {
    component: "Ux4gCard",
    propGroup: "Elevation & Layout",
    ux4gProp: "elevation={0 | 1 | 2 | 3} | orientation='vertical' | 'horizontal'",
    paperProp: "mode='elevated' | 'outlined' | 'contained'",
    rneProp: "containerStyle={{ elevation: number }}",
    description: "Depth elevation shadows and responsive horizontal citizen summary card layouts."
  },

  // 8. Ux4gCarousel
  {
    component: "Ux4gCarousel",
    propGroup: "Data & AutoPlay",
    ux4gProp: "data={any[]} | renderItem={({item}) => ReactNode} | autoPlay={boolean} | intervalMs={number}",
    paperProp: "Not Available (requires 3rd-party)",
    rneProp: "Not Available (requires 3rd-party)",
    description: "Touch swipeable banner with automated timer transitions and citizen awareness cards."
  },

  // 9. Ux4gCheckbox
  {
    component: "Ux4gCheckbox",
    propGroup: "Checked State",
    ux4gProp: "checked={boolean} | isIndeterminate={boolean} | onValueChange={(val) => void}",
    paperProp: "status='checked' | 'unchecked' | 'indeterminate' | onPress",
    rneProp: "checked={boolean} | onPress",
    description: "Supports tri-state indeterminate selection for bulk selecting lists & forms."
  },
  {
    component: "Ux4gCheckbox",
    propGroup: "Labels & Description",
    ux4gProp: "label={string} | description={string} | disabled={boolean}",
    paperProp: "label={string} (inside <Checkbox.Item />)",
    rneProp: "title={string} | subtitle={string}",
    description: "Direct label and accessibility subtitle text rendering."
  },
  {
    component: "Ux4gCheckboxGroup",
    propGroup: "Group & Selection",
    ux4gProp: "options={Array<{ label, value }>} | value={string[]} | onChange={(v) => void}",
    paperProp: "Custom mapping over <Checkbox.Item />",
    rneProp: "Custom mapping over <CheckBox />",
    description: "Manages multi-select checkbox arrays with horizontal or vertical layouts."
  },

  // 10. Ux4gChip
  {
    component: "Ux4gChip",
    propGroup: "Selection & Dismiss",
    ux4gProp: "label={string} | selected={boolean} | onSelect={() => void} | isRemovable={boolean}",
    paperProp: "selected={boolean} | onClose={() => void} | onPress",
    rneProp: "type='solid' | 'outline' | onPress",
    description: "Filter selection chips and removable tag pills."
  },
  {
    component: "Ux4gChipGroup",
    propGroup: "Wrapping & MultiSelect",
    ux4gProp: "items={Array<{ id, label }>} | selectedIds={string[]} | onSelectionChange={(ids) => void}",
    paperProp: "Custom Flex wrap container",
    rneProp: "Custom Flex wrap container",
    description: "Automatic wrapping chip container for quick category filters and multi-tags."
  },

  // 11. Ux4gDatePicker
  {
    component: "Ux4gDatePicker",
    propGroup: "Date Selection",
    ux4gProp: "value={Date | string} | onChange={(d) => void} | format='DD/MM/YYYY'",
    paperProp: "date={Date} | onConfirm={...} (react-native-paper-dates)",
    rneProp: "Not Available",
    description: "Modal calendar and direct date of birth picker with Indian date format."
  },

  // 12. Ux4gDivider
  {
    component: "Ux4gDivider",
    propGroup: "Style & Orientation",
    ux4gProp: "orientation='horizontal' | 'vertical' | label={string} | lineStyle='solid' | 'dashed'",
    paperProp: "horizontal={boolean} | bold={boolean}",
    rneProp: "orientation='horizontal' | 'vertical'",
    description: "Section separators with center text labels and dashed styling."
  },

  // 13. Ux4gDropdown
  {
    component: "Ux4gDropdown",
    propGroup: "Options & Search",
    ux4gProp: "options={Array<{ label, value }>} | value={string} | onSelect={(v) => void} | searchable={boolean}",
    paperProp: "<Menu> with <Menu.Item>",
    rneProp: "Custom Overlay / Picker",
    description: "Single-select, multi-select with tag pills, and searchable filter input."
  },

  // 14. Ux4gEmptyState
  {
    component: "Ux4gEmptyState",
    propGroup: "Content & CTA",
    ux4gProp: "title={string} | description={string} | icon={ReactNode} | actionButton={ReactNode}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Standard empty application list or search zero-state with call-to-action."
  },

  // 15. Ux4gFeedbackForm
  {
    component: "Ux4gFeedbackForm",
    propGroup: "CSAT & NPS",
    ux4gProp: "type='csat' | 'nps' | 'stars' | onRatingSubmit={(score, comment) => void}",
    paperProp: "Not Available",
    rneProp: "<Rating imageSize={...} /> (Stars only)",
    description: "Citizen satisfaction rating widgets with 1-5 Star, CSAT faces, and 0-10 NPS scoring."
  },

  // 16. Ux4gFileUpload
  {
    component: "Ux4gFileUpload",
    propGroup: "File Constraints",
    ux4gProp: "onFilesSelected={(files) => void} | maxFileSizeMB={number} | acceptedTypes={string[]}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Government document upload widget with file validation and progress states."
  },

  // 17. Ux4gInputField
  {
    component: "Ux4gInputField",
    propGroup: "Value & Labels",
    ux4gProp: "label={string} | value={string} | onChangeText={(t) => void}",
    paperProp: "label={string} | value={string} | onChangeText={(t) => void}",
    rneProp: "label={string} | value={string} | onChangeText={(t) => void}",
    description: "Direct drop-in replacement with floating animated label support."
  },
  {
    component: "Ux4gInputField",
    propGroup: "Icons & Affixes",
    ux4gProp: "leadingIcon={ReactNode} | trailingIcon={ReactNode} | prefixText={string}",
    paperProp: "left={<TextInput.Icon />} | right={<TextInput.Icon />} | prefix={string}",
    rneProp: "leftIcon={{ name: string }} | rightIcon={{ name: string }}",
    description: "Icons and currency/country code affixes rendered cleanly without boilerplate."
  },
  {
    component: "Ux4gInputField",
    propGroup: "Validation & Help",
    ux4gProp: "errorMessage={string} | helperText={string} | isRequired={boolean}",
    paperProp: "error={boolean} + <HelperText type='error'>",
    rneProp: "errorMessage={string}",
    description: "UX4G encapsulates error message text and asterisk mark directly inside the component."
  },

  // 18. Ux4gAadhaarInputField
  {
    component: "Ux4gAadhaarInputField",
    propGroup: "Formatting & Checksum",
    ux4gProp: "value={string} | onChangeText={(aadhaar) => void} | enableVerhoeffCheck={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Auto-formatting 12 digits (XXXX XXXX XXXX) with UIDAI-compliant Verhoeff checksum algorithm."
  },

  // 19. Ux4gPanInputField
  {
    component: "Ux4gPanInputField",
    propGroup: "Capitalization & Validation",
    ux4gProp: "value={string} | onChangeText={(pan) => void} | onValidChange={(valid) => void}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Alphanumeric 10-character Income Tax PAN card validator with auto-capitalization."
  },

  // 20. Ux4gOtpInput
  {
    component: "Ux4gOtpInput",
    propGroup: "PIN Length & Autofill",
    ux4gProp: "length={4 | 6} | value={string} | onOtpComplete={(otp) => void} | secureTextEntry={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Segmented OTP box inputs with auto-focus, SMS auto-fill, and error states."
  },

  // 21. Ux4gJourneyTimeline
  {
    component: "Ux4gJourneyTimeline",
    propGroup: "Stages & Status",
    ux4gProp: "stages={Array<{ title, subtitle, timestamp, state }>} | activeStageIndex={number}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Multi-stage citizen application tracker (Submitted -> Verified -> Approved)."
  },

  // 22. Ux4gLinearProgressBar
  {
    component: "Ux4gLinearProgressBar",
    propGroup: "Progress & Style",
    ux4gProp: "progress={number} (0-1) | indeterminate={boolean} | height={number} | color={string}",
    paperProp: "progress={number} | indeterminate={boolean} | color={string}",
    rneProp: "value={number} | color={string}",
    description: "Linear progress bar with smooth transitions and theme color binding."
  },

  // 23. Ux4gCircularProgressIndicator
  {
    component: "Ux4gCircularProgressIndicator",
    propGroup: "Percentage Ring",
    ux4gProp: "progress={number} (0-100) | size={number} | strokeWidth={number} | showPercentage={boolean}",
    paperProp: "Not Available (ActivityIndicator only)",
    rneProp: "Not Available (ActivityIndicator only)",
    description: "Determinate circular progress gauge with center text display."
  },

  // 24. Ux4gHalfCircleProgress
  {
    component: "Ux4gHalfCircleProgress",
    propGroup: "Gauge Metrics",
    ux4gProp: "progress={number} (0-100) | label={string} | subLabel={string} | size={number}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Speedometer half-circle meter gauge for citizen service quotas and target metrics."
  },

  // 25. Ux4gLink
  {
    component: "Ux4gLink",
    propGroup: "Text & Navigation",
    ux4gProp: "text={string} | url={string} | onPress={() => void} | isExternal={boolean}",
    paperProp: "<Text onPress={...}>",
    rneProp: "<Text onPress={...}>",
    description: "Accessible hyperlink with trailing external arrow icon and underline styles."
  },

  // 26. Ux4gModal
  {
    component: "Ux4gModal",
    propGroup: "Visibility & Headers",
    ux4gProp: "visible={boolean} | onDismiss={() => void} | headerTitle={string} | showHeader={boolean}",
    paperProp: "visible={boolean} | onDismiss={() => void}",
    rneProp: "isVisible={boolean} | onBackdropPress={() => void}",
    description: "Centered and left-aligned modal dialog with accessible title and backdrop dismiss."
  },
  {
    component: "Ux4gModal",
    propGroup: "Footer Actions",
    ux4gProp: "footerButtons='oneButton' | 'twoButtons' | showFooter={boolean}",
    paperProp: "<Dialog.Actions>",
    rneProp: "Custom child buttons",
    description: "Standardized sticky modal action buttons (Confirm + Cancel)."
  },

  // 27. Ux4gPagination
  {
    component: "Ux4gPagination",
    propGroup: "Pages & Arrows",
    ux4gProp: "currentPage={number} | totalPages={number} | onPageChange={(p) => void}",
    paperProp: "<DataTable.Pagination page={...} numberOfPages={...} />",
    rneProp: "Not Available",
    description: "Numbered page selector with previous/next arrows and capsule layout."
  },

  // 28. Ux4gRadioButton
  {
    component: "Ux4gRadioButton",
    propGroup: "Selected State",
    ux4gProp: "selected={boolean} | onSelect={() => void} | label={string} | disabled={boolean}",
    paperProp: "status='checked' | 'unchecked' | onPress",
    rneProp: "Not Available",
    description: "Single choice radio selector with accessible radio role."
  },
  {
    component: "Ux4gRadioButtonGroup",
    propGroup: "Group & Selection",
    ux4gProp: "options={Array<{ label, value }>} | value={string} | onValueChange={(v) => void}",
    paperProp: "<RadioButton.Group value={value} onValueChange={...}>",
    rneProp: "Not Available (Custom implementation)",
    description: "Manages exclusive single-choice option sets with keyboard navigation."
  },

  // 29. Ux4gResultList
  {
    component: "Ux4gResultList",
    propGroup: "Items & Actions",
    ux4gProp: "data={Array<{ id, title, subtitle, badge }>} | onItemPress={(item) => void}",
    paperProp: "<List.Item title={...} description={...} />",
    rneProp: "<ListItem><ListItem.Content /></ListItem>",
    description: "Structured government service search results with metadata chips and CTAs."
  },

  // 30. Ux4gSearchField
  {
    component: "Ux4gSearchField",
    propGroup: "Search & Clear",
    ux4gProp: "value={string} | onChangeText={(t) => void} | onSearch={(q) => void} | showClearButton={boolean}",
    paperProp: "<Searchbar value={...} onChangeText={...} onIconPress={...} />",
    rneProp: "<SearchBar value={...} onChangeText={...} />",
    description: "Search input with leading magnifying glass and clear button."
  },

  // 31. Ux4gSlider
  {
    component: "Ux4gSlider",
    propGroup: "Range & Values",
    ux4gProp: "value={number} | onValueChange={(v) => void} | minimumValue={0} | maximumValue={100} | step={1}",
    paperProp: "Not Available (@react-native-community/slider)",
    rneProp: "<Slider value={...} onValueChange={...} />",
    description: "Discrete and continuous range slider with currency/percentage tooltips."
  },

  // 32. Ux4gSpinner
  {
    component: "Ux4gSpinner",
    propGroup: "Size & Color",
    ux4gProp: "size='small' | 'medium' | 'large' | color={string}",
    paperProp: "<ActivityIndicator size={...} color={...} />",
    rneProp: "<ActivityIndicator size={...} color={...} />",
    description: "Activity spinner loader adhering to UX4G brand primary tokens."
  },

  // 33. Ux4gStatusBanner
  {
    component: "Ux4gStatusBanner",
    propGroup: "Status & Actions",
    ux4gProp: "title={string} | message={string} | status='draft' | 'pending' | 'rejected' | 'approved'",
    paperProp: "<Banner visible={...} actions={...}>",
    rneProp: "Not Available",
    description: "Application status alert banner with action triggers and icon indicators."
  },

  // 34. Ux4gStatusPipeline
  {
    component: "Ux4gStatusPipeline",
    propGroup: "Pipeline Steps",
    ux4gProp: "steps={Array<{ label, status, date }>} | orientation='horizontal' | 'vertical'",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Horizontal and vertical citizen workflow pipelines (Pending -> Processing -> Completed)."
  },

  // 35. Ux4gStepper
  {
    component: "Ux4gStepper",
    propGroup: "Wizard Navigation",
    ux4gProp: "steps={string[]} | activeStep={number} | onStepPress={(i) => void} | isLinear={boolean}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Multi-step form stepper with numbered step bubbles and completed checkmarks."
  },

  // 36. Ux4gSwitch
  {
    component: "Ux4gSwitch",
    propGroup: "Toggle State",
    ux4gProp: "value={boolean} | onValueChange={(val) => void} | label={string} | size='small' | 'medium' | 'large'",
    paperProp: "value={boolean} | onValueChange={(val) => void}",
    rneProp: "value={boolean} | onValueChange={(val) => void}",
    description: "Standard Boolean toggle with integrated left/right label."
  },

  // 37. Ux4gTag
  {
    component: "Ux4gTag",
    propGroup: "Pill & Dismiss",
    ux4gProp: "label={string} | variant='filled' | 'outlined' | isRemovable={boolean} | onRemove={() => void}",
    paperProp: "<Chip mode='outlined' onClose={...}>",
    rneProp: "<Badge value={...} />",
    description: "Pill and rectangular metadata tags with optional dismiss button."
  },

  // 38. Ux4gTextArea
  {
    component: "Ux4gTextArea",
    propGroup: "Multiline & Limits",
    ux4gProp: "value={string} | onChangeText={(t) => void} | rows={4} | maxLength={500} | showCharCount={boolean}",
    paperProp: "<TextInput multiline numberOfLines={4} />",
    rneProp: "<Input multiline numberOfLines={4} />",
    description: "Multiline textarea with live character counter and maximum limit validation."
  },

  // 39. Ux4gTimePicker
  {
    component: "Ux4gTimePicker",
    propGroup: "Time Intervals",
    ux4gProp: "value={string} | onChange={(time) => void} | is24Hour={boolean} | minuteInterval={15}",
    paperProp: "react-native-paper-dates TimePicker",
    rneProp: "Not Available",
    description: "12-hour AM/PM and 24-hour clock selector for service appointments."
  },

  // 40. Ux4gSlotGrid
  {
    component: "Ux4gSlotGrid",
    propGroup: "Booking Slots",
    ux4gProp: "slots={Array<{ id, time, status }>} | onSlotSelect={(slot) => void} | selectedSlotId={string}",
    paperProp: "Not Available",
    rneProp: "Not Available",
    description: "Appointment slot grid (Available, Selected, Booked, Inactive) for Seva Kendras."
  },

  // 41. Ux4gToast
  {
    component: "Ux4gToast",
    propGroup: "Imperative Hook",
    ux4gProp: "useUx4gToast().show({ message, variant: 'success' | 'error' | 'warning' | 'info', duration: 4000 })",
    paperProp: "<Snackbar visible={visible} onDismiss={...}>",
    rneProp: "Not Available",
    description: "Imperative hook API for showing stackable snackbars across any screen."
  },

  // 42. Ux4gTooltip
  {
    component: "Ux4gTooltip",
    propGroup: "Placement & Trigger",
    ux4gProp: "content={ReactNode | string} | position='top' | 'bottom' | 'left' | 'right' | trigger='press' | 'longPress'",
    paperProp: "<Tooltip title={...}><Button ... /></Tooltip>",
    rneProp: "<Tooltip popover={...}><Text ... /></Tooltip>",
    description: "Anchored floating popup overlay with directional pointer arrows for contextual help."
  }
];
