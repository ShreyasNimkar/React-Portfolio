import { useState, useEffect } from "react";
import styles from "../styles/NavbarFooter.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navlinks = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(router.asPath);
  }, [router.asPath]);

  return (
    <>
      <div className={styles.navlinks}>
        <Link href="/">
          <a
            style={{
              opacity:
                activeLink === "/" || activeLink === "/#work" ? "100%" : "80%",
            }}
          >
            Home
          </a>
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/#about">
          <a style={{ opacity: activeLink === "/#about" ? "100%" : "80%" }}>
            About
          </a>
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link href="/#Skills">
          <a style={{ opacity: activeLink === "/#Skills" ? "100%" : "80%" }}>
            Skills
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navlinks;
