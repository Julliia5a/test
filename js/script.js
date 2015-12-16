$(document).ready(function(){

	jQuery.extend({
	random: function(X) {
	    return Math.floor(X * (Math.random() % 1));
	},
	randomBetween: function(MinV, MaxV) {
	  return MinV + jQuery.random(MaxV - MinV + 1);
	}
	});

	$winWidth = $(window).width();
			$winHeight = $(window).height();
			$docHeight = $(document).height();
	

	$(document).scroll(function(){
		$y = $(document).scrollTop();	
		$("#test").html($(document).scrollTop());

		if ($y >= 400 && $y <600){
			$("#body1").fadeIn();
		}

		else {
			$("#body1").fadeOut();
		};
	if ($y >= 400 && $y <800){
			$("#box").fadeIn();
		}

		else {
			$("#box").fadeOut();
		};
		 


		// All conditional commands go here!

		});
	
});