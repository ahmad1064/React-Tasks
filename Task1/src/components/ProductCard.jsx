import React from 'react'

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="bg-white w-64 p-5 rounded-xl shadow-lg hover:scale-105 transition duration-300 text-center">
      <img 
      src={product.image} 
      alt={product.name}
      className="w-32 h-32 mx-auto object-cover rounded-md"
 />

 <h2 className="text-xl font-bold mt-4">
    {product.name}
 </h2>

 <p className="text-gray-600 mt-2">
    {product.price}
 </p>

 <button
  onClick={onAdd}
 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
 >
    Add to Cart
 </button>
    </div>
  )
}

export default ProductCard
