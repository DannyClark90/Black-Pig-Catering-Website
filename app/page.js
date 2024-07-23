import Image from "next/image";
import styles from "../css/landing-page.module.css";
import bpCateringLogo from "@/public/Assets/BP_catering_logo.svg";
import bpCafeLogo from "@/public/Assets/BP_cafe_logo.svg";
import Button from "@/Components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles["content-container"]}>
      
      <div className={styles["logo-container"]}>
        <div className={styles["catering-logo"]}>
          <Image
            alt="Back Pig Catering Logo"
            src={bpCateringLogo}
            priority={true}
            fill
            sizes="(max-width: 1400px) 35vw, 16.8vw"
          />
        </div>
        
          <Button text={"Enter"}/>
      </div>

      <div className={styles["logo-container"]}>
        <div className={styles["cafe-logo"]}>
          <Image
            alt="Back Pig Cafe Logo"
            src={bpCafeLogo}
            priority={true}
            fill
            sizes="(max-width: 1400px) 35vw, 23.1vw"
          />
        </div>
        <Link href={"/home"}>
        <Button text={"Enter"} />
        </Link>
      </div>

      </div>
    </main>
  );
}
