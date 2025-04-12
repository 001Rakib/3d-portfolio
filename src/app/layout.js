import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rakib's Portfolio",
  description: "Web Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
