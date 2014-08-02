function login(){
	if (document.formLogin.username.value=="admin" && document.formLogin.pass.value=="1234"){window.location="Admin_area.html"}
	else {
		if (document.formLogin.username.value=="barroyo" && document.formLogin.pass.value=="1234"){window.location="view_public.html"}
			else {
				alert("Error en Usuario o Contraseña. Intenta de nuevo.")
			}
		}
}