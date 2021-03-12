// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(A, K) {
	// write your code in JavaScript (Node.js 8.9.4)

	let maxNumberOfDigits = 1
	A.forEach((element) => {
		const nLength = (element + '').length
		if (nLength > maxNumberOfDigits) {
			maxNumberOfDigits = nLength
		}
	})

	const ArrOfContents = []

	let linePattern = ''
	if (A.length >= K) {
		let linePattern = '+' + '-'.repeat(maxNumberOfDigits)
		for (let i = 0; i < K - 1; i++) {
			linePattern += '+' + '-'.repeat(maxNumberOfDigits)
			if (i == K - 2) {
				linePattern += '+'
			}
		}
		ArrOfContents.push(linePattern)
	} else {
		//Need to test when the array is thiner than K
	}

	let line = ''
	for (let i = 0; i < A.length; i++) {
		if (i % K == 0 && i != 0) {
			ArrOfContents.push((line += '|'))
			ArrOfContents.push(ArrOfContents[0])
			line = ''
		}
		line += '|'
		line += ' '.repeat(maxNumberOfDigits - (A[i] + '').length) + A[i]
		if (i == A.length - 1) {
			line += '|'
			ArrOfContents.push(line)
		}
	}

	if (A.length % K == 0) {
		ArrOfContents.push(ArrOfContents[0])
	} else {
		const sizeOfLastLine = ArrOfContents[ArrOfContents.length - 1].length

		let lastLine = ''
		console.log(sizeOfLastLine)

		const sizeOfLastLineN = Math.floor(sizeOfLastLine / 6)

		for (let i = sizeOfLastLineN - 1; i < sizeOfLastLineN; i++) {
			lastLine += '+' + '-'.repeat(maxNumberOfDigits)
			if (i == sizeOfLastLineN - 1) {
				lastLine += '+'
				ArrOfContents.push(lastLine)
			}
		}
	}

	for (let i = 0; i < ArrOfContents.length; i++) {
		process.stdout.write(ArrOfContents[i] + '\n')
	}
}

solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4)
