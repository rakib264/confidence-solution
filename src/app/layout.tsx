import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Montserrat,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import {
  AppProviders,
  PageTransition,
  SmoothScroll,
} from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Confidence Solution LTD. | Building Tomorrow's Skyline, Today",
  description:
    "Confidence Solution LTD. is a Dhanmondi-based residential real estate developer in Dhaka.",
};

const initThemeScript = `
(() => {
  const raw = localStorage.getItem("confidence-theme");
  if (!raw) return;
  try {
    const theme = JSON.parse(raw);
    const root = document.documentElement;
    root.classList.remove("dark");
    if (theme.primary) root.style.setProperty("--primary", theme.primary);
    if (theme.accent) root.style.setProperty("--accent", theme.accent);
    if (theme.radius) root.style.setProperty("--radius", theme.radius + "rem");
    if (theme.fontPreference) {
      root.style.setProperty(
        "--font-sans",
        theme.fontPreference === "sans"
          ? "var(--font-plus-jakarta)"
          : "var(--font-playfair)",
      );
    }
    if (theme.backgroundLightness) {
      root.style.setProperty("--background", "oklch(" + theme.backgroundLightness + " 0.005 240)");
    }
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
        <AppProviders>
          <SmoothScroll>
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </SmoothScroll>
        </AppProviders>
      </body>
    </html>
  );
}
