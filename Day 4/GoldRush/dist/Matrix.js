class Matrix {
    matrix = []
    constructor(rows, columns) {
        this.generateMatrix(rows, columns)
    }

    generateMatrix(numRows, numColumns) {
        let num = 1
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(num++)
            }
        }
    }
    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    alter(r, c, v) {
        this.matrix[r][c] = v
    }

    printRow(rowNum) {
        for (let index = 0; index < this.matrix[rowNum].length; index++) {
            const element = this.matrix[rowNum][index];
            console.log(element)
        }
    }

    printColumn(colNum) {
        for (let index = 0; index < this.matrix.length; index++) {
            const element = this.matrix[index][colNum];
            console.log(element)
        }
    }


    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line + "\n")
        }
        console.log("--------------------------------")
    }

    /*

    [
        [ x , z , y ],
        [ x , z , y ],
        [ x , z , y ],
        [ x , z , y ]
    ]
    */

    findCoordinate(val) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                const currentElem = this.matrix[i][j];
                if (currentElem === val)
                    return { x: i, y: j }
            }
        }
    }

}