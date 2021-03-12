// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	if (A.length == 1) {
		return 1
	}
	if (A.length == 2) {
		return 2
	}

	let initPos
	let lastPos

	const occurrences = []

	for (let i = 0; i < A.length; i++) {
		if (A[i] == A[i + 2]) {
			initPos = i
			lastPos = i + 2

			let flag = initPos

			while (true) {
				if (A[flag] == A[flag + 2]) {
					lastPos += 2

					if (A[flag + 1] == A[flag + 3]) {
						lastPos += 1
					}
				} else {
					break
				}

				flag += 2
			}

			occurrences.push(A.slice(initPos, lastPos - 1))

			i = lastPos - 2
		}
	}

	const highArr = (function () {
		let flag = 0
		for (let i in occurrences) {
			console.log(occurrences[i].length > flag)
			if (occurrences[i].length > flag) {
				flag = i
				console.log(flag, occurrences[flag])
			}
		}

		return flag
	})()

	return occurrences[highArr].length
}

console.log(solution([7, 7, -1, 7, -5, -5, -5, -5]))
