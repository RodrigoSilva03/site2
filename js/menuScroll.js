$(function(){
	$('nav a, a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body,a').animate({'scrollTop':offSetTop},2000);

		return false;
	})	
})