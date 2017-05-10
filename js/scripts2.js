// BACKEND LOGIC
var array = function(number) {

	var pingPongArray = [];
	console.log(pingPongArray);
	var count = 0;
	// COUNTING FOR LOOP TO BE APPLIED TO PING PONG ARRAY
	for (var i = 0; i < number; i++){
		count++;
		pingPongArray.push(count);
	}
		pingPongArray.forEach(function(i){
			// FOR NON POSITIVE NUMBERS DO NOTHING AND RETURN UNDEFINED
				if (i > 0) {
					// IF THE Index IS DIVISIBLE BY 15 PUSH PING-PONG INTO THE ARRAY at userInput val
				if (i % 15 === 0 ) {
					pingPongArray[i-1] = ("Ping-Pong");
					//Else IF THE USERS INPUT IS DIVISIBLE BY 3 PUSH PING INTO THE ARRAY
				} else if (i % 3 === 0) {
					pingPongArray[i-1] = ("Ping");
					//Else IF THE USERS INPUT IS DIVISIBLE BY 5 PUSH PONG INTO THE ARRAY
				} else if (i % 5 === 0) {
					pingPongArray[i-1] = ("Pong");
				}
			}
	});
	return pingPongArray;
}

// FRONT END LOGIC
$(document).ready(function() {
	$("form#ping_pong").submit(function(event){
		event.preventDefault();
			var userInput = parseInt($("input#number").val());
			var output = array(userInput);
			$("#result").append("<h4>"+ output +"</h4>");
				$("h4").prev().remove();
	});
});
