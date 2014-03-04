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
			// Step 1 Add everything from 0 through start.
			for (i=0; i<Math.min(arr.length, start); i++) {
				newArray.push(arr[i]);
			}

			// Step 2 Add the replace parameter(s).
			if (arguments.length >= 4) {
				for (i=3; i<arguments.length; i++) {
					newArray.push(arguments[i]);
				}
			}
			
			// Step 3 Push the last part of the old array.
			for (i=start+numToReplace; i<arr.length; i++) {
				newArray.push(arr[i]);
			}

			return newArray;
		};




// for (i=0; i<arr.length; i++) {
// 				if (arr[i] < arr[start] || 
// 					arr[i] >= arr[start + numToReplace]) {
// 					newArray.push(arr[i]);
// 			};

// 		} 