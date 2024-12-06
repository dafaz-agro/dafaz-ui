import '../styles/global.css'
import { Roboto, Poppins, League_Spartan, KoHo } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

const koHo = KoHo({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})


import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto} ${poppins} ${leagueSpartan} ${koHo}`}>
      <Component {...pageProps} />;
    </main>
  )
}
