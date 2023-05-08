import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/style/globals.css'




export const metadata = {
  title: 'Landing pages 2',
  description: 'Landing pages 2',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body  >
        <main>
          <Navbar />
          <div className='page'>
            {children}
            <Footer />
            </div>
        </main>
      </body>
    </html>
    </>
  )
}
