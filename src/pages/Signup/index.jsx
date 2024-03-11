import React, { useState } from 'react'
import { auth, db } from '../../firebase'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [fullName, setFullName] = useState(null)
    const [phoneNo, setPhoneNo] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [dob, setDob] = useState(null)

    const navigate = useNavigate()
    const setData = async (user) => {
        const docRef = await setDoc(doc(db, "users", user.uid), {
            name: fullName,
            phoneNo: phoneNo,
            email: email,
            dob: dob,
        });
    }
    const getData = (e) => {
        e.preventDefault()
        if (!fullName || !phoneNo || !email || !password || !dob) { return };
        console.log(fullName, phoneNo, email, password, dob);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setData(user)
                navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            });
    }
    return (
        <>
            <div className="flex items-center justify-center p-12 md:dark:bg-gray-900 h-screen">
                <div className="mx-auto w-full max-w-[550px] bg-white md:dark:bg-gray-900">
                    <div className='flex justify-center'>
                        <div onClick={() => navigate("/")} className='select-none cursor-pointer text-center mb-10 text-5xl font-medium text-[#07074D] md:dark:text-white flex items-center justify-around w-[400px]'><img src="/TheHouse.jpg" className='object-contain h-[100px]' alt="" /><p className='w-full'>The House</p></div>
                    </div>
                    <p className='text-center mb-3 block text-3xl font-medium text-[#07074D] md:dark:text-gray-400'>Sign in</p>
                    <form onSubmit={getData}>
                        <div className="mb-5">
                            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400 ">
                                Full Name
                            </label>
                            <input type="text" onChange={(e) => setFullName(e.target.value)} placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400">
                                Phone Number
                            </label>
                            <input type="text" onChange={(e) => setPhoneNo(e.target.value)} placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400">
                                Email Address
                            </label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400">
                                Password
                            </label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 ">
                                <div className="mb-5">
                                    <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D] md:dark:text-gray-400">
                                        Date of Birth
                                    </label>
                                    <input type="date" onChange={(e) => setDob(e.target.value)}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type='submit'
                                className="hover:shadow-htmlForm w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Signin
                            </button>
                        </div>
                        <div><p onClick={() => { navigate("/login") }} className='mt-3 block text-base font-medium text-[#07074D] text-right md:dark:text-gray-400 cursor-pointer select-none hover:underline'>Already have an account?</p></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup