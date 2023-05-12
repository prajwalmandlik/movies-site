import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import { ContextProvider } from '../components/Clients'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies site',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ContextProvider>
            <Header />
            {children}
            <Footer />
          </ContextProvider>
        </Providers>
      </body>
    </html>
  )
}
