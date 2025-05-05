import React from "react";

interface InvoiceProps {
    params: Promise<{ id: string }>
}

export default function InvoicePage({ params }: InvoiceProps) {
    const search = React.use(params);
    return (
        <h1>Invoice ID: {search.id}</h1>
    )
}