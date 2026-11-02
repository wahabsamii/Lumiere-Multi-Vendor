
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cart';

const ProductItem = ({ id, image, name, price, category }) => {
  const [cart, , , currency] = useCart();

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="group block cursor-pointer text-[#28241f]"
      to={`/product/${id}`}
    >
      {/* Product image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#f3f0eb]">
        <img
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={image[0]}
          alt={name}
          loading="lazy"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03]" />

        {/* Category badge */}
        {category && (
          <span className="absolute left-3 top-3 max-w-[80%] truncate rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#655747] backdrop-blur-sm sm:left-4 sm:top-4">
            {category}
          </span>
        )}

        {/* Quick view indicator */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4">
          <div className="flex items-center justify-center gap-2 rounded-md bg-white/95 px-3 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#28241f] shadow-sm backdrop-blur-sm sm:text-xs">
            View product
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Product information */}
      <div className="px-0.5 pb-2 pt-3 sm:pt-4">
        <h3 className="line-clamp-2 min-h-10 text-xs leading-5 text-[#39352f] transition-colors duration-300 group-hover:text-[#a77548] sm:text-sm">
          {name}
        </h3>

        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold tracking-wide text-[#28241f] sm:text-base">
            {currency}
            {price}
          </p>

          <span className="text-[9px] uppercase tracking-[0.12em] text-gray-400 sm:text-[10px]">
            Shop now
          </span>
        </div>

        <div className="mt-3 h-px w-0 bg-[#b8a078] transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  )
}

export default ProductItem
