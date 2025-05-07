import { NextRequest, NextResponse } from "next/server";

type ProductProps = {
    product_id: string
    category: string	
    product_name: string
    description: string
    status: string
    member_price: number	
    gold_price: number
    platinum_price: number
    vip_price: number
}

export async function POST(request: NextRequest) {
    try {
        const { gameSlug } = await request.json();

        if (!gameSlug) {
            return NextResponse.json({
                status: 400,
                message: "Invalid request data. Please provide the game slug"
            })
        }

        const response = await fetch("https://jfstore.my.id/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ api_key: "JFxl035uzRycPiUyzKMFKEY" })
        })

        const result = await response.json();

        const products = result.data
          .filter((data: ProductProps) => 
            data.category.toLowerCase().replace(" ", "-") === gameSlug
        )
        .sort((a: ProductProps, b: ProductProps) => {
            const getNumber = (id: string) => parseInt(id.replace(/\D/g, ""));
            return getNumber(a.product_id) - getNumber(b.product_id);
        });


        return NextResponse.json({
            status: 200,
            data: products
        })
    } catch(error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({
                status: 500,
                message: error.message || "An error occurred"
            })
        } else {
            return NextResponse.json({
                status: 500,
                message: "An unknown error occurred"
            })
        }
    }
}