import { NextResponse } from 'next/server'
export async function POST() {
  return NextResponse.json({ success: false, message: 'Contactanos desde nuestra página de Facebook.', contactUrl: 'https://www.facebook.com/61560108969186/' }, { status: 503 })
}
