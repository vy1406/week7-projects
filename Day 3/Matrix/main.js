// function generateMatrix(numRows, numColumns) {
//     let matrix = []
//     let num = 1

//     for (let r = 0; r < numRows; r++) {
//         matrix.push([])
//         for (let c = 0; c < numColumns; c++) {
//             matrix[r].push(num++)
//         }
//     }
//     return matrix
// }

// const get = function (matrix, rowNum, colNum) {
//     return matrix[rowNum][colNum]
// }

// function print(matrix) {

//     for (let i = 0; i < matrix.length; i++) {
//         let line = ""
//         for (let j = 0; j < matrix[i].length; j++) {
//             line += (matrix[i][j] + "\t")
//         }
//         console.log(line)
//     }
// }

// function printColumn(matrix, colNum) {
//     for (let index = 0; index < matrix.length; index++) {
//         const element = matrix[index][colNum];
//         console.log(element)
//     }
// }


// function printRow(matrix, rowNum) {
//     for (let index = 0; index < matrix[rowNum].length; index++) {
//         const element = matrix[rowNum][index];
//         console.log(element)
//     }
// }

// const alter = function (r, c, v) {
//     this.matrix[r][c] = v
// }

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
            console.log(line)
        }
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

// Exercise 1
console.log("// Exercise 1")
const m = new Matrix(3, 4)
m.print()
m.alter(0, 0, m.get(1, 1))

m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


// Exercise 2
console.log("// Exercise 2")
console.log(m.findCoordinate(12))
console.log(m.findCoordinate(7))

// Exercise 3
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]
class EmployeeMatrix extends Matrix {
    constructor() {
        super()

    }
    loadData(salaryData) {
        for (let salary of salaryData) {
            this.matrix.push([salary._id, salary.name, salary.department, salary.salary])
        }
    }
    getEmployees(department) {
        const result = []
        for (let worker of this.matrix)
            if (worker[2] === department)
                result.push(worker[1])
        return result
    }

    getEmployees2(department) {
        this.matrix.map()
    }

    /*
        The reduce() method applies a function against an accumulator and each value of the array 
        (from left-to-right) to reduce it to a single value.
    */
    getTotalSalaryWithReduce(department) {
        return this.matrix.reduce((result, e) => { e[2] == department ? result + e[3] : result }, 0)
    }


    getTotalSalary(department) {
        let sum = 0
        for (let salary of this.matrix)
            salary[2] == department ? sum += salary[3] : null
        return sum
    }
    findRichest() {
        let curMax = 0
        for (let worker of this.matrix)
            worker[3] > curMax ? curMax = worker[3] : null
        return curMax
    }
}

const EM = new EmployeeMatrix()

EM.loadData(data)
EM.print()

// Exercise 4
console.log(EM.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(EM.getEmployees("Design"))  //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]


// Exercise 5
console.log(EM.getTotalSalary("Finance")) //prints 4300
console.log(EM.getTotalSalary("Design")) //prints 5300
console.log(" with reduce ? " + EM.getTotalSalaryWithReduce("Finance"))


// Exercise 6
console.log(EM.findRichest())



class TicTacToe extends Matrix {
    loadBoard() {
        for (let i = 0; i < 3; i++) {
            this.matrix.push([])
            for (let j = 0; j < 3; j++)
                this.matrix[i][j] = "."
        }
    }

    play(row, col, player) {
        let playerSign = player == 1 ? "x" : "o"
        this.alter(row, col, playerSign)
        if (this.checkIfWon(player))
            console.log(`Congratulations player ${player}`)
    }

    checkIfWon(player) {
        if (this.checkRow(0))
            return true
        if (this.checkRow(1))
            return true
        if (this.checkRow(2))
            return true
        if (this.checkCol(0))
            return true
        if (this.checkCol(1))
            return true
        if (this.checkCol(2))
            return true
        if (this.checkDiagonal())
            return true
        return false
    }

    checkRow(row) {
        if ((this.matrix[row][0] == this.matrix[row][1]) && (this.matrix[row][1] == this.matrix[row][2]) && (this.matrix[row][0] != "."))
            return true
        return false
    }
    checkCol(col) {
        if ((this.matrix[0][col] == this.matrix[1][col]) && (this.matrix[0][col] == this.matrix[2][col]) && (this.matrix[0][col] != "."))
            return true
        return false
    }
    checkDiagonal() {
        if ((this.matrix[0][2] == this.matrix[1][1]) && (this.matrix[1][1] == this.matrix[2][0]) && (this.matrix[1][1] != "."))
            return true
        return false
    }
}

// Exercise 7
let board = new TicTacToe()
board.loadBoard()
board.print()

// Exercise 8
board.play(2, 2, 1)
board.play(0, 0, 2)



board.print()

