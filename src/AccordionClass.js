import React, { Component } from 'react'
import {FaMinus,FaPlus} from "react-icons/fa";

export default class AccordionClass extends Component {
  state={data:[],showInfo:false}
  componentDidMount(){
    fetch('https://countriesnow.space/api/v0.1/countries/capital').then(res=>res.json()).then((res)=>{
      console.log(res);
      this.setState({data:res.data})
    })
  }
  changeIsShow = (name)=>{
    if(name === this.state.showInfo){

      this.setState({showInfo:false});
      return;
    }
    this.setState({showInfo:name})
  }
    render() {
    return (
      <main>
      <div className='container'>
        <h3>COUNTRIES AND CAPITALS</h3>
        <section>
          
          {this.state.data.map((country)=>{
            return(
                <article key={country.name} className="countries">
                 <header>
                     <h4>{country.name}</h4>
                     <button className="btn" onClick={()=>this.changeIsShow(country.name)}>
                         {this.state.showInfo===country.name ? <FaMinus/>:<FaPlus/>}</button>
                 </header>
                 {this.state.showInfo===country.name && <p>{country.capital}</p>}
                </article>
             )
            
          })}
        </section>
      </div>
      </main>
    )
  }
}
