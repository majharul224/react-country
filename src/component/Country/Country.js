import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,area, capital,population,flags}=props.country
    return (
        <div className='country-card'>
            <img src={flags.png} alt="" />
            <h3>Country Name : {name.common}</h3>
            <h6>Area : {area}</h6>
            <h6>Capital : {capital}</h6>
            <h6>Population : {population}</h6>
        </div>
    );
};

export default Country;