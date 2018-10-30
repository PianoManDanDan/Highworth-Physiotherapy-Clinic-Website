/*Sidenav.js*/

/* Set the width of the side navigation to 23% and the left margin of the page content to 23% */
function openNav() {
	document.getElementById("sidenav").style.width = "23%";
	document.getElementById("main").style.marginLeft = "23%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}


/*See if I can get this to work?
var i = 0;
function sidebtn(i) {
	i++;
	if(i % 2 == 0) {
		closeNav();
	} else {
		openNav();
	}
}
*/