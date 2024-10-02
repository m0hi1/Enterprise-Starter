"use client";

import Link from 'next/link';
import { useState } from 'react';

const BottomBar = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false); // Option to toggle dark mode

    return (
        <footer className={`bg-gradient-to-r from-blue-100 via-indigo-350 to-purple-250 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black p-8 `}>
            {/* Top Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Services</h2>
                    <ul className="space-y-3">
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="#">Website Development</Link></li>
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="#">App Development</Link></li>
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="#">Cross-Platform App Development</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-3">
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="/about">About Us</Link></li>
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="/contact">Contact Us</Link></li>
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="/careers">Careers</Link></li>
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="/blog">Blog</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Resources</h2>
                    <ul className="space-y-3">
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="#">Blog</Link></li>
                        <li className="hover:text-yellow-300 transition duration-300"><Link href="#">Training</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Left Text */}
                <div className="text-sm mb-4 md:mb-0">
                    © 2024 My Enterprise. All Rights Reserved. | <Link href="/privacy" className="underline hover:text-yellow-300">Privacy Policy</Link>
                </div>

                {/* Social Media & Contact Info */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Email & Phone */}
                    <div className="flex flex-col space-y-2">
                        <Link href="mailto:info@enterprise.com" className="hover:text-yellow-300 transition duration-300">info@enterprise.com</Link>
                        <Link href="tel:+1234567890" className="hover:text-yellow-300 transition duration-300">+123-456-7890</Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <Link href="https://facebook.com" className="hover:text-yellow-300 transition duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7V5h2V3.5A3.5 3.5 0 0 1 12.5 0h2V3h-2a1 1 0 0 0-1 1V5h3l-1 3h-2v10H9V8z" /></svg>
                        </Link>
                        <Link href="https://twitter.com" className="hover:text-yellow-300 transition duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.634 4.74a9.06 9.06 0 0 1-2.828.826A5.01 5.01 0 0 0 23.066 3a9.058 9.058 0 0 1-3.034 1.243A4.705 4.705 0 0 0 12.078 9.57a13.236 13.236 0 0 1-9.41-4.85A4.4 4.4 0 0 0 4.1 8.53a4.677 4.677 0 0 1-2.066-.57v.057A4.708 4.708 0 0 0 6.063 12a5.27 5.27 0 0 1-1.177.11 4.952 4.952 0 0 1-.893-.083 4.678 4.678 0 0 0 4.419 3.235A9.347 9.347 0 0 1 0 19.29a13.048 13.048 0 0 0 7.292 2.064c8.752 0 13.542-7.344 13.542-13.718 0-.207-.005-.414-.014-.62a9.634 9.634 0 0 0 2.478-2.547z" /></svg>
                        </Link>
                        <Link href="https://instagram.com" className="hover:text-yellow-300 transition duration-300">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.2 0 3.584.012 4.849.07 1.366.062 2.633.312 3.608 1.287.976.976 1.225 2.242 1.287 3.608.058 1.265.07 1.65.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.311 2.633-1.287 3.608-.976.976-2.242 1.225-3.608 1.287-1.265.058-1.65.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.311-3.608-1.287-.976-.976-1.225-2.242-1.287-3.608-.058-1.265-.07-1.65-.07-4.849s.012-3.584.07-4.849c.062-1.366.311-2.633 1.287-3.608.976-.976 2.242-1.225 3.608-1.287 1.265-.058 1.65-.07 4.849-.07zm0-2.163C8.756 0 8.348.011 7.042.07 5.68.13 4.437.433 3.386 1.484 2.335 2.535 2.032 3.778 1.972 5.14.913 6.446.9 7.152.9 12s.011 5.554.07 6.859c.06 1.362.363 2.605 1.414 3.656 1.051 1.051 2.294 1.354 3.656 1.414 1.305.058 1.712.07 4.86.07s3.555-.012 4.86-.07c1.362-.06 2.605-.363 3.656-1.414 1.051-1.051 1.354-2.294 1.414-3.656.058-1.305.07-1.712.07-4.86s-.012-3.555-.07-4.86c-.06-1.362-.363-2.605-1.414-3.656-1.051-1.051-2.294-1.354-3.656-1.414-1.305-.058-1.712-.07-4.86-.07z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default BottomBar
