import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Blogs from './Component/Pages/Blogs';
import Blog from './Component/Pages/Blog';
import Error from './Component/Pages/Error';
import Navbar from './Component/Navbar';

function App() {
  return (


    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
