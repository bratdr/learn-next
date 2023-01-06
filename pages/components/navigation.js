import React from "react";
import Link from "next/link";

const navigation = () => {
  return (
    <div>
      {/* Navigation bar */}
      <div className="flex flex-row justify-between items-center bg-black px-8 text-slate-50 h-20">
        <Link href="/">Learn Next.js</Link>
        <ul className="flex flex-row gap-6">
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
