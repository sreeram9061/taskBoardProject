import Header from './Components/Header'
import Form from './Components/Form'
import Board from './Components/Board'
import "./Styles/style.scss"
import { Appcontext } from './context/Appcontext'

function App() {

  return (
    <div className="App">
      <Appcontext>
        < Header/>
        < Form />
        < Board />
      </Appcontext>      
    </div>
  )
}

export default App
