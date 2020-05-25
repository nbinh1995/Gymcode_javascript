const DEFAULT_X = 20;
const DEFAULT_Y = 20;
const DRAWBOARD = document.getElementById("draw");
const BOARD = document.getElementById('boardgame');

let board = [];
function createBoard(){
    for(let x=0; x<DEFAULT_X;x++){
        board[x] = [];
        for(let y=0;y<DEFAULT_Y;y++){
            board[x][y]="";
    }}
}

class Caro{
    constructor(){
       this.flag = true;// luot di
       this.x = DEFAULT_X;// chieu ngang board caro
       this.y = DEFAULT_Y;// chieu doc board caro
       this.count = 0; // x*y = count hòa
    }

    setFlag(x,y){
        if(board[x][y] != "") alert('Cell was ticked!!');
        else 
        {if(this.flag) board[x][y] = 'X'; else board[x][y]='O';
    		this.count++;
            this.flag =!this.flag;}    
    }

    drawBoard(){
        let turn="";
        if(this.flag) turn = " style='color:blue;'>TURN: X"; else turn = " style='color:red;'>TURN: O";
        let text="<h3"+turn+"</h3>"; 
        for(let x=0; x<this.x;x++){
            text += "<div id='x"+x+"' class='row'>"
            for(let y=0;y<this.y;y++){ 
                text += "<div id='x"+x+"y"+y+"' onclick='player.setFlag("+x+","+y+")'>"+board[x][y]+"</div>";
            }
            text += "</div>"
        }
        DRAWBOARD.innerHTML= text;
    }
    
    checkWin(clan){
        for(let x=0; x<this.x;x++){
            for(let y=0;y<this.y;y++){
                if(y>1 && y <this.y-2){
                    if( board[x][y] == clan && 
                        board[x][y+1] == clan && 
                        board[x][y+2] == clan && 
                        board[x][y-1] == clan && 
                        board[x][y-2] == clan){
                            return true
                    }
               }
                if(x>1 && x<this.x-2){
                    if( board[x][y] == clan && 
                        board[x+1][y] == clan && 
                        board[x+2][y] == clan && 
                        board[x-1][y] == clan && 
                        board[x-2][y] == clan){
                            return true
                    }
                }
                if(x>1 && x<this.x-2 && y>1 && y <this.y-2){
                    if( board[x][y] == clan && 
                        board[x+1][y+1] == clan && 
                        board[x+2][y+2] == clan && 
                        board[x-1][y-1] == clan && 
                        board[x-2][y-2] == clan){
                            return true
                    }
                    if( board[x][y] == clan && 
                        board[x+1][y-1] == clan && 
                        board[x+2][y-2] == clan && 
                        board[x-1][y+1] == clan && 
                        board[x-2][y+2] == clan){
                            return true
                    }
                }
            }
        }
    if (this.count == this.x*this.y) alert('X tie O'); return;
    return false;
    }
}
function colorCell(){
    for(let x=0; x<DEFAULT_X;x++){
        for(let y=0;y<DEFAULT_Y;y++){
            if(board[x][y] == "X") {let X = "x"+x+"y"+y; document.getElementById(X).style.color = 'blue';}
            if(board[x][y] == "O") {let O = "x"+x+"y"+y;document.getElementById(O).style.color = 'red';}
    }}
}
function resetCell(){
    for(let x=0; x<DEFAULT_X;x++){
        for(let y=0;y<DEFAULT_Y;y++){
            board[x][y]='';
            player.flag = true;
            player.count = 0;
    }}
}
let player = new Caro();
createBoard();
function playGame(){
    player.drawBoard();
    colorCell();
    if(player.checkWin('X')) {alert('X win'); return;}
    if(player.checkWin('O')) {alert('O win'); return;}
    BOARD.addEventListener('click',playGame);
}
playGame();

