$(document).ready(function () {

$('#guess').focus(function () {
	if ($(this).val() == $(this).attr("value")) {
		$(this).val("");
	}
}).blur(function () {
	if ($(this).val() == "") {
		$(this).val($(this).attr("value"));
	}
});


    //Initial Variables

    var answer = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + answer);
    var numberOfGuesses = 0;
    var guesses = [];
    var distance = null;
    var previousDistance = null;

    function getGuess() {
        $("#submit").click(game);
        $("#guess").keydown(function (enter) {
            if (enter.keyCode == 13) {
                game();
            }
        });
    }

    getGuess();

    function game() {
        var guess = parseInt($('#guess').val());
        if (guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
            $('#guess').val('');
            numberOfGuesses += 1;
            guesses.push(guess);
            distance = Math.abs(answer - guess);
            previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
            if (guess === answer) {
                $('#hint').html('Congrats! You got it in ' + numberOfGuesses + ' guesses! The secret number was ' + answer +"!");
            } else {
                console.log(guess, answer, previousDistance, distance);
                if (isNaN(previousDistance)) {
                    if (guess > answer) {
                        $('#hint').html('Guess lower! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('Guess higher! Last guess: ' + guess);
                    }

                } else if (distance > previousDistance) {
                    $('body').css("background-color", "#3399FF");
                    if (guess > answer) {
                        $('#hint').html('You\'re getting colder, guess LOWER! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('You\'re getting colder, guess HIGHER! Last guess: ' + guess);
                    }
                } else if (distance < previousDistance) {
                    $('body').css("background-color", "#CC0000");
                    if (guess > answer) {
                        $('#hint').html('You\'re getting hotter, guess LOWER! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('You\'re getting hotter, guess HIGHER! Last guess: ' + guess);
                    }
                } else if (distance === previousDistance) {
                    if (guess > answer) {
                        $('#hint').html('You\'re on fire, guess LOWER! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('You\'re on fire, guess HIGHER! Last guess: ' + guess);
                    }
            } else {
                $('#hint').html('ERROR: Your guess must be a number between 1 and 100').css({
                    color: 'red'
                });
            }
        }
        }
        $('#newgame').click(function (e) {
            e.preventDefault();
            $('body').css("background-color", "#222");
            answer = Math.floor((Math.random() * 100) + 1);
            console.log(answer);
            numberOfGuesses = 0;
            guesses = [];
            distance = null;
            previousDistance = null;
            $('#hint').html('');
            $('#guess').val('');
        });
    }
    });
