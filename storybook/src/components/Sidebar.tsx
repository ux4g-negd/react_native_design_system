import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  children?: NavItem[];
}

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'introduction', label: 'Introduction', icon: 'bookmark' },
  { id: 'quickstart', label: 'Quick Start Guide', icon: 'bookmark' },
  {
    id: 'tokens',
    label: 'Token',
    icon: 'folder',
    children: [
      { id: 'colors', label: 'Colors', icon: 'invert_colors' },
      { id: 'typography', label: 'Typography', icon: 'text_fields' },
      { id: 'spacing', label: 'Spacing', icon: 'straighten' },
      { id: 'radius', label: 'Radius', icon: 'rounded_corner' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: 'folder',
    children: [
      { id: 'button', label: 'Button', icon: 'smart_button' },
      { id: 'input-field', label: 'Input Field', icon: 'edit_note' },
      { id: 'checkbox', label: 'Checkbox', icon: 'check_box' },
      { id: 'radio-button', label: 'Radio Button', icon: 'radio_button_checked' },
      { id: 'switch', label: 'Switch', icon: 'toggle_on' },
      { id: 'card', label: 'Card', icon: 'view_agenda' },
      { id: 'badge', label: 'Badge', icon: 'loyalty' },
      { id: 'avatar', label: 'Avatar', icon: 'account_circle' },
      { id: 'modal', label: 'Modal', icon: 'web_asset' },
      { id: 'toast', label: 'Toast', icon: 'notifications' },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    icon: 'folder',
    children: [
      { id: 'forms', label: 'Forms', icon: 'assignment' },
      { id: 'headers', label: 'Headers', icon: 'web' },
    ],
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    components: true,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filterItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items
      .map((item) => {
        if (item.children) {
          const filteredChildren = item.children.filter((c) =>
            c.label.toLowerCase().includes(q)
          );
          if (filteredChildren.length > 0) {
            return { ...item, children: filteredChildren };
          }
        }
        if (item.label.toLowerCase().includes(q)) return item;
        return null;
      })
      .filter(Boolean) as NavItem[];
  };

  const filteredItems = filterItems(NAV_ITEMS);

  return (
    <aside className={`sidebar ${isDark ? 'dark' : ''}`}>
      {/* Header with UX4G Logo asset */}
      <div className="sidebar-header">
        <div className="sidebar-logo-img-wrapper" onClick={() => onNavigate('introduction')} style={{ cursor: 'pointer' }}>
          <img
            src="/ux4g_logo.svg"
            alt="UX4G Logo"
            className="sidebar-logo-img"
            style={{ height: 28, width: 'auto', display: 'block' }}
          />
        </div>
        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined theme-toggle-icon">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <div className="search-wrapper">
          <span className="material-symbols-outlined search-icon" style={{ fontSize: 18 }}>search</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {filteredItems.map((item) => {
          if (item.children) {
            const isExpanded = expandedGroups[item.id] || !!searchQuery.trim();
            return (
              <div key={item.id}>
                <button
                  className="nav-group-header"
                  onClick={() => toggleGroup(item.id)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="material-symbols-outlined nav-icon">{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="material-symbols-outlined chevron-icon" style={{ fontSize: 16, transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                    expand_more
                  </span>
                </button>
                <div className={`nav-group-children ${isExpanded ? 'expanded' : ''}`}>
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      className={`nav-item ${activePage === child.id ? 'active' : ''}`}
                      onClick={() => onNavigate(child.id)}
                    >
                      <span className="material-symbols-outlined nav-icon">{child.icon}</span>
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="material-symbols-outlined nav-icon">{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
