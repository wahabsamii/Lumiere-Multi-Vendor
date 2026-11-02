
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../context/auth';
import { serverUrl } from '../utils/api'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import loginSchema from '../schemas/loginSchema';
import TextInput from '../components/TextInput';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('')
  // const [password, setPasword] = useState('')
  // const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(serverUrl + '/api/user/register', {
          name,
          email: values.email,
          password: values.password,
        })

        if (response.data.success) {
          toast.success(response.data.message || 'Account Created!')
          setCurrentState('Login');
        } else {
          toast.error(response.data.message || 'Internal Server Error');
        }
      } else {
        const response = await axios.post(serverUrl + "/api/user/login", {
            email: values.email,
             password: values.password,
            });

          if (response.data.success) {
            const authData = {
              user: response.data.user,
              token: response.data.token,
            };

            localStorage.setItem("auth", JSON.stringify(authData));
            localStorage.setItem("token", response.data.token);

            setAuth(authData);

          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

    const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,
  });

  const isDisabled =
  !values.email ||
  !values.password ||
  !!errors.email ||
  !!errors.password;

  return (
    <section className="min-h-[85vh] bg-[#faf9f6] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_15px_60px_rgba(0,0,0,0.07)] md:min-h-[580px] md:grid-cols-2">

        {/* Left: Editorial panel */}
        <div className="relative hidden overflow-hidden bg-[#28241f] p-10 text-white md:flex md:flex-col md:justify-between lg:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6d5945]/60 via-transparent to-black/80" />

          <div className="relative z-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d7b995]">
              DREAMS CLOTHING
            </p>
            <div className="mt-3 h-px w-12 bg-[#b8a078]" />
          </div>

          <div className="relative z-10 max-w-sm">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d7b995]">
              Your style, your story
            </p>

            <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
              Discover a style that feels like you.
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Thoughtfully chosen styles for your everyday moments and
              everything worth dressing up for.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <span className="h-px w-8 bg-[#b8a078]" />
            <p className="text-xs tracking-widest text-white/60">
              ELEVATE YOUR EVERYDAY
            </p>
          </div>
        </div>

        {/* Right: Login / Signup form */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10 md:px-9 lg:px-14">
          <form
            onSubmit={onSubmitHandler}
            className="flex w-full max-w-md flex-col"
          >
            <div className="mb-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#a77548]">
                Welcome to Dreams
              </p>

              <h1 className="font-serif text-4xl text-[#28241f] sm:text-5xl">
                {currentState === 'Login' ? 'Welcome back.' : 'Join us.'}
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {currentState === 'Login'
                  ? 'Sign in to continue your style journey.'
                  : 'Create an account and discover your next favorite look.'}
              </p>
            </div>

            {currentState === 'Sign Up' && (
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#39352f]"
                >
                  Full name
                </label>
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-[#e8e3dc] bg-[#fdfcfb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-[#c9b49b] focus:border-[#a77548] focus:ring-2 focus:ring-[#a77548]/10"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="mb-5">
              
              <TextInput
                lableText={'Email address'}
                type="text"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="username"
                error={errors.email && touched.email ? 1 : undefined}
                errormessage={errors.email}
               />

                <TextInput
                  lableText={'Password'}
                  type="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="password"
                  error={errors.password && touched.password ? 1 : undefined}
                  errormessage={errors.password}
                />

              {/* <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                autoComplete="email"
                className="w-full rounded-lg border border-[#e8e3dc] bg-[#fdfcfb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-[#c9b49b] focus:border-[#a77548] focus:ring-2 focus:ring-[#a77548]/10"
                placeholder="you@example.com"
                required
              /> */}
            </div>

            <div className="mb-4">
              {/* <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#39352f]"
              >
                Password
              </label> */}
              {/* <input
                id="password"
                onChange={(e) => setPasword(e.target.value)}
                value={password}
                type="password"
                autoComplete={
                  currentState === 'Login'
                    ? 'current-password'
                    : 'new-password'
                }
                className="w-full rounded-lg border border-[#e8e3dc] bg-[#fdfcfb] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-[#c9b49b] focus:border-[#a77548] focus:ring-2 focus:ring-[#a77548]/10"
                placeholder="Enter your password"
                required
              /> */}
            </div>

            <div className="mb-7 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <p className="cursor-pointer text-gray-500 transition hover:text-[#a77548]">
                Forgot your password?
              </p>

              {currentState === 'Login' ? (
                <p
                  onClick={() => setCurrentState('Sign Up')}
                  className="cursor-pointer font-medium text-[#a77548] transition hover:text-[#805633]"
                >
                  Create account
                </p>
              ) : (
                <p
                  onClick={() => setCurrentState('Login')}
                  className="cursor-pointer font-medium text-[#a77548] transition hover:text-[#805633]"
                >
                  Login here
                </p>
              )}
            </div>

            <button
               disabled={
                isDisabled
              }
              type="submit"
              className={`w-full rounded-lg  ${isDisabled ? 'cursor-not-allowed bg-[#28241fad] opacity-70' : 'bg-[#28241f] hover:bg-[#a77548]'} px-6 py-3.5 text-sm font-medium tracking-wide text-white transition duration-300 active:scale-[0.99]`}
            >
              {currentState === 'Login' ? 'Sign In' : 'Create Account'}
            </button>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#eee9e2]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Dreams Clothing
              </span>
              <div className="h-px flex-1 bg-[#eee9e2]" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
