$(function() {
	
	// Barra lateral navegação entre os anos
	var sOffset = $(".navAnos").offset().top;
	var navAnos = $(".navAnos").height();

	jQuery(window).scroll(function() {
		var scrollYpos = $(document).scrollTop();
		if (scrollYpos > 1000) {
			$(".navAnos").css({
				'position': 'fixed',
				'top':'82px'
			});
		} else {
			$(".navAnos").css({
				'top': '1082px',
				'position': 'absolute'
			});
		}	

		// console.log(scrollYpos);

		// Marcador Navegação Anos
		if(scrollYpos <= 995){ //2011
			$('.marcador').stop().animate({
				'top':'10px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-1 a').addClass('active');
		}

		if(scrollYpos >= 2465){ //2012
			$('.marcador').stop().animate({
				'top':'53px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-2 a').addClass('active');
		}

		if(scrollYpos >= 3890){ //2013
			$('.marcador').stop().animate({
				'top':'96px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-3 a').addClass('active');
		}

		if(scrollYpos >= 5309){ //2014
			$('.marcador').stop().animate({
				'top':'139px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-4 a').addClass('active');
		}

		if(scrollYpos >= 6698){ // 2015
			$('.marcador').stop().animate({
				'top':'182px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-5 a').addClass('active');
		}

		if(scrollYpos >= 8099){ //2016
			$('.marcador').stop().animate({
				'top':'225px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-6 a').addClass('active');
		}
		
	});

	// Botão Iniciar
	$('a.inicio').click(function(){
		$('html, body').animate({
			scrollTop: 564}, 800);
		return false;
	});

	// Navegação até os anos (efeito âncora)
	$('.navAnos a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1200);
		return false;
	});

	// Retornar ao topo
	$('.topo').click(function(event) {
		$('html, body').animate({
			scrollTop:0}, 800);
		return false;
	});

	// Disparo da abertura do modal
	$("a[rel=modal]").click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("href");
 
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':'20%', 'position':'fixed'});
        $('.modal').fadeOut('fast');
        $(id).show();   
    });

	// Aplica classe 'active' ao ano clica
	// no menu lateral dos anos
	$('.navAnos a').click(function(){
		$('.navAnos a').removeClass('active');
		$(this).addClass('active');
	});	

	// Fechar modal
	$('a.fechar').click(function(){
		$('.modal').fadeOut('fast');
	});

});

// Função para avião 'decolar'
$().ready(function() {
	$(".aviao").jScroll({speed : "slow"});
	// speed: slow ou fast
});