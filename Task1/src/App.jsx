import React, { useState } from 'react'
import ProductCard from './components/ProductCard';
import CartSummary from './components/CartSummary';

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 45000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbBsxPt1Tt8z6DOcYGi1InL5VSFD52Xpihg&s"
        }, 
        {
            id: 2,
            name: "Watch",
            price: 1000,
            image: "https://img.drz.lazcdn.com/static/pk/p/ae7da9120983d33640a0512e66d427c5.jpg_720x720q80.jpg"
        },
        {
            id: 3,
            name: "Headphone",
            price: 5500,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndMcJW71HLgi9ntgoterJiJJjLxbtOVVpyA&s"
        },
    ];

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <CartSummary cartCount={cartCount}/>

      <div className="flex gap-6 flex-wrap justify-center mt-6">
        {products.map((product) => (
            <ProductCard 
            key={product.id}
            product={product}
            onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}

export default App
