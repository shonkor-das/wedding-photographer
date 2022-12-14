import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (data) => {
        // console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            
            toast('User Created Successfully.')

            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{
                navigate('/');
            })
            .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
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
                        <input type="text"
                            {...register("name", {
                                required: "Please type your name"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {value:6, message: 'Password must be 6 characters or longer'}
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-neutral w-full mt-3' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='text-sm text-center mt-2'>Already have an account  <Link to="/login" className='text-success'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-neutral uppercase w-full' type="">Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;