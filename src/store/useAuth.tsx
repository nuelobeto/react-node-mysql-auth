import { create } from "zustand";
import { AuthT, UserT } from "../types/types";
import authServices from "../services/authServices";
import { toast } from "react-toastify";

type UserStateT = {
  user: null | UserT;
  loading: boolean;
  success: boolean;
  register: (payload: AuthT) => void;
  login: (payload: AuthT) => void;
  googleAuth: (email: string) => void;
  logout: () => void;
  forgotPassword: (email: string) => void;
  resetPassword: (password: string, userId: string) => void;
  resetAuth: () => void;
};

const savedUser: string | null = localStorage.getItem("user");
const parsedUser: UserT | undefined = savedUser
  ? JSON.parse(savedUser)
  : undefined;

const useAuth = create<UserStateT>((set) => ({
  user: parsedUser ? parsedUser : null,
  loading: false,
  success: false,

  register: async (payload: AuthT) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      await authServices.register(payload);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ success: (state.success = true) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.error);
    }
  },

  login: async (payload: AuthT) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      const user = await authServices.login(payload);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ success: (state.success = true) }));
      set((state) => ({ user: (state.user = user) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.error);
    }
  },

  forgotPassword: async (email: string) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      await authServices.forgotPassword(email);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ success: (state.success = true) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.error);
    }
  },

  resetPassword: async (password: string, userId: string) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      await authServices.resetPassword(password, userId);
      set((state) => ({ loading: (state.loading = false) }));
      set((state) => ({ success: (state.success = true) }));
    } catch (error: any) {
      set((state) => ({ loading: (state.loading = false) }));
      toast.error(error.response.data.error);
    }
  },

  googleAuth: async (email: string) => {
    try {
      const user = await authServices.googleAuth(email);

      set((state) => ({ user: (state.user = user) }));
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  },

  logout: async () => {
    authServices.logout();
    set((state) => ({ user: (state.user = null) }));
  },

  resetAuth: () => {
    set((state) => ({ loading: (state.loading = false) }));
    set((state) => ({ success: (state.success = false) }));
  },
}));

export default useAuth;
