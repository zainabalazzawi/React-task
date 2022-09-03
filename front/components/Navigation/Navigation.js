import React from "react";
import Link from "next/link";
import { useStateContext } from "../../state";
const Navigation = () => {
  const { totalItems } = useStateContext();
  return (
    <ul>
      <li>
        <Link href="/"> Home</Link>
      </li>
      <li>
        <Link href="shopping-cart">
          <span>Shopping Cart {totalItems}</span>
        </Link>
      </li>

      <li>
        <Link href="order"> Order</Link>
      </li>
    </ul>
  );
};

export default Navigation;
