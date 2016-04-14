// Find the nav bar
var navBar = document.querySelector('nav');

// Do something when the user scrolls
window.onscroll = function(event) {

	// If the distance from the top is 200px
	if( document.body.scrollTop >= 175 ) {

		// Hide the nav
		navBar.className = 'nav-hide';

	} else {

		// Show the nav
		navBar.className = 'nav-fixed';

	}

}