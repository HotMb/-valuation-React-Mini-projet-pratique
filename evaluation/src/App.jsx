import './App.css'
import { Routes, Route, Link } from 'react-router'
import Index from './pages/index'
import Items from './pages/items'
import ItemsDetail from './pages/itemsDetail'

function App() {

  return (
   <div>
    <Link to={`/items`}>Acceder au Films</Link>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:id" element={<ItemsDetail />} />
    </Routes>
   </div>
  )
}

export default App
