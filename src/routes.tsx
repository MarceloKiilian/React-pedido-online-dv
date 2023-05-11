import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import IceCreams from './pages/Main/IceCreams'
import MyCartPage from './pages/Main/MyCart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/drinks' element={<DrinksPage />} />
        <Route path='/icecreams' element={<IceCreams />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
    </Routes>
  )
}
