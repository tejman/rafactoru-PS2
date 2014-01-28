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
    var wordObjectsArray = [];
    var wordArray = str.split(" ");

    for(var i=0; i<wordArray.length; i++) {
      var newObject = {};
      newObject.word = wordArray[i];
      
      var allCounts = repeatCharCount(wordArray[i]);
      var totalRepeats = 0;

      for(var j=0; j<allCounts.length; j++){
        if(allCounts[j]>1){
          totalRepeats++;
        }
      };
      newObject.totalRepeats = totalRepeats;
      wordObjectsArray.push(newObject);
    };
    return wordArray[highValueObject(wordObjectsArray)]
  };

  var highValueObject = function(arr) {
    var totalArray = map(arr, function(item) {
      return item.totalRepeats;
    });
    return totalArray.indexOf(Math.max.apply(null, totalArray))
  };

  var repeatCharCount = function(singleWord) {
    var countArray = [];
    var allChars = singleWord.split("");
    var uniqueChars = []

    $.each(allChars, function(i, indexValue){
      if($.inArray(indexValue, uniqueChars)===-1) uniqueChars.push(indexValue);
    });

    var countArray = map(uniqueChars, function(item) {
      var count = 0;

      for(i=0; i<allChars.length; i++) {
        if(allChars[i]===item) {
          count++;
        }
      };
      return count;
    });
    return countArray;
  };

	
var userString = prompt("Enter any string: ");
console.log("The word with the most repeats is: "+letterCount(userString));

});
