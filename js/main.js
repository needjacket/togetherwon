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


	$('#carousel-prev').click(function () {
		$('#comments-carousel').carousel('prev');
	});

	$('#carousel-next').click(function () {
		$('#comments-carousel').carousel('next');
	});

	// XHR form submit
	$(function () {
		$('form').submit(function () {
			var data = $(this).serialize();
			$.ajax({
				type: 'POST',
				url: "http://api.faceprints.net/api/form",
				data: data,
				success: function () {
					$('#status').html("Your information was successfully sent.").removeClass();
					$('#modal').modal({});
				},
				error: function () {
					$('#status').html("Unable to send form data at this time. Please try emailing us.").removeClass().addClass("label label-important");
					$('#modal').modal({});
				}
			})
		})
	});
});

