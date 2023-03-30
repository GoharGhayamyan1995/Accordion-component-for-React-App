
import { useState } from "react";
import {FaMinus,FaPlus} from "react-icons/fa";


const Accordion=({currentPosts,name,capital})=>{
     const[showInfo, setShowInfo]=useState(false)
    return(
       <article className="countries">
        <header>
            <h4>{name}</h4>
            <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                {showInfo ? <FaMinus/>:<FaPlus/>}</button>
        </header>
        
        {showInfo && <p>{capital}</p>}
       </article>
    )
}
export default Accordion;