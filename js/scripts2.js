// BACKEND LOGIC
var array = function(number) {

	var pingPongArray = [];
	console.log(pingPongArray);
	var count = 0;
		for (var i = 0; i < number; i++){
			count++;
			pingPongArray.push(count);

		}
		for (var index = 0; index <= pingPongArray.length; index++) {

			// FOR NON POSITIVE NUMBERS DO NOTHING AND RETURN UNDEFINED
				if (number > 0) {
					// IF THE USERS INPUT IS DIVISIBLE BY 15 PUSH PING-PONG INTO THE ARRAY
					if (index % 15 === 0 ) {
						pingPongArray[i] = ("Ping-Pong");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 3 PUSH PING INTO THE ARRAY
					} else if (index % 3 === 0) {
						pingPongArray[i] = ("Ping");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 5 PUSH PONG INTO THE ARRAY
					} else if (index % 5 === 0) {
						pingPongArray[i] = ("Pong");
					}


					// var result = pingPongArray[-1];
					// console.log(result);
				// NEW ARRAY THAT CHOOSES THE END OF THE ARRAY TO BE STORED IN variable result

				}
				return pingPongArray;
			}
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
