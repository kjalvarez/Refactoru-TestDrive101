// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

describe("splice", function() {
	it("splices array", function() {
		expect(splice(['a','b','c','d','e'], 2, 2)).toEqual( ['a','b','e']);
	});

	it("removes and inserts values in array", function() {
		expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
	});

	it("inserts new values into the array", function() {
		expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
	});

	it("inserts new values at the end, removes nothing, with a 'start' value that exceeds the array's length", function() {
		expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c', 'z']);
	});

	it("inserts new values at the end with a high start index and request to remove something", function() {
		expect(splice(['a', 'b', 'c'], 99, 1, 'z')).toEqual(['a', 'b', 'c', 'z'])

	});

	it("inserts multiple replacement values with high start value", function () {
		expect(splice(['a', 'b', 'c'], 99, 1, 'x', 'y', 'z')).toEqual(['a','b','c','x','y','z'])
	});
});

