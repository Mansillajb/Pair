$(document).ready(function() {

	$("#madlib-btn").click(function(){
		$("#call-to-action").fadeOut(800);

		var verb = $("#verb").val();
		var noun = $("#noun").val();
		var adverb = $("#adverb").val();
		var exclamation = $("#exclamation").val();
		var madlib = "<strong>" + exclamation + " </strong> he said, as he <strong>" + adverb + "</strong> jumped on to his <strong>" + noun + "</strong> and <strong>" + verb + "</strong> into the sunset.";		
		$("#call-to-action").fadeIn(800);
		$("#call-to-action").html(madlib);

	});
});