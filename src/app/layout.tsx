import "./globals.css";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--playfair-font",
  preload: true,
});

export const metadata = {
  title: "NAAMA Nextgen @ UCR",
  description: "UCR Chapter of NAAMA Nextgen",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${nunito.className}`}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
