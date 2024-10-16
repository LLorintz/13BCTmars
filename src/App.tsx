import { useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
import { resourceProps } from './components/Resource/Resource'


function App() {
const [Megacredit, setMegacredit] = useState<number>(0)
const handleMegacreditChange = (increment:number)=>{
  setMegacredit(Megacredit+increment)
}
const MegacreditObj:resourceProps = {
  name:"Megacredit",
  amount:Megacredit,
  onChange:handleMegacreditChange
}

const [Acel, setAcel] = useState<number>(0)
const handleAcelChange = (increment:number)=>{
  setAcel(Acel+increment)
}
const AcelObj:resourceProps = {
  name:"Acél",
  amount:Acel,
  onChange:handleAcelChange
}




  return (
    <div className="container">
      <PlayerName></PlayerName>
      <Resource {...MegacreditObj}></Resource>
      <Resource {...AcelObj}></Resource>

    </div>
  )
}

export default App
