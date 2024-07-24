import styles from "@/css/eat-and-drink.module.css";
import Gallery from "./Gallery";

export default function Eat_And_Drink() {
  return (
    <section className={styles["eat-and-drink"]}>
      <div className={styles["eat-and-drink__body"]}>
        <h2>Eat & Drink</h2>
        <p>
          We pride ourselves on sourcing authentic produce directly from the
          best local farms and fishermen, ensuring every meal bursts with fresh,
          robust flavours. Experience the perfect blend of gourmet
          sophistication and homely warmth as you indulge in our carefully
          curated menu, designed to celebrate the rich bounty of our region.
        </p>
      </div>
      <Gallery />
    </section>
  );
}
