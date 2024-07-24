import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/Components/Navbar/Navbar";

export const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], variable: '--font-cormarant-garamond', weight: '600'});
export const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat', weight: '400' });

export default function NavLayout({ children }) {
  return (
      <body className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
        <Navbar/>
        {children}
      </body>
  );
}
