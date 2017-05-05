
// BACKEND LOGIC
var ping_pong = function(userNumber) {

	var pingPongArray = [];
		console.log(pingPongArray);

		for(var index = 0; index <= userNumber; index++) {
			// FOR NON POSITIVE NUMBERS DO NOTHING AND RETURN UNDEFINED
			if(userNumber > 0) {
					// IF THE USERS INPUT IS DIVISIBLE BY 15 PUSH PING-PONG INTO THE ARRAY
				if (index % 15 === 0) {
					pingPongArray.push("Ping-Pong");
					//Else IF THE USERS INPUT IS DIVISIBLE BY 3 PUSH PING INTO THE ARRAY
				} else if (index % 3 === 0){
					pingPongArray.push("Ping");
					//Else IF THE USERS INPUT IS DIVISIBLE BY 5 PUSH PONG INTO THE ARRAY
				} else if (index % 5 === 0){
					pingPongArray.push("Pong");

				}
				// NEW ARRAY THAT CHOOSES THE END OF THE ARRAY TO BE STORED IN pingPongArray
				var newArray = pingPongArray.splice(-1,1);
				console.log(newArray);
				}

				return newArray

			}
		}

// FRONT END LOGIC
$(document).ready(function() {
	$("form#ping-pong").submit(function(event){
		event.preventDefault();
			var userInput = parseInt($("input#number").val());


	$("#result").append("<p>"+ ping_pong(userInput) +"</p>");
	});
});
