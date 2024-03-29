function toggleDisable(elem_tag) {
    console.log(elem_tag);
     if ($(elem_tag).attr("disabled")){
        $(elem_tag).removeAttr("disabled");
     } else {
        $(elem_tag).attr("disabled", "disabled");
     }
};



// jquery ready start
$(document).ready(function() {
	// jQuery code



    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $('input[name='+ check_attr_name +']').closest('.js-check').removeClass('active');
            $(this).closest('.js-check').addClass('active');
           // item.find('.radio').find('span').text('Add');

        } else {
            item.removeClass('active');
            // item.find('.radio').find('span').text('Unselect');
        }
    });


    $('.js-check :checkbox').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $(this).closest('.js-check').addClass('active');
           // item.find('.radio').find('span').text('Add');
        } else {
            $(this).closest('.js-check').removeClass('active');
            // item.find('.radio').find('span').text('Unselect');
        }
    });

     /////////////////  items slider. /plugins/owlslider/
    if ($('.slider-three-owl').length > 0){ // check if element exists
        $('.slider-three-owl').owlCarousel({
            loop:true,
            margin:25,
            nav:true,
            dots:false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                },
                640:{
                    items:2
                },
                1024:{
                    items:3
                }
            }
        })
    } // end if

     /////////////////  items slider. /plugins/owlslider/
     if ($('.slider-four-owl').length > 0){ // check if element exists
        $('.slider-four-owl').owlCarousel({
            loop:true,
            margin:25,
            nav:true,
            dots:false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                640:{
                    items:3
                },
                1024:{
                    items:4
                }
            }
        })
    } // end if

    /////////////////  items slider. /plugins/owlslider/
    if ($('.slider-six-owl').length > 0){ // check if element exists
        $('.slider-six-owl').owlCarousel({
            loop:true,
            margin:15,
            nav:true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive:{
                0:{
                    items:1
                },
                640:{
                    items:4
                },
                1024:{
                    items:6
                }
            }
        })
    } // end if



	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    
    
	//////////////////////// Fancybox. /plugins/fancybox/
	if($("[data-fancybox]").length>0) {  // check if element exists
		$("[data-fancybox]").fancybox();
	} // end if
	
	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if

    /////////////////////// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a.page-scroll').click(function() {
        $('.navbar-toggler:visible').click();
    });

    //////////////////////// Menu scroll to section for landing
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 50  }, 1000);
        event.preventDefault();
    });




    
}); 

