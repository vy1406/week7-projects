
class GoldRush extends Matrix {
    LIMIT = 5;
    constructor() {
        super()
        this.player1 = new Player("1", 0, 0)
        this.player2 = new Player("2", this.LIMIT - 1, this.LIMIT - 1)
        this.loadBoard()
        this.generateCoins(6)
    }
    generateCoins(number) {
        let i = 0
        while (i < number) {
            let generatedRow = Math.floor(Math.random() * this.LIMIT)
            let generatedCol = Math.floor(Math.random() * this.LIMIT)
            if (this.get(generatedRow, generatedCol) == ".") {
                this.alter(generatedRow, generatedCol, "c")
                i++
            }
        }
    }

    loadBoard() {
        for (let i = 0; i < this.LIMIT; i++) {
            this.matrix.push([])
            for (let j = 0; j < this.LIMIT; j++)
                this.matrix[i][j] = "."
        }
        this.alter(0, 0, "1")
        this.alter(this.LIMIT - 1, this.LIMIT - 1, "2")
    }
    ifOutOfBoundsOrWall(r, c) {
        if (r > this.LIMIT - 1 || r < 0) return true
        if (c > this.LIMIT - 1 || c < 0) return true
        if (this.get(r, c) == "w") console.log("w")
        return false
    }
    movePlayer(player, direction) {
        direction == "down" ? this.moveDown(player) : null
        direction == "up" ? this.moveUp(player) : null
        direction == "left" ? this.moveLeft(player) : null
        direction == "right" ? this.moveRight(player) : null
    }
    moveDown(player) {
        const curPlayer = player == "1" ? this.player1 : this.player2
        const curPlayerRow = curPlayer.getPosition().row
        const curPlayerCol = curPlayer.getPosition().col


        const rowToMove = curPlayerRow + 1
        const colToMove = curPlayerCol

        if (this.ifOutOfBoundsOrWall(rowToMove, colToMove)) { console.log(`${curPlayer.getPlayerNumber()} cannot move!`) }
        else {
            // check if coin
            if (this.get(rowToMove, colToMove) == "c")
                curPlayer.addScore()

            this.alter(rowToMove, colToMove, curPlayer.getPlayerNumber())
            this.alter(curPlayerRow, curPlayerCol, ".")

            curPlayer.updatePosition(rowToMove, colToMove)
        }
    }
    moveUp(player) {
        const curPlayer = player == "1" ? this.player1 : this.player2
        const curPlayerRow = curPlayer.getPosition().row
        const curPlayerCol = curPlayer.getPosition().col

        const rowToMove = curPlayerRow - 1
        const colToMove = curPlayerCol

        if (this.ifOutOfBoundsOrWall(rowToMove, colToMove)) { console.log(`${curPlayer.getPlayerNumber()} cannot move!`) }
        else {
            // check if coin
            if (this.get(rowToMove, colToMove) == "c")
                curPlayer.addScore()

            this.alter(rowToMove, colToMove, curPlayer.getPlayerNumber())
            this.alter(curPlayerRow, curPlayerCol, ".")

            curPlayer.updatePosition(rowToMove, colToMove)
        }
    }
    moveRight(player) {
        const curPlayer = player == "1" ? this.player1 : this.player2

        const curPlayerRow = curPlayer.getPosition().row
        const curPlayerCol = curPlayer.getPosition().col

        const rowToMove = curPlayerRow
        const colToMove = curPlayerCol + 1
        if (this.ifOutOfBoundsOrWall(rowToMove, colToMove)) { console.log(`${curPlayer.getPlayerNumber()} cannot move!`) }
        else {
            // check if coin
            if (this.get(rowToMove, colToMove) == "c")
                curPlayer.addScore()

            this.alter(rowToMove, colToMove, curPlayer.getPlayerNumber())
            this.alter(curPlayerRow, curPlayerCol, ".")

            curPlayer.updatePosition(rowToMove, colToMove)
        }
    }
    moveLeft(player) {
        const curPlayer = player == "1" ? this.player1 : this.player2

        const curPlayerRow = curPlayer.getPosition().row
        const curPlayerCol = curPlayer.getPosition().col

        const rowToMove = curPlayerRow
        const colToMove = curPlayerCol - 1
        if (this.ifOutOfBoundsOrWall(rowToMove, colToMove)) { console.log(`${curPlayer.getPlayerNumber()} cannot move!`)}
        else {
            // check if coin
            if (this.get(rowToMove, colToMove) == "c")
                curPlayer.addScore()

            this.alter(rowToMove, colToMove, curPlayer.getPlayerNumber())
            this.alter(curPlayerRow, curPlayerCol, ".")

            curPlayer.updatePosition(rowToMove, colToMove)
        }
    }
}