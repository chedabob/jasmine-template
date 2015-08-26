describe('Test the thing', function () {
	it('The thing should say hello', function () {
		expect(new thing("fluff").sayHello()).toBe("Hello");
	});
});



function thing()
{
	var _privateVariable = "Hello";

	function _privateFunction (args) {
		return _privateVariable;
	};

	this.sayHello = function (moreArgs)
	{
		return _privateFunction();
	}
}