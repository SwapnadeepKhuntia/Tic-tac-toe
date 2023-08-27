import Icon from "../icon/icon"
import "./card.css"
function Card({player,onPlay,index,gameend})
{
    let icon = <Icon/>
    if(player ==="X")
    {
          icon = <Icon name="cross"/>
    }
    else if(player === "0")
    {
         icon = <Icon name="circle"/>
    }
    
  return(
      <>
         <div className="card" onClick={()=>!gameend && player =="" && onPlay(index)}>
             {icon}
         </div>
          
       </>
  )
}
export default Card;