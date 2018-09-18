function monitorCount() {
 return undefined
}

function costOfMonitor(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitor(5, 4)

console.log(totalCost)