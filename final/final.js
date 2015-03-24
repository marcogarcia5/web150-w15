// *MG* This code is found at www.damawashington.com.  I've included the html, css, and
// *MG* original js files in the final folder on my GitHub.  I've described the majority
// *MG* of the code the best that I could.  These functions may not be as interesting 
// *MG* as you had wished, but looking at a lot of these things for the first time, I
// *MG* find these things interesting myself.  The comments at the top of each section
// *MG* are written by the developers, so anything with the *MG* tag in front are my comments.
// *MG* This code represents simple visual effects of various elements throughout the dama
// *MG* site.  A lot of visual effects are based on position of the scrolling on the screen.


$(document).ready(function(){

// Scroll-to div main navigation 
////////////////////////////////////////////////////////////////////////
	$('#main-menu a').on('click',function (e) {			// *MG* Finds <a> element within div with an id=main-menu. On clicking the <a> element, the following function runs.
	    e.preventDefault();						// *MG* Cancels function while letting the rest of the event continue.

	    var target = this.hash,					// *MG* Creates variable target that is equal to an object (this) and adds a hash in front of the object. 
	    $target = $(target);					// *MG* Simplifies calling target with jQuery.

	    $('html, body').stop().animate({				// *MG* Stops loading of html or body tags. Calls for an animation to begin for the function.
	        'scrollTop': $target.offset().top			// *MG* Calls target element to be offset to the top of the page.
	    }, 500, 'swing', function () {				// *MG* Sets a half-second transition with a swing style of animation.
	        window.location.hash = target;				// *MG* Links the location of the window to the location of the target initially called on line 8.  Carries out animation function.
	    });
	});


// scroll arrow fades out
////////////////////////////////////////////////////////////////////////
		var divs = $('.down-arrow-wrap');			// *MG* Creates a variable divs from elements with a class of down-arrow-wrap.
			$(window).scroll(function(){			// *MG* Searches the window and assigns a function based on the scrolling of the page.
		   if($(window).scrollTop()<100){			// *MG* Creates a conditional statement that if the window has scrolled less than 100px from the top -
		         divs.fadeIn("fast");				// *MG* ...the element called earlier is displayed with a fast fade-in.
		   } else {						// *MG* If the scrolling of the page isn't within 100px of the top -
		         divs.fadeOut("fast");				// *MG* ...the element called earlier is faded-out with a fast transition.
		   }
		});


// Scroll-to div main navigation 
////////////////////////////////////////////////////////////////////////
	$('#sticker-nav a').on('click',function (e) {			// *MG* Uses identical scroll function as mentioned above when links are clicked in the sidebar navigation.
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
// *MG* I couldn't figure out how this section of code was used, but I do understand that it effects the mobile nav menu.

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
	$('.appear').addClass("hidden").viewportChecker({		// *MG* Searches for classes of 'appear'. Adds class of 'hidden' found in the CSS document. Calls function viewportChecker from 'viewportchecker.js'.
	        classToAdd: 'visible animated fadeIn',			// *MG* To be honest, from this point forward, I can't find the reference for these classes in the CSS document or on any of the other documents.
	        offset: 100,
	        repeat: true,
	        invertBottomOffset: 0
	       });

// Age verification
////////////////////////////////////////////////////////////////////////
	$( ".popup_img_yes" ).click(function() {			// *MG* Finds class named .popup_img_yes.  On clicking this element, runs the following function.
	                $( ".popup" ).fadeOut( 400 );			// *MG* Finds class named .popup. Will fade out the div .popup over 4 tenths of a second. Main website appears.
	  });

	$( ".popup_img_no" ).click(function() {				// *MG* Finds class named .popup_img_no.  On clicking this element, runs the following function.
	                window.open("http://www.google.com","_self");	// *MG* In the same window ("_self"), we are re-directed to http://google.com.
	  });
	
});

// Header moves from bottom to top and sticks
////////////////////////////////////////////////////////////////////////
var pastWaypoint = false;						// *MG* Creates variable pastWaypoint and sets value to false.
var pastWaypointSticky = false;						// *MG* Creates variable pastWaypointSticky and sets value to false.

$(window).scroll(function(){						// *MG* Searches window and creates the following function based on scroll on page.
    if ($(window).scrollTop() >= 400) {					// *MG* Creates conditional statement that if the scroll position on the screen is more than or equal to 400px -
           $('header').addClass('fixed fadein');			// *MG* Finds the element <header> and adds classes from the CSS document '.fixed' and '.fadin'.
        }
    else {								// *MG* If the scroll postion on the window is less than 400px -
           $('header').removeClass('fixed fadein');			// *MG* Finds the element <header> and removes classes from the CSS document '.fixed' and '.fadin'.
        }
        



// Header fades when gets sticky
////////////////////////////////////////////////////////////////////////
    if ($(window).scrollTop() > 400 && !pastWaypoint) {			// *MG* Conditional statement addes that if the scroll on the window is more than 400px and the variable pastWaypoint is false -
        $('#logo').show();						// *MG* Finds element with id 'logo' and shows the element.
        $('#main-nav').css('top','0px');				// *MG* Finds element with id 'main nav' and  positions the element 0px from the top (main-nav is at top of screen). There might be an error here, the html document only has an id of 'main-menu' not 'main-nav'. Menu transition still works though.
        console.log('d');						// *MG* Console logs out 'd'.  No idea why.
        pastWaypoint = true;						// *MG* Variable pastWaypoint becomes true.
    }
    else if ($(window).scrollTop() <= 400 && pastWaypoint)		// *MG* If the scroll position from the top of the page is less than or equal to 400px and the variable pastWaypoint is true -
    {	
         $('#logo').hide();						// *MG* Finds the element with id of 'logo' and hides the element (hides the logo). I found this interesting because it was the first I noticed that an image could be referenced from within the CSS stylesheet.
        console.log('f');						// *MG* Console logs out 'f'. No idea why.
         $('#main-nav').css('top','400px');				// *MG* Finds the element with id of 'main-nav' and calls for CSS of margin top of 400px (moves main-nav to bottom of page).
        pastWaypoint = false;						// *MG* Sets pastWaypoint to a value of false.
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
	var i=0;									// *MG* Sets variable i to 0.
	$('.menu-item-content').each(function(){					// *MG* Finds elements with class of 'menu-item-content' and for each element of this class, performs the following function -
		if($(document,window).scrollTop() <= ($(this).position().top+200) ) {	// *MG* Conditional Statement - if the scroll position on the window is less than or equal to the particular section of 'this' element but less than 200px into the section - 
			$('#sticker-nav ul li').removeClass('selected');		// *MG* Find the list items within the ul within the element with id 'sticker-nav', remove the class 'selected'.  Removes highlight from text on sidenav.
			$('#sticker-nav ul li:eq('+i+')').addClass('selected');		// *MG* Not sure what this line actually means, but I get the feeling that if the location is beyond the 200px range, the class 'selected' is added.
			return false;							// *MG* Not sure about this line.
		}
		i++;									// *MG* ...or this line.
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
	 

	