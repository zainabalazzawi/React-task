import Books from "../components/Books/Books";
import Header from "../components/Header/Header";
import { useStateContext } from "../state";

export default function Home() {
  const { addItem, removeItem, listItems, hasItem } = useStateContext();

  return (
    <div>
      <Header title="Books" />
      <main className="text-neutral-900 p-8 ">
        <Books addItem={addItem} removeItem={removeItem} hasItem={hasItem} />
      </main>
    </div>
  );
}
