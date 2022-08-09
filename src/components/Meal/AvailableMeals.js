import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dettol",
    description: "Body Soap",
    price: 'Rs.22.99',
  },
  {
    id: "m2",
    name: "Surfexcel Powder",
    description: "Washing Powder",
    price: 'Rs.16.5',
  },
  {
    id: "m3",
    name: "Ponds Beauty Cream",
    description: "Beauty cream for girls",
    price: 'Rs.12.99',
  },
  {
    id: "m4",
    name: "Colgate",
    description: "Toothpaste.",
    price: 'Rs.18.99',
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={styles.meals}>
        {/* <Card> */}
          <ul>{mealsList}</ul>
        {/* </Card>   */}
      </section>
    </>
  );
};

export default AvailableMeals;
