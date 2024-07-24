import styles from "@/css/mobile-nav.module.css";
import Link from "next/link";

export default function MobileNav({ navLinks, isOpen, toggleNav}) {
  return (
      <ul className={isOpen? styles["mobile-nav__open"] : styles["mobile-nav__closed"]}>
        {navLinks.map((link) => {
          return (
            <li  onClick={toggleNav}>
              <Link href={link.link}>
                <h3 className={styles["mobile-nav__link"]}>{link.linkName}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
  );
}
