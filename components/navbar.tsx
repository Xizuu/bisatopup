"use client"

import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Earth, HomeIcon, LogIn, Menu, Search, X} from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean | false>(false);
    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-700/50 shadow-md z-50">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/assets/images/svmmer.png" alt="Logo" width={160} height={40}/>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-3 items-center">
                    <Link href="/">
                        <Button variant="ghost" className="rounded-full">
                            <HomeIcon/> Home
                        </Button>
                    </Link>
                    <Link href="/status">
                        <Button variant="ghost" className="rounded-full">
                            <Search/> Cek Pesanan
                        </Button>
                    </Link>
                    <Link href="/check-region">
                        <Button variant="ghost" className="rounded-full">
                            <Earth/> Cek Region
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="ghost" className="rounded-full">
                            <LogIn/> Masuk
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
                    <Link href="/">
                        <Button variant="ghost" className="rounded-full">
                            <HomeIcon/> Home
                        </Button>
                    </Link>
                    <Link href="/status">
                        <Button variant="ghost" className="rounded-full">
                            <Search/> Cek Pesanan
                        </Button>
                    </Link>
                    <Link href="/check-region">
                        <Button variant="ghost" className="rounded-full">
                            <Earth/> Cek Region
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="ghost" className="rounded-full">
                            <LogIn/> Masuk
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    )
}