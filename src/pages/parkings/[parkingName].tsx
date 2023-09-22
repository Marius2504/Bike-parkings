import { NavBar } from '@/components/navBar';
import { useRouter,useLocation } from 'next/router'
import { Button } from '../../../node_modules/@mui/material/index';


function ParkingId({listParkings}:any)
{
    const router = useRouter();
    listParkings = listParkings.results
    const parkingName = listParkings.find((p:any) => p.name === router.query.parkingName);;

    return <><NavBar/>{
        <div className='textBike text'>
          <h1>Parking details</h1>
          <p>Name: {parkingName.name}</p>
          <p>Description: {parkingName.description}</p>
          <p>Category: {parkingName.categorie}</p>
          <p>Available amount of parking spots: {parkingName.availablecapacity}</p>
          <p>Taken spots: {Math.floor(100 - Number(parkingName.availablecapacity)/Number(parkingName.totalcapacity) * 100)} %</p>
          <Button variant='containd' className='copyButton'>
            <a target="_blank" style={{textDecoration:'none',color:'white'}} href={`https://www.google.com/maps/search/?api=1&query=${parkingName.location.lat},${parkingName.location.lon}`} rel="noopener noreferrer">
                Google map
            </a>
          </Button>
        </div>
    
        
      }</>
}
export default ParkingId;

export async function getStaticPaths() {
  const response = await fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20');
  const jsonParkings = await response.json();
  const parkings = jsonParkings.results;

  const paths = parkings.map((parking:any) => {
    return {
      params: { parkingName: parking.name }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
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
