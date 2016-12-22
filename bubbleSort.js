function BubbleSort(items){
	var length = items.length;  //the size of n
	for(let i = 0; i < length; i++){ //First loop
		var sorted = true; //Assume the list is sorted
		for(let j = 0; j < (length - i); j++){ //Second loop
			// compare the current spot with the next spot
			if(items[j] > items[j+1]){
				sorted = false;
				// swap the numbers
				var temp = items[j]; //temp variable to stash the variable
				items[j] = items[j+1]; //the left item is now set to the right item
				items[j+1] = temp; //the right item is now equal to what the left item was
			}
		}
		if(sorted){
			break; //Stop the outer loop because we didn't swap anything on this pass
		}
	}
	console.log(items);
}

BubbleSort([1,2,3,4,5,6]);