
  /*                                                                                           
                                                                                             
    ;;   ;;          ;            ;;;;;   ;    ;;;;;            ;;                 ;;        
    ;;   ;;          ;              ;     ;    ;    ;                                        
    ;;   ;;   ;;;    ;  ;;  ;;;     ;    ;;;;  ;    ;   ;;;     ;   ; ;;          ;;    ;;;  
    ; ; ; ;  ;   ;   ; ;;  ;   ;    ;     ;    ;    ;  ;   ;    ;   ;;  ;          ;   ;   ; 
    ; ; ; ;      ;   ; ;   ;   ;    ;     ;    ;    ;      ;    ;   ;   ;          ;   ;     
    ; ; ; ;   ;;;;   ;;    ;;;;;    ;     ;    ;;;;;    ;;;;    ;   ;   ;          ;    ;;;  
    ;  ;  ;  ;   ;   ; ;   ;        ;     ;    ;  ;    ;   ;    ;   ;   ;          ;       ; 
    ;     ;  ;   ;   ;  ;  ;   ;    ;     ;    ;   ;   ;   ;    ;   ;   ;    ;;    ;   ;   ; 
    ;     ;   ;;; ;  ;  ;;  ;;;   ;;;;;    ;;  ;    ;   ;;; ;   ;   ;   ;   ;;;    ;    ;;;  
                                                                                   ;         
                                                                                 ;;;         
                                                                                          
                                                                                           


Make it rain cash on your favorite webpage, yo!
Created by Dylan Ra Boudro @Drboudro
http://DylanBoudro.com


Enjoy!  And please: if you improve the code; submit a pull request!


///////////////////////////// CONTROL POINTS ///////////////////////////*/

//------------------------- MONEY Y ORIGIN -------------------------------//
yOrigin = function() { return Math.random() * -1000 };

//------------------------- MONEY X ORIGIN -------------------------------//
xOrigin = function() { return $.MakeItRain.random(($(window).width() - 50)) };

//------------------------- money Y ENDPOINT -----------------------------//
var yLand =$(window).height() - 20;

//------------------------- money X ENDPOINT -----------------------------//
var xLand = //$.MakeItRain.random(($(window).width()-150))	currently no x endpoint

///////////////////////////////////////////////////////////////////////////

(function($) {
	// DEFAULT IMAGES FOR money
	var defaults = {
		images : [
			'images/money.png'],
		total : 20,
		fadeTime: 400
	};
	var livingSprites = 0;

	// SETTINGS
	$.MakeItRain = function(settings) {
		// Setup the living sprites to the total amount of sprites
		$.MakeItRain.settings = $.extend({}, defaults, settings);
			if($.MakeItRain.preloadImages()){
					if(livingSprites <= 0) {
						for (i = 0; i < $.MakeItRain.settings.total; i++){
							$.MakeItRain.fall($.MakeItRain.create($.MakeItRain.settings.images[$.MakeItRain.random(($.MakeItRain.settings.images).length)]));
						}
					}
			}
		return;
	};
	
	/* Public Functions */
	$.MakeItRain.create = function(img){
		livingSprites++;
		spark = $('<img>').attr({'src' : img}).hide();
		$(document.body).append(spark);
			return spark.css({
				'position':'absolute',
				'z-index': $.MakeItRain.random(20),
				top: yOrigin,
				left: xOrigin
				}).show().addClass('mir-sprite');
}

$.MakeItRain.fall = function(sp) {
	$(sp).animate({
		top: yLand,
		opacity: 0,
		//left: 	
		// MakeItRain speed
	}, (($.MakeItRain.random(100) + 100) * 85),function(){ $.MakeItRain.fall(sp); $.MakeItRain.removeSprite(sp); });
};

$.MakeItRain.preloadImages = function() {
	var preloads = new Object();
	for (i = 0; i < ($.MakeItRain.settings.images).length; i++){
			preloads[i] = new Image(); preloads[i].src = $.MakeItRain.settings.images[i];
		}
	return true;
}

$.MakeItRain.random = function(max) {
	return Math.ceil(Math.random() * max) - 1;
}

// Remove a Sprite function
$.MakeItRain.removeSprite = function(sprite) {
	$(sprite).remove();
	livingSprites--;
}

})(jQuery);
