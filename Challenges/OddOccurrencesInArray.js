// *******First atempt 30% i think
// function isValueInArray(value, array) {
// 	let flag = 0
// 	for (let i = 0; i < array.length; i++) {
// 		if (value == array[i]) {
// 			flag++
// 		}
// 	}
// 	return flag
// }

// function solution(A) {
// 	// write your code in JavaScript (Node.js 8.9.4)
// 	for (let i = 0; i < A.length; i++) {
// 		if (isValueInArray(A[i], A) === 1) {
// 			return A[i]
// 		}
// 	}
// }

// Second atempt 55%
// function solution(A) {
// 	// write your code in JavaScript (Node.js 8.9.4)
// 	for (let i = 0; i < A.length; i++) {
// 		if (A.indexOf(A[i]) === A.lastIndexOf(A[i])) {
// 			return A[i]
// 		}
// 	}
// }

// Third atempt 55%
function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	for (let i = 0; i < A.length; i++) {
		const elem = A[i]
		A[i] = null
		if (!A.includes(elem)) {
			return elem
		}
		A[i] = elem
	}
}

console.time()
console.log(solution([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 2]))
console.timeEnd()
