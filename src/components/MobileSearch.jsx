import React, { useState, useEffect, useRef } from 'react'
import { important } from '../Constant'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MobileSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Furniture-shop/search?q=${searchQuery}`);
      setShowSuggestions(false);
    }
  }
  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category?.toLowerCase().includes(query.toLowerCase()) ||
        product.description?.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }
  
  const handleSuggestionClick = (productName) => {
    setSearchQuery(productName);
    navigate(`/Furniture-shop/search?q=${productName}`);
    setShowSuggestions(false);
  }
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className='p-2 w-[90vw] m-auto sm:hidden relative' ref={suggestionsRef}>
        <form onSubmit={handleSearch} className='flex rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all border-2 border-gray-300' >
                    <input 
                      type="text" 
                      className='outline-none font-light p-2 w-[88%]' 
                      placeholder='search...' 
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button type="submit"><img src={important.searchImg} alt="" className='size-8 p-2' /></button>
        </form>
        
        {showSuggestions && suggestions.length > 0 && (
          <div className='absolute z-10 w-full bg-white mt-1 rounded-md shadow-lg max-h-60 overflow-auto'>
            {suggestions.map((product) => (
              <div 
                key={product.id} 
                className='p-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => handleSuggestionClick(product.name)}
              >
                <div className='font-medium'>{product.name}</div>
                <div className='text-sm text-gray-500'>{product.category}</div>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default MobileSearch