import './App.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Blogs from './Component/Pages/Blogs';
import Blog from './Component/Pages/Blog';
import Error from './Component/Pages/Error';
import Navbar from './Component/Navbar';
import User from './Component/Pages/User';
import About from './Component/Pages/About';
import AddBlog from './Component/Pages/AddBlog';
import { useState } from 'react';
import Protected from './Component/Pages/Protected';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (


    <BrowserRouter>
      <Navbar />
      {isLoggedIn ?
        (<button onClick={() => { setIsLoggedIn(!isLoggedIn) }} >Log out</button>) :
        (<button onClick={() => { setIsLoggedIn(!isLoggedIn) }}   > Login</button>)
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />

        <Route path='/about' element={<About />} />
        <Route path='/add-blog'
          element={
            <Protected isLoggedIn={isLoggedIn} >
              <AddBlog />
            </Protected>
          }


        />


        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />

        <Route path='/user' element={<User />} />
      </Routes>

    </BrowserRouter >


  );
}

export default App;
