import React, { useState } from 'react';
import './Home.css';

// 1. Defined inline to prevent "products is not defined" error
const products = [
  {
    id: 1,
    name: "Aura Wireless Headphones",
    category: "Electronics",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Wireless over-ear headphones with active noise cancellation and 30-hour battery life."
  },
  {
    id: 2,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 129.50,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    description: "Tactile RGB mechanical keyboard with custom switches and hot-swappable keys."
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.00,
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500",
    description: "Breathable mesh chair with adjustable lumbar support and 3D armrests."
  },
  {
    id: 4,
    name: "Solid Oak Desk",
    category: "Furniture",
    price: 380.00,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500",
    description: "Sustainably sourced hardwood desk with integrated cable management."
  },
  {
    id: 5,
    name: "Classic Denim Jacket",
    category: "Apparel",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description: "Vintage-washed denim outerwear featuring reinforced stitching and inner pockets."
  },
  {
    id: 6,
    name: "Lightweight Running Shoes",
    category: "Apparel",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Road running shoes with responsive foam cushioning and high-traction soles."
  },
  {
    id: 7,
    name: "4K Ultra-HD Monitor",
    category: "Electronics",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    description: "27-inch IPS screen with 99% sRGB color gamut and USB-C connectivity."
  },
  {
    id: 8,
    name: "Organic Cotton Hoodie",
    category: "Apparel",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500",
    description: "Heavyweight 100% organic cotton fleece hoodie designed for maximum comfort."
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(400);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="home-container">
      {/* Original welcome header */}
      <div>
        <h1>Welcome to MyStore</h1>
        <p>Discover amazing products at great prices!</p>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Apparel">Apparel</option>
        </select>

        <div className="price-slider">
          <label>Max Price: <strong>${maxPrice}</strong></label>
          <input
            type="range"
            min="50"
            max="400"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <span className="category-tag">{product.category}</span>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="card-footer">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="empty-msg">No products found matching your current filters.</p>
      )}
    </div>
  );
}