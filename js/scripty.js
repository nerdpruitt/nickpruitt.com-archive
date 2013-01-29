var $article = $('article');
var articleList = $('.article-list').length;

var article_highlight = function(){
	$article.waypoint({ offset: '50%' });

	// The same for all waypoints
	$('body').delegate('article', 'waypoint.reached', function(event, direction) {
		var $active = $(this);

		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active.end();

		$('article:first-child').removeClass('active');
		$('.active').removeClass('active');
		$active.addClass('active');
	});
};

if(articleList === 0) {
	$(window).load(function(){
		$('article:first-child').addClass('active');
		article_highlight();
	}).scroll(function(){
		article_highlight();
	}).resize(function(){
		article_highlight();
	});
} else if(articleList > 0)  {
	$article.addClass('active');
}
