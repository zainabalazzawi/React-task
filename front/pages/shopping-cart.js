import Header from "../components/Header/Header";
import { useStateContext } from "../state";
import { useEffect } from "react";

export default function ShoppingCart() {
  const {
    state: { cart },
    removeItem,
    isEmpty,
    setState,
    state,
  } = useStateContext();

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state) {
      setState(state);
    }
  }, []);
  return (
    <div>
      <Header title="ShoppingCart" />
      <main>ShoppingCart items</main>
      {isEmpty && <div> Your cart is empty.</div>}
      {!isEmpty && (
        <div>
          {Object.entries(cart).map(([id, amount]) => (
            <div key={id}>
              id: {id}, amount: {amount}
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
