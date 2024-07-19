import Image from "next/image";
import styles from "../css/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <p>Test Paragraph</p>
    </main>
  );
}
