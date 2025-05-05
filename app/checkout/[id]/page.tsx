import React from "react";

interface CheckoutProps {
    params: Promise<{ id: string }>
}

export default function CheckoutPage({ params }: CheckoutProps) {
    const search = React.use(params);
    return (
        <h1>Checkout ID: {search.id}</h1>
    )
}