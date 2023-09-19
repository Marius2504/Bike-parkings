import { NavBar } from '@/components/navBar';
import { useRouter,useLocation } from 'next/router'


function ParkingId({listParkings})
{
    const router = useRouter();
    //const parkingName = router.query.parkingName;

    listParkings = listParkings.results
    console.log(listParkings)
    const parkingName = listParkings.find((p) => p.name === router.query.parkingName);;
    console.log(parkingName)

    return <><NavBar/>{
        <div>
          <h1>Parking detail</h1>
          <p>Name: {parkingName.name}</p>
          <p>Description: {parkingName.description}</p>
          <p>Category: {parkingName.categorie}</p>
          <p>Available amount of parking spots: {parkingName.availablecapacity}</p>
          <p>Taken spots: {Math.floor(100 - Number(parkingName.availablecapacity)/Number(parkingName.totalcapacity) * 100)} %</p>
          <button>
            <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${parkingName.location.lat},${parkingName.location.lon}`} rel="noopener noreferrer">
                Google
            </a>
          </button>
        </div>
    
        
      }</>
}
export default ParkingId;

export async function getStaticPaths()
{
  return {
    paths:[
      {params:{parkingName:"Reep"},
    }
    ],
    fallback:false
  }
}

export async function getStaticProps(){
  const response =await fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20')

    const jsonParkings = await response.json()

    return{
        props:{
            listParkings:jsonParkings
        }
    }
}
