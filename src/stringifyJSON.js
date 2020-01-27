// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var string = '';
  if (typeof obj !== "object"){
    if (typeof obj === "string"){
      string = `"${obj}"`;
      return string;
    } else if (typeof obj === undefined){ // undefined
      return string;
    } else { //booleans and numbers
      string = string.concat(`${obj}`);
      return string;
    }
  } else {
    if (Array.isArray(obj)){ //array
      var propertyStrings = [];
      for (let i = 0; i < obj.length; i++){
        propertyStrings.push(`${stringifyJSON(obj[i])}`);
      }
      string = string.concat('[').concat(propertyStrings.join(',')).concat(']');
      return string;
    } else if (obj === null){ //null object
      return 'null';
    } else { //object
      string = string.concat('{');
      var propertyStrings = [];
      for (var prop in obj){
        if (typeof obj[prop] !== 'function' && typeof obj[prop] !== 'undefined'){
          propertyStrings.push(`"${prop}":${stringifyJSON(obj[prop])}`);
        }
      }
      string = string.concat(propertyStrings.join(',')).concat('}');
      return string;
    }
  }
};
