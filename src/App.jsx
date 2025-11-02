import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/page1">About</Link> | {" "}
        <Link to="/page2">Project</Link> | {" "}
        <Link to="/page3">Contact</Link>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  )
}

export default App
