// Wait for jQuery to finish loading 
$(function () {

	//load content when 
	function loadPage (pageURL) {
	    $(".contentContainer").load(pageURL); 
	}

	// Whenever the swipe button is clicked
	$('#scrollMenu').click(function () {

		// A reference to the top menu and its button
		var $topMenu = $('#topMenu'); 

		// The position of the menu's horizontal scrollbar 
		var scrollLeft = $topMenu.scrollLeft(); 

		// How many pixels the menu slides each time the "swipe" button is pressed
		var step = 110; 

		// Scroll the menu to the left 
		$topMenu.animate({scrollLeft: scrollLeft + step}, 'slow'); 
	});

	//creates permalink once jquery is loaded
	$(function () {
		switch (window.location.hash) {
			case '#about':
				loadPage('about.html');
			break;
			
			case '#classes':
				loadPage('classes.html');
			break;

			case '#projects':
				loadPage('projects.html');
			break;

			case '#pubs':
				loadPage('publications.html');
			break;	
		}
	});
});
