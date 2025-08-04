import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "admin" | "user" | "moderator";
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface UserActions {
  setUser: (user: User) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  updateUser: (updates: Partial<User>) => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,

        setUser: (user) =>
          set(
            { user, isAuthenticated: true, isLoading: false },
            false,
            "setUser"
          ),

        clearUser: () =>
          set(
            { user: null, isAuthenticated: false, isLoading: false },
            false,
            "clearUser"
          ),

        setLoading: (loading) =>
          set({ isLoading: loading }, false, "setLoading"),

        updateUser: (updates) =>
          set(
            (state) => ({
              user: state.user ? { ...state.user, ...updates } : null,
            }),
            false,
            "updateUser"
          ),
      }),
      {
        name: "user-store",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: "user-store",
    }
  )
);