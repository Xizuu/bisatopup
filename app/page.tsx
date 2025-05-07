import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/product-list";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <main className="pt-24 px-4">
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Daftar Layanan */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Daftar Layanan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6">
          {products.map((game) => (
            <Link
              key={game.title}
              href={game.url}
              className="block rounded-xl overflow-hidden border shadow-sm transition-transform hover:scale-[1.02]"
            >
              <div
                className="aspect-square lg:aspect-auto flex flex-col justify-center items-center bg-cover bg-center px-4 py-2"
                style={{ backgroundImage: `url(${game.bg})` }}
              >
                <Image
                  src={game.icon}
                  alt={game.title}
                  width={64}
                  height={64}
                  className="rounded-lg mb-2"
                />
                <p className="text-white font-bold text-center">{game.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}