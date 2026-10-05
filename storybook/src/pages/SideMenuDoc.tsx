import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import {
  Ux4gSideMenu,
  Ux4gSideMenuVariant,
} from '../../../src/components/side-menu';
import { Ux4gThemeProvider } from '../../../src/theme/Ux4gThemeContext';

interface SideMenuDocProps {
  isDark: boolean;
  story?: string;
}

type MainTab = 'preview' | 'code' | 'props';

export const SideMenuDoc: React.FC<SideMenuDocProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<MainTab>('preview');
  const [activeVariant, setActiveVariant] = useState<Ux4gSideMenuVariant>('citizen');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<'left' | 'right'>('left');
  const [selectedKey, setSelectedKey] = useState('my-applications');
  const [showSearch, setShowSearch] = useState(false);
  const [activeScreenTitle, setActiveScreenTitle] = useState('My applications');
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleOpen = (variant: Ux4gSideMenuVariant, pos: 'left' | 'right' = 'left') => {
    setActiveVariant(variant);
    setDrawerPosition(pos);
    if (variant === 'citizen') {
      setSelectedKey('my-applications');
      setActiveScreenTitle('My applications');
    } else if (variant === 'department-services') {
      setSelectedKey('dashboard');
      setActiveScreenTitle('Dashboard');
    } else if (variant === 'department-switcher') {
      setSelectedKey('dept-revenue');
      setActiveScreenTitle('Revenue Department');
    } else if (variant === 'mailbox') {
      setSelectedKey('inbox');
      setActiveScreenTitle('Inbox');
    } else if (variant === 'profile-summary') {
      setSelectedKey('profile-settings');
      setActiveScreenTitle('Profile & settings');
    } else {
      setSelectedKey('dashboard');
      setActiveScreenTitle('Dashboard');
    }
    setIsDrawerOpen(true);
  };

  const getCodeSnippet = () => {
    switch (activeVariant) {
      case 'citizen':
        return `import React, { useState } from 'react';
import { Ux4gSideMenu } from 'ux4g-react-native-components';

export default function CitizenSideMenuExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ux4gSideMenu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      variant="citizen"
      user={{
        name: 'Ramesh Kumar',
        roleOrEmail: 'Citizen',
        avatarText: 'RK',
      }}
      footerBranding={{
        title: 'Revenue Department',
        subtitle: 'Government of India',
        logo: 'national-emblem-logo',
      }}
      onSignOut={() => console.log('Signed out')}
    />
  );
}`;
      case 'department-services':
        return `import React, { useState } from 'react';
import { Ux4gSideMenu } from 'ux4g-react-native-components';

export default function DepartmentServicesExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ux4gSideMenu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      variant="department-services"
      title="Revenue Department"
      subtitle="Kanpur division"
      actionCard={{
        tag: 'ACTION REQUIRED',
        title: 'Verify your Aadhaar',
        description: 'Complete identity verification to continue.',
        buttonText: 'Verify now',
        onButtonPress: () => console.log('Verify pressed'),
      }}
    />
  );
}`;
      case 'department-switcher':
        return `import React, { useState } from 'react';
import { Ux4gSideMenu } from 'ux4g-react-native-components';

export default function DepartmentSwitcherExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ux4gSideMenu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      variant="department-switcher"
      title="Departments"
      subtitle="Choose a department to work in."
      sections={[
        {
          items: [
            {
              key: 'dept-revenue',
              label: 'Revenue Department',
              subtitle: 'Current department',
              avatarText: 'RD',
              isCheckmark: true,
            },
            {
              key: 'dept-transport',
              label: 'Transport Department',
              subtitle: 'transport.up.gov.in',
              avatarText: 'TD',
              statusTag: '3 applications pending',
            },
          ],
        },
      ]}
      footerItems={[
        { key: 'req', label: 'Request department access', icon: 'add' },
        { key: 'set', label: 'Settings', icon: 'more-vert' },
        { key: 'help', label: 'Help & support', icon: 'help' },
      ]}
    />
  );
}`;
      case 'mailbox':
        return `import React, { useState } from 'react';
import { Ux4gSideMenu } from 'ux4g-react-native-components';

export default function MailboxExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ux4gSideMenu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      variant="mailbox"
      user={{
        name: 'Ramesh Kumar',
        roleOrEmail: 'ramesh.kumar@gov.in',
        avatarText: 'RK',
      }}
      footerBranding={{
        title: 'Revenue Department',
        subtitle: 'Kanpur division',
      }}
    />
  );
}`;
      case 'profile-summary':
        return `import React, { useState } from 'react';
import { Ux4gSideMenu } from 'ux4g-react-native-components';

export default function ProfileSummaryExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ux4gSideMenu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      variant="profile-summary"
      profileSummary={{
        name: 'Ramesh Kumar',
        role: 'Citizen',
        metaInfo: '12 applications · 3 actions required',
        avatarText: 'RK',
        actionLabel: 'View profile',
        onActionPress: () => console.log('View profile'),
      }}
      showSignOut={true}
    />
  );
}`;
      default:
        return `import React, { useState } from 'react';
import { Ux4gSideMenu } from 'ux4g-react-native-components';

export default function StandardSideMenuExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ux4gSideMenu
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      variant="standard"
      title="Revenue Department"
      subtitle="Government of India"
      showSearch={true}
    />
  );
}`;
    }
  };

  return (
    <Ux4gThemeProvider>
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Title */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>
              Side Menu (Drawer)
            </h1>
            <span
              style={{
                backgroundColor: '#EDE9FE',
                color: '#6D28D9',
                fontSize: '12px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '12px',
              }}
            >
              5 Design Variants
            </span>
          </div>
          <p style={{ fontSize: '15px', color: isDark ? '#94A3B8' : '#475569', lineHeight: '1.6', margin: 0 }}>
            Responsive Government Navigation Drawer component supporting Citizen Profile, Department Services with Action Callouts, Department Switcher, User Mailbox, and Centered Profile Summary variants with smooth left/right slide animations and theme awareness.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #E2E8F0', marginBottom: '24px' }}>
          {(['preview', 'code', 'props'] as MainTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 18px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid #6D28D9' : '2px solid transparent',
                color: activeTab === tab ? '#6D28D9' : isDark ? '#94A3B8' : '#64748B',
                textTransform: 'capitalize',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Tabs */}
        {activeTab === 'preview' && (
          <div>
            {/* Variant Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '16px',
                marginBottom: '28px',
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  border: activeVariant === 'citizen' ? '2px solid #6D28D9' : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Variant 1: Citizen Profile</h3>
                  <span style={{ fontSize: '11px', background: '#EDE9FE', color: '#6D28D9', padding: '2px 8px', borderRadius: '8px', fontWeight: 600 }}>Image 1 Left</span>
                </div>
                <p style={{ fontSize: '13px', color: isDark ? '#94A3B8' : '#64748B', marginBottom: '14px' }}>
                  Identity header with avatar initials "RK", Citizen role, notification badge (3), and bottom emblem branding with sign out.
                </p>
                <button
                  onClick={() => handleOpen('citizen')}
                  style={{
                    backgroundColor: '#6D28D9',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Open Citizen Drawer
                </button>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  border: activeVariant === 'department-services' ? '2px solid #6D28D9' : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Variant 2: Department Services</h3>
                  <span style={{ fontSize: '11px', background: '#FEF3C7', color: '#92400E', padding: '2px 8px', borderRadius: '8px', fontWeight: 600 }}>Image 1 Right</span>
                </div>
                <p style={{ fontSize: '13px', color: isDark ? '#94A3B8' : '#64748B', marginBottom: '14px' }}>
                  Department services with accordion tree sub-items, workspace section, and peach "Verify your Aadhaar" action card.
                </p>
                <button
                  onClick={() => handleOpen('department-services')}
                  style={{
                    backgroundColor: '#6D28D9',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Open Services Drawer
                </button>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  border: activeVariant === 'department-switcher' ? '2px solid #6D28D9' : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Variant 3: Department Switcher</h3>
                  <span style={{ fontSize: '11px', background: '#EDE9FE', color: '#6D28D9', padding: '2px 8px', borderRadius: '8px', fontWeight: 600 }}>Image 2 Left</span>
                </div>
                <p style={{ fontSize: '13px', color: isDark ? '#94A3B8' : '#64748B', marginBottom: '14px' }}>
                  Department switcher with avatar boxes "RD", "TD", checkmark indicator, "3 applications pending" pill, and footer requests.
                </p>
                <button
                  onClick={() => handleOpen('department-switcher')}
                  style={{
                    backgroundColor: '#6D28D9',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Open Switcher Drawer
                </button>
              </div>

              {/* Card 4 */}
              <div
                style={{
                  border: activeVariant === 'mailbox' ? '2px solid #6D28D9' : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Variant 4: User Mailbox</h3>
                  <span style={{ fontSize: '11px', background: '#EDE9FE', color: '#6D28D9', padding: '2px 8px', borderRadius: '8px', fontWeight: 600 }}>Image 2 Right</span>
                </div>
                <p style={{ fontSize: '13px', color: isDark ? '#94A3B8' : '#64748B', marginBottom: '14px' }}>
                  User email header ("ramesh.kumar@gov.in"), inbox count badge (9), folder items, and "Customize inbox" action link.
                </p>
                <button
                  onClick={() => handleOpen('mailbox')}
                  style={{
                    backgroundColor: '#6D28D9',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Open Mailbox Drawer
                </button>
              </div>

              {/* Card 5 */}
              <div
                style={{
                  border: activeVariant === 'profile-summary' ? '2px solid #6D28D9' : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Variant 5: Centered Profile</h3>
                  <span style={{ fontSize: '11px', background: '#EDE9FE', color: '#6D28D9', padding: '2px 8px', borderRadius: '8px', fontWeight: 600 }}>Image 3</span>
                </div>
                <p style={{ fontSize: '13px', color: isDark ? '#94A3B8' : '#64748B', marginBottom: '14px' }}>
                  Large 58dp centered avatar, "12 applications · 3 actions required" metrics, outline "View profile" button, and sections.
                </p>
                <button
                  onClick={() => handleOpen('profile-summary')}
                  style={{
                    backgroundColor: '#6D28D9',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Open Profile Drawer
                </button>
              </div>
            </div>

            {/* Simulated Live View Box */}
            <div
              style={{
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '24px',
                backgroundColor: isDark ? '#0F172A' : '#F8FAFC',
                textAlign: 'center',
              }}
            >
              <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>
                Active Screen: {activeScreenTitle}
              </h4>
              <p style={{ fontSize: '13px', color: '#64748B', margin: '0 0 16px 0' }}>
                Selected Menu Key: <code style={{ backgroundColor: '#EDE9FE', padding: '2px 6px', borderRadius: '4px', color: '#6D28D9' }}>{selectedKey}</code>
              </p>
              {lastAction && (
                <div style={{ backgroundColor: '#ECFDF5', color: '#047857', padding: '8px 14px', borderRadius: '8px', display: 'inline-block', fontSize: '13px', fontWeight: 600 }}>
                  ✓ {lastAction}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div>
            <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['citizen', 'department-services', 'department-switcher', 'mailbox', 'profile-summary', 'standard'] as Ux4gSideMenuVariant[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveVariant(v)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: activeVariant === v ? '2px solid #6D28D9' : '1px solid #CBD5E1',
                    background: activeVariant === v ? '#EDE9FE' : '#FFF',
                    color: activeVariant === v ? '#6D28D9' : '#334155',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
            <CodeBlock code={getCodeSnippet()} language="typescript" />
          </div>
        )}

        {activeTab === 'props' && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E2E8F0' }}>
                  <th style={{ padding: '10px' }}>Prop</th>
                  <th style={{ padding: '10px' }}>Type</th>
                  <th style={{ padding: '10px' }}>Default</th>
                  <th style={{ padding: '10px' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>variant</td>
                  <td style={{ padding: '10px' }}>'standard' | 'citizen' | 'department-services' | 'department-switcher' | 'mailbox' | 'profile-summary'</td>
                  <td style={{ padding: '10px' }}>'standard'</td>
                  <td style={{ padding: '10px' }}>Pre-configured layout preset matching UX4G government designs.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>user</td>
                  <td style={{ padding: '10px' }}>Ux4gSideMenuUser</td>
                  <td style={{ padding: '10px' }}>undefined</td>
                  <td style={{ padding: '10px' }}>User identity info with avatar initials ("RK"), name, and role/email.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>profileSummary</td>
                  <td style={{ padding: '10px' }}>Ux4gSideMenuProfileSummary</td>
                  <td style={{ padding: '10px' }}>undefined</td>
                  <td style={{ padding: '10px' }}>Large centered avatar, application counts, and "View profile" button.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>actionCard</td>
                  <td style={{ padding: '10px' }}>Ux4gSideMenuActionCard</td>
                  <td style={{ padding: '10px' }}>undefined</td>
                  <td style={{ padding: '10px' }}>Action required callout banner card with button.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>footerBranding</td>
                  <td style={{ padding: '10px' }}>Ux4gSideMenuFooterBranding</td>
                  <td style={{ padding: '10px' }}>undefined</td>
                  <td style={{ padding: '10px' }}>National emblem logo and department subtitle branding at bottom.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '10px', fontWeight: 600 }}>position</td>
                  <td style={{ padding: '10px' }}>'left' | 'right'</td>
                  <td style={{ padding: '10px' }}>'left'</td>
                  <td style={{ padding: '10px' }}>Slide direction from left or right edge.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Live Drawer Render */}
        <Ux4gSideMenu
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          variant={activeVariant}
          position={drawerPosition}
          selectedKey={selectedKey}
          showSearch={showSearch}
          onItemPress={(item) => {
            setSelectedKey(item.key);
            setActiveScreenTitle(item.label);
            setLastAction(`Selected: "${item.label}"`);
            setIsDrawerOpen(false);
          }}
          onSignOut={() => {
            setIsDrawerOpen(false);
            setActiveScreenTitle('Signed out');
            setLastAction('Sign out triggered.');
          }}
        />
      </div>
    </Ux4gThemeProvider>
  );
};
