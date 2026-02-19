import { products } from "@/lib/products";
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log("id",req.query)
    const { id } = req.query;

    const product = products.find(e => e.id === id)

    if (!product) {
        return res.json({ message: 'Product not found' })
    }

    return res.json(product)
}