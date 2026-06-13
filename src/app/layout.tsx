import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Merriweather, Montserrat, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Confidence Solution LTD. | Premium Real Estate & Construction",
  description:
    "Confidence Solution LTD. delivers premium real estate development and construction services across Saudi Arabia and the wider GCC.",
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
      root.style.setProperty("--font-sans", theme.fontPreference === "sans" ? "var(--font-montserrat)" : "var(--font-merriweather)");
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
      className={`${montserrat.variable} ${merriweather.variable} ${ubuntuMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
        <AppProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
