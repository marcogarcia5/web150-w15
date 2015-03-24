$(document).ready(function(){

// Scroll-to div main navigation 
////////////////////////////////////////////////////////////////////////
	$('#main-menu a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});


// scroll arrow fades out
////////////////////////////////////////////////////////////////////////
		var divs = $('.down-arrow-wrap');
			$(window).scroll(function(){
		   if($(window).scrollTop()<100){
		         divs.fadeIn("fast");
		   } else {
		         divs.fadeOut("fast");
		   }
		});


// Scroll-to div main navigation 
////////////////////////////////////////////////////////////////////////
	$('#sticker-nav a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	var nav = responsiveNav(".nav-collapse", { // Selector
	  animate: true, // Boolean: Use CSS3 transitions, true or false
	  transition: 284, // Integer: Speed of the transition, in milliseconds
	  label: "Menu", // String: Label for the navigation toggle
	  insert: "before", // String: Insert the toggle before or after the navigation
	  customToggle: "", // Selector: Specify the ID of a custom toggle
	  closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
	  openPos: "relative", // String: Position of the opened nav, relative or static
	  navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
	  navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
	  jsClass: "js", // String: 'JS enabled' class which is added to  element
	  init: function(){}, // Function: Init callback
	  open: function(){}, // Function: Open callback
	  close: function(){} // Function: Close callback
});

// Fade and animate in images
////////////////////////////////////////////////////////////////////////
	$('.appear').addClass("hidden").viewportChecker({
	        classToAdd: 'visible animated fadeIn',
	        offset: 100,
	        repeat: true,
	        invertBottomOffset: 0
	       });

// Age verification
////////////////////////////////////////////////////////////////////////
	$( ".popup_img_yes" ).click(function() {
	                $( ".popup" ).fadeOut( 400 );
	  });

	$( ".popup_img_no" ).click(function() {
	                window.open("http://www.google.com","_self");
	  });
	
});

// Header moves from bottom to top and sticks
////////////////////////////////////////////////////////////////////////
var pastWaypoint = false;
var pastWaypointSticky = false;

$(window).scroll(function(){
    if ($(window).scrollTop() >= 400) {
           $('header').addClass('fixed fadein');
        }
    else {
           $('header').removeClass('fixed fadein');
        }
        



// Header fades when gets sticky
////////////////////////////////////////////////////////////////////////
    if ($(window).scrollTop() > 400 && !pastWaypoint) {
        $('#logo').show();
        $('#main-nav').css('top','0px');
        console.log('d');
        pastWaypoint = true;
    }
    else if ($(window).scrollTop() <= 400 && pastWaypoint)
    {
         $('#logo').hide();
        console.log('f');
         $('#main-nav').css('top','400px');
        pastWaypoint = false;
    }


// Unstick arrow and side nav after scrolling past final section
////////////////////////////////////////////////////////////////////////
var waypointSticky = $('.menu-item-content').last().position().top-190;
    if ($(window).scrollTop() > waypointSticky  && !pastWaypointSticky) {
    	$('#sticker,#sticker-nav').addClass('hidden-nt');
    	pastWaypointSticky = true;
    } else if($(window).scrollTop() <= waypointSticky && pastWaypointSticky) {
    	$('#sticker,#sticker-nav').removeClass('hidden-nt');    	
    	pastWaypointSticky = false;
    }


// Side menu updates as you scroll
////////////////////////////////////////////////////////////////////////	
	var i=0;
	$('.menu-item-content').each(function(){
		if($(document,window).scrollTop() <= ($(this).position().top+200) ) {
			$('#sticker-nav ul li').removeClass('selected');
			$('#sticker-nav ul li:eq('+i+')').addClass('selected');
			return false;
		}
		i++;
	});



// Rows revealed as you scroll
//////////////////////
	$('#main-wrapper .row:not(.visible)').each(function(){
		var offset = $(window).height();
		if($(document,window).scrollTop() >= ($(this).position().top-offset) && ($(this).position().top>0) ) {
		  $(this).addClass('visible');
		 }
	});


});
$(window).scroll(); // trigger scroll events on page load


// Makes arrow sticky for Process section
////////////////////////////////////////////////////////////////////////
$(window).load(function(){
    $("#sticker").sticky({ topSpacing: 71, center:true, className:"hey" });
    $("#sticker-nav").sticky({ topSpacing: 200 });
});




// Parallax Image
////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  var origheight = $("#trans1").height();
  var height = $(window).height();
  if (height > origheight) {
    $("#trans1").height(height);
  }
  
  $(window).scroll(function(){
    var x = $(this).scrollTop();
    $('#trans1').css('background-position','center -'+parseInt(x/7)+'px');
});
  
});
	 

// remove fragment as much as it can go without adding an entry in browser history:
	window.location.replace("#");

// slice off the remaining '#' in HTML5:    
if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}
	 

	