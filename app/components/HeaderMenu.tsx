"use client";
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderMenu() {
    const pathname = usePathname();
  return (
    <div>
        <ul className="flex justify-items-center gap-5 md:gap-7">
          <li>
            <Link style={{ borderBottom: pathname === '/' ? '3px solid #ff001b' : 0 }} className='font-medium text-xs tracking-wide text-white-text-color uppercase hover:cursor-pointer' href="/"
              >HOME</Link>
          </li>
          <li>
            <Link style={{ borderBottom: pathname === '/library' ? '3px solid #ff001b' : 0 }} className='font-medium text-xs tracking-wide text-white-text-color uppercase hover:cursor-pointer' href="/library"
              >MY LIBRARY</Link>
          </li>
        </ul>
      </div>
  )
}

export default HeaderMenu