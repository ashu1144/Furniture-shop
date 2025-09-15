import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const { products } = useSelector((state) => state.products);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    
    if (!query) {
      navigate('/Furniture-shop/');
      return;
    }
    
    // Filter products based on search query
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category?.toLowerCase().includes(query.toLowerCase()) ||
      product.description?.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filteredProducts);
  }, [location.search, products, navigate]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
      
      {searchResults.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No products found matching your search.</p>
          <button 
            onClick={() => navigate('/Furniture-shop/')}
            className="mt-4 bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            Back to Home
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((product, index) => (
            <ProductCard key={product.id || index} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;