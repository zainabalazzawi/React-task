import styles from "../styles/Home.module.css";
import Books from "../components/Books/Books";
import Header from "../components/Header/Header";
import { useStateContext } from "../state";

export default function Home() {
  const { addItem, removeItem, listItems, hasItem } = useStateContext();

  return (
    <div className={styles.container}>
      <Header title="Books" />
      <main className={styles.main}></main>
      <Books addItem={addItem} removeItem={removeItem} hasItem={hasItem} />
    </div>
  );
}
