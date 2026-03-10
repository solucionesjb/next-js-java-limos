import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const productos = await prisma.producto.findMany()
    return NextResponse.json(productos)
}

export async function POST(request: Request) {
    const { nombre, descripcion, precio } = await request.json()
    const producto = await prisma.producto.create({
        data: {
            nombre,
            descripcion,
            precio,
        },
    })
    return NextResponse.json(producto)
}