import React from "react";
import Link from "next/link";
import { useStateContext } from "../../state";
const Navigation = () => {
  const { totalItems } = useStateContext();
  return (
    <div className="bg-teal-900 inline-grid  text-amber-50 p-5 w-full justify-items-end">
      <ul className="inline-grid grid-cols-3 gap-4 justify-items-center font-medium ">
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="shopping-cart">
            <span>Shopping Cart {totalItems}</span>
          </Link>
        </li>

        <li>
          <Link href="orders"> Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
