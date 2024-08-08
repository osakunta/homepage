import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import sato_logo_nav from "../public/sato_logo_nav.png";
import Sidebar from "./Sidebar";

interface NavbarProps {
  navData: CMSData;
}

const Navbar = ({ navData }: NavbarProps) => {
  useEffect(() => {
    // Scroll to hide header
    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
      const currentScrollpos = window.scrollY;
      const navWrapper = document.getElementById("navContainer");
      if (navWrapper) {
        if (prevScrollpos > currentScrollpos) {
          navWrapper.style.top = "0";
        } else {
          navWrapper.style.top = "-10rem";
          navWrapper.style.transition = "0.3s ease";
        }
      }
      prevScrollpos = currentScrollpos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.navContainer} id="navContainer">
      <nav id="navbar" className={styles.navbar}>
        <Link href="/">
          <Image
            src={sato_logo_nav}
            alt="A nav link to the home page"
            width={120}
          />
        </Link>
        <Sidebar navData={navData} />
      </nav>
    </div>
  );
};

export default Navbar;
