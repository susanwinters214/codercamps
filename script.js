function showResults(){

  var theTextYouTyped = document.getElementById("txtBoxArea").value;
// Declare Variables to hold initial Values
  var spaceCounter=0;
  var wordCounter=1;
  var sentenceCounter=0;
  var avgWordsCounter=0;

 // loop thru contents of textarea with these functions:
 for(var i=0; i<= theTextYouTyped.length; i++)
      {
         if (theTextYouTyped[i] == " ")
                {
                   spaceCounter++;
                   wordCounter++;
                }
          if (theTextYouTyped[i] == "." || theTextYouTyped[i] == "?" || theTextYouTyped[i] == "!" )
                {
                   sentenceCounter++;
                 }
      }
       avgWordsCounter = wordCounter/sentenceCounter;

 //return & print to page:
var myAvg = document.write('There are an average of ' + avgWordsCounter + ' words per sentence. <br>');
var mySpaces = document.write('There are ' + spaceCounter + ' spaces in this text. <br>');
var myWords = document.write('There are ' + wordCounter + ' words in this text. <br>');
var mySentences =  document.write('There are ' + sentenceCounter + ' sentences in this text. <br>');
  myResults.innerHtml = myAvg + mySpaces + myWords + mySentences;
}
