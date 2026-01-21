import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="bg-white z-50 shadow-lg fixed top-0 w-full pt-2 md:pt-4 md:py-4">
      <div className="flex justify-between items-center mx-1 md:mx-4">
        <a className="flex justify-center" href="/">
          <img
            src="/images/Logo.webp"
            className="bg-white lg:hidden"
            width={40}
            height={37}
            alt="logo"
          />
        </a>

        <ul className="lg:hidden flex gap-4 items-center">
          <li className="px-2 py-1 text-white font-semibold bg-red-800 rounded-md flex items-center text-xs">
            <a href="#">Login/SignUp</a>
          </li>

          <Link to="/cart">
            <button className="flex items-center text-base hover:cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-slate-700"
                aria-label="Cart"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
              </svg>

              <span className="bg-red-800 text-sm text-white rounded-full px-1.5 py-px mx-2">
                {totalQty}
              </span>

              <span className="text-red-800 font-semibold">
                <span className="text-sm">£ </span>
                {totalPrice}
              </span>
            </button>
          </Link>
        </ul>
      </div>

      <div className="bg-white flex flex-col lg:flex-row justify-between lg:items-center lg:px-10">
        <a
          href="/"
          className="hidden lg:flex lg:flex-col justify-center h-full"
        >
          <img src="/images/Logo.webp" alt="logo" width={80} height={80} />
        </a>

        <ul className="flex lg:pt-0 flex-wrap items-center justify-around text-base sm:text-lg text-white font-semibold xl:gap-10 hover:cursor-pointer">
          {["Deals", "Pizzas", "Sides", "Desserts", "Dips"].map((item) => (
            <Link to="/">
              <li
                key={item}
                className="py-2 px-1 mt-2 lg:mt-0 lg:px-5 lg:h-14 flex items-center text-green-800 transition duration-300 font-bold bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b] lg:hover:underline lg:hover:underline-offset-28 lg:hover:decoration-4"
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <li className="hidden lg:flex px-2 font-normal hover:bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md hover:text-red-800 text-white bg-red-800 items-center text-lg">
            <a href="#">Login / Signup</a>
          </li>

          <Link to="/cart">
            <button className="hidden text-black lg:flex items-center text-lg hover:cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                aria-label="Cart"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M216,66H174V64a46,46,0,0,0-92,0v2H40A14,14,0,0,0,26,80V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM94,64a34,34,0,0,1,68,0v2H94ZM218,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H82V96a6,6,0,0,0,12,0V78h68V96a6,6,0,0,0,12,0V78h42a2,2,0,0,1,2,2Z" />
              </svg>

              <span className="bg-red-800 hover:bg-red-700 text-white rounded-full px-2 mx-2">
                {totalQty}
              </span>

              <span className="text-red-600 hover:text-red-800 font-semibold">
                £ {totalPrice}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
