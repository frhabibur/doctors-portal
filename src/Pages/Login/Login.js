import React from 'react';
import auth from '../../firebase-init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";


const Login = () => {
    const [signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="card w-full md:w-1/3 mx-auto max-w-screen-md mt-10  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-gray-500">Login</h2>


                    {/* Form from deysiUi */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Please Enter Your Email'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please Enter Valid'
                                    }
                                })}
                            />
                            <label className="label" >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Please Enter Your password'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password Should be 6 Charcter'
                                    }
                                })}
                            />
                            <label className="label" >
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full' type="submit" value='Login' />
                    </form>

                    <div className="divider">OR</div>
                    {/* Google Button  */}
                    <div className="card-actions justify-end">
                        <button className=" bg-white text-black btn w-full hover:text-white"
                            onClick={() => signInWithGoogle()}
                        >Continew With Google</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;