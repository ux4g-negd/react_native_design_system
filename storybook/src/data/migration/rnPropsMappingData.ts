export interface RNPropMappingItem {
  component: string;
  propGroup: string;
  ux4gProp: string;
  paperProp: string;
  rneProp: string;
  description: string;
}

export const RN_PROPS_MAPPING_DATA: RNPropMappingItem[] = [
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
    ux4gProp: "isLoading={boolean} | leftIcon={ReactNode} | rightIcon={ReactNode}",
    paperProp: "loading={boolean} | icon={string}",
    rneProp: "loading={boolean} | icon={{ name: string }}",
    description: "Controls activity spinner indicator and leading/trailing icon attachments."
  },
  {
    component: "Ux4gButton",
    propGroup: "Sizing",
    ux4gProp: "size='small' | 'medium' | 'large'",
    paperProp: "contentStyle={{ height: 48 }} (Custom)",
    rneProp: "size='sm' | 'md' | 'lg'",
    description: "Standardized touch-target height (36px, 44px, 52px) adhering to mobile accessibility guidelines."
  },
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
  {
    component: "Ux4gCheckbox",
    propGroup: "Checked State",
    ux4gProp: "checked={boolean} | isIndeterminate={boolean} | onValueChange={(val) => void}",
    paperProp: "status='checked' | 'unchecked' | 'indeterminate' | onPress",
    rneProp: "checked={boolean} | onPress",
    description: "Supports tri-state indeterminate selection for bulk selecting lists & forms."
  },
  {
    component: "Ux4gSwitch",
    propGroup: "Toggle State",
    ux4gProp: "value={boolean} | onValueChange={(val) => void} | label={string}",
    paperProp: "value={boolean} | onValueChange={(val) => void}",
    rneProp: "value={boolean} | onValueChange={(val) => void}",
    description: "Standard Boolean toggle with optional integrated left/right label."
  },
  {
    component: "Ux4gModal",
    propGroup: "Visibility & Actions",
    ux4gProp: "visible={boolean} | onClose={() => void} | title={string} | footerActions={ReactNode}",
    paperProp: "visible={boolean} | onDismiss={() => void} (inside <Portal>)",
    rneProp: "isVisible={boolean} | onBackdropPress={() => void}",
    description: "Unified Dialog and Bottom Sheet modal with sticky action buttons."
  },
  {
    component: "Ux4gCard",
    propGroup: "Content & Header",
    ux4gProp: "title={string} | subtitle={string} | badge={ReactNode} | actions={ReactNode}",
    paperProp: "<Card.Title> | <Card.Content> | <Card.Actions>",
    rneProp: "<Card.Title> | <Card.Divider>",
    description: "Declarative props or compound composition for citizen dashboard cards."
  },
  {
    component: "Ux4gDropdown",
    propGroup: "Selection Options",
    ux4gProp: "options={Array<{ label, value }>} | value={string} | onSelect={(val) => void}",
    paperProp: "<Menu> with <Menu.Item>",
    rneProp: "Custom Overlay / Picker",
    description: "Single-select, multi-select with tag pills, and searchable filter input."
  },
  {
    component: "Ux4gToast",
    propGroup: "Trigger & Display",
    ux4gProp: "useUx4gToast().show({ message, variant: 'success' | 'error' | 'warning' | 'info' })",
    paperProp: "<Snackbar visible={visible} onDismiss={...}>",
    rneProp: "Not Available (requires external modal)",
    description: "Imperative hook API for showing stackable snackbars across any screen."
  }
];
