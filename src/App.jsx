import Header from './Components/Header'
import Form from './Components/Form'
import Board from './Components/Board'
import "./Styles/style.scss"
import { useState } from 'react'
import {data} from './data'
import { createContext } from 'react'

export const PassignSetData=createContext()

function App() {
  let [dataList, setData]=useState(data) 
  return (
    <div className="App">
      < Header/>
      <PassignSetData.Provider value={[setData,dataList]}>
        < Form />
        < Board />
      </PassignSetData.Provider>
    </div>
  )
}

export default App
