import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const LoginPage = ({ setIsPage }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    console.log("useForm", useForm());

    const [u, setU] = useState(null);

    let registerUsers = JSON.parse(localStorage.getItem("reg users"));

    let handleFormSubmit = (data) => {
        let user = registerUsers.find((elem) => elem.email === data.email);
        console.log(user);

        if (!user) {
            alert("user not found");
            return;
        }

        if (user.password !== data.password) {
            alert("incorrect password");
            return;
        }

        setU(user);
        alert("user logged in");
    };
    const onSubmit = (data) => {
        console.log("data 2", data)

    }


    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <h1 className="text-2xl font-bold text-center text-gray-800">LOG IN</h1>

                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <br />
                        <br />
                        <input
                            {...register("password", { required: "Password is required", maxLength: 10, minLength: 10, })}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <br />
                        <br />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                        <div className='hover: cursor-pointer'><p>Don't have an Account?  <b onClick={() => setIsPage(!false)}>Click Here</b></p></div>
                    </form>
                </div>

            </div>


        </>)
}

