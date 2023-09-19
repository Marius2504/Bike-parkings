import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/navBar'

const inter = Inter({ subsets: ['latin'] })

function Home({Dampoort,Sint})
{
  Dampoort = Dampoort.results[0]
  Sint = Sint.results[0]

  return <><NavBar/><h1 className='title'>Bikes</h1>{
    <div className ='bikesContainer'>
      <div className = "imageContainer">
        
        <div className='bikeInfo'>
          <h1>Blue Bike deelfietsen Gent Dampoort<button onClick={() => {navigator.clipboard.writeText("Gent Dampoort")}}>Copy</button></h1>
          <p>Name:{Dampoort.name}</p>
          <p>Amount of available bikes:{Dampoort.bikes_available}</p>
          <p>Total amount of bikes:{Number(Dampoort.bikes_in_use) + Number(Dampoort.bikes_available)}</p>
        </div>
        <Image src="/img1.jpg" alt="no image found" width={2000} height={2000} className='image'  />
      </div>
      

      <div className = "imageContainer">
        <div className='bikeInfo'>
          <h1>Blue Bike deelfietsen Ghent Sint Pieters<button onClick={() => {navigator.clipboard.writeText("Sint Pieters")}}>Copy</button></h1>
          <p>Name:{Sint.name}</p>
          <p>Amount of available bikes:{Sint.bikes_available}</p>
          <p>Total amount of bikes:{Number(Sint.bikes_in_use) + Number(Sint.bikes_available)}</p>
        </div>
        <Image src="/img2.jpg" alt="no image found" width={2000} height={2000} className='image' />
      </div>

    </div>
  }</>
}
export default Home

export async function getStaticProps() {
  const responseDampoort = await fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?limit=20')
  const responseSint = await fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?limit=20')

  const jsonDam = await responseDampoort.json()
  const jsonSint = await responseSint.json()

  return {
    props: {
      Dampoort: jsonDam,
      Sint: jsonSint
    }
  }
}