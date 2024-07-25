"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/history", label: "History" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <>
      <header className="border-b border-black/10 flex justify-around items-center">
        <nav className="flex items-center gap-4 sm:gap-20">
          <h1 className="text-3xl">MOOD</h1>
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-xl block border-b-2 border-black border-opacity-0 hover:text-[#000] hover:border-opacity-100 py-4 transition-colors ${
                    link.href === pathName
                      ? " border-opacity-100 text-[#000]"
                      : "text-[#666666]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <UserButton />
      </header>
      <main>{children}</main>
    </>
  );
};
export default DashboardLayout;
