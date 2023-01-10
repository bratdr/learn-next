import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const navigation = () => {
  return (
    <div>
      {/* Navigation bar */}
      <div className="fixed w-full z-10 top-0 flex flex-row justify-between items-center bg-white px-8 text-black h-20 shadow-sm">
        <Link className="font-bold text-xl" href="/">
          Batdr.
        </Link>
        <FiMenu className="block sm:hidden" size="24" />
        <ul className="hidden sm:flex sm:flex-row gap-6 text-black">
          <li>
            {/* using next/link feature from next.js */}
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navigation;
