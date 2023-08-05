import Header from "./components/Header";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";

import Home from "./pages/Home";
import Cards from "./components/Cards";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/toprated" element={<TopRated/>}/>
      <Route path="/upcoming" element={<Upcoming/>}/>
      <Route path="/movie/:id" element={<Cards/>}/>
      
      <Route path="/" element={<Home/>}/>
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
