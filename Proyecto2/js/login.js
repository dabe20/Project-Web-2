function prepareBinding() {    
    //$( "#test_button" ).bind( "click", function() { my_alert('text 2');});
    $( "#sign_in" ).click(function() { login() ;});
    //$( "#cancel" ).click( = "http://localhost/proyecto2/Admin_area.html");
}

function login(){
	if (document.formLogin.username.value=="admin" && document.formLogin.pass.value=="1234"){window.location="Admin_area.html"}
	else {
		if (document.formLogin.username.value=="barroyo" && document.formLogin.pass.value=="1234"){window.location="Admin_area.html"}
			else {
				alert("Error en Usuario o Contraseña. Intenta de nuevo.")
			}
		}
}