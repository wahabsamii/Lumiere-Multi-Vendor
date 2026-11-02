
import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/search';
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const {showSearch, setShowSearch} = useSearch();
  const [cart, , , currency] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const user = auth.user;
  console.log('the login user', user);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setVisible(false);
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!visible && !profileOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setVisible(false);
        setProfileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, profileOpen]);

  const totalAmount = cart.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 1), 0);


  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    navigate('/login');
  };

  const openSearch = () => {
    setShowSearch(!showSearch);
    navigate('/collection');
  };

  const linkClass = ({ isActive }) =>
    `group relative py-2 text-[11px] font-medium uppercase tracking-[0.17em] transition-colors duration-300 ${
      isActive ? 'text-black' : 'text-gray-500 hover:text-black'
    }`;

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-40 bg-[#1c1c1c] px-3 py-2.5 text-center text-[9px] tracking-[0.13em] text-white sm:text-[10px] sm:tracking-[0.2em]">
        <span className="font-medium">A NEW SEASON. A NEW YOU.</span>
        <span className="mx-2 text-white/40">|</span>
        <Link
          to="/collection"
          className="underline underline-offset-4 decoration-white/50 transition-colors hover:decoration-white"
        >
          EXPLORE THE COLLECTION
        </Link>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-black/[0.06] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:h-[78px] sm:px-7 lg:px-12">

          {/* Logo */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="shrink-0"
          >
            <img
              src={assets.logo}
              className="w-28 object-contain transition-opacity duration-300 hover:opacity-75 sm:w-32 lg:w-36"
              alt="Store logo"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 sm:flex lg:gap-10"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={linkClass}
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">

            {/* Search */}
            <button
              type="button"
              aria-label="Search products"
              onClick={openSearch}
              className="group flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#f5f4f1]"
            >
              <img
                src={assets.search_icon}
                className="w-[18px] transition-transform duration-300 group-hover:scale-110"
                alt=""
              />
            </button>

            {/* Account */}
            <div className="relative">
              <button
                type="button"
                aria-label={token ? 'Account menu' : 'Sign in'}
                aria-expanded={profileOpen}
                onClick={() => {
                  if (!token) {
                    navigate('/login');
                    return;
                  }

                  setProfileOpen((prev) => !prev);
                }}
                className="group flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#f5f4f1]"
              >
                <img
                  src={assets.profile_icon}
                  className="w-[18px] transition-transform duration-300 group-hover:scale-110"
                  alt=""
                />
              </button>

              {token && profileOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close account menu"
                    onClick={() => setProfileOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />

                  <div className="absolute right-0 top-full z-50 mt-3 w-56 border border-gray-100 bg-white p-2 shadow-xl shadow-black/[0.08]">
                    <div className="border-b border-gray-100 px-3 py-3">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                        Welcome back
                      </p>
                      <p className="mt-1 text-sm text-gray-800">
                        {user?.name || 'Unknow User'}
                      </p>
                    </div>

                    <Link
                      to="/orders"
                      onClick={() => setProfileOpen(false)}
                      className="block px-3 py-3 text-sm text-gray-600 transition-colors hover:bg-[#f8f7f5] hover:text-black"
                    >
                      My Orders
                    </Link>

                    <div className="my-1 border-t border-gray-100" />

                    <button
                      type="button"
                      onClick={logout}
                      className="w-full px-3 py-3 text-left text-sm text-gray-600 transition-colors hover:bg-[#f8f7f5] hover:text-black"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </div>

            Total: {currency}{totalAmount.toFixed(2)}

            {/* Cart */}
            <Link
              to="/cart"
              aria-label={`Shopping cart, ${cart.length || 0} items`}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#f5f4f1]"
            >
              <img
                src={assets.cart_icon}
                className="w-[19px] transition-transform duration-300 group-hover:scale-110"
                alt=""
              />

              <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#b77945] px-1 text-[9px] font-semibold text-white ring-2 ring-white">
                {cart.length > 99 ? '99+' : cart.length || 0}
              </span>
            </Link>

            

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={visible}
              onClick={() => setVisible(true)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#f5f4f1] sm:hidden"
            >
              <img
                src={assets.menu_icon}
                className="w-5"
                alt=""
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-50 sm:hidden ${
          visible
            ? 'visible pointer-events-auto'
            : 'invisible pointer-events-none'
        }`}
        aria-hidden={!visible}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={visible ? 0 : -1}
          onClick={() => setVisible(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sliding panel */}
        <aside
          id="mobile-navigation"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[380px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            visible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-gray-100 px-6">
            <Link
              to="/"
              onClick={() => setVisible(false)}
              aria-label="Go to homepage"
            >
              <img
                src={assets.logo}
                className="w-28 object-contain"
                alt="Store logo"
              />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setVisible(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f4f1] text-2xl text-gray-700 transition-colors hover:bg-gray-200"
            >
              ×
            </button>
          </div>

          {/* Navigation links */}
          <div className="overflow-y-auto px-6 pb-6 pt-8">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-400">
              Discover
            </p>

            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-gray-100 py-5 text-sm uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? 'font-semibold text-black'
                        : 'text-gray-500 hover:text-black'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      <span
                        className={`text-[10px] tracking-widest ${
                          isActive ? 'text-[#b77945]' : 'text-gray-300'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={openSearch}
              className="mt-6 flex w-full items-center justify-between border border-gray-200 px-4 py-3.5 text-left text-xs uppercase tracking-[0.15em] text-gray-600 transition-colors hover:border-black hover:text-black"
            >
              Search products
              <img
                src={assets.search_icon}
                className="w-4"
                alt=""
              />
            </button>

            {token ? (
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  My account
                </p>

                <Link
                  to="/my-profile"
                  onClick={() => setVisible(false)}
                  className="block py-3 text-sm text-gray-600 hover:text-black"
                >
                  My Profile
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setVisible(false)}
                  className="block py-3 text-sm text-gray-600 hover:text-black"
                >
                  My Orders
                </Link>

                <button
                  type="button"
                  onClick={logout}
                  className="block py-3 text-sm text-gray-600 hover:text-black"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setVisible(false)}
                className="mt-6 block border border-gray-200 px-4 py-3.5 text-center text-xs uppercase tracking-[0.15em] text-gray-700 transition-colors hover:border-black hover:text-black"
              >
                Sign In / Register
              </Link>
            )}
          </div>

          {/* Bottom promotional panel */}
          <div className="mt-auto shrink-0 bg-[#f8f7f4] p-6">
            <p className="text-sm font-medium text-gray-900">
              Find your everyday style.
            </p>
            <p className="mt-2 text-xs leading-5 text-gray-500">
              Explore thoughtfully selected pieces for your wardrobe.
            </p>

            <Link
              to="/collection"
              onClick={() => setVisible(false)}
              className="mt-5 flex w-full items-center justify-center bg-[#1c1c1c] px-4 py-4 text-[10px] font-medium tracking-[0.2em] text-white transition-colors hover:bg-[#b77945]"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
