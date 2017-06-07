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
    for (var i = 0; i < wordsArray.length; i++) {
      console.log('1st for loop');
      var lettersArray = [];
      lettersArray = wordsArray[i].split('');

      //for (var k = 0; k < lettersArray.length; k++) {
        //var tempCons = "";

        for (var j = 0; j < vowels.length; j++) {
          console.log('2nd for loop');
          if(wordsArray[i].charAt(0) === vowels[j]) {
            wordsArray[i] = wordsArray[i].concat("way");
            console.log(wordsArray[i]);
            j = vowels.length;
            k = lettersArray.length;
          } else if (wordsArray[i].charAt(0) === 'Q' || wordsArray[i].charAt(0) === 'q') {
              if(wordsArray[i].charAt(1) === 'U' || wordsArray[i].charAt(1) === 'u') {
                console.log("Qu detected");
                var temp = wordsArray[i].charAt(0) + wordsArray[i].charAt(1);
                wordsArray[i] = wordsArray[i].slice(2);
                wordsArray[i] = wordsArray[i].concat(temp + "ay");
                console.log(wordsArray[i]);

              }
              j = vowels.length;
              k = lettersArray.length;

          } else {
              var tempCons = "";
              for (var k = 0; k < lettersArray.length; k++) {
                console.log(lettersArray[k]);
              }
              k = lettersArray.length;

          //   tempCons = tempCons.concat(lettersArray[k]);
          //   console.log = tempCons;

          }


        }

      }
    //}
  });
});
