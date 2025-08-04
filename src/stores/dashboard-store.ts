import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DashboardState {
  sidebarOpen: boolean;
  theme: "light" | "dark" | "system";
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    type: "info" | "success" | "warning" | "error";
    timestamp: Date;
  }>;
}

interface DashboardActions {
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: DashboardState["theme"]) => void;
  addNotification: (notification: Omit<DashboardState["notifications"][0], "id" | "timestamp">) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

type DashboardStore = DashboardState & DashboardActions;

export const useDashboardStore = create<DashboardStore>()(
  devtools(
    persist(
      (set, get) => ({
        sidebarOpen: true,
        theme: "system",
        notifications: [],

        toggleSidebar: () =>
          set((state) => ({ sidebarOpen: !state.sidebarOpen }), false, "toggleSidebar"),

        setSidebarOpen: (open) =>
          set({ sidebarOpen: open }, false, "setSidebarOpen"),

        setTheme: (theme) =>
          set({ theme }, false, "setTheme"),

        addNotification: (notification) =>
          set(
            (state) => ({
              notifications: [
                ...state.notifications,
                {
                  ...notification,
                  id: crypto.randomUUID(),
                  timestamp: new Date(),
                },
              ],
            }),
            false,
            "addNotification"
          ),

        removeNotification: (id) =>
          set(
            (state) => ({
              notifications: state.notifications.filter((n) => n.id !== id),
            }),
            false,
            "removeNotification"
          ),

        clearNotifications: () =>
          set({ notifications: [] }, false, "clearNotifications"),
      }),
      {
        name: "dashboard-store",
        partialize: (state) => ({
          sidebarOpen: state.sidebarOpen,
          theme: state.theme,
        }),
      }
    ),
    {
      name: "dashboard-store",
    }
  )
);