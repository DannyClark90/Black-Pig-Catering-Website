"use client";
import styles from "@/css/navbar.module.css";
import logo from "@/public/Assets/BP_cafe_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      id: 1,
      linkName: "Home",
      link: "/home",
    },
    {
      id: 2,
      linkName: "Menus",
      link: "/menus",
    },
    {
      id: 3,
      linkName: "Private Hire",
      link: "/private-hire",
    },
    {
      id: 4,
      linkName: "What's On",
      link: "/whats-on",
    },
    {
      id: 5,
      linkName: "Book",
      link: "/book",
    },
    {
      id: 6,
      linkName: "Gift Vouchers",
      link: "https://squareup.com/gift/ML69QV5K93ST6/order",
    },
    {
      id: 7,
      linkName: "Contact & Hours",
      link: "/contact",
    },
  ];
  return (
    <nav className={styles["navbar"]}>
      
      <div className={styles["navbar__contents"]}>
        <div className={styles["navbar__logo"]}>
          <Image alt="Gold Black Pig Cafe Logo" src={logo} fill />
        </div>
        <ul className={styles["navbar__links"]}>
          {navLinks.map((link) => {
            return (
              <li>
                <Link href={link.link}>
                  <h3 className={styles["navbar__link"]}>{link.linkName}</h3>
                </Link>
              </li>
            );
          })}
        </ul>

        {isOpen ? 
          <FaTimes className={styles["navbar__icon"]} onClick={toggleNav} />
         : 
          <FaBars className={styles["navbar__icon"]} onClick={toggleNav} />
        }
      </div>

      <MobileNav navLinks={navLinks} isOpen={isOpen}/>
    </nav>
  );
}
