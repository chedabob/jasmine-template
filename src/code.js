define([], function(){

  var code = (function() {
    function testFunction() {
      return "Hello";
    }
    return {
      testFunction: testFunction
    };
  })();

  return code;
});
