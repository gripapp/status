import type { NextPage } from 'next'
import Image from 'next/image'
import IncidentsSection from "../src/incidents"
import ServicesSection from "../src/services"

const Home: NextPage = () => {
  return (
    <div className='bg-slate-50 h-full w-full'>
      <div className=" py-12">
        <img src="/status/GRIP.png" alt='GRIP' className="h-10 mx-auto" />
      </div>

      <div>
        <ServicesSection />
      </div >
    </div>
  )
}

export default Home;
