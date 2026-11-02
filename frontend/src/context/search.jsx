
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    keyword,
    setKeyword,
    showSearch,
    setShowSearch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }

  return context;
};

export { SearchProvider, useSearch };
