
// BACKEND LOGIC
var array = function(number) {

	var pingPongArray = [];


		for(var i = 0; i <= number; i++) {

			// FOR NON POSITIVE NUMBERS DO NOTHING AND RETURN UNDEFINED
				if (number > 0) {
					// IF THE USERS INPUT IS DIVISIBLE BY 15 PUSH PING-PONG INTO THE ARRAY
					if ((i % 15 === 0 && i % 15 === 0)) {
						pingPongArray.push("Ping-Pong");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 3 PUSH PING INTO THE ARRAY
					} else if (i % 3 === 0) {
						pingPongArray.push("Ping");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 5 PUSH PONG INTO THE ARRAY
					} else if (i % 5 === 0) {
						pingPongArray.push("Pong");
					}
					else {
						pingPongArray.push(i);
					}

					var result = pingPongArray.splice(-1, 1);
				// NEW ARRAY THAT CHOOSES THE END OF THE ARRAY TO BE STORED IN pingPongArray

				}
			}
			return result;
		}

// FRONT END LOGIC
$(document).ready(function() {
	$("form#ping_pong").submit(function(event){
		event.preventDefault();
			var userInput = parseInt($("input#number").val());

			$("#result").append("<h4>"+ array(userInput) +"</h4>");
				$("h4").prev().remove();

	});
});
