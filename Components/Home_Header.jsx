import styles from "../css/header.module.css";
import Image from "next/image";
import logo from "@/Assets/BP_cafe_logo.svg";
import heroImage from "@/Assets/Private_Hire/6.webp"
import Button from "./Button";

export default function Home_Header() {
  return (
    <header className={styles["header__container"]}>
      <div className={styles["header__gradient"]}>
      </div>
      <div className={styles["header__hero"]}>
        <Image
        alt="Long table dressed & set for large group."
        src={heroImage}
        fill
        objectFit="cover"
        priority={true}
        placeholder="blur" 
        sizes="(max-width: 1400px) 40vw, 26.4vw"
        />
        </div>
      
      <div className={styles["header__logo"]}>
        <Image
          alt="Back Pig Cafe Logo"
          src={logo}
          fill
          priority={true}
          sizes="(max-width: 1400px) 40vw, 26.4vw"
        />
      </div>

      <div className={styles["header__button-container"]}>
        <Button text={"View Menus"}/>
        <Button text={"Book A Table"}/>
      </div>
    </header>
  );
}
