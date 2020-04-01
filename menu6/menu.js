												/*função rolar da página*/
$(document).ready(function(){
	var doc = $('html, body');
      	$('.scroll').click(function() {
            doc.animate({
            	scrollTop: $( $.attr(this, 'href') ).offset().top                   
        	}, 1600);
        return false;
        });

												/*função do menu*/
	$(function(){
		$(window).scroll(function(){
			var topo = $('#topo').height(); // altura do topo			
			var rolagem = $(window).scrollTop(); // qto foi rolado a barra 

			if(rolagem > topo){
	  			$('#menu').css({'position' : 'absolute', 'background' : '#FFA500', 'margin-top' : rolagem - (topo + 50)});
			}else{
	  			$('#menu').css({'position' : 'absolute', 'background' : 'transparent', 'margin-top' : 0});
			}	
		});
	});    
});