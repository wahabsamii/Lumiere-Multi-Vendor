
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { useCart } from "../context/cart";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  // const [ addToCart ] = useCart();
  const [cart, setCart, addToCart, currency] = useCart();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProduct = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        `${backendUrl}/api/product/single`,
        { productId }
      );

      if (response.data.success === false || !response.data.product) {
        toast.error("Product not found.");
        setProductData(null);
        return;
      }

      const product = response.data.product;
      setProductData(product);
      setImage(product.image[0] || "");
      setSize("");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error?.message ||
          "Failed to load product."
      );
      setProductData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size.");
      return;
    }

    if (!productData) {
      toast.error("Product details are not available.");
      return;
    }

    addToCart(productData, size);
  };

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center bg-[#faf9f6]">
        <p className="text-sm text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center bg-[#faf9f6]">
        <p className="text-sm text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen border-t border-[#eee9e2] bg-[#faf9f6] px-4 pb-16 pt-6 sm:px-6 sm:pt-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-7 flex items-center gap-2 text-xs text-gray-400 sm:mb-10">
          <span>Home</span>
          <span>/</span>
          <span>Collection</span>
          <span>/</span>
          <span className="max-w-[180px] truncate text-[#a77548]">
            {productData.name}
          </span>
        </div>

        {/* Product details */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Product image */}
          {/* <div className="flex flex-col-reverse gap-3 sm:flex-row sm:gap-4 lg:sticky lg:top-24 lg:self-start">
            <div className="flex gap-3 overflow-x-auto pb-1 sm:w-[86px] sm:shrink-0 sm:flex-col sm:overflow-x-hidden sm:overflow-y-auto sm:pb-0" />

            <div className="group relative min-w-0 flex-1 overflow-hidden rounded-xl bg-[#f1eee8]">
              {image ? (
                <img
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  src={image}
                  alt={productData.name}
                />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center text-sm text-gray-400">
                  No image available
                </div>
              )}

              <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#39352f] backdrop-blur-sm">
                Dreams Collection
              </div>
            </div>
          </div> */}

          {/* Product images */}
<div className="flex flex-col-reverse gap-3 sm:flex-row sm:gap-4 lg:sticky lg:top-24 lg:self-start">

  {/* Vertical thumbnails */}
  <div className="flex gap-3 overflow-x-auto pb-1 sm:w-[86px] sm:shrink-0 sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:pb-0">

    {(productData.image || []).map((img, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setImage(img)}
        aria-label={`View product image ${index + 1}`}
        aria-pressed={image === img}
        className={`h-24 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-all sm:h-28 sm:w-full ${
          image === img
            ? "border-[#a77548] opacity-100"
            : "border-transparent opacity-70 hover:border-[#d8c2a8] hover:opacity-100"
        }`}
      >
        <img
          src={img}
          alt={`${productData.name} - image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </button>
    ))}

  </div>

  {/* Main image */}
  <div className="group relative min-w-0 flex-1 overflow-hidden rounded-xl bg-[#f1eee8]">

    {image ? (
      <img
        className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        src={image}
        alt={productData.name}
      />
    ) : (
      <div className="flex aspect-[4/5] items-center justify-center text-sm text-gray-400">
        No image available
      </div>
    )}

    <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#39352f] backdrop-blur-sm">
      Dreams Collection
    </div>

  </div>
</div>

          {/* Product information */}
          <div className="flex flex-col py-1 sm:py-3 lg:py-6">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#a77548]">
              Discover your style
            </p>

            <h1 className="mt-4 font-serif text-3xl leading-tight text-[#28241f] sm:text-4xl lg:text-5xl">
              {productData.name}
            </h1>

            <div className="mt-5 flex items-center gap-2 border-b border-[#e9e3db] pb-5">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <img
                    key={star}
                    src={assets.star_icon}
                    alt=""
                    className="h-3.5 w-3.5"
                  />
                ))}
                <img
                  src={assets.star_dull_icon}
                  alt=""
                  className="h-3.5 w-3.5"
                />
              </div>

              <span className="text-xs text-gray-500">(122)</span>
            </div>

            <p className="mt-6 text-3xl font-medium tracking-tight text-[#a77548]">
              {currency} {productData.price}
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              {productData.description}
            </p>

            {/* Size selection */}
            <div className="mt-8 border-t border-[#e9e3db] pt-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-[#28241f]">
                  Select your size
                </p>

                <span className="text-xs text-gray-400">
                  Choose an option below
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {(productData.sizes || []).map((item) => (
                  <button
                    type="button"
                    onClick={() => setSize(item)}
                    aria-pressed={item === size}
                    className={`flex h-12 min-w-12 items-center justify-center rounded-md border px-4 text-sm transition duration-200 ${
                      item === size
                        ? "border-[#28241f] bg-[#28241f] text-white"
                        : "border-[#e5ded5] bg-white text-gray-700 hover:border-[#a77548] hover:text-[#a77548]"
                    }`}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={() => handleAddToCart(productData, size)}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-[#28241f] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#a77548] active:scale-[0.99] sm:w-4/5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  d="M3 3h2l2.5 12h10.8L21 7H6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
              Add to cart
            </button>

            {/* Store policies */}
            <div className="mt-8 space-y-4 border-t border-[#e9e3db] pt-6">
              <div className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#a77548]"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 3 19 6v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-[#28241f]">
                    Original products
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Shop with confidence and find your style.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#a77548]"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2.5" y="6" width="19" height="13" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-[#28241f]">
                    Cash on delivery
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Cash on delivery is available on this product.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#a77548]"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 11a9 9 0 1 1 2.64 6.36L3 20l.8-4.2A9 9 0 0 1 3 11Z"
                    strokeLinejoin="round"
                  />
                  <path d="M8 11h8m-8 3h5" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-[#28241f]">
                    Easy returns and exchanges
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Returns and exchanges are subject to store policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product description */}
        <section className="mt-16 sm:mt-24">
          <div className="border-b border-[#e8e1d8]">
            <div className="inline-flex border-b-2 border-[#a77548] px-1 pb-4">
              <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-[#28241f]">
                Product description
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#eee9e2] bg-white px-5 py-7 sm:px-8 sm:py-9">
            <div className="max-w-4xl space-y-4 text-sm leading-7 text-gray-500">
              <p>{productData.description}</p>
            </div>
          </div>
        </section>

        {/* Related products */}
        <div className="mt-4 sm:mt-8">
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </main>
  );
};

export default Product;