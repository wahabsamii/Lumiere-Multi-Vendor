import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { useCart } from "../context/cart";

const Cart = () => {
  const [cart, setCart, , currency] = useCart();
  const navigate = useNavigate();

  const updateQuantity = (itemId, size, quantity) => {
    setCart((prevCart) => {
      let updatedCart;

      if (quantity <= 0) {
        updatedCart = prevCart.filter(
          (item) => !(item._id === itemId && item.size === size)
        );
      } else {
        updatedCart = prevCart.map((item) =>
          item._id === itemId && item.size === size
            ? { ...item, quantity }
            : item
        );
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const cartData = cart || [];

  const totalAmount = cart.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 1), 0);

  return (
    <section className="min-h-screen border-t border-[#eee9e2] bg-[#faf9f6] px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#a77548]">
              Your selection
            </p>

            <div className="text-2xl sm:text-3xl">
              <Title text1="YOUR" text2="CART" />
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Review your pieces before checking out.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            {cartData.length} {cartData.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          {/* Cart items */}
          <div className="overflow-hidden rounded-xl border border-[#eee9e2] bg-white">
            <div className="hidden grid-cols-[1fr_120px_90px] items-center gap-4 border-b border-[#eee9e2] bg-[#fdfcfb] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500 sm:grid">
              <span>Product details</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Remove</span>
            </div>

            {cartData.length === 0 ? (
              <div className="px-5 py-16 text-center sm:py-20">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f1eb]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7 text-[#a77548]"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path
                      d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                  </svg>
                </div>

                <h2 className="font-serif text-2xl text-[#28241f]">
                  Your cart is empty
                </h2>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
                  Looks like you haven't found your next favorite piece yet.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/collection")}
                  className="mt-6 bg-[#28241f] px-7 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#a77548]"
                >
                  Explore collection
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[#eee9e2]">
                {cartData.map((item) => (
                  <div
                    key={`${item._id}-${item.size}`}
                    className="grid grid-cols-[1fr_auto] items-center gap-3 p-4 transition hover:bg-[#fdfcfb] sm:grid-cols-[1fr_120px_90px] sm:gap-4 sm:px-6 sm:py-6"
                  >
                    {/* Product information */}
                    <div className="flex min-w-0 items-start gap-3 sm:gap-5">
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-[#f5f2ed] sm:h-32 sm:w-28">
                        <img
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                          src={
                            item.images?.[0] ||
                            item.image?.[0] ||
                            item.image ||
                            ""
                          }
                          alt={item.name}
                        />
                      </div>

                      <div className="min-w-0 pt-1">
                        <h3 className="line-clamp-2 text-sm font-medium leading-5 text-[#28241f] sm:text-base">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-[#a77548]">
                          {currency}
                          {Number(item.price || 0).toFixed(2)}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-gray-400">
                            Size
                          </span>

                          <span className="rounded-md border border-[#e8e3dc] bg-[#faf9f6] px-3 py-1 text-xs font-medium text-gray-700">
                            {item.size}
                          </span>
                        </div>

                        <p className="mt-3 text-xs text-gray-500 sm:hidden">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-center gap-2">
                      <label className="text-[10px] uppercase tracking-wider text-gray-400 sm:hidden">
                        Qty
                      </label>

                      <div className="flex h-10 items-center rounded-md border border-[#e8e3dc] bg-white">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="px-3 text-gray-600 transition hover:text-[#a77548] disabled:opacity-40"
                        >
                          −
                        </button>

                        <span className="min-w-7 text-center text-sm text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          aria-label="Increase quantity"
                          className="px-3 text-gray-600 transition hover:text-[#a77548]"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Remove item */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item._id, item.size, 0)
                        }
                        aria-label={`Remove ${item.name} from cart`}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                      >
                        <img
                          className="h-4 w-4 opacity-60 transition hover:opacity-100"
                          src={assets.bin_icon}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order summary */}
          <aside className="rounded-xl border border-[#eee9e2] bg-white p-5 sm:p-7 lg:sticky lg:top-24">
            <div className="mb-6 border-b border-[#eee9e2] pb-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#a77548]">
                Almost yours
              </p>

              <h2 className="font-serif text-2xl text-[#28241f]">
                Order summary
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                A few beautiful choices, ready for checkout.
              </p>
            </div>

            <CartTotal />

            <button
              type="button"
              onClick={() => navigate("/place-order")}
              disabled={cartData.length === 0}
              className="mt-7 flex w-full items-center justify-center gap-3 bg-[#28241f] px-5 py-4 text-xs font-medium uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#a77548] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Proceed to checkout

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path
                  d="M8 10V7a4 4 0 1 1 8 0v3"
                  strokeLinecap="round"
                />
              </svg>

              Secure checkout
            </div>

            <button
              type="button"
              onClick={() => navigate("/collection")}
              className="mt-5 w-full text-center text-xs text-gray-500 underline decoration-[#d6c5b3] underline-offset-4 transition hover:text-[#a77548]"
            >
              Continue shopping
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;