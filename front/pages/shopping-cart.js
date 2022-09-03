import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import { useStateContext } from "../state";

export default function ShoppingCart() {
  const {
    state: { cart },
    removeItem,
    isEmpty,
  } = useStateContext();
  return (
    <div className={styles.container}>
      <Header title="ShoppingCart" />
      <main className={styles.main}>ShoppingCart items</main>
      {isEmpty && <div> Your cart is empty.</div>}
      {!isEmpty && (
        <div>
          {Object.entries(cart).map(([id, amount]) => (
            <div>
              {" "}
              id: {id}, amount: {amount}{" "}
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// {
//   shoppingCart.length > 0 && (
//     <div>
//       {shoppingCart.map((book) => (
//         <div key={book.id}>{book.title}</div>
//       ))}
//     </div>
//   );
// }
