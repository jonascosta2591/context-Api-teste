import { useContext } from "react"
import MeuContexto from './../context/MeuContexto';

const Home = () => {
    const {dados, toggleTheme} = useContext(MeuContexto)
    
    return <div className={dados === 'dark' ? 'dark-theme': ''}>
        <h1>Página inicial</h1>
        <p>O tema atual é {dados}</p>
        <button onClick={toggleTheme}>Alterar tema</button>
        </div>
}

export default Home