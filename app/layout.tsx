import { Analytics } from '@vercel/analytics/next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-inter' 
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-serif' 
})

export const metadata: Metadata = {
  metadataBase: new URL('https://verum-grupo.vercel.app'),
  title: 'Grupo Verum | Auditoria Bancária, Redução de Dívidas e Proteção Patrimonial',
  description:
    'Reduza sua dívida bancária empresarial com auditoria técnica dos últimos 10 anos. Especialistas em negociação, proteção patrimonial e reestruturação de dívidas para empresas com endividamento de R$ 1M a R$ 50M+.',
  generator: 'Grupo Verum',
  keywords: [
    'auditoria bancária',
    'redução de dívida empresarial',
    'proteção patrimonial',
    'reestruturação de dívidas',
    'dívida bancária empresa',
    'negociação com banco',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111d32',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`,
          }}
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/1c526ef2-6b7e-45da-af4a-faf71d6f51ab/players/696155cb23fc590cf35ff8b8/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/1c526ef2-6b7e-45da-af4a-faf71d6f51ab/696155bd2e6d8eb8b76dce04/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://license.vturb.com" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
