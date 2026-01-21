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
      <div className="text-center py-20 text-xl font-semibold">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-md"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="font-bold text-red-800">£{item.price}</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-3 py-1 border rounded"
              >
                −
              </button>

              <span className="font-semibold">{item.qty}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 border rounded"
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-600 font-semibold"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-right mt-8 text-2xl font-bold">
        Total: £{totalPrice}
      </div>
    </div>
  );
}

export default Cart;
