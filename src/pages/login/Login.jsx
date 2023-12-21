import React, { useState } from 'react';
import './login.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
const Login = () => {
    const [show, setShow] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    const handleCheck = () => {

    }
    return (
        <div className='bg-[#DFE9EB] md:max-h-screen md:min-h-screen md:flex justify-center items-center'>
            <div className='bg-white p-8 min-w-[400px] mx-auto'>
                <p>Sign In</p>
                <span className='text-gray-600 text-sm'>Enter your email & password to login</span>
                {/* login form  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-2 py-4'>
                        <p className='mt-2 text-slate-600'>Email Address</p>
                        <input type='email' defaultValue="sojib123@gmail.com" {...register("email", { required: true })} className='input-field' />
                        <div className='relative'>
                            <p className='mt-2 text-slate-600'>Password</p>
                            <input type='password' defaultValue="admin123" {...register("password", { required: true })} className='input-field' />
                            <button className='p-[7px] text-sm text-gray-600 bg-slate-200 absolute top-7 right-0'>show</button>
                        </div>
                    </div>
                    <div className='login-middle'>
                        <span onClick={() => !setShow(true)} className='clear-flex cursor-pointer'>
                            <input type='checkbox' name="" id="" />
                            Remember Password
                        </span>
                        <Link to="/forget-password">Forget Password</Link>
                    </div>
                    <input className='login-btn' type="submit" value="Login" />
                </form>
                {/* others account */}
                <div className='pt-8'>
                    <p className='text-gray-600'>Or Sign in with ---------------</p>
                    <div className='py-3 flex justify-center items-center gap-4'>
                        <button className='login-social'><FaFacebookF /></button>
                        <button className='login-social'><FaGoogle /></button>
                        <button className='login-social'><FaGithub /></button>
                    </div>
                    <span className='text-gray-600 text-[16px]'>Don't Have Account? <Link to="/register" className='underline'>Create Account</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;