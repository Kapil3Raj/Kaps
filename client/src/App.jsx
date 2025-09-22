import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Designs from './pages/Designs.jsx'
import Development from './pages/Development.jsx'
import LandingPage from './pages/LandingPage.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="/designs" element={<Designs />} />
        <Route path="/developments" element={<Development />} />
      </Routes>
    </Router>
  )
}

export default App