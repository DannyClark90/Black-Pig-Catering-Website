import "../globals.css";
import Navbar from "@/Components/Navbar/Navbar";

export default function NavLayout({ children }) {
  return (
      <body>
        <Navbar/>
        {children}
      </body>
  );
}
