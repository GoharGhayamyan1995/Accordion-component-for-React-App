import { useState, useEffect } from 'react';
import './App.css';
import Pagination from './Pagination';
import Accordion from './Accordion';


function AccordionFunc() {
  const[data,setData]=useState([]);
  const [currentPage,setCurrentpage]=useState(1);
  const[postsPerPage,setPostsPerPage]=useState(25);
         useEffect(()=>{
      fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(res=>res.json())
      .then(res=>setData(res.data));
  },[])
console.log(data)
  //Get currentposts
  
const indexOfLastPost=currentPage*postsPerPage;
const indexOfFirstpost=indexOfLastPost-postsPerPage;
const currentPosts=data.slice(indexOfFirstpost,indexOfLastPost);
console.log(currentPosts)


const paginate=(pageNumber)=>setCurrentpage(pageNumber);

  return (
    <main>
    <div className='container'>
      <h3>COUNTRIES AND CAPITALS</h3>
      <section>
        {data.map((country)=>{
          return <Accordion key={country.name} {...country}/>;
          })}
        
          <Pagination postsPerpage={postsPerPage} totalPost={data.length} paginate={paginate}/>
      </section>
    </div>
    
    </main>
  );
}

export default AccordionFunc;