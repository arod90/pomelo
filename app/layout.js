import "./globals.css";
import { Rubik, Sacramento, Yellowtail } from "next/font/google";
import { CurtainProvider } from "./CurtainProvider";

// Self-hosted via next/font — no external request, no layout shift.
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
  display: "swap",
});
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
  display: "swap",
});
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

const title = "Pomelo — Brunch & café de especialidad";
const description =
  "Pomelo es un brunch y café de especialidad en el corazón de la ciudad: recetas frescas de temporada, café de especialidad y un rincón cálido para tomárselo con calma.";

export const metadata = {
  title,
  description,
  applicationName: "Pomelo",
  keywords: ["Pomelo", "brunch", "café de especialidad", "cafetería", "Madrid", "coffee", "specialty coffee", "restaurante"],
  openGraph: { title, description, type: "website", locale: "es_ES", siteName: "Pomelo" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8e7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${rubik.variable} ${sacramento.variable} ${yellowtail.variable}`}>
      <body>
        <CurtainProvider>{children}</CurtainProvider>
      </body>
    </html>
  );
}
