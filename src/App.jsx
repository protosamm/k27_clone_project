import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Agency from './pages/Agency'
import NavBar from './components/navigation/NavBar'
import FullScreenNav from './components/navigation/FullScreenNav'

function App() {
return <div className="text-white">
    <NavBar />
    <FullScreenNav />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/agency' element={ <Agency /> } />
      <Route path='/work' element={ <Work /> } />
    </Routes>
  </div>
}

export default App
