import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahmoud El-Zayat",
  description: "Mahmoud El-Zayat — Data Analyst. Power BI, SQL, Python and Excel dashboards for retail, real estate, automotive and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-brand-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>

    </html>
  );
}
