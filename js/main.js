
//load content when 
function loadPage (pageURL) {
    $(".contentContainer").load(pageURL); 
}

//creates permalink once jquery is loaded
$(function () {
	switch (window.location.hash) {
		case '#about':
			console.log("called about");
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