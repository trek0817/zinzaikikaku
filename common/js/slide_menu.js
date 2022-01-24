// JavaScript Document

// Menu
$(function(){
	// 変数
	var body = $(document.body), //body object
		header = $('header'), //header object
		clbutton = $('.close-button'), //sp close
		menuBtn = $('.header-spmenu'), //menu buttun
		winw,
		scflag,
		opflag = false;

	
	// default
	
	var dfPC = function(){
		if ($(window).scrollTop() < 50) {
			header.addClass('top');
		}
	};
	
	var dfSP = function(){
		header.removeClass('top');
	};
	
	// SP menu
	
	$(function(){
		menuBtn.on('click', function(){
			opflag = true;
			body.toggleClass('open');
            $("#navi-inner").scrollTop(0).perfectScrollbar('update');
		});
		
		// in page link
		$('nav > ul >li a').on('click', function(){
			var linkitem = $(this).attr('href');
			if(linkitem.match(/#/)) {
				body.removeClass('open');
			}
		});
		
		clbutton.on('click', function(){
			body.removeClass('open');
		});
	});
	
	
	// スクロールイベントの監視
	
	var scrollfunc = function() {
		if ($(this).scrollTop() > 120) {
			if(scflag!==1){
				scflag=1;
				if(winw !== "sp"){
					header.removeClass('top');
				}
				header.addClass('headerbg');
			}
		} else {
			if(scflag===1){
				scflag=0;
				if(winw !== "sp"){
					header.addClass('top');
				}
				header.removeClass('headerbg');
			}
		}
	};
	
	$(document).ready(function() {
		scrollfunc();
		$(window).scroll(function () {
			scrollfunc();
		});
	});
	
	// リサイズイベントの監視
	var func = function(){
		if (window.matchMedia('(max-width:768px)').matches) {
			if(winw !== "sp"){
				winw = "sp";
				dfSP();
			}
		} else {
			if(winw !== "pc"){
				winw = "pc";
				dfPC();
			}
		}
	};
	
	
	$(window).resize(function(){
		func();
	});
	$(document).ready(function(){
        func();
        $('#navi-inner').perfectScrollbar();
	});
	
});