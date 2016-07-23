jQuery(function ($) {

    'use strict';

	/*==============================================================*/
	//Mobile Toggle Control
	/*==============================================================*/
	$(function(){ 
		var navMain = $("#main-menu");
		navMain.on("click", "a", null, function () {
			navMain.collapse('hide');
		});
	});
	
	// ----------------------------------------------
    // Menu Scrolling
    // ----------------------------------------------
	$('#navigation .navbar-nav').onePageNav({
		currentClass: 'active',
		filter: ':not(.exclude)',
	});
	
	// ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	
	(function () {
		function parallaxInit() {				
			$("#about").parallax("50%", 0.3);
			$("#options").parallax("50%", 0.3);
		}
		parallaxInit();
	}());
});

