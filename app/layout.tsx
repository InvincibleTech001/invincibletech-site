import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "InvincibleTech",
    template: "%s | InvincibleTech",
  },

  description:
    "Software Engineering, Data Intelligence, Artificial Intelligence, Automation and Digital Solutions.",

  keywords: [
    "Software Development",
    "Data Analytics",
    "Artificial Intelligence",
    "Automation",
    "Power BI",
    "Python",
    "Next.js",
    "React",
    "InvincibleTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}