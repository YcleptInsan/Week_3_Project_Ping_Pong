

function ping_pong (number){

var pingPongArray = []

		for(var index = 0, index > userInput.length, index ++) {

			if (index % 3 === 0 && index % 5 === 0) {
				pingPongArray.push("Ping-Pong")
			} else if {
				(index % 3 === 0) {
					pingPongArray.push("Ping")
				} else {
					(index % 3 === 0){
						pingPongArray.push("Pong")
					}
				}
			}
		}

	return pingPongArray
}
$(document).ready(function() {
	$("form#ping-pong").submit(function(event){
		event.preventDefault();
			var userInput = $("input#number").val();



			var result = $("#result").append();
	});
});
