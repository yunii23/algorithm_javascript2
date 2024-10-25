// 달리기 경주

const players = ["mumu", "soe", "poe", "kai", "mine"]
const callings = ["kai", "kai", "mine", "mine"]

const playerIndexMap = {}
players.forEach((player, index) => {
    playerIndexMap[player] = index
})

callings.forEach(call => {
    const idx = playerIndexMap[call]

    if(idx > 0) {
        const prev = players[idx - 1]

        players[idx - 1] = call
        players[idx] = prev

        playerIndexMap[call] = idx - 1
        playerIndexMap[prev] = idx
    }
})

console.log(players);