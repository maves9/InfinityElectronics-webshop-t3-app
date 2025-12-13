export type ThemeName = 'default' | 'winter' | 'summer' | 'halloween' | 'christmas' | 'valentines'

export interface Theme {
  name: ThemeName
  displayName: string
  colors: {
    primary: string
    primaryText: string
    secondary: string
    secondaryText: string
    accent: string
    background: string
    foreground: string
    muted: string
    mutedForeground: string
    border: string
    card: string
    cardForeground: string
  }
  layout: {
    heroStyle: 'default' | 'minimal' | 'fullscreen' | 'split'
    productCardStyle: 'default' | 'compact' | 'detailed'
    navigationStyle: 'default' | 'centered' | 'sidebar'
  }
}

export const themes: Record<ThemeName, Theme> = {
  default: {
    name: 'default',
    displayName: 'Default',
    colors: {
      primary: '#2563eb',
      primaryText: '#ffffff',
      secondary: '#64748b',
      secondaryText: '#ffffff',
      accent: '#f59e0b',
      background: '#ffffff',
      foreground: '#0f172a',
      muted: '#f1f5f9',
      mutedForeground: '#64748b',
      border: '#e2e8f0',
      card: '#ffffff',
      cardForeground: '#0f172a',
    },
    layout: {
      heroStyle: 'default',
      productCardStyle: 'default',
      navigationStyle: 'default',
    },
  },
  winter: {
    name: 'winter',
    displayName: 'Winter Wonderland',
    colors: {
      primary: '#0369a1',
      primaryText: '#ffffff',
      secondary: '#475569',
      secondaryText: '#ffffff',
      accent: '#0284c7',
      background: '#f0f9ff',
      foreground: '#0c4a6e',
      muted: '#e0f2fe',
      mutedForeground: '#334155',
      border: '#7dd3fc',
      card: '#ffffff',
      cardForeground: '#0c4a6e',
    },
    layout: {
      heroStyle: 'fullscreen',
      productCardStyle: 'default',
      navigationStyle: 'default',
    },
  },
  summer: {
    name: 'summer',
    displayName: 'Summer Sale',
    colors: {
      primary: '#d97706',
      primaryText: '#ffffff',
      secondary: '#ea580c',
      secondaryText: '#ffffff',
      accent: '#f59e0b',
      background: '#fffbeb',
      foreground: '#78350f',
      muted: '#fef3c7',
      mutedForeground: '#78350f',
      border: '#fbbf24',
      card: '#ffffff',
      cardForeground: '#78350f',
    },
    layout: {
      heroStyle: 'minimal',
      productCardStyle: 'compact',
      navigationStyle: 'centered',
    },
  },
  halloween: {
    name: 'halloween',
    displayName: 'Halloween Spooktacular',
    colors: {
      primary: '#fb923c',
      primaryText: '#1c1917',
      secondary: '#fdba74',
      secondaryText: '#1c1917',
      accent: '#c084fc',
      background: '#1c1917',
      foreground: '#fafaf9',
      muted: '#292524',
      mutedForeground: '#d6d3d1',
      border: '#57534e',
      card: '#292524',
      cardForeground: '#fafaf9',
    },
    layout: {
      heroStyle: 'split',
      productCardStyle: 'detailed',
      navigationStyle: 'default',
    },
  },
  christmas: {
    name: 'christmas',
    displayName: 'Christmas Magic',
    colors: {
      primary: '#b91c1c',
      primaryText: '#ffffff',
      secondary: '#15803d',
      secondaryText: '#ffffff',
      accent: '#d97706',
      background: '#fef2f2',
      foreground: '#7f1d1d',
      muted: '#fee2e2',
      mutedForeground: '#7f1d1d',
      border: '#fca5a5',
      card: '#ffffff',
      cardForeground: '#7f1d1d',
    },
    layout: {
      heroStyle: 'fullscreen',
      productCardStyle: 'detailed',
      navigationStyle: 'centered',
    },
  },
  valentines: {
    name: 'valentines',
    displayName: "Valentine's Day",
    colors: {
      primary: '#be185d',
      primaryText: '#ffffff',
      secondary: '#9f1239',
      secondaryText: '#ffffff',
      accent: '#db2777',
      background: '#fdf2f8',
      foreground: '#831843',
      muted: '#fce7f3',
      mutedForeground: '#831843',
      border: '#f9a8d4',
      card: '#ffffff',
      cardForeground: '#831843',
    },
    layout: {
      heroStyle: 'minimal',
      productCardStyle: 'default',
      navigationStyle: 'centered',
    },
  },
}
