import React from "react";

const CartSummary = ({ cartCount }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Cart Summary</h2>

      {cartCount === 0 ? (
        <p className="text-red-500 mt-3">Cart is empty</p>
      ) : (
        <p className="text-green-600 mt-3">
          You have {cartCount} items in cart
        </p>
      )}
    </div>
  );
};

export default CartSummary;