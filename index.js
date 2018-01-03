function sumItems(array) {
 var flattened = array.reduce((acc, cur) => acc.concat(cur), []);
 var flattened1 = flattened.reduce((acc, cur) => acc.concat(cur), []);
 var flattened2 = flattened1.reduce((acc, cur) => acc.concat(cur), []);
 var flattened3 = flattened2.reduce((acc, cur) => acc.concat(cur), []);

  var x = flattened3.reduce(function(a, b) {
  return a + b;
 }, 0);
 return(x);
}

module.exports = sumItems;