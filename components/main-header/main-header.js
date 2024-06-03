import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainBackground from "./main-background";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <MainBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="plate full of food" priority />
          Nextlevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
