function Winner(board,symbo)
{
    if(board[0] === board[1] && board[1] === board[2] && board[0]=== symbo) return symbo;
    if(board[3] === board[4] && board[4] === board[5] && board[3]=== symbo) return symbo;
    if(board[6] === board[7] && board[7] === board[8] && board[6]=== symbo) return symbo;


    if(board[0] === board[3] && board[3] === board[6] && board[0]=== symbo) return symbo;
    if(board[1] === board[4] && board[4] === board[7] && board[1]=== symbo) return symbo;
    if(board[2] === board[5] && board[5] === board[8] && board[2]=== symbo) return symbo;

    if(board[0] === board[4] && board[4] === board[8] && board[0]=== symbo) return symbo;
    if(board[2] === board[4] && board[4] === board[6] && board[2]=== symbo) return symbo;

    return ""
}
export default Winner;