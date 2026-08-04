import React, { useState, useCallback } from 'react';

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
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'introduction', label: 'Introduction', icon: 'bookmark' },
  { id: 'quickstart', label: 'Quick Start Guide', icon: 'bookmark' },
  {
    id: 'tokens',
    label: 'Token',
    icon: 'folder',
    children: [
      {
        id: 'colors',
        label: 'Colors',
        icon: 'folder',
        children: [
          { id: 'colors-primary', label: 'Primary', icon: 'layers' },
          { id: 'colors-secondary', label: 'Secondary', icon: 'layers' },
          { id: 'colors-tertiary', label: 'Tertiary', icon: 'layers' },
          { id: 'colors-red', label: 'Red (Error)', icon: 'layers' },
          { id: 'colors-orange', label: 'Orange (Warning)', icon: 'layers' },
          { id: 'colors-yellow', label: 'Yellow', icon: 'layers' },
          { id: 'colors-gold', label: 'Gold', icon: 'layers' },
          { id: 'colors-green', label: 'Green (Success)', icon: 'layers' },
          { id: 'colors-lime', label: 'Lime', icon: 'layers' },
          { id: 'colors-blue', label: 'Blue (Info)', icon: 'layers' },
          { id: 'colors-skyblue', label: 'Sky Blue', icon: 'layers' },
          { id: 'colors-cyan', label: 'Cyan', icon: 'layers' },
          { id: 'colors-purple', label: 'Purple', icon: 'layers' },
          { id: 'colors-pink', label: 'Pink', icon: 'layers' },
          { id: 'colors-neutral', label: 'Neutral', icon: 'layers' },
          { id: 'colors-semantic', label: 'Semantic Tokens', icon: 'layers' },
        ],
      },
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
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    components: true,
    tokens: true,
    colors: true,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);

  React.useEffect(() => {
    if (activePage.startsWith('colors-')) {
      setExpandedGroups((prev) => ({ ...prev, tokens: true, colors: true }));
    } else if (['typography', 'spacing', 'radius'].includes(activePage)) {
      setExpandedGroups((prev) => ({ ...prev, tokens: true }));
    } else if (['forms', 'headers'].includes(activePage)) {
      setExpandedGroups((prev) => ({ ...prev, patterns: true }));
    } else if (
      [
        'button',
        'input-field',
        'checkbox',
        'radio-button',
        'switch',
        'card',
        'badge',
        'avatar',
        'modal',
        'toast',
      ].includes(activePage)
    ) {
      setExpandedGroups((prev) => ({ ...prev, components: true }));
    }
  }, [activePage]);

  const startResizing = useCallback(
    (mouseDownEvent: React.MouseEvent) => {
      mouseDownEvent.preventDefault();
      setIsResizing(true);

      const startX = mouseDownEvent.clientX;
      const startWidth = sidebarWidth;

      const onMouseMove = (mouseMoveEvent: MouseEvent) => {
        const currentWidth = startWidth + (mouseMoveEvent.clientX - startX);
        const clampedWidth = Math.min(Math.max(currentWidth, 180), 500);
        setSidebarWidth(clampedWidth);
      };

      const onMouseUp = () => {
        setIsResizing(false);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    },
    [sidebarWidth]
  );

  const handleResetWidth = () => {
    setSidebarWidth(260);
  };

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filterItems = (items: NavItem[]): NavItem[] => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    const filter = (list: NavItem[]): NavItem[] =>
      list
        .map((item) => {
          if (item.children) {
            const filteredChildren = filter(item.children);
            if (filteredChildren.length > 0) {
              return { ...item, children: filteredChildren };
            }
          }
          if (item.label.toLowerCase().includes(q)) return item;
          return null;
        })
        .filter(Boolean) as NavItem[];
    return filter(items);
  };

  const renderNavItem = (item: NavItem, depth: number): React.ReactElement => {
    if (item.children) {
      const isExpanded = expandedGroups[item.id] || !!searchQuery.trim();
      return (
        <div key={item.id}>
          <button
            className={`nav-group-header ${depth > 0 ? 'nav-group-header-nested' : ''}`}
            onClick={() => toggleGroup(item.id)}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="material-symbols-outlined nav-icon">
                {isExpanded ? 'folder_open' : item.icon}
              </span>
              {item.label}
            </span>
            <span
              className="material-symbols-outlined chevron-icon"
              style={{
                fontSize: 16,
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            >
              expand_more
            </span>
          </button>
          <div className={`nav-group-children ${isExpanded ? 'expanded' : ''}`}>
            {item.children.map((child) => renderNavItem(child, depth + 1))}
          </div>
        </div>
      );
    }

    return (
      <button
        key={item.id}
        className={`nav-item ${depth > 0 ? 'nav-item-nested' : ''} ${activePage === item.id ? 'active' : ''
          }`}
        onClick={() => onNavigate(item.id)}
      >
        <span className="material-symbols-outlined nav-icon">{item.icon}</span>
        {item.label}
      </button>
    );
  };

  const filteredItems = filterItems(NAV_ITEMS);

  return (
    <aside
      className={`sidebar ${isDark ? 'dark' : ''} ${isResizing ? 'resizing' : ''} ${
        isMobileOpen ? 'mobile-open' : ''
      }`}
      style={{
        width: sidebarWidth,
        minWidth: sidebarWidth,
        maxWidth: sidebarWidth,
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* Bottom Sheet Pull Handle (visible on mobile) */}
      <div className="bottom-sheet-handle-wrapper" onClick={onCloseMobile}>
        <div className="bottom-sheet-handle" />
      </div>

      {/* Header with UX4G Logo asset */}
      <div className="sidebar-header">
        <div
          className="sidebar-logo-img-wrapper"
          onClick={() => onNavigate('introduction')}
          style={{ cursor: 'pointer' }}
        >
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
          <span className="material-symbols-outlined search-icon" style={{ fontSize: 18 }}>
            search
          </span>
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
        {filteredItems.map((item) => renderNavItem(item, 0))}
      </nav>

      {/* Resizer Handle */}
      <div
        className="sidebar-resizer"
        onMouseDown={startResizing}
        onDoubleClick={handleResetWidth}
        title="Drag to resize sidebar (Double click to reset)"
      />
    </aside>
  );
};

export default Sidebar;
