import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Providers } from "../components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "binchoi projects",
  description: "프론트엔드 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
