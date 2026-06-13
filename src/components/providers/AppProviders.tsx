"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { makeStore, useAppDispatch, useAppSelector } from "@/lib/store";
import { Toaster } from "sonner";
import { ThemeState } from "@/lib/types";
import { hydrateTheme } from "@/lib/store/themeSlice";

const STORAGE_KEY = "confidence-theme";

function ThemeRuntime() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  const hydrated = useRef(false);

  useEffect(() => {
    if (hydrated.current) return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as ThemeState;
        dispatch(hydrateTheme(parsed));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    hydrated.current = true;
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--radius", `${theme.radius}rem`);
    root.style.setProperty("--font-sans", theme.fontPreference === "sans" ? "var(--font-montserrat)" : "var(--font-merriweather)");
    root.style.setProperty("--background", `oklch(${theme.backgroundLightness} 0.005 240)`);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  }, [theme]);

  return null;
}

export function AppProviders({ children }: PropsWithChildren) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <ThemeRuntime />
      {children}
      <Toaster position="top-right" richColors />
    </Provider>
  );
}
