/* eslint-disable prettier/prettier */
import BotaoAdicionar from '../../components/BtaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
