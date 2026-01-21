import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="pt-40 text-center text-xl font-semibold">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="pt-40 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border rounded-lg p-4"
          >
            {/* LEFT: Image + Info */}
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex flex-col">
                {/* FIX 1: Name wrapping */}
                <h3 className="text-lg font-semibold wrap-break-words whitespace-normal sm:whitespace-nowrap">
                  {item.name}
                </h3>

                <span className="text-sm text-gray-600">Size: {item.size}</span>

                <span className="text-red-700 font-bold mt-1">
                  £{item.price.toFixed(2)}
                </span>
              </div>
            </div>

            {/* RIGHT: Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  className="border px-3 py-1 rounded text-lg"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  −
                </button>

                <span className="min-w-6 text-center">{item.qty}</span>

                <button
                  className="border px-3 py-1 rounded text-lg"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                className="text-red-600 font-semibold hover:underline"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="flex justify-end mt-8">
        <div className="text-xl font-bold">Total: £{totalPrice}</div>
      </div>
    </div>
  );
}

export default Cart;
