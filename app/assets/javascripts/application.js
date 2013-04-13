// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-datepicker
//= require bootstrap-timepicker
//= require_tree .
//= require_self

$(function() {
   $('#dp5').datepicker({"autoclose": true});
 });
$(function() {
	$('#tp1').timepicker({minuteStep: 1,
                showMeridian: false});
 });
 // $(function () {
 // 		$(".event").popover({html:true});
 //    $(".event").popover('show');
 //  });

 //  $("popover-content").hover(
 //    function () {
 //      $(".popover-title").show();
 //    }, 
 //    function () {
 //      $(".popover-title").hide();
 //    }
	// );

  $('.row_1').hover(
    function(){
        $(this).find('.caption').fadeIn(1000);
    },
    function(){
        $(this).find('.caption').fadeOut(1000);
    });