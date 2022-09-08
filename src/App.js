import NavBar from './Component/NavBar/NavBar.jsx';
import Pricing from './Component/Pricing/Pricing.jsx';
import About from './Component/About/About.jsx';
import Home from './Component/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
        <NavBar />
        <div className="container">
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
           </Routes>
        </div>
    </>
  );
}

export default App;
