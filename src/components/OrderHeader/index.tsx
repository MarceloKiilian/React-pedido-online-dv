import logoImg from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'
import { Container } from './styles'
import { Link } from 'react-router-dom'

import { ReactComponent as CardIcon } from '../../assets/shopping-cart.svg'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to='/'>
        <img src={logoImg} alt='food commerce' />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length} item(ns)`.padStart(2, '0')}</strong>
          </span>
        </div>
        <CardIcon />
      </div>
    </Container>
  )
}
