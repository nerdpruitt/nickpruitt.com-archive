var $window = $(window);

var $kids     = $("#kids");
var $students = $("#students");
var $adults   = $("#adults");

var windowHeight = $window.height(); //get the height of the window

//places the navigation in the center of the window
function RepositionNav() {
	var windowHeight = $window.height(); //get the height of the window
	var navHeight = $('.nav').height() / 2;
	var windowCenter = (windowHeight / 2); 
	var newtop = windowCenter - navHeight;
	$('.nav').css({"top": newtop}); //set the new top position of the navigation list
}

//function that is called for every pixel the user scrolls. Determines the position of the background
/*
	arguments: 
	x = horizontal position of background
	windowHeight = height of the viewport
	pos = position of the scrollbar
	adjuster = adjust the position of the background
	inertia = how fast the background moves in relation to scrolling
*/

// real good IE... seriously, good job
function newPosIE(windowHeight, pos, adjuster, inertia) {
	return (-((windowHeight + pos) - adjuster) * inertia)  + "px";
}
function newNegIE(windowHeight, pos, adjuster, inertia) {
	return (((windowHeight + pos) - adjuster) * inertia)  + "px";
}

//function to be called whenever the window is scrolled or resized
function Move() {
	var pos = $window.scrollTop(); //position of the scrollbar	
	
	if ($kids.hasClass("active")) {					
		$kids.find('.logo').css({
			'backgroundPositionX': '83%',
			'backgroundPositionY': newPosIE(windowHeight, pos, 2648, 0.4)
		});
		
		$kids.find('.graphic').css({
			'backgroundPositionX': 0,
			'backgroundPositionY': newNegIE(windowHeight, pos, 1300, 0.5)
		});	
				
		$kids.find('.illo').css({
			'backgroundPositionX': '83%',
			'backgroundPositionY': newPosIE(windowHeight, pos, 2748, 0.7)
		});			
	}

	if ($students.hasClass("active")) {
		$students.find('.logo').css({
			'backgroundPositionX': '100%',
			'backgroundPositionY': newPosIE(windowHeight, pos, 3548, 0.4)
		});
		
		$students.find('.graphic').css({
			'backgroundPositionX': 0,
			'backgroundPositionY': newNegIE(windowHeight, pos, 2542, 0.5)
		});
		
		$students.find('.illo').css({
			'backgroundPositionX': '100%',
			'backgroundPositionY': newPosIE(windowHeight, pos, 3668, 0.7)
		});
	}

	if ($adults.hasClass("active")) {
		$adults.find('.graphic').css({
			'backgroundPositionX': 0,
			'backgroundPositionY': newNegIE(windowHeight, pos, 3800, 0.5)
		});
	}
}
	
RepositionNav(); //Reposition the Navigation to center it in the window when the script loads

$window.resize(function() { //if the user resizes the window...
	Move(); //move the background images in relation to the movement of the scrollbar		
	RepositionNav(); //reposition the navigation list so it remains vertically central
});	

$window.scroll(function() { //when the user is scrolling...
	Move(); //move the background images in relation to the movement of the scrollbar
});

$(document).ready(function() {
	var $wrap   = $('.wrap');	
	$wrap.waypoint({ offset: '50%' });
	
	$('.features li:nth-child(3)').addClass('third');
	
	// The same for all waypoints
	$('body').delegate('.wrap', 'waypoint.reached', function(event, direction) {
		var $active = $(this);
		
		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active.end();

		$('.active').removeClass('active');

		$active.addClass('active');
		
		Move(); //move the background images in relation to the movement of the scrollbar
	});

	// begin scroll fade in/out
	var $scroll = $('.scroll');

	$.waypoints.settings.scrollThrottle = 30;

	$kids.bind('waypoint.reached', function(event, direction) {
		if (direction === 'down') {
			$scroll.addClass('fade');
		}
		else {
			$scroll.removeClass('fade');
		}
	});

	$('#footer').bind('waypoint.reached', function(event, direction){
		if (direction === 'down') {
		   $scroll.addClass('fade-out');
		}
		else {
	       $scroll.removeClass('fade-out');
		}		
	});

	// end scroll fade in/out
});