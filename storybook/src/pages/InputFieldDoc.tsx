import React, { useMemo, useState } from 'react';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';
import { CodeBlock } from '../components/CodeBlock';

interface InputFieldDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

type InputStory =
  | 'input-basic'
  | 'input-status'
  | 'input-password'
  | 'input-icons'
  | 'input-aadhaar-basic'
  | 'input-aadhaar-varients'
  | 'input-pan-basic'
  | 'input-pan-varients'
  | 'input-otp-basic'
  | 'input-otp-varients'
  | 'input-prefix-postfix'
  | 'input-required-disabled';

const normalizeStory = (story?: string): InputStory => {
  if (story === 'input-aadhaar') return 'input-aadhaar-basic';
  if (story === 'input-pan') return 'input-pan-basic';
  if (story === 'input-otp') return 'input-otp-basic';

  const allowed: InputStory[] = [
    'input-basic',
    'input-status',
    'input-password',
    'input-icons',
    'input-aadhaar-basic',
    'input-aadhaar-varients',
    'input-pan-basic',
    'input-pan-varients',
    'input-otp-basic',
    'input-otp-varients',
    'input-prefix-postfix',
    'input-required-disabled',
  ];

  return allowed.includes(story as InputStory) ? (story as InputStory) : 'input-basic';
};

const storyMeta: Record<InputStory, { title: string; description: string }> = {
  'input-basic': {
    title: 'Input Field',
    description: 'Basic text field with label and helper description.',
  },
  'input-status': {
    title: 'Input Field',
    description: 'Validation states shown separately: error, default, success, warning, and disabled.',
  },
  'input-password': {
    title: 'Input Field',
    description: 'Password field with built-in visibility toggle.',
  },
  'input-icons': {
    title: 'Input Field',
    description: 'Leading icon, trailing icon, and both-icons variants shown as separate rows.',
  },
  'input-aadhaar-basic': {
    title: 'Input Aadhaar',
    description: 'Specialized Aadhaar input with auto-formatting and built-in validation behavior.',
  },
  'input-aadhaar-varients': {
    title: 'Input Aadhaar',
    description: 'State variants for Aadhaar input: default, error, success, and disabled.',
  },
  'input-pan-basic': {
    title: 'Input Pan',
    description: 'Specialized PAN input with auto-uppercase and built-in validation behavior.',
  },
  'input-pan-varients': {
    title: 'Input Pan',
    description: 'State variants for PAN input: default, error, success, and disabled.',
  },
  'input-otp-basic': {
    title: 'Input Otp',
    description: 'OTP input for code verification with configurable length and caption behavior.',
  },
  'input-otp-varients': {
    title: 'Input Otp',
    description: 'State variants for OTP input: default, error, success, and locked/disabled.',
  },
  'input-prefix-postfix': {
    title: 'Input Field',
    description: 'Amount and website examples using prefix/postfix and semantic placeholders.',
  },
  'input-required-disabled': {
    title: 'Input Field',
    description: 'Disabled identifier field with a required text field below.',
  },
};

const getStoryCode = (story: InputStory): string => {
  if (story === 'input-status') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputStatusExample() {
  const [errorValue, setErrorValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [successValue, setSuccessValue] = useState('');
  const [warningValue, setWarningValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gInputField
        value={errorValue}
        onValueChange={setErrorValue}
        label='Label'
        placeholder='Placeholder'
        status='error'
        caption='Error message'
      />
      <Ux4gInputField
        value={defaultValue}
        onValueChange={setDefaultValue}
        label='Label'
        placeholder='Placeholder'
        status='defaultStatus'
        caption='Description'
      />
      <Ux4gInputField
        value={successValue}
        onValueChange={setSuccessValue}
        label='Label'
        placeholder='Placeholder'
        status='success'
        caption='Success message'
      />
      <Ux4gInputField
        value={warningValue}
        onValueChange={setWarningValue}
        label='Label'
        placeholder='Placeholder'
        status='warning'
        caption='Warning message'
      />
      <Ux4gInputField
        value={disabledValue}
        onValueChange={setDisabledValue}
        label='Label'
        placeholder='Placeholder'
        enabled={false}
        caption='Description'
      />
    </View>
  );
}`;
  }

  if (story === 'input-password') {
    return `import React, { useState } from 'react';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputPasswordExample() {
  const [password, setPassword] = useState('');

  return (
    <Ux4gInputField
      value={password}
      onValueChange={setPassword}
      label='Password'
      placeholder='Enter your password'
      type='password'
    />
  );
}`;
  }

  if (story === 'input-icons') {
    return `import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ux4gInputField, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function InputIconsExample() {
  const [searchValue, setSearchValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gInputField
        value={searchValue}
        onValueChange={setSearchValue}
        label='Leading icon'
        placeholder='Search...'
        leadingIcon={Ux4gIcons.search({ size: 18, color: '#8D8F93' })}
      />

      <Ux4gInputField
        value={amountValue}
        onValueChange={setAmountValue}
        label='Trailing icon'
        placeholder='Enter amount'
        trailingIcon={<Text style={{ fontSize: 22, color: '#8D8F93' }}>₹</Text>}
      />

      <Ux4gInputField
        value={locationValue}
        onValueChange={setLocationValue}
        label='Both icons'
        placeholder='Location'
        leadingIcon={<MaterialIcons name='location-on' size={18} color='#8D8F93' />}
        trailingIcon={Ux4gIcons.settings({ size: 18, color: '#8D8F93' })}
      />
    </View>
  );
}`;
  }

  if (story === 'input-prefix-postfix') {
    return `import React, { useState } from 'react';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputPrefixPostfixExample() {
  const [amount, setAmount] = useState('0');
  const [website, setWebsite] = useState('https:// example.com');

  return (
    <>
      <Ux4gInputField
        value={amount}
        onValueChange={setAmount}
        label='Amount'
        prefixText='₹'
        postfixText='.00'
        type='number'
      />
      <Ux4gInputField
        value={website}
        onValueChange={setWebsite}
        label='Website'
        placeholder='https:// example.com'
      />
    </>
  );
}`;
  }

  if (story === 'input-aadhaar-basic') {
    return `import React, { useState } from 'react';
import { Ux4gAadhaarInputField } from 'ux4g-react-native-design-system';

export default function InputAadhaarBasicExample() {
  const [aadhaar, setAadhaar] = useState('');

  return (
    <Ux4gAadhaarInputField
      value={aadhaar}
      onValueChange={setAadhaar}
      label='Aadhaar Number'
      placeholder='XXXX XXXX XXXX'
      required={true}
    />
  );
}`;
  }

  if (story === 'input-aadhaar-varients') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gAadhaarInputField } from 'ux4g-react-native-design-system';

export default function InputAadhaarVarientsExample() {
  const [defaultAadhaar, setDefaultAadhaar] = useState('');
  const [errorAadhaar, setErrorAadhaar] = useState('');
  const [successAadhaar, setSuccessAadhaar] = useState('1234 5678 9012');
  const [disabledAadhaar, setDisabledAadhaar] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gAadhaarInputField
        value={defaultAadhaar}
        onValueChange={setDefaultAadhaar}
        label='Default'
        placeholder='XXXX XXXX XXXX'
        caption='Enter your 12-digit Aadhaar number'
      />

      <Ux4gAadhaarInputField
        value={errorAadhaar}
        onValueChange={setErrorAadhaar}
        label='Error state'
        placeholder='XXXX XXXX XXXX'
        status='error'
        caption='Please enter a valid Aadhaar number'
      />

      <Ux4gAadhaarInputField
        value={successAadhaar}
        onValueChange={setSuccessAadhaar}
        label='Success state'
        placeholder='XXXX XXXX XXXX'
        status='success'
        caption='Enter your 12-digit Aadhaar number'
      />

      <Ux4gAadhaarInputField
        value={disabledAadhaar}
        onValueChange={setDisabledAadhaar}
        label='Disabled'
        placeholder='XXXX XXXX XXXX'
        enabled={false}
        caption='Enter your 12-digit Aadhaar number'
      />
    </View>
  );
}`;
  }

  if (story === 'input-pan-basic') {
    return `import React, { useState } from 'react';
import { Ux4gPanInputField } from 'ux4g-react-native-design-system';

export default function InputPanBasicExample() {
  const [pan, setPan] = useState('');

  return (
    <Ux4gPanInputField
      value={pan}
      onValueChange={setPan}
      label='PAN Card Number'
      placeholder='ABCDE1234F'
      required={true}
    />
  );
}`;
  }

  if (story === 'input-pan-varients') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gPanInputField } from 'ux4g-react-native-design-system';

export default function InputPanVarientsExample() {
  const [defaultPan, setDefaultPan] = useState('');
  const [errorPan, setErrorPan] = useState('');
  const [successPan, setSuccessPan] = useState('ABCDE1234F');
  const [disabledPan, setDisabledPan] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gPanInputField
        value={defaultPan}
        onValueChange={setDefaultPan}
        label='Default'
        placeholder='ABCDE1234F'
        caption='Enter your 10-character PAN number'
      />

      <Ux4gPanInputField
        value={errorPan}
        onValueChange={setErrorPan}
        label='Error state'
        placeholder='ABCDE1234F'
        status='error'
        caption='Please enter a valid PAN number'
      />

      <Ux4gPanInputField
        value={successPan}
        onValueChange={setSuccessPan}
        label='Success state'
        placeholder='ABCDE1234F'
        status='success'
        caption='Enter your 10-character PAN number'
      />

      <Ux4gPanInputField
        value={disabledPan}
        onValueChange={setDisabledPan}
        label='Disabled'
        placeholder='ABCDE1234F'
        enabled={false}
        caption='Enter your 10-character PAN number'
      />
    </View>
  );
}`;
  }

  if (story === 'input-otp-basic') {
    return `import React, { useState } from 'react';
import { Ux4gOtpInput } from 'ux4g-react-native-design-system';

export default function InputOtpBasicExample() {
  const [otp, setOtp] = useState('');

  return (
    <Ux4gOtpInput
      value={otp}
      onChanged={setOtp}
      length={6}
      label='Enter OTP'
      captionVariant='resendTimer'
      captionLeadingText="Didn't receive OTP?"
      captionTrailingText='Resend in 00:17'
    />
  );
}`;
  }

  if (story === 'input-otp-varients') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gOtpInput } from 'ux4g-react-native-design-system';

export default function InputOtpVarientsExample() {
  const [defaultOtp, setDefaultOtp] = useState('');
  const [errorOtp, setErrorOtp] = useState('12');
  const [successOtp, setSuccessOtp] = useState('123456');
  const [lockedOtp, setLockedOtp] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gOtpInput
        value={defaultOtp}
        onChanged={setDefaultOtp}
        label='Default'
        length={6}
        captionVariant='resendTimer'
        captionLeadingText="Didn't receive OTP?"
        captionTrailingText='Resend in 00:17'
      />

      <Ux4gOtpInput
        value={errorOtp}
        onChanged={setErrorOtp}
        label='Error state'
        length={6}
        status='error'
        captionVariant='plain'
        captionText='Please enter a valid OTP'
      />

      <Ux4gOtpInput
        value={successOtp}
        onChanged={setSuccessOtp}
        label='Success state'
        length={6}
        status='success'
        captionVariant='success'
        captionText='Verification successful'
      />

      <Ux4gOtpInput
        value={lockedOtp}
        onChanged={setLockedOtp}
        label='Disabled'
        length={6}
        enabled={false}
        captionVariant='locked'
        captionLeadingText='Too many attempts'
        captionTrailingText='Resend OTP'
      />
    </View>
  );
}`;
  }

  if (story === 'input-required-disabled') {
    return `import React, { useState } from 'react';
import { View } from 'react-native';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputRequiredDisabledExample() {
  const [applicationId, setApplicationId] = useState('GOV/2025/001');
  const [fullName, setFullName] = useState('');

  return (
    <View style={{ gap: 16 }}>
      <Ux4gInputField
        value={applicationId}
        onValueChange={setApplicationId}
        label='Application ID'
        enabled={false}
      />
      <Ux4gInputField
        value={fullName}
        onValueChange={setFullName}
        label='Full Name'
        required={true}
        placeholder='Enter full name'
      />
    </View>
  );
}`;
  }

  return `import React, { useState } from 'react';
import { Ux4gInputField } from 'ux4g-react-native-design-system';

export default function InputBasicExample() {
  const [value, setValue] = useState('');

  return (
    <Ux4gInputField
      value={value}
      onValueChange={setValue}
      label='Label'
      placeholder='Placeholder'
      caption='Description'
    />
  );
}`;
};

const getSnackFields = (story: InputStory): string => {
  if (story === 'input-status') {
    return `        <Ux4gInputField value={errorValue} onValueChange={setErrorValue} label='Label' placeholder='Placeholder' status='error' caption='Error message' />
        <View style={styles.gap} />
        <Ux4gInputField value={defaultValue} onValueChange={setDefaultValue} label='Label' placeholder='Placeholder' status='defaultStatus' caption='Description' />
        <View style={styles.gap} />
        <Ux4gInputField value={successValue} onValueChange={setSuccessValue} label='Label' placeholder='Placeholder' status='success' caption='Success message' />
        <View style={styles.gap} />
        <Ux4gInputField value={warningValue} onValueChange={setWarningValue} label='Label' placeholder='Placeholder' status='warning' caption='Warning message' />
        <View style={styles.gap} />
        <Ux4gInputField value={disabledValue} onValueChange={setDisabledValue} label='Label' placeholder='Placeholder' enabled={false} caption='Description' />`;
  }

  if (story === 'input-password') {
    return `        <Ux4gInputField
          value={password}
          onValueChange={setPassword}
          label='Password'
          placeholder='Enter your password'
          type='password'
        />`;
  }

  if (story === 'input-icons') {
    return `        <>
        <Ux4gInputField
          value={searchValue}
          onValueChange={setSearchValue}
          label='Leading icon'
          placeholder='Search...'
          leadingIcon={Ux4gIcons.search({ size: 18, color: '#8D8F93' })}
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={amountValue}
          onValueChange={setAmountValue}
          label='Trailing icon'
          placeholder='Enter amount'
          trailingIcon={<Text style={{ fontSize: 22, color: '#8D8F93' }}>₹</Text>}
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={locationValue}
          onValueChange={setLocationValue}
          label='Both icons'
          placeholder='Location'
          leadingIcon={<MaterialIcons name='location-on' size={18} color='#8D8F93' />}
          trailingIcon={Ux4gIcons.settings({ size: 18, color: '#8D8F93' })}
        />
        </>`;
  }

  if (story === 'input-prefix-postfix') {
    return `        <Ux4gInputField
          value={amount}
          onValueChange={setAmount}
          label='Amount'
          prefixText='₹'
          postfixText='.00'
          type='number'
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={website}
          onValueChange={setWebsite}
          label='Website'
          placeholder='https:// example.com'
        />`;
  }

  if (story === 'input-aadhaar-basic') {
    return `        <Ux4gAadhaarInputField
          value={aadhaar}
          onValueChange={setAadhaar}
          label='Aadhaar Number'
          placeholder='XXXX XXXX XXXX'
          required={true}
        />`;
  }

  if (story === 'input-aadhaar-varients') {
    return `        <Ux4gAadhaarInputField
          value={defaultAadhaar}
          onValueChange={setDefaultAadhaar}
          label='Default'
          placeholder='XXXX XXXX XXXX'
          caption='Enter your 12-digit Aadhaar number'
        />
        <View style={styles.gap} />
        <Ux4gAadhaarInputField
          value={errorAadhaar}
          onValueChange={setErrorAadhaar}
          label='Error state'
          placeholder='XXXX XXXX XXXX'
          status='error'
          caption='Please enter a valid Aadhaar number'
        />
        <View style={styles.gap} />
        <Ux4gAadhaarInputField
          value={successAadhaar}
          onValueChange={setSuccessAadhaar}
          label='Success state'
          placeholder='XXXX XXXX XXXX'
          status='success'
          caption='Enter your 12-digit Aadhaar number'
        />
        <View style={styles.gap} />
        <Ux4gAadhaarInputField
          value={disabledAadhaar}
          onValueChange={setDisabledAadhaar}
          label='Disabled'
          placeholder='XXXX XXXX XXXX'
          enabled={false}
          caption='Enter your 12-digit Aadhaar number'
        />`;
  }

  if (story === 'input-pan-basic') {
    return `        <Ux4gPanInputField
          value={pan}
          onValueChange={setPan}
          label='PAN Card Number'
          placeholder='ABCDE1234F'
          required={true}
        />`;
  }

  if (story === 'input-pan-varients') {
    return `        <Ux4gPanInputField
          value={defaultPan}
          onValueChange={setDefaultPan}
          label='Default'
          placeholder='ABCDE1234F'
          caption='Enter your 10-character PAN number'
        />
        <View style={styles.gap} />
        <Ux4gPanInputField
          value={errorPan}
          onValueChange={setErrorPan}
          label='Error state'
          placeholder='ABCDE1234F'
          status='error'
          caption='Please enter a valid PAN number'
        />
        <View style={styles.gap} />
        <Ux4gPanInputField
          value={successPan}
          onValueChange={setSuccessPan}
          label='Success state'
          placeholder='ABCDE1234F'
          status='success'
          caption='Enter your 10-character PAN number'
        />
        <View style={styles.gap} />
        <Ux4gPanInputField
          value={disabledPan}
          onValueChange={setDisabledPan}
          label='Disabled'
          placeholder='ABCDE1234F'
          enabled={false}
          caption='Enter your 10-character PAN number'
        />`;
  }

  if (story === 'input-otp-basic') {
    return `        <Ux4gOtpInput
          value={otp}
          onChanged={setOtp}
          length={6}
          label='Enter OTP'
          captionVariant='resendTimer'
          captionLeadingText="Didn't receive OTP?"
          captionTrailingText='Resend in 00:17'
        />`;
  }

  if (story === 'input-otp-varients') {
    return `        <Ux4gOtpInput
          value={defaultOtp}
          onChanged={setDefaultOtp}
          label='Default'
          length={6}
          captionVariant='resendTimer'
          captionLeadingText="Didn't receive OTP?"
          captionTrailingText='Resend in 00:17'
        />
        <View style={styles.gap} />
        <Ux4gOtpInput
          value={errorOtp}
          onChanged={setErrorOtp}
          label='Error state'
          length={6}
          status='error'
          captionVariant='plain'
          captionText='Please enter a valid OTP'
        />
        <View style={styles.gap} />
        <Ux4gOtpInput
          value={successOtp}
          onChanged={setSuccessOtp}
          label='Success state'
          length={6}
          status='success'
          captionVariant='success'
          captionText='Verification successful'
        />
        <View style={styles.gap} />
        <Ux4gOtpInput
          value={lockedOtp}
          onChanged={setLockedOtp}
          label='Disabled'
          length={6}
          enabled={false}
          captionVariant='locked'
          captionLeadingText='Too many attempts'
          captionTrailingText='Resend OTP'
        />`;
  }

  if (story === 'input-required-disabled') {
    return `        <Ux4gInputField
          value={applicationId}
          onValueChange={setApplicationId}
          label='Application ID'
          enabled={false}
        />
        <View style={styles.gap} />
        <Ux4gInputField
          value={fullName}
          onValueChange={setFullName}
          label='Full Name'
          required={true}
          placeholder='Enter full name'
        />`;
  }

  return `        <Ux4gInputField
          value={basicValue}
          onValueChange={setBasicValue}
          label='Label'
          placeholder='Placeholder'
          caption='Description'
        />`;
};

export const InputFieldDoc: React.FC<InputFieldDocProps> = ({ isDark, story = 'input-basic' }) => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');

  const activeStory = normalizeStory(story);
  const config = storyMeta[activeStory];

  const codeString = useMemo(() => getStoryCode(activeStory), [activeStory]);

  const renderStoryPreview = () => {
    const snackCodeString = `import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
    import { MaterialIcons } from '@expo/vector-icons';
  import { Ux4gInputField, Ux4gAadhaarInputField, Ux4gPanInputField, Ux4gOtpInput, Ux4gThemeProvider, Ux4gIcons } from 'ux4g-react-native-design-system';

export default function App() {
  const [basicValue, setBasicValue] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [successValue, setSuccessValue] = useState('');
  const [warningValue, setWarningValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');
  const [password, setPassword] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [amount, setAmount] = useState('0');
  const [aadhaar, setAadhaar] = useState('');
  const [defaultAadhaar, setDefaultAadhaar] = useState('');
  const [errorAadhaar, setErrorAadhaar] = useState('');
  const [successAadhaar, setSuccessAadhaar] = useState('1234 5678 9012');
  const [disabledAadhaar, setDisabledAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const [defaultPan, setDefaultPan] = useState('');
  const [errorPan, setErrorPan] = useState('');
  const [successPan, setSuccessPan] = useState('ABCDE1234F');
  const [disabledPan, setDisabledPan] = useState('');
  const [otp, setOtp] = useState('');
  const [defaultOtp, setDefaultOtp] = useState('');
  const [errorOtp, setErrorOtp] = useState('12');
  const [successOtp, setSuccessOtp] = useState('123456');
  const [lockedOtp, setLockedOtp] = useState('');
  const [website, setWebsite] = useState('https:// example.com');
  const [applicationId, setApplicationId] = useState('GOV/2025/001');
  const [fullName, setFullName] = useState('');

  return (
    <Ux4gThemeProvider isDark={${isDark}}>
      <ScrollView contentContainerStyle={styles.container}>
${getSnackFields(activeStory)}
      </ScrollView>
    </Ux4gThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: '100%',
    justifyContent: 'center',
  },
  gap: {
    height: 16,
  },
});`;

    const snackUrl = `https://snack.expo.dev/embedded?platform=web&supportedPlatforms=ios,android,web&theme=${isDark ? 'dark' : 'light'}&name=Ux4gInputField%20Preview&preview=true&hideNavigation=true&hideDevTools=true&hideConsole=true&dependencies=ux4g-react-native-design-system@1.0.2,react-native-svg@*&code=${encodeURIComponent(snackCodeString)}`;

    return (
      <iframe
        src={snackUrl}
        style={{ width: '100%', height: '680px', border: 'none', borderRadius: '8px' }}
        title='Expo Snack InputField Preview'
      />
    );
  };

  const propsData = [
    { name: 'value', type: 'string', default: 'required', desc: 'Current text string inside the input field.', required: true },
    { name: 'onValueChange', type: '(value: string) => void', default: 'required', desc: 'Callback triggered when text changes.', required: true },
    { name: 'size', type: "'small' | 'medium' | 'large' | 'xl'", default: "'medium'", desc: 'Size of the input field.', required: false },
    { name: 'type', type: "'text' | 'password' | 'number' | 'email'", default: "'text'", desc: 'Type of input field.', required: false },
    { name: 'status', type: "'defaultStatus' | 'error' | 'warning' | 'success'", default: "'defaultStatus'", desc: 'Validation status controlling border and caption color.', required: false },
    { name: 'label', type: 'string', default: 'undefined', desc: 'Label displayed above the input box.', required: false },
    { name: 'required', type: 'boolean', default: 'false', desc: 'Whether field is required (shows red asterisk).', required: false },
    { name: 'placeholder', type: 'string', default: 'undefined', desc: 'Placeholder hint text.', required: false },
    { name: 'caption', type: 'string', default: 'undefined', desc: 'Optional caption or validation message.', required: false },
    { name: 'leadingIcon', type: 'ReactNode', default: 'undefined', desc: 'Leading icon/content inside input box.', required: false },
    { name: 'trailingIcon', type: 'ReactNode', default: 'undefined', desc: 'Trailing icon/content for non-password input.', required: false },
    { name: 'onTrailingIconPressed', type: '() => void', default: 'undefined', desc: 'Callback when trailing icon is pressed.', required: false },
    { name: 'prefixText', type: 'string', default: 'undefined', desc: 'Prefix text shown after leading icon.', required: false },
    { name: 'postfixText', type: 'string', default: 'undefined', desc: 'Postfix text shown before trailing icon.', required: false },
    { name: 'trailingIconLabel', type: 'ReactNode', default: 'undefined', desc: 'Trailing icon/content in label row.', required: false },
    { name: 'enabled', type: 'boolean', default: 'true', desc: 'Whether the input is interactive.', required: false },
    { name: 'readOnly', type: 'boolean', default: 'false', desc: 'Whether the input is non-editable.', required: false },
    { name: 'singleLine', type: 'boolean', default: 'true', desc: 'Single-line or multi-line mode.', required: false },
    { name: 'maxLines', type: 'number', default: 'undefined', desc: 'Maximum lines for multi-line mode.', required: false },
    { name: 'maxLength', type: 'number', default: 'undefined', desc: 'Maximum character length.', required: false },
    { name: 'textAlign', type: "'left' | 'center' | 'right'", default: "'left'", desc: 'Text alignment inside input.', required: false },
    { name: 'style', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for input text.', required: false },
    { name: 'placeholderStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for placeholder text color style.', required: false },
    { name: 'labelStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for label text.', required: false },
    { name: 'captionStyle', type: 'StyleProp<TextStyle>', default: 'undefined', desc: 'Style override for caption text.', required: false },
    { name: 'backgroundColor', type: 'string', default: 'theme-based', desc: 'Background color override.', required: false },
    { name: 'borderColor', type: 'string', default: 'theme/status-based', desc: 'Border color override for enabled default state.', required: false },
    { name: 'disabledBorderColor', type: 'string', default: 'onSurface @ 30%', desc: 'Border color override when disabled.', required: false },
    { name: 'borderWidth', type: 'number', default: '1.0', desc: 'Border width for enabled states.', required: false },
    { name: 'disabledBorderWidth', type: 'number', default: '0.0', desc: 'Border width when disabled.', required: false },
    { name: 'containerStyle', type: 'StyleProp<ViewStyle>', default: 'undefined', desc: 'Outer container style override.', required: false },
    { name: 'testID', type: 'string', default: 'undefined', desc: 'Test identifier for automation.', required: false },
  ];

  return (
    <div className='wb-page'>
      <div className='wb-header'>
        <div className='wb-header-row'>
          <h1 className='wb-title'>{config.title}</h1>
          <span className='wb-badge'>Component</span>
        </div>
        <p className='wb-subtitle'>{config.description}</p>
        <p className='wb-subtitle' style={{ marginTop: 6 }}>
          <span style={{ color: '#E11D48', fontWeight: 700 }}>*</span> marks required props.
        </p>
      </div>

      <div className='wb-body'>
        <div className='wb-main'>
          <div className='wb-tab-bar'>
            <button
              className={`wb-tab ${activeMainTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('preview')}
              type='button'
            >
              <span className='material-symbols-outlined wb-tab-icon'>visibility</span>
              Preview
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('code')}
              type='button'
            >
              <span className='material-symbols-outlined wb-tab-icon'>code</span>
              Code
            </button>
            <button
              className={`wb-tab ${activeMainTab === 'props' ? 'active' : ''}`}
              onClick={() => setActiveMainTab('props')}
              type='button'
            >
              <span className='material-symbols-outlined wb-tab-icon'>tune</span>
              Props
            </button>
          </div>

          <div className='wb-tab-content'>
            {activeMainTab === 'preview' && (
              <Ux4gThemeProvider isDark={isDark}>
                <div className={`wb-preview-area ${isDark ? 'dark' : ''}`}>{renderStoryPreview()}</div>
              </Ux4gThemeProvider>
            )}

            {activeMainTab === 'code' && (
              <div className='wb-code-area'>
                <CodeBlock code={codeString} language='TSX' filename='InputFieldExample.tsx' />
              </div>
            )}

            {activeMainTab === 'props' && (
              <div className='wb-props-area'>
                <table className='props-table'>
                  <thead>
                    <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propsData.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <span className='prop-name'>
                            {p.name}
                            {p.required ? <span style={{ color: '#E11D48' }}> *</span> : null}
                          </span>
                        </td>
                        <td><span className='prop-type'>{p.type}</span></td>
                        <td>{p.desc}</td>
                        <td><span className='prop-default'>{p.default}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFieldDoc;
