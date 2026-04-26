"use client"


import RightSidebar from "@/components/Homepage/News/RightSidebar";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleLoginFunt = async (data) => {
        // console.log(data, "data");
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (res) {
            redirect('/')
        }
        else if (error) {
            alert(error.message)
        }
    }
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 flex-col">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-2xl">Login your account </h2>
                <form onSubmit={handleSubmit(handleLoginFunt)} className="space-y-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input  {...register("email", { required: "email field is required", maxLength: 20 })} type="email" className="input" placeholder="Type here email" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend">Password</legend>
                        <input

                            {...register("password", { required: "password field is required", maxLength: 20 })} type="Password" className="input" placeholder="Type here password" />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                <p>Don't have an account ? <Link className="text-red-400 text-xl font-semibold" href={"/register"}>Register</Link></p>
            </div>
            <RightSidebar></RightSidebar>
        </div>
    );
};

export default LoginPage;