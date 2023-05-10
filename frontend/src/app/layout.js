import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/style/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



export const metadata = {
  title: 'Landing pages 2',
  description: 'Landing pages 2',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet"></link>
      <body  >
        <main>
          <Navbar />
          <div className='page'>
            {children}
            <Footer />
            </div>
        </main>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </body>
      </head>
    </html>
    </>
  )
}
