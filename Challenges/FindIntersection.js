function FindIntersection(strArr) {
	const firstArr = strArr[0].replace(/ /g, '').split(',')
	const secondtArr = strArr[1].replace(/ /g, '').split(',')

	const intersections = []

	for (let elem in firstArr) {
		const elemIsInSecondArr = secondtArr.find((value) => {
			return firstArr[elem] === value
		})

		if (elemIsInSecondArr) {
			intersections.push(firstArr[elem])
		}
	}

	if (intersections.length === 0) {
		return false
	}

	// code goes here
	return intersections.join(',').replace(/ /g, '')
}

// keep this function call here
console.log(FindIntersection(['1, 2, 4, 5, 6, 9', '2, 3, 4, 8, 10']))
