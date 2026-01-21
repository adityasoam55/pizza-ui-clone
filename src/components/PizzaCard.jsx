import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  const [selectedPrice, setSelectedPrice] = useState(pizza.priceSection?.[0]);

  return (
    <div className="flex relative flex-col justify-between bg-white rounded-md max-w-68 2xl:max-w-xs w-full shadow-lg mb-10">
      {/* Image */}
      <div>
        <img
          src={pizza.banner}
          alt={pizza.pizzaName}
          className="h-52 w-full rounded-t-md object-cover"
        />
      </div>

      {/* Veg Icon */}
      <div className="flex absolute justify-end w-full">
        <div className="rounded-md w-6 h-6 border-2 flex justify-center items-center bg-white border-green-600">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-green-600"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="h-full px-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold mb-1">
            {pizza.pizzaName}
            <div className="text-red-800">(20% Off on Collection)</div>
          </h3>

          <p className="text-sm font-semibold text-gray-500 mb-4 whitespace-wrap overflow-hidden">
            {[...pizza.vegetarianToppingsName, ...pizza.sauceName].join(", ")}
          </p>
        </div>
      </div>

      {/* Price + Actions */}
      <div className="mt-3 mb-1">
        <div>
          <select
            className="border-2 mx-auto p-2 w-full"
            value={selectedPrice?._id}
            onChange={(e) => {
              const selected = pizza.priceSection.find(
                (item) => item._id === e.target.value,
              );
              setSelectedPrice(selected);
            }}
          >
            {pizza.priceSection?.map((item) => (
              <option
                key={item._id}
                value={item._id} // ✅ FIX: use priceSection._id
                data-label={`${item.size?.name}-${item.price}`}
              >
                {item.size?.name} £ {item.price}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 items-center mt-2 px-2">
          <a href="/menu/product/customisePizza">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-800 hover:text-red-800"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              <path d="M16 5l3 3" />
            </svg>
          </a>

          <div className="bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center w-full">
            <button
              className="text-center rounded-lg w-full p-2 text-white"
              type="button"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: `${pizza._id}-${selectedPrice._id}`, // unique per size
                    name: pizza.pizzaName,
                    price: selectedPrice.price,
                    size: selectedPrice.size?.name,
                    image: pizza.banner,
                  }),
                )
              }
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
