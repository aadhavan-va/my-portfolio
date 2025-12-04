"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="pointer-events-none fixed inset-x-0 bottom-2.5 md:bottom-6 z-50 flex justify-center">
            <div className="pointer-events-auto relative">
                {/* Glow behind the bubble */}
                <div className="absolute inset-0 -z-10  bg-linear-to-r from-cyan-500/40 via-sky-500/40 to-indigo-500/40 blur-2xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <nav
                    className="
            group
            relative flex items-center gap-6
            rounded-full border border-white/25
            bg-white/15
            px-6 py-3
            shadow-[0_18px_45px_rgba(15,23,42,0.55)]
            backdrop-blur-2xl
            transition-transform duration-300 ease-out
            
          "
                >
                    {/* Liquid highlight on top */}
                    <div
                        className="
              pointer-events-none
              absolute inset-x-4 -top-4 h-6
              rounded-full bg-white/40
              blur-xl opacity-60
            "
                    />

                    {/* Home */}
                    <NavItem href="/" label="Home">
                        <HomeIcon className="h-5 w-5" />
                    </NavItem>

                    {/* Divider bubble */}
                    <div className="h-8 w-px bg-white/20" />

                    {/* Blog */}
                    <NavItem href="/blogs" label="Blog">
                        <BlogIcon className="h-5 w-5" />
                    </NavItem>
                </nav>
            </div>
        </footer>
    );
}

type NavItemProps = {
    href: string;
    label: string;
    children: React.ReactNode;
};

function NavItem({ href, label, children }: NavItemProps) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="
        relative flex items-center gap-2
        text-sm font-medium
        text-slate-100/80
        transition-all duration-200
        hover:text-white
      "
        >
            <span
                className="
          flex h-9 w-9 items-center justify-center
          rounded-full bg-white/15
          shadow-[0_10px_30px_rgba(15,23,42,0.65)]
          backdrop-blur-xl
          transition-all duration-300
          group-hover:shadow-[0_14px_40px_rgba(15,23,42,0.8)]
          hover:-translate-y-0.5 hover:bg-white/25
          hover:shadow-[0_16px_45px_rgba(15,23,42,0.95)]
        "
            >
                <span
                    className="
            transition-transform duration-200
            group-hover:scale-105 group-hover:rotate-1
            hover:scale-110 hover:-rotate-2
          "
                >
                    {children}
                </span>
            </span>
            <span
                className="
          hidden text-xs tracking-wide uppercase
          text-slate-50/80 sm:inline
        "
            >
                {label}
            </span>
        </Link>
    );
}

// Simple inline icons so you don't need any extra icon libraries

type IconProps = { className?: string };

function HomeIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 11.5 12 4l9 7.5" />
            <path d="M5 10.75V20h14v-9.25" />
            <path d="M10 20v-5h4v5" />
        </svg>
    );
}

function BlogIcon({ className }: IconProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 4h9l5 5v11H5z" />
            <path d="M14 4v5h5" />
            <path d="M8 13h8" />
            <path d="M8 17h5" />
        </svg>
    );
}