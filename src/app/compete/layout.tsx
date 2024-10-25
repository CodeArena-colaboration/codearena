'use client'
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // To get current route and navigate
import Image from "next/image";

interface AdminLayoutProps {
    children: ReactNode;
    title: string;
}

const menus = [
    {
        name: 'Challange with friends',
        path: '/compete/friends'
    },
    {
        name: 'Compete online',
        path: '/compete/online'
    },
    
];

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
    const pathname = usePathname(); // Get current route
    const router = useRouter(); // To navigate programmatically
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle

    useEffect(() => {
        // Automatically navigate to the first menu item if no path is selected
        if (pathname === "/app" || pathname === "/") {
            router.push(menus[0].path);
        }
    }, [pathname, router]);

    return (
        <>
            {/* Header */}
            <header className="fixed left-0 right-0 top-0 h-[70px] bg-white border-b border-b-slate-300 p-6 z-10 flex justify-between">
                <div>
                    <h2 className="font-semibold text-xl">Compete & Grow in your own platform</h2>
                </div>
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden block focus:outline-none"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
                </button>
            </header>

            {/* Sidebar */}
            <aside 
                className={`fixed top-0 bottom-0 left-0 w-[280px] bg-neutral-800 border-r border-r-slate-300 p-6 z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}
            >
                <h1 className="font-bold text-2xl text-white">
                <Image
                    src="/codearena_logo.svg"
                    width={50}
                    height={50}
                    alt="logo"
                />
                    Code Arena
                </h1>
                <div className="flex flex-col gap-2 mt-8">
                    {menus.map((menu, index) => (
                        <Link 
                            key={index} 
                            href={menu.path}
                            className={`px-4 py-2 rounded-sm hover:bg-green-200 hover:text-black transition-colors duration-300 ease-in-out ${
                                pathname === menu.path ? 'bg-green-200 text-black' : ''
                            }`}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </aside>

            {/* Main content */}
            <main className="absolute left-0 md:left-[280px] right-0 top-[70px] p-6 transition-all duration-300 ease-in-out">
                {children}
            </main>
            
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
