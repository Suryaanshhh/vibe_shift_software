import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const SuccessStories=lazy(()=>import('./pages/SuccessStories'))
const WhoAreWe=lazy(()=>import('./pages/WhoWeAre'))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/successStories" element={<SuccessStories />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />

        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
