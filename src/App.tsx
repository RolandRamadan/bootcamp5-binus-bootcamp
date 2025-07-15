import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ClubsPage from './pages/ClubsPage';

function App() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/clubs' element={<ClubsPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
