import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const [input, setInput] = useState({
        Email: "",
        Pass: ""
    });

    const Navigate = useNavigate();

    const handlerLogin = (e) => {
        e.preventDefault();

        if (localStorage.getItem("user") == null) {
            alert("Plase Create Account For Login");
            Navigate('/signUp')
        }
        else {
            const loginUser = JSON.parse(localStorage.getItem("user"));
            if (input.Email === loginUser.Email && input.Pass === loginUser.Pass) {
                localStorage.setItem("Login", true);
                Navigate('/')
            } else {
                alert("Invalid Email Or Password");
                document.getElementById("Email").focus();
            }
        }
    }

    return (
        <>
            <div className="login">
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form
                                    onSubmit={handlerLogin}
                                    className="space-y-4 md:space-y-6"
                                    action="#">
                                    <div>
                                        <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input
                                            id='Email'
                                            name="Email"
                                            onChange={e => setInput({
                                                ...input,
                                                [e.target.name]: e.target.value
                                            })}
                                            type="email"
                                            value={input.Email}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Pass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            onChange={e => setInput({
                                                ...input,
                                                [e.target.name]: e.target.value,
                                            })}
                                            value={input.Pass}
                                            type="password"
                                            name="Pass"
                                            id="Pass"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Sign in</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don't have an account yet?
                                        <NavLink to='/signUp' className='font-medium text-primary-600 hover:underline dark:text-primary-500'> Sign Up</NavLink>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login
