$(document).ready(function(){
				
				$("#request").on("click", function(){ //se asigna el evento click al boton de id "request" (# = id)
					
					$.ajax({
						url: 'request.php',
						success: function(response){
							$("#content").append(response);
						}
					});
				
				});
				
});