import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";
export default function MaealsGrid({ meals }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meals} />
        </li>
      ))}
    </ul>
  );
}
