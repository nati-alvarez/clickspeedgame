//random position change function 

function changePosition(object) {
	var playing_area_width = parseInt($('#playing_area').css('width')) - 100;
	var randomLeft = Math.floor((Math.random() * playing_area_width) + 1);

	var playing_area_height = parseInt($('#playing_area').css('height')) - 100;
	var randomTop = Math.floor((Math.random() * playing_area_height) + 1);

	object.css('top', randomTop);
	object.css('left', randomLeft);
}

//function for random size change

function changeSize (object) {
	var maxWidth = 100;
	var randomWidth =  Math.floor((Math.random() * maxWidth) +  50);
	object.height(randomWidth);
	object.width(randomWidth);
};

//sets background color of squares
	document.getElementById('square1').style.backgroundColor = 'red';
	document.getElementById('square2').style.backgroundColor = 'blue';
	document.getElementById('square3').style.backgroundColor = 'gold';

// starts game mode 1

$("#game_mode1").click( function() {
	//displays proper form for leaderboard
	$('#gamemode1_form').show();
	
	//hides game mode prompt
	//hides elements for game mode 2 
	$("#game_modes").hide('blind');
	$(".game_text").hide();
	
	

	interval = setInterval( function () {
		changePosition($("#square1"));
		changePosition($("#square2"));
		changePosition($("#square3"));
		changePosition($('#circle1'));
	}, 1000);

	setTimeout( function () {
		$("#game_mode1_directions").show('blind');

		setTimeout( function () {
			$("#game_mode1_directions").hide('blind').fadeOut('slow');
			$("#playing_area").fadeIn('slow');
		}, 3000);
	}, 500 );
});


// when a square is clicked

var squareState;

$(".square").click(function()  {

	if ( (this).style.backgroundColor == randomColor) {
		score = score + 1;
		$('.player_score').html(score).effect('bounce');
		squareState = "clicked";
		$("#input2").val(score);
		$(this).css('z-index', '10');
	}
	else {
		
		$('#playing_area').fadeOut();
		$('#game_over_prompt').show('blind');
	};
	
	//adds additional elements to the game according to score
	
	//as switch case
	
	switch (score)  {
		case 4: 
			$('#circle1').show();
			$('#circle1').css('background-color', randomColor);
			break;
		case 11:
			clearInterval(interval);
			interval2 = setInterval( function () {
				changePosition($("#square1"));
				changePosition($("#square2"));
				changePosition($("#square3"));
				changePosition($('#circle1'));
			}, 700);
			break;
		case 16:
			sizeInterval = setInterval( function() {
				changeSize($('#square1'));
				changeSize($('#square2'));
				changeSize($('#square3'));
				changeSize($('#circle1'));
			}, 700);
			break;
		case 20:
			$('.square').addClass('game_animation');
			$('#circle1').addClass('game_animation');
			break;
		case 25:
			clearInterval(interval2);
			interval3 = setInterval( function () {
				changePosition($("#square1"));
				changePosition($("#square2"));
				changePosition($("#square3"));
				changePosition($('#circle1'));
			}, 500)
	};
	
});

//when the area outside the squares is clikced

$('#playing_area').click( function() {
	if(squareState == "clicked") {
		squareState = "";
	}
	else {
		
		$('#playing_area').fadeOut();
		$('#game_over_prompt').show('blind');
	};
});


//adds additional elements to the game according to the score

