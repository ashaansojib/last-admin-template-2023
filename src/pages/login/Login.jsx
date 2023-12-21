import React from 'react';
import './login.css'
import { useForm } from 'react-hook-form';
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-[#DFE9EB] max-h-screen min-h-screen'>
            <div className='max-w-md mx-auto bg-white p-6'>
                <p>Sign In</p>
                <span className='text-gray-600 text-sm'>Enter your email & password to login</span>
                {/* login form  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-2'>
                        <p className='mt-2 text-slate-600'>Email Address</p>
                        <input defaultValue="sojib123@gmail.com" {...register("email", {required: true})} className='inline-block p-2 bg-gray-100 text-sm w-full text-gray-500' />

                        <p className='mt-2 text-slate-600'>Password</p>
                        <input defaultValue="admin123" {...register("password", { required: true })} className='inline-block p-2 bg-gray-100 text-sm w-full text-gray-500' />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;