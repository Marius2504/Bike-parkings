import { NavBar } from '@/components/navBar';
import Link  from 'next/link'

function Parkings({listParkings}) {
    listParkings = listParkings.results

    listParkings = listParkings.filter((parking) => {
      
        const occupancyPercentage = (parking.occupation / parking.totalcapacity) * 100;
        return occupancyPercentage <= 50; 
      });
    return (
        <><NavBar/>
          <h1>List of parkings</h1>
          {listParkings.map((parking) => (
            <Link href={{pathname:`/parkings/${parking.name}`}} key={parking.name} style={{ textDecoration: 'none', color : 'inherit' }}>
              <h3>
                {parking.name}
              </h3>
            </Link>
          ))}
        </>
      );
}
export default Parkings;

export async function getStaticProps(){

    const response =await fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20')

    const jsonParkings = await response.json()

    return{
        props:{
            listParkings:jsonParkings
        }
    }
}
