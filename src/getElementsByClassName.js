// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];

  var nodeTrace = function(node, className){
    if (_.contains(node.classList, className)){
      result.push(node);
    }
    if (node.childNodes){
      for (let i = 0; i < node.childNodes.length; i++){
        nodeTrace(node.childNodes[i], className);
      }
    }
  }
  nodeTrace(document.body, className);
  return result;
};