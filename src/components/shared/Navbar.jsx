"use client"

import Image from "next/image";
import Link from "next/link";

import userAvater from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user);
    return (
        <div className="flex justify-between container mx-auto items-center mt-5">
            <div>{user && <h2 className="text-xl font-medium text-red-400">Hello {user?.name}</h2>}</div>
            <ul className="flex justify-between items-center text-gray-700 gap-3">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/aboutus">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className="flex  space-x-2 items-center">
                {
                    user ? (
                        <>
                            <Image
                                className="rounded-xl"
                                width={40}
                                height={40}
                                src={user?.image || userAvater}
                                alt="User avatar"
                            />
                            <Link href="/login">
                                <button onClick={async()=> await authClient.signOut()} className="btn btn-primary">Logout</button>
                            </Link>
                        </>
                    ) : (
                        <Link href="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                    )
                }
            </div>
        </div>

    );
};

export default Navbar;