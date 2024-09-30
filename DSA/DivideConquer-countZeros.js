const countZeroes = arr => {
	let zeros = 0;

	(function helper(arr) {
		if (!arr.length || arr[arr.length - 1] === 1) return;
		if (arr[0] === 0) {
			zeros += arr.length;
			return;
		}
		let mid = Math.floor(arr.length / 2);
		helper(arr.slice(0, mid));
		helper(arr.slice(mid));
	})(arr);

	console.log(zeros);
	return zeros;
};