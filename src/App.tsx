import { FormEvent, useState } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
import { resourceProps } from './components/Resource/Resource'


function App() {
const [Megacredit, setMegacredit] = useState<number>(0)
const [Megacreditproduction, setMegacreditproduction ] = useState<number>(0)
const handleMegacreditChange = (increment:number)=>{
  setMegacredit(Megacredit+increment)
}
const handlemegacreditproductionChange = (increment:number)=>{
  setMegacreditproduction(Megacreditproduction+increment)
}
const MegacreditObj:resourceProps = {
  name:"Megacredit",
  amount:Megacredit,
  production:Megacreditproduction,
  onChange:handleMegacreditChange,
  productionchange:handlemegacreditproductionChange
}

const handleSubmit = (e:FormEvent)=>{
  e.preventDefault();
  setMegacredit(Megacredit+Megacreditproduction)
}





  return (
    <form  onSubmit={handleSubmit} className="container">
      <PlayerName></PlayerName>
      <Resource {...MegacreditObj}></Resource>
     
      <button type='submit' className='nextRound'>Next round</button>
    </form>
  )
}

export default App
