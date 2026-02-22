import { products } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}) {

    const {id}  = await params;

    let product = products.find(e => e.id === id)


    if (!product) {
        return NextResponse.json({ message: 'Product not found' })
    }

    return NextResponse.json(product)
}