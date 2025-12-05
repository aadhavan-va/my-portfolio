// components/BlogBubble.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type BlogBubbleProps = {
    title: string;
    date: string;
    href: string;          // external URL
    prefix?: ReactNode;    // optional icon / badge on the left
};

export function BlogBubble({ title, date, href, prefix }: BlogBubbleProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
        group relative flex md:items-center justify-between gap-1 flex-col md:flex-row md:gap-6
        rounded-xl border border-white/20
        bg-white/5
        px-6 py-4
        text-sm text-slate-50
        shadow-[0_18px_45px_rgba(15,23,42,0.75)]
        backdrop-blur-2xl
        transition-all duration-300 ease-out
        hover:scale-[1.01] hover:border-white/40 hover:bg-white/10
        hover:shadow-[0_24px_65px_rgba(15,23,42,0.9)]
        overflow-hidden
        cursor-pointer
        before:pointer-events-none
        before:absolute before:inset-0
        before:-z-10 before:rounded-xl
        before:bg-linear-to-r before:from-white/10 before:via-white/5 before:to-white/0
        after:pointer-events-none
        after:absolute after:inset-0
        after:-translate-x-full after:bg-linear-to-r
        after:from-transparent after:via-white/40 after:to-transparent
        after:opacity-0 after:transition-all after:duration-700 after:ease-out
        hover:after:translate-x-full hover:after:opacity-100
        after:content-['']
      "
        >
            {/* Left: icon / label + title */}
            <div className="flex min-w-0 items-center gap-4">
                {prefix && (
                    <div
                        className="
              flex h-8 w-8 shrink-0 items-center justify-center
              rounded-full bg-white/10
              shadow-[0_10px_30px_rgba(15,23,42,0.8)]
              backdrop-blur-xl
              transition-transform duration-300
              group-hover:-translate-y-0.5 group-hover:scale-105
            "
                    >
                        {prefix}
                    </div>
                )}

                <p
                    className="
            md:truncate text-[0.93rem] font-medium
            tracking-tight text-slate-100
          "
                >
                    {title}
                </p>
            </div>

            {/* Right: date */}
            <span
                className="
          shrink-0 text-[0.75rem] tracking-wide
          text-slate-200/70
          transition-colors duration-200
          group-hover:text-white
        "
            >
                {date}
            </span>
        </Link>
    );
}