import Image from 'next/image'
import Items from '@/components/Items'
import Landing from '@/components/Landing'
export default function Home() {
  return (
    <main className="bg-gray-950 pl-12 flex flex-col justify-start items-start gap-2  pb-5">

    <Items/>

    </main>
  )
}