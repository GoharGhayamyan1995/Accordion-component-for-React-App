
import { Route, Routes } from 'react-router-dom';
import AccordionClass from './AccordionClass';
import AccordionFunc from './AccordionFunc';
import './App.css';



function App() {
 
  return (
  <Routes>
    <Route path='/' element={<AccordionFunc/>}/>
    <Route path='/class' element={<AccordionClass/>}/>
  </Routes>
    
  );
}

export default App;
