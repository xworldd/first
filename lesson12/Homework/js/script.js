$(document).ready(function(){


	$('.layout').on('click', function() {
		$('.modal').slideDown('slow');
		$('.overlay').fadeIn('slow');

	});

	$('.close , .overlay').on('click',function(){
		$('.modal').slideUp('slow');
		$('.overlay').fadeOut('slow');		

	})

	});





