import './App.css';
import {Routes, Route } from "react-router-dom";
import './customStyles.css';
import Home from './components/home';
import Works from './components/works';
import Services from './components/services';
import About from './components/about';
// import Footer from './components/Footer';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, blueTheme } from "./components/themes";
// import { ProviderTheme } from './components/ThemeContext';


function App () {

  // const themeMode = sessionStorage.getItem("theme") 
 
  return (
      // <ProviderTheme theme = {themeMode}>
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/works" element={<Works />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
    {/* <Footer/> */}
    </>
    // </ProviderTheme>
  );

}

export default App;
