import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { handleSubmit, register } = useForm();
    
    const handleLogin = data =>{
        console.log(data);
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center mb-3'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs"/>
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-neutral w-full' value="Login" type="submit" />
                </form>
                <p className='text-xs text-center mt-2'>New to Wedding Photograher? <Link to="/signup" className='text-success'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full' type="">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;