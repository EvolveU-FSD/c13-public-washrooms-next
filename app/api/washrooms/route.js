import { NextResponse } from "next/server"

import { findAllWashrooms } from "./washroomData.js";
  
export async function GET(req) {
    const washrooms = await findAllWashrooms()
    return NextResponse.json(washrooms)
}