"use client";

import { useRouter } from "next/navigation";

const GlobalError = () => {
    const router = useRouter();
    return (
        <div>
            Oops! Something went wrong...
            <button onClick={() => router.push('/products')}>Retry</button>
        </div>
    )
}

export default GlobalError
