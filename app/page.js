import Image from "next/image";
import styles from "../css/page.module.css";
import bpCateringLogo from "../Assets/BP_catering_logo.svg";
import bpCafeLogo from "../Assets/BP_cafe_logo.svg";
import Button from "@/Components/Button";

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
            fill={true}
            sizes="(max-width: 1400px) 35vw, 16.8vw"
          />
        </div>
        <div className={styles.button}>
          <Button text={"Enter"} />
        </div> 
      </div>

      <div className={styles["logo-container"]}>
        <div className={styles["cafe-logo"]}>
          <Image
            alt="Back Pig Cafe Logo"
            src={bpCafeLogo}
            priority={true}
            fill={true}
            sizes="(max-width: 1400px) 35vw, 23.1vw"
          />
        </div>
        <Button text={"Enter"} /> 
      </div>

      </div>
    </main>
  );
}
