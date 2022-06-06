import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countrice.css'

const Countries = () => {
    const [countrys, setCountrys] = useState([])
     useEffect(()=>{
         fetch('https://restcountries.com/v3.1/all')
         .then(res =>res.json())
         .then(data=>setCountrys(data))
     },[])
    return (
        <div>
            <h1>All Country : {countrys.length}</h1>
         <div className='countries-container'>
         {
              countrys.map(country=><Country
              country = {country}
          key={country.cca3}
              ></Country>)
          } 
             </div> 
        </div>
    );
};

export default Countries;