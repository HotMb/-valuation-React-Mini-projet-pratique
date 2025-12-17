import './App.css'
import { Routes, Route, Link } from 'react-router'
import Index from './pages/index'
import Items from './pages/items'
import ItemsDetail from './pages/itemsDetail'
import Contact from './pages/contact'

function App() {

  return (
   <div>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:id" element={<ItemsDetail />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
   </div>
  )
}

export default App
