import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pinoy Urban Dictionary",
  description: "A dictionary for Filipino slang words",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-[100svh]`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
