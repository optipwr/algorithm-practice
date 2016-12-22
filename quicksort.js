function quicksort(arr){

	if(arr.length == 0){
		return [];
	}

	// Start the left array left of the wall
	var left = [];
	// Init right array right of the wall
	var right = [];
	// Pick the first number as an arbitrary pivot element
	var pivot = [0];

	// Run through the array and test the pivot (first element) against each

	for(let i = 1; i < array.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}
		else{
			right.push(arr[i]);
		}
		return quicksort(left).concat(pivot, quicksort(right));
	}
}

quicksort([1,42,2,6,4,8,325,12]);