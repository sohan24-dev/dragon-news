"use client"


import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";


const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegisterfunt = async (data) => {
        // console.log(data, "data");
        const { email, name, password,photo } = data

        const { data: res, error } = await authClient.signUp.email(
            {
                name: name, // required
                email: email, // required
                password: password, // required
                image:photo,
                callbackURL: "/",
            }
        )
        if(res){
            redirect('/')
        }
        else if (error){
            alert (error.message)
        }

    }
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 flex-col">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-2xl">Register your account </h2>
                <form onSubmit={handleSubmit(handleRegisterfunt)} className="space-y-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input  {...register("name", { required: "name field is required", })} type="text" className="input" placeholder="Type here name" />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL (optional)</legend>
                        <input  {...register("photo")} type="text" className="input" placeholder="Type here photo url" />  
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input  {...register("email", { required: "email field is required" })} type="email" className="input" placeholder="Type here email" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend">Password</legend>
                        <input

                            {...register("password", { required: "password field is required", maxLength: 20 })} type="Password" className="input" placeholder="Type here password" />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Register</button>
                </form>
                <p>Don't have an account ? <Link className="text-red-400 text-xl font-semibold" href={"/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;