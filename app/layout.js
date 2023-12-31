import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vroom Location de voitures",
  description: "Projet développé par Dylann Xavero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`min-h-[100vh] text-slate-800 bg-indigo-50 flex flex-col items-center ${inter.className}`}
      >
        <div className="container flex flex-col grow max-w-7xl h-full px-4 sm:px-10 relative">
          <Header />
          <div className="min-h-full flex flex-col justify-center">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
