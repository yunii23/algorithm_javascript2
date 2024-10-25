// 소수 찾기

const numbers = "17"
let answer = new Set()

function getPermutation (arr, fixed) {
    if(arr.length >= 1) {
        for(let i=0; i<arr.length; i++) {
            const newFixed = fixed + arr[i]
            const copyArr = [...arr]
            copyArr.splice(i, 1)

            if(isPrimeNumber(parseInt(newFixed))) answer.add(parseInt(newFixed))

            getPermutation(copyArr, newFixed)
        }
    }
}

function isPrimeNumber(num) {
    if(num <= 1) return false
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) return false
    }
    return true
}

getPermutation(numbers, '')

console.log(answer.size);