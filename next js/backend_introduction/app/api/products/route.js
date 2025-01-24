import { NextResponse, NextRequest } from "next/server";

import { configDotenv } from "dotenv";
configDotenv({ path: './.env' });

const products = [
    {
        id: 1,
        product: "Car",
        price: 100000,
    },
    {
        id: 2,
        product: "Bike",
        price: 20000,
    },
    {
        id: 3,
        product: "Jeep",
        price: 300000,
    }
]

export function GET() {


    return NextResponse.json({ products }, { status: 200 })
}
export async function POST(req, res, next) {

    const product = await req.json()
    products.push({ ...product, id: products.length })

    return NextResponse.json({ newProduct: product, message: "Product added succesfully" }, { status: 201 })
}