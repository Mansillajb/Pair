$(document).ready(function() {

	$("#madlib-btn").click(function(){
		
		var verb = $("#verb").val();
		var noun = /*$("#noun").val();*/ "rainbowRetractorBeam";
		var adverb = $("#adverb").val();
		var exclamation = $("#exclamation").val();
		var madlib = "<strong>" + exclamation + " </strong> he said, as he <strong>" + adverb + "</strong> jumped on to his <strong>" + noun + "</strong> and flew <strong>" + verb + "</strong> into the sunset.";		
		

		$("#call-to-action").hide();
		$("#call-to-action").fadeOut(800);
		$("#full").css('background-image','url(img/1.gif)');
		$("#full").css('background-size', 'cover');
		$("#call-to-action").css('color', 'white');
		$("#full").css('color', 'white');
		$("#call-to-action").fadeIn(800);
		$("#call-to-action").html(madlib);

	});
});