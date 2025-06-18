import "./globals.css";
import { Playfair_Display, Nunito_Sans as Nunito } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-nunito",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  weight: "400",
  variable: "--font-playfair",
  preload: true,
});

export const metadata = {
  title: "NAAMA UCR",
  description:
    "An inclusive organization that advocates for Arab American healthcare professionals while promoting their professional development and cultural identity through education, philanthropy, and service.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-naama-blue-200 flex flex-col overflow-x-hidden ${playfair.variable} ${nunito.variable}`}
      >
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
