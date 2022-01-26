import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Course from './pages/Subjects/Course/Course'

function App () {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/subjects' element={<Course />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
