import { Navigate, Route, Routes } from 'react-router-dom' 
import HomePage from './screens/HomePage'
import ShoppingPage from './screens/ShoppingPage'
import './App.css'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/:id" element={<ShoppingPage />} />
      <Route path="/confirmOrder" element={<HomePage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
  
}
export default App
