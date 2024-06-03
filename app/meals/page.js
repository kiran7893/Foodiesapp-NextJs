import Link from "next/link";
import styles from "./page.module.css";
import MaealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MaealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your recipe to cook..!</p>
        <p className={styles.cta}>
          <Link href="meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching Meals....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
