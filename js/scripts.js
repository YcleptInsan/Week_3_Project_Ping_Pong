
// BACKEND LOGIC
var array = function(number) {

	var pingPongArray = [];
	var count = 0
	console.log(pingPongArray);
	for(var i = 0; i <= number; i++) {
			count++;
			pingPongArray.push(count);
		}
		for(var i = 0; i < pingPongArray.length; i++){
			if (number > 0) {
					// IF THE USERS INPUT IS DIVISIBLE BY 15 PUSH PING-PONG INTO THE ARRAY
			if (pingPongArray[i] % 15 === 0 ) {
						pingPongArray[i] = ("Ping-Pong");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 3 PUSH PING INTO THE ARRAY
				}else if (pingPongArray[i] % 3 === 0) {
						pingPongArray[i] = ("Ping");
						//Else IF THE USERS INPUT IS DIVISIBLE BY 5 PUSH PONG INTO THE ARRAY
				}else if (pingPongArray[i] % 5 === 0) {
						pingPongArray[i] = ("Pong");
				}else {
						pingPongArray = [i];
					}
				var result = pingPongArray.splice(-1,1);
				// NEW ARRAY THAT CHOOSES THE END OF THE ARRAY TO BE STORED IN variable result
						}
		return result;
		}
}

// FRONT END LOGIC
$(document).ready(function() {
	$("form#ping_pong").submit(function(event){
		event.preventDefault();
			var userInput = parseInt($("input#number").val());
			var answerArray = array(userInput);
				for(var i= 0; i< answerArray.length; i++) {
			$("#result").append("<li>"+ answerArray[i] +"</li>");
				$("li").prev().remove();
			}
	});
});
