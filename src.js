// This function is not yet implemented, and should initially make the tests fail.
// TODO: Make the tests pass!
/**
		@param arr 						An array
		@param start 					The index to start removing items
		@param numToReplace		The number of items to remove from the array
		@param ...						Items to insert
		@returns							A new array
*/
var splice = function(arr, start, numToReplace, replace) {
	newArray= [];
	for (i=0; i<arr.length; i++) {
		if (arr[i] < arr[start] || 
			arr[i] >= arr[start + numToReplace]) {
			newArray.push(arr[i]);
		};

	} 
		return newArray;
};
