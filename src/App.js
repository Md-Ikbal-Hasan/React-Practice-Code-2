import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Blogs from './Component/Pages/Blogs';
import Error from './Component/Pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
