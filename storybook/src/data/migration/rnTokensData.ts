export const RN_TOKENS_DATA = {
  stats: {
    paperParity: {
      pct: "95.2%",
      label: "RN Paper (MD3) Parity",
      text: "38 of 42 UX4G components map 1:1 with Material Design 3."
    },
    rneParity: {
      pct: "90.5%",
      label: "RN Elements (RNEUI) Parity",
      text: "36 of 42 components map directly with standard React Native props."
    },
    a11yCompliance: {
      pct: "100%",
      label: "WCAG 2.1 AA Compliance",
      text: "Government-grade contrast ratio and 48px minimum touch targets."
    },
    crossPlatform: {
      pct: "100%",
      label: "Web & Flutter Parity",
      text: "Same token design taxonomy across React Native, Flutter, and Web."
    }
  },
  colorTokens: [
    { token: "colors.primary", paper: "colors.primary", hex: "#004085", role: "Main brand action & primary navigation" },
    { token: "colors.secondary", paper: "colors.secondary", hex: "#384860", role: "Supporting UI surfaces & subtle actions" },
    { token: "colors.success", paper: "colors.tertiary", hex: "#155724", role: "Application approved, verified, completed" },
    { token: "colors.error", paper: "colors.error", hex: "#721C24", role: "Validation failure, error status, rejected" },
    { token: "colors.warning", paper: "custom warning", hex: "#856404", role: "Action required, pending verification" },
    { token: "colors.info", paper: "colors.primaryContainer", hex: "#0C5460", role: "Help tips, informative callouts" },
    { token: "colors.neutral", paper: "colors.outline", hex: "#6C757D", role: "Dividers, disabled states, borders" }
  ],
  typeScale: [
    { level: "Header H1", fontSize: "36px", lineHeight: "44px", weight: "700 Bold", usage: "Main screen & document title" },
    { level: "Header H2", fontSize: "28px", lineHeight: "36px", weight: "700 Bold", usage: "Section headings" },
    { level: "Header H3", fontSize: "22px", lineHeight: "28px", weight: "600 SemiBold", usage: "Card & Modal headers" },
    { level: "Body Large", fontSize: "16px", lineHeight: "24px", weight: "400 Regular", usage: "Primary paragraph text" },
    { level: "Body Medium", fontSize: "14px", lineHeight: "20px", weight: "400 Regular", usage: "Standard form labels & text" },
    { level: "Label Small", fontSize: "12px", lineHeight: "16px", weight: "500 Medium", usage: "Badges, helper text, captions" }
  ],
  spacingScale: [
    { token: "spacing.xs", px: "4px", usage: "Tight icon and badge padding" },
    { token: "spacing.sm", px: "8px", usage: "Component internal gap & compact margins" },
    { token: "spacing.md", px: "16px", usage: "Standard screen padding & input gap" },
    { token: "spacing.lg", px: "24px", usage: "Card margins and section dividers" },
    { token: "spacing.xl", px: "32px", usage: "Screen top/bottom gutters" }
  ]
};
