import { useState } from "react";
import Card from "../card/card";
import Winner from "../../chack/checkwiner";
import "./grid.css"
function Grid({numofcard})
{
    const [board,setboard] = useState(Array(numofcard).fill(""));
    const [turn,setturn] =useState(true)
    const [winner,setwinner]=useState(null)
    console.log(board);
    function play(index)
    {
        if(turn == true)
        {
            board[index] = "X";
        }
        else{
            board[index] = "0";
        }
        const win = Winner(board,turn?"X":"0");
        if(win)
        {
            setwinner(win)
        }
        setboard([...board]);
        setturn(!turn)
    }
    function reset()
    {
        setboard(Array(numofcard).fill(""))
        setturn(true)
        setwinner(null)
    }
    return(
        <>
        <div className="allgrid">
        {
            winner && (
                <>
                    <h1 className="winner">Winner is {winner}</h1>
                    <button className="resetgame" onClick={reset}>Reset Game</button>
                </>
            )
        }
            <h1>Carent Turn {turn?"X":"0"}</h1>
           <div className="grid">
             {board.map((el,index)=> <Card key={index} gameend={winner?true:false} onPlay={play}  player={el} index={index}/>)}
           </div>
        </div>
        </>
    )
}
export default Grid;