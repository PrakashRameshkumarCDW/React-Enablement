import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import './App.css'
import RestaurantsPage from './Pages/RestaurantsPage'
import RentalsPage from './Pages/RentalsPage'
import HotelsPage from './Pages/HotelsPage'
import DetailsPage from './Pages/DetailsPage'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:city" element={<DetailsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/rentals" element={<RentalsPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
