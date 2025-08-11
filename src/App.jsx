import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// Import your other pages here

function App() {
  return (
    // Navbar will come here (outside of the Routes component)
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes for your pages */}
    </Routes>
  )
}

export default App