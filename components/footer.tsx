"use client"

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 bg-neutral-700/50 py-8 text-center text-sm text-gray-600">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-base font-medium text-gray-400">
                    🎮 BisaTopup - Top-up Game Murah, Cepat, & Aman
                </p>
                <p className="mt-2 text-gray-500">
                    Nikmati pengalaman top-up game terbaik di Indonesia dengan harga bersahabat dan layanan cepat.
                </p>

                <div className="mt-6 flex justify-center gap-4 text-gray-500">
                    <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
                    <Link href="/status" className="hover:text-gray-400 transition-colors">Cek Pesanan</Link>
                    <Link href="/login" className="hover:text-gray-400 transition-colors">Masuk</Link>
                </div>

                <p className="mt-6 text-xs text-gray-400">
                    © {new Date().getFullYear()} BisaTopup. All rights reserved.
                </p>
            </div>
        </footer>

    )
}