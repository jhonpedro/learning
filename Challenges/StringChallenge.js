function StringChallenge(num) {
	let hours = 0

	while (true) {
		if (num < 60) {
			break
		} else {
			hours++
			num -= 60
		}
	}

	// code goes here
	return `${hours}:${num}`
}

console.log(StringChallenge(45))

// console.log(100 % 60)
