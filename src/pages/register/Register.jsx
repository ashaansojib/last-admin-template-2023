import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const [show, setShow] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='bg-[#DFE9EB] md:max-h-screen md:min-h-screen md:flex justify-center items-center'>
            <div className='bg-white p-8 min-w-[400px] mx-auto'>
                <p>Register An Account</p>
                <span className='text-gray-600 text-sm'>Verify your account with email & password</span>
                {/* login form  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-2 py-4'>
                    <p className='mt-2 text-slate-600'>Full Name</p>
                        <input type='text' placeholder='Name' {...register("name", { required: true })} className='input-field' />
                        <p className='mt-2 text-slate-600'>Email Address</p>
                        <input type='email' placeholder='Email' {...register("email", { required: true })} className='input-field' />
                        <div className='relative'>
                            <p className='mt-2 text-slate-600'>Password</p>
                            <input type='password' placeholder='Password' {...register("password", { required: true })} className='input-field' />
                            <button className='p-[7px] text-sm text-gray-600 bg-slate-200 absolute top-7 right-0'>show</button>
                        </div>
                        <input type="file" name="" id="" />
                    </div>
                    <input className='login-btn' type="submit" value="Register" />
                </form>
                    <span className='text-gray-600 text-[16px]'>Already An Have Account? <Link to="/" className='underline'>Login Now</Link></span>
                </div>
            </div>
    );
};

export default Register;