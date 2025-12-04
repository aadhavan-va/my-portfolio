"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#111010] transition-transform duration-300 translate-y-0 text-white">
            <div className="flex h-28 items-center justify-between px-5 sm:px-10 md:px-32 lg:px-44 xl:px-80 2xl:px-[500px]">
                <Link className="font-semibold text-md sm:text-lg md:text-2xl" href="/">Aadhavan</Link>
                {/* <ul className="flex sm:gap-x-1 font-medium">
                    <Link
                        className={`px-[9px] lg:px-3 rounded-full text-[13px] sm:text-sm md:text-[16px] h-8 flex items-center cursor-pointer transition-all duration-300 ${isActive('/') ? 'text-white bg-black' : 'hover:bg-[#E4E4E5]'}`}
                        href="/"
                    >
                        home
                    </Link>
                    <Link
                        className={`px-[9px] lg:px-3 rounded-full text-[13px] sm:text-sm md:text-[16px] h-8 flex items-center cursor-pointer transition-all duration-300 ${isActive('/blogs') ? 'text-white bg-black' : 'hover:bg-[#E4E4E5]'}`}
                        href="/blogs"
                    >
                        blogs
                    </Link>
                </ul> */}
                <div className="font-semibold text-md sm:text-lg md:text-2xl">Frontend Engineer</div>
            </div>
        </nav>
    )
}

export default Navbar