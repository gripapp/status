import type { NextPage } from 'next'
import Image from 'next/image'
import IncidentsSection from "../src/incidents"
import ServicesSection from "../src/services"

const Home: NextPage = () => {
  return (
    <div className='bg-slate-50 h-full w-full'>
      <div className=" py-12">
        <a href='https://getgrip.de'><img src="/GRIP.png" alt='GRIP' className="h-10 mx-auto" /></a>
      </div>

      <div>
        <ServicesSection />
      </div >
      <div className='mt-24 mx-auto max-w-xl'>
        <div className='text-xs text-gray-400'>
          <p>&copy; T8 Lab GmbH
          <a href='https://getgrip.de/impressum' className='ml-3 text-gray-400 hover:underline'>Impressum</a>
          <a href='https://getgrip.de/datenschutz' className='ml-3 text-gray-400 hover:underline'>Datenschutz</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
