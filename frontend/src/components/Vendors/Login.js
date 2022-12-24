import React, { useState } from "react";
import Image from "next/image";
import { BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import Group from '../../assets/images/Group.png'
import Link from "next/link";
import logo from '../../assets/images/logo.png'


function Login() {
    const [sidebar, setsidebar] = useState();

    const bg = {
        backgroundImage: `url(${Group.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    }
    return (
        <div className="flex justify-center items-center h-full bg-white  w-full py-6  md:py-6  px-6 md:px-6"  >

            <div className="basis-full md:basis-3/4" style={bg}>
                <div className="flex flex-col items-center justify-center" >
                    {/* <Image src={logo} alt="border" width={200} height={120} /> */}
                    <div className="bg-white shadow rounded  w-full  md:w-1/2 p-6 md:p-16  md:ml-10">
                        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                            Welcome Back!
                        </p>
                        <p className="text-base mt-4 mb-6 font-medium leading-none text-gray-500">
                            Please sign in your account to get full access our website

                        </p>

                        <div>
                            <lable className="text-base font-medium leading-none text-gray-800">Email</lable>
                            <input placeholder="Input your email here" aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-base font-medium leading-none text-gray-800">Password</lable>
                            <div className="relative flex items-center justify-center">
                                <input placeholder="Type your password here" aria-label="enter Password" role="input" type="password" className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                            fill="#71717A"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-3">
                            <div>
                                <input type='checkbox' />  <span className="text-base mt-4 font-medium leading-none text-gray-500">
                                    Remember me</span>
                            </div>

                            <a href="/resetpassword/resetpassword1" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-base font-medium leading-none text-gray-800 cursor-pointer">
                                {" "}
                                Forget password
                            </a>
                        </div>
                        <div className="mt-8">
                            <Link href="/vendor/vendor/vendordetails">
                                <button role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:peppermartDark500 text-xl font-semibold leading-none text-white focus:outline-none bg-peppermartDark500  border rounded hover:bg-peppermartDark500 py-4 w-full ">
                                    Login
                                </button>
                            </Link>
                        </div>
                        <p tabIndex={0} className="focus:outline-none text-sm my-4 font-medium leading-none text-gray-500">
                            Not register yet?{" "}
                            <a href="/vendor/vendor/registration" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer">
                                {" "}
                                Create an Account
                            </a>
                        </p>

                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-1/4 bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-500">Or Sign in with</p>
                            <hr className="w-1/4 bg-gray-400" />
                        </div>
                        <button aria-label="Continue with google" role="button" className="flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-5 hover:bg-gray-100">
                            <FcGoogle />
                            <p className="text-base font-medium ml-4 text-gray-700">Sign in with Google</p>
                        </button>
                        <button aria-label="Continue with github" role="button" className="flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 p-3 border rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-gray-100">
                            <BsApple />
                            <p className="text-base font-medium ml-4 text-gray-700">Sign in with Apple</p>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Login;
