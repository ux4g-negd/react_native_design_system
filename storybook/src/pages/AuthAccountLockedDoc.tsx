import React from 'react';
import { VerifyMobileAccountLockedDoc } from './VerifyMobileAccountLockedDoc';

interface AuthAccountLockedDocProps {
  isDark: boolean;
}

export const AuthAccountLockedDoc: React.FC<AuthAccountLockedDocProps> = ({ isDark }) => {
  return (
    <VerifyMobileAccountLockedDoc
      isDark={isDark}
      pageTitle="OTP error — account locked"
      breadcrumb="Patterns / Identity and Access / Auth errors and lockout / OTP error — account locked"
    />
  );
};

export default AuthAccountLockedDoc;
