import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material'

const GetStarted = () => {

    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [pass, setPass] = useState(null)
    const [conPass, setConPass] = useState(null)


    const handlerSubmit = (e) => {
        console.table({ name, mail, pass, conPass })
        e.preventDefault();
    }

    const [open, setOpen] = useState(false)
    const closeDialog = () => {
        setOpen(false);
        { window.location.replace('login') }
        // alert("submitted.")
    }

    return (
        <>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form method='GET' onSubmit={handlerSubmit} >
                            <input
                                onChange={e => setName(e.target.value)}
                                type="text"
                                value={name}
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name={name}
                                placeholder="Full Name" />

                            <input
                                onChange={e => setMail(e.target.value)}
                                type="email"
                                value={mail}
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name={mail}
                                placeholder="Email" />

                            <input
                                onChange={e => setPass(e.target.value)}
                                type="password"
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name={pass}
                                placeholder="Password" />
                            <input
                                onChange={e => setConPass(e.target.value)}
                                type="password"
                                required
                                className="block border border-grey-light w-full p-3 rounded mb-4 focus:border-orange-500 focus:outline-none"
                                name={conPass}
                                placeholder="Confirm Password" />

                            <button
                                type="submit"
                                // onClick={handlerSubmit}
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >Create Account</button>
                            <Button
                                className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                                onClick={() => setOpen(true)}
                            >Open Dialog</Button>
                            <Dialog
                                open={open}
                                onClose={() => setOpen(false)}
                            >
                                <DialogTitle>Account Created</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Thanks for create account.Login with created account
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    {/* <Button onClick={() => setOpen(false)}>Cancle</Button> */}
                                    <Button autoFocus onClick={closeDialog}>Log In</Button>
                                </DialogActions>
                            </Dialog>
                        </form>


                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <NavLink className="no-underline border-b border-blue text-blue" to="/login">
                            Log in
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted