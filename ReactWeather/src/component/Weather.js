import React ,{useEffect ,useState} from 'react';
import './style.css';

const Weather = () => {

  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("mumbai");

  useEffect(()=>{
    const fetchapi=async()=>{

      const url =`Http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=baee76794787b212c0852d2411cc9553`;
          const response=await fetch(url);
          const restjson=await response.json();
          setcity(restjson.main);
    };
    fetchapi();
  },[search]) 
  return (
    <>
   
    <div className="box">
      <div className="inputData">
        <input type="search" className="inputField" onChange={(Event)=>{setsearch(Event.target.value)}} />
        

    </div>

    {!city ?(
            <p>NO DATA FOUND</p>
          ):(
            <div>
            <div className="info">
      <h1 id="weather">
      <i className="fas fa-street-view"></i>{search}
      </h1>
      <h2 className="temp">
        {city.temp}°Cel
        
      </h2>
      <h3 className="tempmin_max">Min : {city.temp}°Cel | Max : {city.temp}°Cel
      
      </h3>
    </div>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>


          )}
    
    </div>
    </>
  )
}

export default Weather;
