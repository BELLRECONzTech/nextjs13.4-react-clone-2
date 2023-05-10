import Features from '@/components/Features'
import Helps from '@/components/Helps'
import Homepage from '@/components/Homepage'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Homepage/>
      <Features/>
      <Pricing />
      <Testimonials />
      <Helps/>
    </main>
  )
}
