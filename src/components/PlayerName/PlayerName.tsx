import React, { FormEvent, useState } from "react"



const PlayerName = () => {
 const [isPlayerEdit, setisPlayerEdit] = useState<boolean>(true)
 const [PlayerName, setPlayerName] = useState<string>('Playername')
 const handleisEdit =()=>{
    setisPlayerEdit(!isPlayerEdit)
 }

 const handlePlayerName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPlayerName(e.target.value)
 }

 const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    setisPlayerEdit(!isPlayerEdit)
 }

  return (
     <>
    {isPlayerEdit?
     (
     <div onClick={handleisEdit} className={"PlayerName"}>
        <h1>{PlayerName}</h1>
     </div>
     )
     :
    (
    <form onSubmit={handleSubmit} className="nameInput" action="">
        <input type="text" value={PlayerName} onChange={handlePlayerName}/>
        <button type="submit">save</button>
    </form>    
    )   
    }
    </>
  )
  
}

export default PlayerName