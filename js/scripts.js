$(document).ready(function() {
  $('#submit_button').click(function(event){
  event.preventDefault();

  var phraseInput = $("input#phrase").val();
  var wordsArray = [];
  wordsArray = phraseInput.split(' ');
  // var emptyWordArray = [];
    $("#results").text("Pig Latin translation: " + phraseInput);
    //$("#form").hide();
    //$("h2").hide();

    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    //Begin loops
    for (var i = 0; i < wordsArray.length; i++) {
      console.log('1st for loop');
      var lettersArray = [];
      lettersArray = wordsArray[i].split('');
      // for (var j = 0; j < vowels.length; j++) {
      //   console.log('2nd for loop');
      if(wordsArray[i].charAt(0) === 'a' || wordsArray[i].charAt(0) === 'e' || wordsArray[i].charAt(0) === 'i' || wordsArray[i].charAt(0) === 'o' || wordsArray[i].charAt(0) === 'u' || wordsArray[i].charAt(0) === 'A' || wordsArray[i].charAt(0) === 'E' || wordsArray[i].charAt(0) === 'I' || wordsArray[i].charAt(0) === 'O' || wordsArray[i].charAt(0) === 'U') {
        wordsArray[i] = wordsArray[i].concat("way");
        console.log(wordsArray[i]);
        j = vowels.length;
        //k = lettersArray.length;
      } else if (wordsArray[i].charAt(0) === 'Q' || wordsArray[i].charAt(0) === 'q') {
          if(wordsArray[i].charAt(1) === 'U' || wordsArray[i].charAt(1) === 'u') {
            console.log("Qu detected");
            var temp = wordsArray[i].charAt(0) + wordsArray[i].charAt(1);
            wordsArray[i] = wordsArray[i].slice(2);
            wordsArray[i] = wordsArray[i].concat(temp + "ay");
            console.log(wordsArray[i]);

          }
          //j = vowels.length;
          //k = lettersArray.length;

      } else {
          var tempCons = "";
          var vowelStop = false;

          for (var k = 0; k < lettersArray.length; k++) {
            if (lettersArray[k] === 'a' || lettersArray[k] === 'e' || lettersArray[k] === 'i' || lettersArray[k] === 'o' || lettersArray[k] === 'u' || lettersArray[k] === 'A' || lettersArray[k] === 'E' || lettersArray[k] === 'I' || lettersArray[k] === 'O' || lettersArray[k] === 'U') {
              k = lettersArray.length;
              //vowelStop = true;
              //console.log(lettersArray[k] + " is a vowel");
            } else {
              tempCons = tempCons.concat(lettersArray[k]);
            }

          }
          //console.log(tempCons);
          wordsArray[i] = wordsArray[i].slice(tempCons.length);
          wordsArray[i] = wordsArray[i].concat(tempCons + "ay");
          console.log(wordsArray[i]);

          //move tempCons to end of the word along 'ay' and slice first characters
      }
    //  wordInput = wordInput.replace(letterArray[j], '-');
    }
  
    var newString = wordsArray.toString();
    newString = newString.replace(/,/g," ");
    console.log(newString);

  });
});
