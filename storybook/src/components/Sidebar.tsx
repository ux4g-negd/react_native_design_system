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
      {
        id: 'typography',
        label: 'Typography',
        icon: 'folder',
        children: [
          { id: 'typography-header', label: 'Header', icon: 'layers' },
          { id: 'typography-display', label: 'Display', icon: 'layers' },
          { id: 'typography-body', label: 'Body', icon: 'layers' },
          { id: 'typography-label', label: 'Label', icon: 'layers' },
          { id: 'typography-title', label: 'Title', icon: 'layers' },
          { id: 'typography-usage', label: 'How to use', icon: 'layers' },
        ],
      },
      {
        id: 'shadow',
        label: 'Shadow',
        icon: 'folder',
        children: [
          { id: 'shadow-scale', label: 'Scale', icon: 'layers' },
          { id: 'shadow-usage', label: 'How to use', icon: 'layers' },
        ],
      },
      {
        id: 'dimensions',
        label: 'Dimensions',
        icon: 'folder',
        children: [
          { id: 'dimensions-spacing', label: 'Spacing', icon: 'layers' },
          { id: 'dimensions-radius', label: 'Border Radius', icon: 'layers' },
          { id: 'dimensions-border', label: 'Border Width', icon: 'layers' },
          { id: 'dimensions-usage', label: 'How to use', icon: 'layers' },
        ],
      },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: 'folder',
    children: [
      {
        id: 'accordion-grouping',
        label: 'Accordion',
        icon: 'folder',
        children: [
          { id: 'accordion-basic', label: 'Basic', icon: 'layers' },
          { id: 'accordion-group', label: 'AccordionGroup', icon: 'layers' },
        ],
      },
      {
        id: 'app-header-group',
        label: 'App Header',
        icon: 'folder',
        children: [
          { id: 'app-header-basic', label: 'Introduction', icon: 'layers' },
          { id: 'app-header-back', label: 'Back Button', icon: 'layers' },
          { id: 'app-header-filled', label: 'Filled', icon: 'layers' },
          { id: 'app-header-custom-leading', label: 'Custom Leading Widgets', icon: 'layers' },
        ],
      },
      {
        id: 'avatar-parent-group',
        label: 'Avatar',
        icon: 'folder',
        children: [
          { id: 'avatar-basic', label: 'Basic', icon: 'layers' },
          { id: 'avatar-status', label: 'Status Avatar', icon: 'layers' },
          { id: 'avatar-profile', label: 'Profile Badges & Actions', icon: 'layers' },
          { id: 'avatar-group', label: 'Avatar Group', icon: 'layers' },
        ],
      },
      {
        id: 'badge-parent-group',
        label: 'Badge',
        icon: 'folder',
        children: [
          { id: 'badge-basic', label: 'Basic & Dot', icon: 'layers' },
          { id: 'badge-count', label: 'Count Badge', icon: 'layers' },
          { id: 'badge-standalone', label: 'Standalone Variants', icon: 'layers' },
          { id: 'badge-semantic', label: 'Semantic Colors & Border', icon: 'layers' },
          { id: 'badge-overlay', label: 'Overlay & Placement', icon: 'layers' },
        ],
      },
      {
        id: 'card-parent-group',
        label: 'Card',
        icon: 'folder',
        children: [
          { id: 'card-basic', label: 'Basic Content', icon: 'layers' },
          { id: 'card-actions', label: 'With Actions', icon: 'layers' },
          { id: 'card-horizontal', label: 'Horizontal Layout', icon: 'layers' },
          { id: 'card-media', label: 'With Media', icon: 'layers' },
          { id: 'card-rich', label: 'Rich Card', icon: 'layers' },
          { id: 'card-rich-horizontal', label: 'Rich Card (Horizontal)', icon: 'layers' },
        ],
      },
      {
        id: 'button-group',
        label: 'Button',
        icon: 'folder',
        children: [
          { id: 'button-introduction', label: 'Introduction', icon: 'layers' },
          { id: 'button-variants', label: 'Variants', icon: 'layers' },
          { id: 'button-sizes', label: 'Sizes', icon: 'layers' },
          { id: 'button-showcase', label: 'Showcase', icon: 'layers' },
          { id: 'button-icon-button', label: 'IconButton', icon: 'layers' },
        ],
      },
      {
        id: 'checkbox-group',
        label: 'Checkbox',
        icon: 'folder',
        children: [
          { id: 'checkbox-basic', label: 'Basic & States', icon: 'layers' },
          { id: 'checkbox-sizes', label: 'Sizes', icon: 'layers' },
          { id: 'checkbox-tristate', label: 'Tristate (Indeterminate)', icon: 'layers' },
        ],
      },
      {
        id: 'chips-parent-group',
        label: 'Chips',
        icon: 'folder',
        children: [
          { id: 'chips-basic', label: 'Choice & Filter Chips', icon: 'layers' },
          { id: 'chips-action', label: 'Suggestion & Action Chips', icon: 'layers' },
          { id: 'chips-input', label: 'Input Chips', icon: 'layers' },
        ],
      },
      {
        id: 'chip-group-parent',
        label: 'Chip Group',
        icon: 'folder',
        children: [
          { id: 'chip-group-wrap', label: 'Wrap & Horizontal Groups', icon: 'layers' },
          { id: 'chip-group-input-field', label: 'Input Chip Field', icon: 'layers' },
        ],
      },
      {
        id: 'date-picker-group',
        label: 'Date Picker',
        icon: 'folder',
        children: [
          { id: 'date-picker-single', label: 'Single Date', icon: 'calendar_today' },
          { id: 'date-picker-range', label: 'Date Range', icon: 'date_range' },
        ],
      },
      {
        id: 'dropdown-group',
        label: 'Dropdown',
        icon: 'folder',
        children: [
          { id: 'dropdown-basic', label: 'Basic', icon: 'arrow_drop_down_circle' },
        ],
      },
      {
        id: 'input-group',
        label: 'Input Field',
        icon: 'folder',
        children: [
          { id: 'input-basic', label: 'Basic', icon: 'input' },
        ],
      },
      {
        id: 'carousel-group',
        label: 'Carousel',
        icon: 'folder',
        children: [
          { id: 'carousel-intro', label: 'Introduction', icon: 'layers' },
          { id: 'carousel-rich-hero', label: 'Rich Hero Carousel', icon: 'layers' },
          { id: 'carousel-image', label: 'Image Carousel', icon: 'layers' },
        ],
      },
      {
        id: 'spinner-group',
        label: 'Spinner',
        icon: 'folder',
        children: [
          { id: 'spinner-basic', label: 'Basic', icon: 'autorenew' },
        ],
      },
      // Placeholders for remaining components
      { id: 'modal', label: 'Modal', icon: 'web_asset' },
      { id: 'pagination', label: 'Pagination', icon: 'linear_scale' },
      { id: 'radio', label: 'Radio Button', icon: 'radio_button_checked' },
      { id: 'search', label: 'Search Field', icon: 'search' },
      { id: 'switch', label: 'Switch', icon: 'toggle_on' },
      { id: 'toast', label: 'Toast', icon: 'call_to_action' },
      { id: 'tooltip', label: 'Tooltip', icon: 'chat_bubble' },
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
  // All sidebar folders collapsed by default
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isResizing, setIsResizing] = useState(false);

  // Auto-expand only the parent group of the currently active sub-page
  React.useEffect(() => {
    if (!activePage || activePage === 'introduction' || activePage === 'quickstart') {
      return;
    }
    if (activePage.startsWith('colors-')) {
      setExpandedGroups((prev) => ({ ...prev, tokens: true, colors: true }));
    } else if (activePage.startsWith('typography')) {
      setExpandedGroups((prev) => ({ ...prev, tokens: true, typography: true }));
    } else if (activePage.startsWith('shadow')) {
      setExpandedGroups((prev) => ({ ...prev, tokens: true, shadow: true }));
    } else if (activePage.startsWith('dimensions') || ['spacing', 'radius'].includes(activePage)) {
      setExpandedGroups((prev) => ({ ...prev, tokens: true, dimensions: true }));
    } else if (['forms', 'headers'].includes(activePage)) {
      setExpandedGroups((prev) => ({ ...prev, patterns: true }));
    } else if (activePage.startsWith('button')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'button-group': true }));
    } else if (activePage.startsWith('date-picker')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'date-picker-group': true }));
    } else if (activePage.startsWith('modal')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'modal-group': true }));
    } else if (activePage.startsWith('accordion')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'accordion-grouping': true }));
    } else if (activePage.startsWith('app-header')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'app-header-group': true }));
    } else if (activePage.startsWith('avatar')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'avatar-parent-group': true }));
    } else if (activePage.startsWith('card')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'card-parent-group': true }));
    } else if (activePage.startsWith('carousel')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'carousel-group': true }));
    } else if (activePage.startsWith('badge')) {
      setExpandedGroups((prev) => ({ ...prev, components: true, 'badge-parent-group': true }));
    } else if (
      [
        'input-field',
        'checkbox',
        'radio-button',
        'switch',
        'card',
        'badge',
        'avatar',
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
            onClick={() => {
              toggleGroup(item.id);
              if (item.children && item.children.length > 0) {
                const firstChild = item.children[0];
                if (firstChild.children && firstChild.children.length > 0) {
                  onNavigate(firstChild.children[0].id);
                } else if (firstChild.id) {
                  onNavigate(firstChild.id);
                }
              }
            }}
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
      className={`sidebar ${isDark ? 'dark' : ''} ${isResizing ? 'resizing' : ''} ${isMobileOpen ? 'mobile-open' : ''
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
