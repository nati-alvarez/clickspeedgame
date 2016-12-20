//decides wheter to use the word or color

var num = Math.floor( (Math.random() *  2) + 1 );
var color_or_word;

switch (num) {
	case 1:
		color_or_word = "word";
		$('#color_or_word').html(color_or_word);
		break;
	case 2:
		color_or_word = "color";
		$('#color_or_word').html(color_or_word);
		break;
}
 

// starts game mode 2

$('#game_mode2').click( function() {
	//displays proper form for leaderboard
	$('#gamemode2_form').show();
	
	//starts position change function
	setInterval( function() {
		$('.game_text').addClass('game_animation');
		changePosition($('#text1'));
		changePosition($('#text2'));
		changePosition($('#text3'));
	}, 1200);
	
	$('#game_modes').hide('blind');
	$('.square').hide();

	setTimeout ( function() {
		$('#game_mode2_directions').show('blind');
		setTimeout( function() {
			$('#game_mode2_directions').hide('blind');
			$('#playing_area').fadeIn();
		}, 3500)
	}, 500);
});

//when an object is clicked

var score = 0;
document.getElementById('text1').style.color = "red";
document.getElementById('text2').style.color = "blue";
document.getElementById('text3').style.color = "gold";

$('.game_text').click( function() {
	switch (color_or_word) {
		case "color":
			if ((this).style.color == randomColor) {
				squareState = "clicked";
				score = score + 1;
				$('.player_score').html(score).effect('bounce');
				$('#input3').val(score);
			}
			else {
				$('#playing_area').fadeOut();
			};
			break;
			
		case "word":
			if ( $(this).html() == randomColor.toUpperCase() ) {
				squareState = "clicked";
				score = score + 1;
				$('.player_score').html(score).effect('bounce');
				$('#input3').val(score);
			}
			else {
				$('#playing_area').fadeOut();
			};
			
			//adds additional elements to game
			switch (score)  {
				case 4: 
					$('#wrong_text1').show();
					$('#wrong_text1').html('GRAY');
					$('#wrong_text1').css('color', randomColor);
					setInterval( function() {
					changePosition($('#wrong_text1'));
					}, 1000);
			};
			break;
	}	
});
