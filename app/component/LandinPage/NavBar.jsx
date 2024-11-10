"use client";
import Link from 'next/link';
import Image from 'next/image'; // Importing Next.js Image component
import styles from "./index.module.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMenu = () => {
    setShowNavbar((prevState) => !prevState);
  };

  const [affix, setAffix] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setAffix(true);
    } else {
      setAffix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`p-3 lg:p-4 ${styles.header} ${affix ? styles.affix : ''}`} >
        <div className="container mx-auto px-4 py-2 lg:py-3 lg:px-8">
          <nav className={styles.navbar}>
            <div>
              <Image 
                src="/images/cohvey-logo.svg" 
                alt="Cohvey Logo" 
                width={90} // Adjust width based on your design requirements
                height={40} // Adjust height based on your design requirements
              />
            </div>
            <div
              className={`${styles["navbar-collapse"]} ${showNavbar ? styles.show : ""}`}
            >
              {showNavbar && (
                <div
                  className={`cursor-pointer ml-6 mb-4 lg:none ${styles.position}`}
                  onClick={handleMenu}
                >
                  <Image 
                    src="/images/icons/icons8-close.svg" 
                    alt="Close Menu Icon"
                    width={24} // Adjust dimensions as needed
                    height={24} // Adjust dimensions as needed
                  />
                </div>
              )}
              <ul
                className={`${styles["navbar-nav"]} lg:flex items-center mx-auto`}
              >
                <li>
                  <Link href="/" className={styles["nav-link"]}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={styles["nav-link"]}>
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Creator
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button className={`${styles.btn}`}>
                Join as a creator
              </button>
              <button
                className={`relative overflow-hidden rounded-[20px] font-semibold text-black text-lg flex items-center justify-center px-3 py-3 border-[1px] border-[#FCFCD80F] ${styles.btn}`}
              >
                <span className="relative z-10">Join Waitlist</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 -z-10 rounded-[20px] blur-lg"></span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
