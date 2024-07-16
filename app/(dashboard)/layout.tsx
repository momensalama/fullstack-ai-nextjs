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

  // const activeLinkStyle = "bg-black/10 text-black";

  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
        <h1 className="px-4 my-4 text-3xl">MOOD</h1>
        <nav>
          <ul className="px-4">
            {links.map((link) => (
              <li
                key={link.label}
                className={`text-xl my-2 py-1 px-2 rounded ${
                  link.href === pathName ? "bg-black/10 text-black" : ""
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <main className="h-[calc(100vh-60px)]">{children}</main>
      </div>
    </div>
  );
};
export default DashboardLayout;
