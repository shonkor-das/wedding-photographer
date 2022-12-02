import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const { handleSubmit, formState: { errors }, register } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
            .then(reault => {
                const user = reault.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center mb-3'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                required: "Email Address is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-neutral w-full' value="Login" type="submit" />
                    <div>
                        {
                            loginError &&
                            <p className='text-red-600 text-sm text-center'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='text-xs text-center mt-2'>New to Wedding Photograher? <Link to="/signup" className='text-success'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-neutral uppercase w-full' type="">Continue with google</button>
            </div>
        </div>
    );
};

export default Login;