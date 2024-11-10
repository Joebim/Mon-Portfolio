import './App.css';
import {Routes, Route } from "react-router-dom";
import './customStyles.css';
import Home from './pages/home';
import Gallery from './pages/Gallery';
import Social from './pages/Social';
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
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/social" element={<Social />} />
    </Routes>
    {/* <Footer/> */}
    </>
    // </ProviderTheme>
  );

}

export default App;
