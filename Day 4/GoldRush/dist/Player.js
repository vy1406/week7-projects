class Player {
    constructor(playernNumber, row, col){
        this.playerNumber = playernNumber
        this.score = 0
        this.row = row
        this.col = col
    }
    getPlayerNumber(){
        return this.playerNumber
    }
    getScore(){
        return this.score
    }
    addScore(){
        this.score += 10
    }
    updatePosition(row, col){
        this.row = row
        this.col = col
    }
    getPosition(){
        return {
                "row":this.row, 
                "col":this.col
            }
    }
}