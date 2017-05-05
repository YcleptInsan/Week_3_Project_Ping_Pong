
// BACKEND LOGIC
var ping_pong = (function(userNumber){

	var pingPongArray = [];
	console.log(pingPongArray);

		for(var index = 0; index >= userNumber; index ++) {

			if (index % 3 === 0 && index % 5 === 0) {
				pingPongArray.push("Ping-Pong");
			} else if (index % 3 === 0){
				pingPongArray.push("Ping");
			} else if (index % 5 === 0){
				pingPongArray.push("Pong");
				}
			}
			return pingPongArray ;
		});

// FRONT END LOGIC
$(document).ready(function() {
	$("form#ping-pong").submit(function(event){
		event.preventDefault();
			var userInput = parseInt($("input#number").val());



			var result = $("#result").append("<p>"+ ping_pong(userInput) +"</p>");
	});
});
