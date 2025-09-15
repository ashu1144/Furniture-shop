import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { important } from '../Constant';
import { useSelector } from 'react-redux';
import CartIcon from './CartIcon';

const Navbar = () => {
    const navigate = useNavigate();
    const { totalQuantity } = useSelector((state) => state.cart);
    const { products } = useSelector((state) => state.products);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestionsRef = useRef(null);
    
    const goToLogin = () => {
      navigate('/Furniture-shop/login');  // yeh programmatically navigate karega
    }
    const goToHome = () => {
      navigate('/Furniture-shop/');  // yeh programmatically navigate karega
    }
    
    const goToCart = () => {
      navigate('/Furniture-shop/cart');
    }
    
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
    <div className='flex justify-around max-sm:justify-between text-lg p-4 items-center bg-[#F0F2F3]'>
        {/* flex-1 max-w-sm */}
        <div onClick={goToHome} className='flex  font-bold items-center justify-start gap-2 cursor-pointer'>
            <span className='text-3xl max-sm:text-2xl'>Comforty</span>
            <img src={important.logoImg} alt="" className='h-8 max-sm:h-6' />
        </div>
        
        <div className='relative max-sm:hidden' ref={suggestionsRef}>
          <form onSubmit={handleSearch} className='flex rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all' >
              <input 
                type="text" 
                className='outline-none font-light p-2 w-64' 
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

        <div className='flex max-sm:gap-1 gap-4 items-center justify-center'>
            
            <div onClick={goToCart} className='flex gap-2 max-sm:gap-1 items-center justify-center p-2 max-sm:p-1 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all'>
                <span className='font-light'>Cart</span>
                <img src={important.cartImg} alt="" className='h-5' />
                <div className='size-5 bg-green-950 rounded-full text-white text-center'><p className='text-sm'>{totalQuantity || 0}</p></div>
            </div>
            <div className='p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all '>
                <img src={important.heartimg} alt="" className='h-5' />
            </div>
            <div onClick={goToLogin} className='p-2 rounded-xl bg-[#ffff] cursor-pointer hover:bg-[#F0F2F3] ease-in-out duration-300 transition-all '>
                <img src={important.profileImg} alt="" className='h-5'/>

            </div>
        </div>

        
    </div>
  )
}

export default Navbar