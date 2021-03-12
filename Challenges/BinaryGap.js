function solution(N) {
	const bin = N.toString(2).split('1')
	let range = 0

	for (let i = 0; i < bin.length; i++) {
		const zeros = bin[i] + ''
		if (i == bin.length - 1) {
			continue
		}
		if (zeros.length > range) {
			range = zeros.length
		}
	}

	return range
}

console.log(solution(74901729))
