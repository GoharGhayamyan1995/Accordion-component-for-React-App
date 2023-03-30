import { useState, useEffect } from 'react';
import './App.css';
import Accordion from './Accordion';


function AccordionFunc() {
  const[data,setData]=useState([]);
 const[numCountries,setNumCountries]=useState(4);
         useEffect(()=>{
      fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(res=>res.json())
      .then(res=>setData(res.data));
  },[])
console.log(data)


  return (
    <main>
    <div className='container'>
      <h3>COUNTRIES AND CAPITALS</h3>
      <section>
      {data?.slice(0, numCountries).map((country)=>{
          return <Accordion key={country.name} {...country}/>;
          })}
        
         
      </section>
      <button className='button' onClick={() => setNumCountries(numCountries + 5)}>see more</button>
    </div>
   
    </main>
  );
}

export default AccordionFunc;