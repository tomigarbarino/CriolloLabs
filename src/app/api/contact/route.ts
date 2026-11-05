import { NextResponse } from 'next/server'
import { getContactUrl } from '@/lib/contact'

export async function POST(request: Request) {
  return NextResponse.json(
    {
      success: false,
      message: 'El formulario no está habilitado. Contactanos por WhatsApp.',
      contactUrl: getContactUrl({
        source: 'web-formulario',
        searchParams: new URL(request.url).searchParams,
      }),
    },
    { status: 503 }
  )
}
