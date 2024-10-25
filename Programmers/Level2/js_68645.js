// 삼각 달팽이

const n = 4

const size_arr = new Array(n+1)
size_arr[0] = 0
for(let i=1; i<size_arr.length; i++) {
    size_arr[i] = i + size_arr[i-1]
}

const result = Array.from(new Array(n), () => new Array(n).fill(0))

let current = 1
let row = 0
let col = 0

const directions = [
    [1, 0],
    [0, 1],
    [-1, -1]
]
let dir = 0

for(let i=0; i<n; i++) {
    for(let j=0; j<=i; j++) {
        result[row][col] = current++

        const next_row = row + directions[dir][0]
        const next_col = col + directions[dir][1]

        if(next_row < 0 || next_row >= n || next_col < 0 || next_col > next_row || result[next_row][next_col] !== 0) {
            dir = (dir + 1) % 3
        }

        row += directions[dir][0]
        col += directions[dir][1]
    }
}

const answer = result.flat().filter(num => num !== 0)

console.log(answer);