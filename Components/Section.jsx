"use client";
import { useEffect } from "react";
import styles from "@/css/section.module.css";
import { useState } from "react";
import Section_Image from "./Section_Image";

export default function Section({ index, title, body }) {
  const [alignment, setAlignment] = useState("");

  useEffect(() => {
    if (index % 2 === 1) {
      setAlignment("section__container--left-aligned");
    } else {
      setAlignment("section__container--right-aligned");
    }
  }, [index]);

  return (
    <section className={styles[alignment]}>
      <Section_Image
        src={"/Assets/Restaurant_Shots/1.webp"}
        alt={
          "Restaurant at night with festoon lights outside and a glowing firepit in the foreground."
        }
      />
      <div className={styles["section__content"]}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
