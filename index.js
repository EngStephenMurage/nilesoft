$(document).ready(function(){

	//banner owl carousel
	$("#banner-area .owl-carousel").owlCarousel({
		dots:true,
		items: 1,
		loop: true,
		autoplay: true
	});
	//top-sale owl carousel
	$("#top-sale .owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			990:{
				items:5
			}
		}
	});

	/* isotope filter*/
	var $grid = $(".grid").isotope({
		itemSelector:'.grid-item',
		layoutMode: 'fitRows'
	});

	//filter items on button click
	$(".button-group").on("click","button", function(){
		var filterValue=$(this).attr('data-filter');
		$grid.isotope({filter:filterValue});
	});

	/*new phones owl carousel*/
	$("#banner-area .owl-carousel").owlCarousel({
		dots:true,
		items: 1
	});
	//top-sale owl carousel
	$("#new-phones .owl-carousel").owlCarousel({
		loop:true,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			990:{
				items:5
			}
		}
	});

	/* Product page qty buttons*/
	let $qty_up = $(".qty .qty-up");
	let $qty_down = $(".qty .qty-down");
	let $input = $(".qty .qty-input");

	/*click event on qty-up*/
	$qty_up.click(function(e){
		if($input.val()>=1 && $input.val()<=9){
			$input.val(function(i, oldval){
				return ++oldval;
			});
		};
	});

	/*click event on qty-up*/
	$qty_down.click(function(e){
		if($input.val()>1 && $input.val()<=10){
			$input.val(function(i, oldval){
				return --oldval;
			});
		};
	});

});