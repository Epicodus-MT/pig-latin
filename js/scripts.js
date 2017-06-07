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
      for (var j = 0; j < vowels.length; j++) {
        console.log('2nd for loop');
        if(wordsArray[i].charAt(0) === vowels[j]) {
          wordsArray[i] = wordsArray[i].concat("way");
          console.log(wordsArray[i]);
          j = vowels.length;
        } else if (wordsArray[i].charAt(0) === 'Q' || wordsArray[i].charAt(0) === 'q') {
            if(wordsArray[i].charAt(1) === 'U' || wordsArray[i].charAt(1) === 'u') {
              console.log("Qu detected");
              var temp = wordsArray[i].charAt(0) + wordsArray[i].charAt(1);
              wordsArray[i] = wordsArray[i].slice(2);
              wordsArray[i] = wordsArray[i].concat(temp);
              console.log(wordsArray[i]);

              //var temp = data;
              //var copy = data.slice();
              // Add some values to data, ref will change but copy won't
              //data.push(6, 7, 8);

            }
            j = vowels.length;

        }


      }
    }
  });
});
