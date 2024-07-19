import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const Cormorant_Garamond = Cormorant_Garamond({ subsets: ["latin"] });
const Montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Black Pig Catering",
  description: "Catering by Black Pig",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
