//dependencias necesarias
import { useState } from "react"
//data
import Resenias from "./Data/Resenias"
//componentes
import Resenia from "./Componentes/Resenia"
import ReseniaList from "./Componentes/ReseniaList"
function App() {

    //crear estado para arreglo de resenias
    const [lista_resenias, setListaResenias] = useState(Resenias)

    return (
        <div className="container">
            <ReseniaList listaresenias={lista_resenias} />

        </div>
    )
}
export default App
