
import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import axios from 'axios'
import { serverUrl } from '../utils/api'
import { useAuth } from '../context/auth'
import { toast } from 'react-toastify'

const Orders = () => {
  // const { currency } = useContext(ShopContext)
  const token = localStorage.getItem('token');
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [auth] = useAuth();
  console.log('the auth is:', auth);
  console.log('the order is:', orderData);
  const userId = auth?._id;

  const loadOrderData = async () => {
    setLoading(true);
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(serverUrl + '/api/order/userorders', {userId},
        { headers: { token } }
      )

      if (response.data.success) {
        setOrderData(response?.data?.orders);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token]);

  if (loading) {
    return(
      <p>Orders Loading.....</p>
    )
  }

  return (
    <section className="min-h-screen border-t border-[#eee9e2] bg-[#faf9f6] px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div className="mb-8 sm:mb-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-[#a77548]">
            Your shopping journey
          </p>

          <div className="text-2xl sm:text-3xl">
            <Title text1="MY" text2="ORDERS" />
          </div>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Keep track of your purchases and revisit the pieces you love.
          </p>
        </div>

        {/* Order list */}
       {/* Order list */}
       
      <div className="space-y-6">
        {orderData.length > 0 ? (
          orderData.map((order, index) => {
            const status = order.status || 'Processing'
            const normalizedStatus = status.toLowerCase()

            const isDelivered = normalizedStatus.includes('deliver')
            const isCancelled = normalizedStatus.includes('cancel')
            const isOutForDelivery = normalizedStatus.includes('out for delivery')

            const statusStyle = isDelivered
              ? 'bg-green-50 text-green-700 border-green-100'
              : isCancelled
                ? 'bg-red-50 text-red-600 border-red-100'
                : isOutForDelivery
                  ? 'bg-blue-50 text-blue-700 border-blue-100'
                  : 'bg-amber-50 text-amber-700 border-amber-100'

            const orderDate = new Date(order.date)

            return (
              <article
                key={order._id || index}
                className="overflow-hidden rounded-2xl border border-[#eee9e2] bg-white transition duration-300 hover:border-[#d9c8b6] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
              >
                {/* Order Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eee9e2] bg-[#faf9f6] px-5 py-5 sm:px-7">

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a77548]">
                      Order #{order._id?.slice(-8).toUpperCase()}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Placed on {orderDate.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${statusStyle}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isDelivered
                          ? 'bg-green-500'
                          : isCancelled
                            ? 'bg-red-500'
                            : isOutForDelivery
                              ? 'bg-blue-500'
                              : 'bg-amber-500'
                      }`}
                    />
                    {status}
                  </span>
                </div>

                {/* Product Items */}
                <div className="divide-y divide-[#eee9e2] px-5 sm:px-7">
                  {order.items?.map((item, itemIndex) => (
                    <div
                      key={item._id || itemIndex}
                      className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
                    >
                      <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#f5f2ed] sm:h-32 sm:w-28">
                        <img
                          src={item.image?.[0]}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-lg leading-6 text-[#28241f] sm:text-xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-[#a77548]">
                          $ {item.price}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-md border border-[#eee9e2] bg-[#faf9f6] px-3 py-1.5 text-xs text-gray-600">
                            Size: {item.size}
                          </span>

                          <span className="rounded-md border border-[#eee9e2] bg-[#faf9f6] px-3 py-1.5 text-xs text-gray-600">
                            Quantity: {item.quantity}
                          </span>

                          <span className="rounded-md border border-[#eee9e2] bg-[#faf9f6] px-3 py-1.5 text-xs text-gray-600">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="sm:text-right">
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">
                          Item total
                        </p>
                        <p className="mt-1 text-lg font-medium text-[#28241f]">
                          $ {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="border-t border-[#eee9e2] bg-[#fdfcfb] px-5 py-6 sm:px-7">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Payment */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                        Payment method
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#28241f]">
                        {order.paymentMethod === 'COD'
                          ? 'Cash on Delivery'
                          : order.paymentMethod}
                      </p>

                      <p className={`mt-1 text-xs ${
                        order.payment
                          ? 'text-green-600'
                          : 'text-amber-600'
                      }`}>
                        {order.payment ? 'Payment completed' : 'Payment pending'}
                      </p>
                    </div>

                    {/* Delivery Address */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                        Delivery address
                      </p>

                      <p className="mt-2 text-sm font-medium text-[#28241f]">
                        {order.address?.firstName} {order.address?.lastName}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {order.address?.street}, {order.address?.city}
                      </p>

                      <p className="text-xs text-gray-500">
                        {order.address?.email}
                      </p>
                    </div>

                    {/* Amount */}
                    <div className="border-t border-[#eee9e2] pt-5 sm:border-t-0 sm:pt-0 lg:text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                        Total amount
                      </p>

                      <p className="mt-2 font-serif text-2xl text-[#a77548]">
                        $ {order.amount}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {order.items?.length || 0} product(s) in this order
                      </p>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#eee9e2] pt-5">
                    <p className="text-xs text-gray-400">
                      Order ID: {order._id}
                    </p>

                    <button
                      type="button"
                      onClick={loadOrderData}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dcd3c8] px-4 py-2.5 text-xs font-medium text-[#39352f] transition duration-300 hover:border-[#28241f] hover:bg-[#28241f] hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path
                          d="M20 7v5h-5M4 17v-5h5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.5 9a7 7 0 0 1 12-2L20 12M4 12l2.5 5a7 7 0 0 0 12-2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Refresh orders
                    </button>
                  </div>
                </div>
              </article>
            )
          })
        ) : (
          <div className="rounded-2xl border border-[#eee9e2] bg-white px-5 py-16 text-center sm:py-20">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f1eb]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-[#a77548]"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M6 7h12l1 13H5L6 7Z"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9V6a3 3 0 0 1 6 0v3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2 className="font-serif text-2xl text-[#28241f]">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Your next favorite piece is waiting. Explore our collection
              and find something made for your style.
            </p>

            <button
              onClick={() => window.location.assign('/collection')}
              className="mt-6 bg-[#28241f] px-7 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#a77548]"
            >
              Explore collection
            </button>
          </div>
        )}
      </div>

        {/* Footer note */}
        {orderData.length > 0 && (
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#eee9e2] bg-white p-4 sm:items-center sm:px-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mt-0.5 h-5 w-5 shrink-0 text-[#a77548] sm:mt-0"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                d="M12 11v5m0-8h.01"
                strokeLinecap="round"
              />
            </svg>

            <p className="text-xs leading-5 text-gray-500 sm:text-sm">
              Need help with an order? Contact our support team for assistance
              with your purchase.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Orders
