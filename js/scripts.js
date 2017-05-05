
// BACKEND LOGIC
var array = function(number) {

	var pingPongArray = [];
	console.log(pingPongArray);

		for(var i = 0; i <= number; i ++) {

			// FOR NON POSITIVE NUMBERS DO NOTHING AND RETURN UNDEFINED
				if (number > 0) {
					// IF THE USERS INPUT IS DIVISIBLE BY 15 PUSH PING-PONG INTO THE ARRAY
					if (number % 15 === 0) {
						pingPongArray.push("Ping-Pong");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 3 PUSH PING INTO THE ARRAY
					} else if (number % 3 === 0) {

						pingPongArray.push("Ping");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 5 PUSH PONG INTO THE ARRAY
					} else if (number % 5 === 0) {

						pingPongArray.push("Pong");

					}

				// NEW ARRAY THAT CHOOSES THE END OF THE ARRAY TO BE STORED IN pingPongArray
				var result = pingPongArray.splice(-1,1);
				console.log(result);
				}
				return result;
			}
		}

// FRONT END LOGIC
$(document).ready(function() {
	$("form#ping_pong").submit(function(event){
		event.preventDefault();
			var number = $("input#number").val();

			$("#result").append("<p>"+ array(number) +"</p>");
				$("p").prev().remove();
	});
});
