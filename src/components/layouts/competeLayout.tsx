"use client";
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const menus = [
  {
    name: "Challenge with friends",
    path: "/compete/friends",
  },
  {
    name: "Compete online",
    path: "/compete/online",
  },
];

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    setIsMounted(true); // Indicate that component has mounted
  }, []);

  useEffect(() => {
    if (isMounted && (pathname === "/app" || pathname === "/")) {
      router.push(menus[0].path);
    }
  }, [isMounted, pathname, router]);

  if (!isMounted) {
    return null; // Avoid server-client mismatch by not rendering until mounted
  }

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-[300px] bg-[#292828] border-r border-r-slate-300 p-6 z-20 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <div className="font-bold text-2xl text-white flex flex-row items-center">
          <Image src="/codearena_logo.svg" width={50} height={50} alt="logo" />
          <h1 className="pl-2">Code Arena</h1>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className={`text-white px-4 py-2 rounded-sm hover:bg-[#5B5B5B] font-bold transition-colors duration-300 ease-in-out ${
                pathname === menu.path ? "bg-[#5B5B5B] text-[#09A7B1] " : ""
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </aside>

      <div className="">
        <header className="md:ml-[300px] right-0 top-0 h-[75px] border-b bg-[#575656] border-b-slate-300 p-6 z-10 flex justify-between ">
          <div className="mx-auto my-auto">
            <h2 className="font-semibold text-2xl text-white ">
              Create Room and Share URL
            </h2>
          </div>
          {/* Mobile Menu Button */}
          <div
            className="md:hidden block focus:outline-none cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            role="button"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </header>

        {/* Main content */}
        <div className="bg-[#414040] min-h-svh px-3 absolute left-0 md:left-[300px] right-0 top-[70px] transition-all duration-300 ease-in-out">
          {children}
        </div>
      </div>

      {/* Overlay for mobile to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminLayout;
