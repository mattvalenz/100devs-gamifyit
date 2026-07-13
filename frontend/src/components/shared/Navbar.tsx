"use client";

import { useState } from "react";
import styles from "../landing/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <>
  
  <nav className={styles.navbar}>

    <div className={styles.left}>

            <Image
      src="/icons/logo-icon.svg"
      alt="NexQuest logo"
      width={40}
      height={40}
      className={styles.logoicon}

        />
        
        <h1 className={styles.logoname}>NexQuest</h1>

    </div>

    <div className={styles.right}>

<div className={styles.links}>

            <Link href="/home">Home</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/shop">Shop</Link>

              </div>

            <Link href="/signin" className={styles.signin}>Login</Link>

    </div>

            {/* Mobile button */}

            <button 
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            >
              <Image
              src="/icons/burger-menu.svg"
              alt="mobile menu button"
              width={40}
              height={40}
              className={styles.mobileButtonImage}>

              </Image>
            </button>

            {/* Mobile menu */}

            {isOpen && (
              <div className={styles.mobileMenu}>
                <a href="/login">Login</a>
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a>
              </div>
            )}
  </nav>
  
  </>
}