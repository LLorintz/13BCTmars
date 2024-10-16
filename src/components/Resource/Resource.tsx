
type resourceProps = {
    name:string;
    amount:number;
    onChange:(increment:number)=>void
}

const Resource = (props:resourceProps) => {
  return (
    <div className="ResourceContainer">
    <p>{props.name}: <span>{props.amount}</span></p>
    <div className="buttonContainer">
      <button type="button" onClick={()=>props.onChange(-1)}>-</button>
      <button type="button" onClick={()=>props.onChange(+1)}>+</button>
    </div>
</div>
  )
}

export default Resource