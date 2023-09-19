import '@/styles/globals.css'
import '@/styles/bikes.css'
import '@/styles/nav.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
