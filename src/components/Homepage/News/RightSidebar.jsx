'use client'

import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handlegithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
    }
    const handleFacebookSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "facebook"
        })
    }
    return (
        <div>
            <div className="flex flex-col gap-2 mt-4">
                <button onClick={handleGoogleSignin} className="btn border-blue-500 text-blue-500"> <FaGoogle />Login with google</button>
                <button onClick={handlegithubSignin} className="btn"> <FaGithub />Login with github</button>
                {/* <button onClick={handleFacebookSignin} className="btn"> Login with Facebook</button> */}
            </div>
        </div>
    );
};

export default RightSidebar;