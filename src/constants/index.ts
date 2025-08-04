export const APP_CONFIG = {
  name: "Dashboard Boilerplate",
  version: "1.0.0",
  description: "A scalable Next.js dashboard boilerplate",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
    timeout: 10000,
  },
} as const;

export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  auth: {
    login: "/login",
    register: "/register",
    forgot: "/forgot-password",
  },
  dashboard_routes: {
    analytics: "/dashboard/analytics",
    users: "/dashboard/users",
    settings: "/dashboard/settings",
  },
} as const;

export const QUERY_KEYS = {
  dashboard: {
    metrics: ["dashboard", "metrics"] as const,
    users: ["dashboard", "users"] as const,
    analytics: ["dashboard", "analytics"] as const,
  },
  user: {
    profile: ["user", "profile"] as const,
    preferences: ["user", "preferences"] as const,
  },
} as const;

export const LOCAL_STORAGE_KEYS = {
  theme: "dashboard-theme",
  sidebarState: "dashboard-sidebar",
  userPreferences: "user-preferences",
  authToken: "auth_token",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;