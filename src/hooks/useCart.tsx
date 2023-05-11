import { useContext } from 'react'
import { CartContext } from '../contexts/CardContext'

export function useCart() {
  return useContext(CartContext)
}
