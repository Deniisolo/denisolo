import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/_components/molecules/navbar";

export const metadata: Metadata = {
  title: "Denis Alvarez",
  description: "Portafolio personal de Denis Alvarez",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        <main className="flex min-h-[91.5vh] w-full flex-col">{children}</main>
      </body>
    </html>
  );
}
