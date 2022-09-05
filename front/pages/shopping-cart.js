import Header from "../components/Header/Header";
import { useStateContext } from "../state";
import { useEffect } from "react";

export default function ShoppingCart() {
  const {
    state: { cart },
    removeItem,
    isEmpty,
  } = useStateContext();

  return (
    <div className="bg-yellow-50">
      <Header title="ShoppingCart" />
      <main className="inline-grid grid-rows-[0fr,0.7fr,0fr] gap-2 p-8  pl-10 w-full justify-items-center h-screen">
        <div className="text-lg pl-6 justify-self-start text-green-900">
          ShoppingCart items
        </div>

        <div className="w-full rounded-md inline-grid justify-items-start items-start">
          {isEmpty && (
            <div className="justify-self-center self-center text-green-900">
              {" "}
              Your cart is empty.
            </div>
          )}
          {!isEmpty && (
            <div className="inline-grid grid-cols-1 gap-4 pl-4 ">
              {Object.entries(cart).map(([id, amount]) => (
                <div
                  key={id}
                  className="bg-lime-800 text-green-100 p-4 rounded-md  "
                >
                  id: {id}, amount: {amount} {""}
                  <button
                    className="bg-yellow-100 px-4 text-lime-800 rounded-md"
                    onClick={() => removeItem(id)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="bg-green-800 text-yellow-100 py-3 px-9 justify-self-end rounded-md mr-6">
          Next
        </button>
      </main>
    </div>
  );
}
