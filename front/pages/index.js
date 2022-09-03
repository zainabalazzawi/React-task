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
      <button onClick={() => addItem(1234)}>add 1234</button>
      {hasItem(1234) && (
        <button onClick={() => removeItem(1234)}>remove 1234</button>
      )}
      <button onClick={() => addItem(5678)}>add 5678</button>
      {hasItem(5678) && (
        <button onClick={() => removeItem(5678)}>remove 5678</button>
      )}
    </div>
  );
}
