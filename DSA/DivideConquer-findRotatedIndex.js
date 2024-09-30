function findRotatedIndex(arr, num) {
	let index;
	let pivot = findPivot(arr, 0, arr.length - 1); // find pivot

	function helper(start, end) {
		if (index) return;
		if (start === end) {
			index = arr[start] === num ? start : undefined;
			return;
		}

		let mid = Math.floor((start + end) / 2);
		helper(start, mid);
		helper(mid + 1, end);
	}

	helper(0, pivot);
	helper(pivot + 1, arr.length - 1);

	return index ? index : -1;
}

function findPivot(arr, start, end) {
	if (start > end) return -1;
	else if (start === end) return start;

	let mid = Math.floor((start + end) / 2);

	if (arr[mid] > arr[end]) {
		return findPivot(arr, mid + 1, end);
	} else {
		return findPivot(arr, start, mid);
	}
}