import { FormEvent, useState, useEffect } from 'react'
import './app.css'
import PlayerName from './components/PlayerName/PlayerName'
import Resource from './components/Resource/Resource'
import { resourceProps } from './components/Resource/Resource'


function App() {

const loadMegacredit=():number=>{
  const savedMeagcredit = localStorage.getItem("Megacredit");
  return savedMeagcredit ? Number(savedMeagcredit) : 0;
}

const loadMegacreditProduction=():number=>{
  const savedMeagcreditProduction = localStorage.getItem("MegacreditProduction");
  return savedMeagcreditProduction ? Number(savedMeagcreditProduction) : 0;
}


const [Megacredit, setMegacredit] = useState<number>(loadMegacredit())
const [Megacreditproduction, setMegacreditproduction ] = useState<number>(loadMegacreditProduction())
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

useEffect(()=>{
  localStorage.setItem("Megacredit", Megacredit.toString())
},[Megacredit])

useEffect(()=>{
  localStorage.setItem("MegacreditProduction", Megacreditproduction.toString())
},[Megacreditproduction])




  return (
    <form  onSubmit={handleSubmit} className="container">
      <PlayerName></PlayerName>
      <Resource {...MegacreditObj}></Resource>
     
      <button type='submit' className='nextRound'>Next round</button>
    </form>
  )
}

export default App
