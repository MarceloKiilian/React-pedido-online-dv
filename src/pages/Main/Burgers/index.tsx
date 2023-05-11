import { useSnack } from '../../../hooks/useSnack'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Hamburgueres' description='Nossos melhores burgers' />
      <SnackTitle>Hamburgueres</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
