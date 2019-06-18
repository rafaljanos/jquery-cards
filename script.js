$(document).ready(function() {
	$(".card").click(function(){
		$(this).toggleClass("highlight");
	});
	$("#sellect").click(function(){
		$(".card:not(.highlight)").hide();
		
	});
	$("#all").click(function() {
	    $(".card").show();
	});
});
