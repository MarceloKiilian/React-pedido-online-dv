import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

interface SnackContextPropos {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextPropos)

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurges] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinkRequest = await getDrinks()
        const iceCreamRequest = await getIceCreams()

        const requests = [burgerRequest, pizzaRequest, drinkRequest, iceCreamRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinkResponse },
          { data: iceCreamResponse },
        ] = await Promise.all(requests)

        setBurges(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinkResponse)
        setIceCreams(iceCreamResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
