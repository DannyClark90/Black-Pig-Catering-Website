import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/Components/Navbar/Navbar";


export const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], variable: '--font-cormarant-garamond', weight: '600'});
export const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat', weight: '400' });

export const metadata = {
  title: "Black Pig Catering",
  description: "Catering by Black Pig",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
