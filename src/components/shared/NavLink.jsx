"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href, children }) => {
    const active = usePathname()
    // console.log(active);
    const isActive = href === active
    return (
        <Link
            href={href}
            className={`${isActive ? "border-b-2 border-purple-500" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;