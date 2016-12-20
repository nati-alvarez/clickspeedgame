// genertates a random color

var randomColor = Math.floor(Math.random()* 3 );
var comparisonColor;

switch (randomColor) {
	case 0:
		randomColor = 'red';
		comparisonColor = 'rgb(255, 0, 0)';
		break;

	case 1:
		randomColor = 'blue';
		comparisonColor = 'rgb(0, 0, 255)';
		break;

	case 2:
		randomColor = 'gold';
		comparisonColor = 'rgb(255, 215, 0)';
		break;
}

$(".random_color").html(randomColor);
$(".random_color").css("color", randomColor);



//score counter

var score = 0;
var squareState = "";



//animations for menu screens

$("#game_start").click(function(){
	$("#start_screen").effect('blind');
	setTimeout( function() {
		$("#game_modes").slideDown(600);
	}, 500);
});

// animations for game mode buttons

$('#game_mode1').mouseenter( function () {
	$(this).append('<p> Click on the correct colored square </p>');
	$(this).animate( {
		width: '500px',
		height: '200px',
	});
	$('#game_mode2').fadeOut();
});

$('#game_mode1').mouseleave( function() {
	$(this).children('p').remove();
	$(this).animate( {
		width: '150px',
		height: '150px'
	});
	$('#game_mode2').fadeIn();
});



$('#game_mode2').mouseenter( function () {
	$(this).append('<p> Click on the correct color or word </p>');
	$(this).animate( {
		width: '500px',
		height: '200px'
	});
	$('#game_mode1').fadeOut();
});

$('#game_mode2').mouseleave( function() {
	$(this).children('p').remove();
	$(this).animate( {
		width: '150px',
		height: '150px'
	});
	$('#game_mode1').fadeIn();
});
