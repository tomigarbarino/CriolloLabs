import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)

        // ?title=<title>
        const hasTitle = searchParams.has('title')
        const title = hasTitle
            ? searchParams.get('title')?.slice(0, 100)
            : 'Criollo Labs - Ingeniería Artesanal'

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        backgroundColor: '#050505',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        color: 'white',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            justifyItems: 'center',
                            position: 'absolute',
                            top: '60px',
                            left: '60px',
                            fontSize: 30,
                            fontWeight: 700,
                            letterSpacing: '-0.025em',
                            color: 'rgba(255,255,255,0.4)',
                            textTransform: 'uppercase',
                        }}
                    >
                        CRIOLLO LABS
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 80,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 1.1,
                            whiteSpace: 'pre-wrap',
                            margin: '0 60px',
                            textShadow: '0 10px 30px rgba(102, 16, 190, 0.5)',
                        }}
                    >
                        {title}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 30,
                            color: '#a855f7',
                            marginTop: 40,
                            fontWeight: 600,
                        }}
                    >
                        Ingeniería de Producto Artesanal
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    } catch (e: unknown) {
        console.error(e)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
}
