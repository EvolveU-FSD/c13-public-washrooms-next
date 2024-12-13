import { NextResponse } from "next/server"

import { findWashroomById } from "../washroomData.js";
  
export async function GET(req, { params }) {
    const { id } = await params
    const washrooms = await findWashroomById(id)
    return NextResponse.json(washrooms)
}