import Image from "next/image"
import styles from "@/css/section-image.module.css"

export default function Section_Image({src, alt}) {
  return (
    <div className={styles["section-image__container"]}>
        <Image
          src={src}
          alt={alt}
          fill
          objectFit="cover"
          sizes="(max-width: 1400px) 54vw, 54vh"
        />
    </div>
  )
}
