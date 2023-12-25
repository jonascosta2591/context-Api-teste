import { useContext } from "react"
import MeuContexto from "../context/MeuContexto"

const Contact = () => {
    const {dados, toggleTheme} = useContext(MeuContexto)
    return (<>
     <div className={dados === 'dark' ? 'dark-theme': ''}>
        <h1>Página de Contato</h1>
        <div>O tema atual é {dados}</div>
        <button onClick={toggleTheme}>Alterar tema</button>
     </div>
    </>)
}

export default Contact