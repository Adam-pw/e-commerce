import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={styles.card}>{props.childern}</div>;
};

export default Card;
