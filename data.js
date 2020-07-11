const uniqueSort = arr => [ ...new Set(arr) ].sort((a, b) => a - b)
console.log(uniqueSort([ 1, 5, 8, 2, 3, 4, 4, 4, 10 ]))
