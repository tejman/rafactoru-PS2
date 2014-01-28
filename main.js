$(function() {

  var firstReverse = function(str) {
    var splitString = str.split("");
    // splitString.sort(function(a,b){return b-a});
    splitString.reverse();
    return splitString.join("");
  };

  var swapCase = function(str) {
    var splitString = str.split("");

    for(i=0; i<splitString.length; i++) {
      var myChar = splitString[i];
     
      if(typeof myChar === "string" && myChar === myChar.toUpperCase()) {
        splitString[i] = myChar.toLowerCase();
      }

      else if(typeof myChar === "string" && myChar === myChar.toLowerCase()) {
        splitString[i] = myChar.toUpperCase();
      }
    };
    return splitString.join("");
  };

  var letterCount = function(str) {
    var splitString = str.split(" ");
    var wordObjects = [];

    for(i=0; i<splitString.length; i++) {

      var myWord = splitString[i];
      var count = 0;
      allChars = myWord.split("");

      console.log(allChars);

      for(i=0; i<allChars.length; i++) {
        myChar = allChars[i];
        $.inArray(myChar, allChars)!=(-1) ? count++ : "";
      };

      wordObjects.push({word: myWord, repeats: count});
    };
    console.log(wordObjects);
    return
  };

	
var userString = prompt("Enter any string: ");
console.log(letterCount(userString));

});
