const date1 = new Date('2024-03-01T00:00:00.000Z')
const date2 = new Date()
const diffTime = Math.abs(date2 - date1)
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
console.log(diffDays)
