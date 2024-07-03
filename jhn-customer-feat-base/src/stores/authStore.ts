import type {} from '@redux-devtools/extension';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type User from '@/types/User';

export interface AuthStore {
    user: User | null;
    authorized: (user: User) => void;
    unauthorized: () => void;
}

export const useAuthStore = create<AuthStore>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                authorized: (user: User) => set({ user }),
                unauthorized: () => set({ user: null }),
            }),
            {
                name: 'auth-storage',
            }
        )
    )
);
