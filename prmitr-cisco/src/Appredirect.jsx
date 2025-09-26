import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
import RedirectNotice from './pages/RedirectNotice.jsx'

export default function Appredirect(){
  return (
    <Routes>
      <Route path="*" element={<RedirectNotice />} />
    </Routes>
  )
}

