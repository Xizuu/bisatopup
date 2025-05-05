import React from "react";

interface GameSlugProps {
    params: Promise<{ gameSlug: string }>
}

export default function GameProduct({ params }: GameSlugProps) {
    const search = React.use(params);
    return (
        <h1>{search.gameSlug}</h1>
    )
}