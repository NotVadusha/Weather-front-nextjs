import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeRegistry from "../ThemeRegistry";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather today",
  description: "Weather app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeRegistry options={{ key: "mui-theme" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
