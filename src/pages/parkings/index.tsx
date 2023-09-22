import { NavBar } from '@/components/navBar';
import Link  from 'next/link'
import Image from 'next/image'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
function Parkings({listParkings}:any) {
    listParkings = listParkings.results

    listParkings = listParkings.filter((parking:any) => {
      
        const occupancyPercentage = (parking.occupation / parking.totalcapacity) * 100;
        return occupancyPercentage <= 50; 
      });
    listParkings.sort((a:any, b:any) => b.totalcapacity - a.totalcapacity);
    return (
        <><NavBar/>
        
          <div className='listParkings'>
            <h1 className ='text' style={{fontSize:'30px'}}><NotListedLocationIcon style={{fontSize:"48px",position:'relative',top:"10px"}}/> List of parkings sorted from highest to lowest capacity</h1>
              
              {listParkings.map((parking:any) => (
                <Link href={{pathname:`/parkings/${parking.name}`}} key={parking.name} style={{ textDecoration: 'none', color : 'inherit'}}>
                  
                  <h3 className ='text' >
                  <LabelImportantIcon style={{position:'relative',top:"5px",marginLeft:"30px"}} /> {parking.name} - {parking.totalcapacity}
                    
                  </h3>
                </Link>
              ))}
              
          </div>

      
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
