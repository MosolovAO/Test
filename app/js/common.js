
$(function() {

	var filterizd = $('.filtr-container').filterizr({
		layout: 'sameSize',
		setupControls: true, 
		filter: 'all',
   //options object
	});

	$('.advantagers__content').equalHeights();
	$('.about__content').equalHeights();

	$(".owl-carousel").owlCarousel({
		nav: true,
		dots: true,
		dotsClass: "owl-dots",
		items: 1,
		navText :['<i class="fa fa-caret-right"> </i>', '<i class="fa fa-caret-right"> </i>'],
	});

		$(".owl-carousel").owlCarousel({

	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
