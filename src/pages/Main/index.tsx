import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Sidebar } from '../../components/Sidebar'
import logoImg from '../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
