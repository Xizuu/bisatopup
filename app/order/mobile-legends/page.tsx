"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {payments} from "@/lib/payments-list";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface DataProps {
    product_id: string;
    category: string;
    product_name: string;
    status: string;
    member_price: number;
}

export default function GameProduct() {

    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<DataProps[]>([]);
    // const [showModal, setShowModal] = useState(false)
    const [userId, setUserId] = useState<string>("");
    const [serverId, setServerId] = useState<string>("");
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({gameSlug: "mobile-legends"})
                });
                const result = await res.json();
                // console.log(result)
                setResponse(result.data)
            } catch (error) {
                console.log("Failed to fetch products: ", error)
            }
        }

        fetchProducts()
            .then(() => {
                setLoading(false)
            })
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </div>
        )
    }

    return (
        <main className="pt-24 px-4">
            <Navbar/>
            <div className="max-w-5xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Gambar dan Deskripsi */}
                    <div>
                        <div className="text-center lg:text-left">
                            <Image
                                src="/games/ml.png"
                                alt="Mobile Legends"
                                width={200}
                                height={200}
                                className="rounded shadow mx-auto"
                            />
                        </div>
                        <h5 className="mt-4 font-semibold">Mobile Legends</h5>
                        <p className="mt-2 text-muted-foreground text-sm">
                            Cukup masukan ID, pilih nominal yang diinginkan, lakukan pembayaran, lalu Diamonds/Starlight
                            Member/Twilight Pass akan masuk ke akun Mobile Legends Anda dalam 5–15 menit setelah
                            pembayaran
                            berhasil.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Langkah 1 */}
                        <Card className="bg-neutral-700/50 border border-neutral-600">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-orange-500">
                                    <div
                                        className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                                        1
                                    </div>
                                    <h2 className="font-bold">MASUKKAN ID DAN SERVER ANDA</h2>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        placeholder="Masukkan UserID"
                                        className="border border-neutral-600 text-white placeholder:text-neutral-400"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        placeholder="Masukkan ServerID"
                                        maxLength={5}
                                        className="border border-neutral-600 text-white placeholder:text-neutral-400"
                                        value={serverId}
                                        onChange={(e) => setServerId(e.target.value)}
                                    />
                                </div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm">Petunjuk</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <Image src="/assets/images/t1.png" alt="Petunjuk 1" width={500} height={300}/>
                                        <Image src="/assets/images/t2.png" alt="Petunjuk 2" width={500} height={300}/>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>


                        <Card className="bg-neutral-700/50 border border-neutral-600">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-orange-500">
                                    <div
                                        className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                                        2
                                    </div>
                                    <h2 className="font-bold">PILIH NOMINAL</h2>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {response.map((item) => (
                                        <div
                                            key={item.product_id}
                                            className={`border ${selectedProduct === item.product_id ? "border-orange-500" : "border-neutral-600"} rounded-lg p-3 hover:border-orange-500 cursor-pointer bg-neutral-800/30`}
                                            onClick={() => setSelectedProduct(item.product_id)}
                                        >
                                            <div
                                                className="text-xs text-gray-200 font-medium">{item.product_name}</div>
                                            <div
                                                className="text-orange-500 font-semibold mt-2">Rp {item.member_price.toLocaleString()}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Langkah 3 */}
                        <Card className="bg-neutral-700/50 border border-neutral-600">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-orange-500">
                                    <div
                                        className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                                        3
                                    </div>
                                    <h2 className="font-bold">PILIH METODE PEMBAYARAN</h2>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-4">
                                    {payments.map((method) => {
                                        const isSelected = selectedPayment === method.id;
                                        return (
                                            <div
                                                key={method.id}
                                                onClick={() => setSelectedPayment(method.id)}
                                                className={`w-full flex items-center justify-between border rounded-md p-3 cursor-pointer transition-colors 
                                                    ${isSelected ? "border-orange-500 bg-neutral-700/50" : "border-neutral-600 bg-neutral-800/40"}`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <Image
                                                        src={`/payments/${method.image}`}
                                                        alt={method.name}
                                                        width={40}
                                                        height={40}
                                                    />
                                                    <div className="font-semibold text-gray-200">{method.name}</div>
                                                </div>
                                                {selectedProduct && (
                                                    <div className="text-sm text-gray-400">
                                                        {(() => {
                                                            const product = response.find(p => p.product_id === selectedProduct);
                                                            if (!product) return null;

                                                            const basePrice = product.member_price;
                                                            const fee = method.id === "QRISC" ? Math.ceil(basePrice * 0.007) : 0;
                                                            const subtotal = basePrice + method.fee + fee;
                                                            const finalPrice = Math.ceil(subtotal * 1.03);

                                                            return <>Rp {finalPrice.toLocaleString()}</>;
                                                        })()}
                                                    </div>
                                                )}


                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Langkah 4 */}
                        <Card className="bg-neutral-700/50 border border-neutral-600">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-orange-500">
                                    <div
                                        className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                                        4
                                    </div>
                                    <h2 className="font-bold">MASUKKAN NOMOR WHATSAPP</h2>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="08xxxxxxxxx"
                                    className="border border-neutral-600 text-white placeholder:text-neutral-400"
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    Wajib mengisi nomor WhatsApp untuk mendapatkan bukti pembelian.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Submit */}
                        <div className="text-sm text-gray-400">
                            * Dengan mengklik tombol order, Anda telah menyetujui{' '}
                            <Link href="/terms-services" className="underline">Syarat & Ketentuan</Link> yang berlaku
                        </div>
                        <Button
                            disabled={!userId || !serverId || !selectedProduct || !selectedPayment}
                            variant="outline"
                            className="w-full text-black"
                            onClick={() => {
                                console.log(JSON.stringify({
                                    userId,
                                    serverId,
                                    selectedProduct,
                                    selectedPayment
                                }))
                            }}>
                            Order!
                        </Button>
                    </div>
                </div>

            </div>

            <Footer/>

        </main>
    )
}