
import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/search';

const SearchBar = () => {
  const {
    keyword,
    setKeyword,
    showSearch,
    setShowSearch,
  } = useSearch();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      setKeyword('');
      setShowSearch(false);
      return;
    }

    setKeyword(keyword.trim());
    setShowSearch(true);

    if (location.pathname !== '/collection') {
      navigate('/collection');
    }
  };

  const handleClear = () => {
    setKeyword('');
    setShowSearch(false);
  };

  const visible = location.pathname.includes('collection');

  if (!visible) return null;

  return (
    showSearch && <div className="border-t border-b bg-gray-50 text-center">
      <form
        onSubmit={handleSubmit}
        className="inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 focus-within:border-gray-500 transition-colors"
      >
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="search"
          placeholder="Search products..."
          aria-label="Search products"
        />

        <button
          type="submit"
          className="ml-2 flex items-center justify-center"
          aria-label="Search"
        >
          <img
            className="w-4 cursor-pointer"
            src={assets.search_icon}
            alt=""
          />
        </button>

        {keyword && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-3"
            aria-label="Clear search"
          >
            <img
              className="w-3"
              src={assets.cross_icon}
              alt=""
            />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
