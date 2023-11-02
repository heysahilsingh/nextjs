import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()

  return NextResponse.json(data)

  // return Response.json(data)
}