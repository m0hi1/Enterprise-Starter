"use client";
import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { MenuIcon, XIcon } from 'lucide-react';
// For the hamburger menu

const Navbar = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for menu toggle

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Main Navbar */}
            <nav className="bg-gradient-to-r from-blue-100 via-indigo-350 to-purple-250 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black p-2">

                <div className="container mx-auto flex justify-between items-center">

                    {/* Left Section */}

                    <div className="flex space-x-4 items-center">





                        {/* Hamburger Icon for Mobile */}
                        <button
                            className="md:hidden text-foreground dark:text-white"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <XIcon className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                        <h1 className="text-xl font-bold text-foreground dark:text-white">🧑‍💻MY ENT.</h1>
                        {/* Menu Links - Hidden on Mobile */}
                        <div className="hidden md:flex space-x-4 text-foreground dark:text-white">
                            <Link href="/docs">Services</Link>
                            <Link href="/components">Products</Link>
                            <Link href="/blocks">Portfolio</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Search input hidden on mobile */}
                        <div className="relative md:block">
                            <input
                                type="text"
                                className="border border-border rounded-md px-2 py-1 text-foreground dark:bg-gray-800 dark:text-gray-100"
                                placeholder="Search Services.."
                            />
                        </div>

                        {/* GitHub Link */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6 text-foreground dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583v-2.06c-3.338.728-4.042-1.614-4.042-1.614-.546-1.387-1.332-1.757-1.332-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.239 1.838 1.239 1.07 1.834 2.807 1.304 3.492.998.107-.774.419-1.304.762-1.603-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.382 1.236-3.223-.124-.305-.536-1.529.117-3.185 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.656.245 2.88.12 3.185.77.841 1.234 1.913 1.234 3.223 0 4.606-2.807 5.623-5.479 5.921.43.37.816 1.096.816 2.21v3.293c0 .322.218.7.824.581C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full focus:outline-none focus:ring"
                        >
                            {darkMode ? (
                                <MoonIcon className="h-6 w-6 text-white" />
                            ) : (
                                <SunIcon className="h-6 w-6 text-gray-800" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-2 text-foreground dark:text-white">
                        <Link href="/docs" className="block px-4 py-2">Services</Link>
                        <Link href="/components" className="block px-4 py-2">Products</Link>
                        <Link href="/blocks" className="block px-4 py-2">Portfolio</Link>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
