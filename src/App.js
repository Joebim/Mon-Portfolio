import './App.css';
import {Routes, Route } from "react-router-dom";
import './customStyles.css';
import Home from './components/home';
import Works from './components/works';
import Services from './components/services';
import About from './components/about';

function App () {
 
  return (
    <Home/>
      // <Routes>
      //   <Route path="/" element={<Home />}/>
      //   <Route path="/works" element={<Works />} />
      //   <Route path="/services" element={<Services />} />
      //   <Route path="/about" element={<About />} />
      // </Routes>
  );

}

export default App;
