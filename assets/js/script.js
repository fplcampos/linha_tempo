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

		//console.log(scrollYpos);

		// Marcador Navegação Anos
		if(scrollYpos >= 924){ //2011
			$('.marcador').stop().animate({
				'top':'10px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-1 a').addClass('active');
		}

		if(scrollYpos >= 2394){ //2012
			$('.marcador').stop().animate({
				'top':'53px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-2 a').addClass('active');
		}

		if(scrollYpos >= 3819){ //2013
			$('.marcador').stop().animate({
				'top':'96px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-3 a').addClass('active');
		}

		if(scrollYpos >= 5238){ //2014
			$('.marcador').stop().animate({
				'top':'139px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-4 a').addClass('active');
		}

		if(scrollYpos >= 6627){ // 2015
			$('.marcador').stop().animate({
				'top':'182px'
			});
			$('.navAnos a').removeClass('active');
			$('.nav-5 a').addClass('active');
		}

		if(scrollYpos >= 8028){ //2016
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

	// Aplica classe 'active' ao ano clica
	// no menu lateral dos anos
	$('.navAnos a').click(function(){
		$('.navAnos a').removeClass('active');
		$(this).addClass('active');
	});

	// Retornar ao topo
	$('.topo, .final a').click(function(event) {
		$('html, body').animate({
			scrollTop:0}, 800);
		return false;
	});

	// Disparo da abertura do modal
	$("a[rel=modal]").click(function(ev){
		ev.preventDefault();
 
		var id = $(this).attr("href");
 
		var alturaTela = $(document).height();
		var larguraTela = $(window).width();
	 
		var left = ($(window).width() /2) - ( $(id).width() / 2 );
		var top = ($(window).height() / 2) - ( $(id).height() / 2 );
	 
		$(id).css({'top': '64px', 'position':'fixed'});
		$('.modal').fadeOut('fast');
		$('.overlay').fadeIn('fast');
		$(id).show();   
	});

	$("a[rel=content1]").click(function(ev) {
		ev.preventDefault();

		$('.icons a').removeClass('active');
		$(this).addClass('active');
		$('.content-1').show('fast');
		$('.content-2, .content-21, .content-3, .content-4, .content-5, .content-51').hide('fast');
	});

	$("a[rel=content2]").click(function(ev) {
		ev.preventDefault();

		$('.icons a').removeClass('active');
		$(this).addClass('active');
		$('.content-2').show('fast');
		$('.content-1, .content-21, .content-3, .content-4, .content-5, .content-51').hide('fast');
	});

	$("a[rel=content21]").click(function(ev) {
		ev.preventDefault();

		$('.icons a').removeClass('active');
		$(this).addClass('active');
		$('.content-21').show('fast');
		$('.content-1, .content-2, .content-3, .content-4, .content-5, .content-51').hide('fast');
	});

	$("a[rel=content3]").click(function(ev) {
		ev.preventDefault();

		$('.icons a').removeClass('active');
		$(this).addClass('active');
		$('.content-3').show('fast');
		$('.content-1, .content-2, .content-21, .content-4, .content-5, .content-51').hide('fast');
	});

	$("a[rel=content4]").click(function(ev) {
		ev.preventDefault();

		$('.icons a').removeClass('active');
		$(this).addClass('active');
		$('.content-4').show('fast');
		$('.content-1, .content-2, .content-21, .content-3, .content-5, .content-51').hide('fast');
	});

	$("a[rel=content5]").click(function(ev) {
		ev.preventDefault();

		$('.icons a').removeClass('active');
		$(this).addClass('active');
		$('.content-5, .content-51').show('fast');
		$('.content-1, .content-2, .content-21, .content-3, .content-4').hide('fast');
	});

	// Fechar modal
	$('a.fechar').click(function(ev){
		ev.preventDefault();

		$('.overlay, .modal').fadeOut('fast');
		$('.content-1, #compare3').show('fast');
		$('.content-2, .content-3, .content-4, .content-5, .content-51').hide('fast');
		$('.icons a, .content-51 a').removeClass('active');
		$('.icons a.desc, .content-51 a.link1').addClass('active');
		$('#compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.scrollable').slimScroll({
		height: '500px',
		railVisible: true,
		alwaysVisible: true
	});


});

// Função para avião 'decolar'
$(document).ready(function() {
	$(".aviao").jScroll({speed : "slow"});
	// speed: slow ou fast

	$('#compare').beforeAfter();
	$('#compare2').beforeAfter();
	$('#compare3').beforeAfter();
	$('#compare4').beforeAfter();
	$('#compare5').beforeAfter();
	$('#compare6').beforeAfter();
	$('#compare7').beforeAfter();
	$('#compare8').beforeAfter();
	$('#compare9').beforeAfter();
	$('#compare10').beforeAfter();
	$('#compare11').beforeAfter();
	$('#compare12').beforeAfter();
	$('#compare13').beforeAfter();
	$('#compare14').beforeAfter();
	$('#compare15').beforeAfter();
	$('#compare16').beforeAfter();

	$('.link1').click(function(ev) {
		ev.preventDefault();

		$('#compare3').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link2').click(function(ev) {
		ev.preventDefault();

		$('#compare4').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link3').click(function(ev) {
		ev.preventDefault();

		$('#compare5').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link4').click(function(ev) {
		ev.preventDefault();

		$('#compare6').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link5').click(function(ev) {
		ev.preventDefault();

		$('#compare7').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link6').click(function(ev) {
		ev.preventDefault();

		$('#compare8').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link7').click(function(ev) {
		ev.preventDefault();

		$('#compare9').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});	

	$('.link8').click(function(ev) {
		ev.preventDefault();

		$('#compare10').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare11, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link9').click(function(ev) {
		ev.preventDefault();

		$('#compare11').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare12, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link10').click(function(ev) {
		ev.preventDefault();

		$('#compare12').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare13, #compare14, #compare15, #compare16').hide();
	});

	$('.link11').click(function(ev) {
		ev.preventDefault();

		$('#compare13').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare14, #compare15, #compare16').hide();
	});

	$('.link12').click(function(ev) {
		ev.preventDefault();

		$('#compare14').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare15, #compare16').hide();
	});

	$('.link13').click(function(ev) {
		ev.preventDefault();

		$('#compare15').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare16').hide();
	});

	$('.link14').click(function(ev) {
		ev.preventDefault();

		$('#compare16').show();
		$('.content-51 a').removeClass('active');
		$(this).addClass('active');
		$('#compare3, #compare4, #compare5, #compare6, #compare7, #compare8, #compare9, #compare10, #compare11, #compare12, #compare13, #compare14, #compare15').hide();
	});

	// $(".any-class").jCarouselLite({
	//     btnNext: ".next",
	//     btnPrev: ".prev",
	//     circular: false,
	//     visible: 1,
	//     speed: 500
	// });
	
	$('.carrossel, .carrossel2').slick({
		dots: true,
		infinite: false,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

});