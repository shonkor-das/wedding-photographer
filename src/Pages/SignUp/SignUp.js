import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = () => {

    const {register, handleSubmit} = useForm();

    const handleSignUp = (data) =>{
        console.log(data);
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center mb-3'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-neutral w-full' value="Sign Up" type="submit" />
                </form>
                <p className='text-xs text-center mt-2'>Already have an account  <Link to="/login" className='text-success'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full' type="">Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;