
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearch } from '../context/search';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useCart } from '../context/cart';

const Collection = () => {
  const { products = [] } = useContext(ShopContext);
  const { keyword, showSearch, setKeyword, setShowSearch } = useSearch();
  const [cart, , , currency] = useCart();
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const searchTerm = showSearch ? keyword.trim().toLowerCase() : '';

  // Toggle category
  const toggleCategory = (value) => {
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Toggle subcategory
  const toggleSubCategory = (value) => {
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Clear filters
  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  // Clear everything
  const clearSelection = () => {
    clearFilters();
    setSortType('relevant');
    setKeyword('');
    setShowSearch(false);
  };

  // Search, filter and sort products
  const filterProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (searchTerm) {
      filtered = filtered.filter((item) => {
        const searchableFields = [
          item.name,
          item.title,
          item.description,
          item.category,
          item.subCategory,
        ];

        return searchableFields.some(
          (field) =>
            field != null &&
            String(field).toLowerCase().includes(searchTerm)
        );
      });
    }

    // Category filter
    if (category.length > 0) {
      filtered = filtered.filter((item) =>
        category.some(
          (selected) =>
            String(item.category || '').toLowerCase() ===
            selected.toLowerCase()
        )
      );
    }

    // Subcategory filter
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.some(
          (selected) =>
            String(item.subCategory || '').toLowerCase() ===
            selected.toLowerCase()
        )
      );
    }

    // Sorting
    if (sortType === 'low-high') {
      filtered.sort(
        (a, b) => Number(a.price || 0) - Number(b.price || 0)
      );
    } else if (sortType === 'high-low') {
      filtered.sort(
        (a, b) => Number(b.price || 0) - Number(a.price || 0)
      );
    }

    return filtered;
  }, [products, searchTerm, category, subCategory, sortType]);

  const activeFilterCount = category.length + subCategory.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categoryOptions = ['Men', 'Women', 'Kids'];
  const typeOptions = ['Topwear', 'Bottomwear', 'Winterwear'];

  return (
    <section className="min-h-screen border-t border-gray-100 bg-[#faf9f6]">
      <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-7 sm:py-10 lg:px-12 lg:py-14">

        {/* Page Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b77945]">
              {searchTerm ? 'Search results' : 'Find your next favorite'}
            </p>

            <Title text1="OUR" text2="COLLECTION" />

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              {searchTerm
                ? `Showing products matching "${keyword.trim()}".`
                : 'Explore timeless essentials and discover pieces that complement your everyday style.'}
            </p>
          </div>

          <div className="hidden border-l border-gray-200 pl-5 sm:block">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400">
              Explore the edit
            </p>
            <p className="mt-1 font-serif text-xl text-gray-800">
              Made for your style.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">

          {/* Filters Sidebar */}
          <aside className="w-full shrink-0 lg:w-60">

            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setShowFilter((prev) => !prev)}
              aria-expanded={showFilter}
              className="flex w-full items-center justify-between border border-gray-200 bg-white px-4 py-3.5 lg:hidden"
            >
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-800">
                <span>Filters</span>

                {activeFilterCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1c1c1c] px-1 text-[10px] text-white">
                    {activeFilterCount}
                  </span>
                )}
              </span>

              <img
                src={assets.dropdown_icon}
                alt=""
                className={`h-3 w-3 transition-transform duration-300 ${
                  showFilter ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`${
                showFilter ? 'block' : 'hidden'
              } space-y-5 lg:sticky lg:top-28 lg:block`}
            >

              {/* Filter Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-900">
                  Refine Selection
                </h2>

                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[10px] uppercase tracking-wider text-[#a16c3d] underline underline-offset-4 transition-colors hover:text-black"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="border border-gray-200 bg-white p-5">
                <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-800">
                  Categories
                </h3>

                <div className="space-y-4">
                  {categoryOptions.map((item) => (
                    <label
                      key={item}
                      className="group flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-black"
                    >
                      <input
                        type="checkbox"
                        checked={category.includes(item)}
                        onChange={() => toggleCategory(item)}
                        className="h-4 w-4 cursor-pointer accent-[#b77945]"
                      />

                      <span>{item}</span>

                      {category.includes(item) && (
                        <span className="ml-auto text-[10px] text-[#b77945]">
                          Selected
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              <div className="border border-gray-200 bg-white p-5">
                <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-800">
                  Product Type
                </h3>

                <div className="space-y-4">
                  {typeOptions.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 transition-colors hover:text-black"
                    >
                      <input
                        type="checkbox"
                        checked={subCategory.includes(item)}
                        onChange={() => toggleSubCategory(item)}
                        className="h-4 w-4 cursor-pointer accent-[#b77945]"
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sidebar Note */}
              <div className="bg-[#f0ede7] p-5">
                <p className="font-serif text-lg italic text-gray-800">
                  Less, but better.
                </p>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Discover versatile pieces designed to fit your personal style.
                </p>
              </div>
            </div>
          </aside>

          {/* Products Area */}
          <div className="min-w-0 flex-1">

            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-5">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {searchTerm ? 'Search Results' : 'All Products'}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {filterProducts.length}{' '}
                  {filterProducts.length === 1 ? 'piece' : 'pieces'} found
                </p>
              </div>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="collection-sort"
                  className="hidden text-[10px] uppercase tracking-[0.12em] text-gray-500 sm:inline"
                >
                  Sort by
                </label>

                <select
                  id="collection-sort"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="max-w-[190px] cursor-pointer border border-gray-200 bg-white px-3 py-3 text-xs text-gray-700 outline-none transition-colors focus:border-[#b77945] sm:min-w-[190px]"
                >
                  <option value="relevant">Recommended</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(activeFilterCount > 0 || searchTerm) && (
              <div className="mb-6 flex flex-wrap items-center gap-2">

                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setKeyword('');
                      setShowSearch(false);
                    }}
                    className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 transition-colors hover:border-gray-400"
                  >
                    Search: {keyword.trim()}
                    <span aria-hidden="true">×</span>
                  </button>
                )}

                {category.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleCategory(item)}
                    className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 transition-colors hover:border-gray-400"
                  >
                    {item}
                    <span aria-hidden="true">×</span>
                  </button>
                ))}

                {subCategory.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleSubCategory(item)}
                    className="flex items-center gap-2 border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 transition-colors hover:border-gray-400"
                  >
                    {item}
                    <span aria-hidden="true">×</span>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={clearSelection}
                  className="px-2 py-2 text-xs text-[#a16c3d] underline underline-offset-4 hover:text-black"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product Grid */}
            {filterProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 xl:grid-cols-4">
                {filterProducts.map((item) => (
                  <ProductItem
                    key={item._id || item.id}
                    id={item._id || item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex min-h-[350px] flex-col items-center justify-center border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f2ed]">
                  <img
                    src={assets.search_icon}
                    alt=""
                    className="w-5 opacity-60"
                  />
                </div>

                <h3 className="font-serif text-2xl text-gray-900">
                  No pieces found
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  {searchTerm
                    ? `We couldn't find products matching "${keyword.trim()}". Try another search or adjust your filters.`
                    : 'We couldn’t find products matching your current selection. Try changing your filters.'}
                </p>

                <button
                  type="button"
                  onClick={clearSelection}
                  className="mt-6 bg-[#1c1c1c] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#b77945]"
                >
                  Clear selection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
