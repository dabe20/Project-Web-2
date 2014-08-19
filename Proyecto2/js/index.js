function prepareBinding() {    
    $( "#btn_save_students" ).click(function() { saveStudents() ; createStudents() ;});
    $( "#btn_save_careers" ).click(function() { saveCareers() ; createCareers() ;});
    $( "#btn_save_users" ).click(function() { saveUsers() ; createUsers() ;});
}

function saveStudents() {
    // obtener datos del form
    var name = document.getElementById('new_name_students').value,
        photo = document.getElementById('photo').value;
        cedula = document.getElementById('new_ced_students').value;
        career = document.getElementById('new_career').value;
        lvl_english = document.getElementById('new_lvl_english').value;

    // crear objeto estudiante
    var student = { "name": name, "photo": photo, "cedula": cedula, "career": career, "lvl_english": lvl_english };
    
    // leer los estudiantes de localstorage
    var students = JSON.parse(localStorage.getItem('students'));
    if (students === null) {
        students = [];
    }

    // agregar el estudiante
    students.push(student);

    // volver guardar en localstoraage
    localStorage.setItem('students',JSON.stringify(students));

    alert("Estudiante agregado exitosamente");
}

function saveUsers() {
    // obtener datos del form
    var userName = document.getElementById('new_name_username').value,
        name = document.getElementById('new_name_user').value;
        cedula = document.getElementById('new_ced_user').value;
        role = document.getElementById('new_role').value;
        pass = document.getElementById('new_pass_user').value;
        passConfirm = document.getElementById('confirm_new_pass_user').value;

    if (passConfirm == pass) {
        // crear objeto usuarios
        var user = { "username": userName, "name": name, "cedula": cedula, "role": role, "pass": pass };
            
        // leer los usuarios de localstorage
        var users = JSON.parse(localStorage.getItem('users'));
        if (users === null) {
                users = [];
        }

        // agregar el usuario
        users.push(user);

        // volver guardar en localstoraage
        localStorage.setItem('users',JSON.stringify(users));

        alert("Usuario agregado exitosamente");
        } 
        else 
        {
            alert("Confirmacion de contraseña incorrecta, asegurese de que la contraseña de confirmación sea igual a la contraseña..")
        }
}

function saveCareers() {
    // obtener datos del form
    var codeCareer = document.getElementById('new_cod_career').value,
        name = document.getElementById('new_name_career').value;

    // crear objeto carrera
    var career = { "codeCareer": codeCareer, "name": name };
    
    // leer las carreras de localstorage
    var careers = JSON.parse(localStorage.getItem('careers'));
    if (careers === null) {
        careers = [];
    }

    // agregar la carrera
    careers.push(career);

    // volver guardar en localstoraage
    localStorage.setItem('careers',JSON.stringify(careers));

    alert("Carrera agregada exitosamente");
}

function createCareers(){
            codigo = document.getElementById("new_cod_career").value;
            name = document.getElementById("new_name_career").value;
            tbody = "careers";
            datalistNewStud = "list_careers";
            info = "info";
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var td2 = document.createElement("td");
            var a = document.createElement("a");
            var span = document.createElement("span");
            var span2 = document.createElement("span");
            var option = document.createElement("option");
            var div = document.createElement("div");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            var div4 = document.createElement("div");
            var btn = document.createElement("button");
            var h4 = document.createElement("h4");
            var div5 = document.createElement("div");
            var label = document.createElement("label");
            var lab2 = document.createElement("label");
            var br = document.createElement("br");
            var br2 = document.createElement("br");
            var lab3 = document.createElement("label");
            var lab4 = document.createElement("label");
            var div6 = document.createElement("div");
            var btn2 = document.createElement("button");

            a.setAttribute('class', "btn");
            a.setAttribute('data-toggle', "modal");
            a.setAttribute('data-target', "#info_"+codigo);
            span.setAttribute('id',"delCareer");
            span.setAttribute('class',"btn glyphicon glyphicon-remove");
            span2.setAttribute('id',"editCareer");
            span2.setAttribute('class',"btn glyphicon glyphicon-pencil");
            option.value = name;
            div.setAttribute('class',"modal");
            div.setAttribute('id',"info_"+codigo);
            div.setAttribute('tabindex',"-1");
            div.setAttribute('role',"dialog");
            div.setAttribute('aria-labelledby',"myModalLabel");
            div.setAttribute('aria-hidden',"true");
            div2.setAttribute('class',"modal-dialog");
            div3.setAttribute('class',"modal-content");
            div4.setAttribute('class',"modal-header");
            btn.setAttribute('class',"close");
            btn.setAttribute('data-dismiss',"modal");
            btn.setAttribute('aria-hidden',"true");       
            div5.setAttribute('class',"modal-body");
            div6.setAttribute('class',"modal-footer");
            btn2.setAttribute('id',"btn_edit_careers");
            btn2.setAttribute('class',"btn btn-primary");
            btn2.setAttribute('data-dismiss',"modal");
            

            text = document.createTextNode(codigo);
            td.appendChild(text);   
            tr.appendChild(td);
            text2 = document.createTextNode(name);
            a.appendChild(text2);
            td2.appendChild(a); 
            td2.appendChild(span);
            td2.appendChild(span2);
            tr.appendChild(td2);
            document.getElementById(tbody).appendChild(tr);

            document.getElementById(datalistNewStud).appendChild(option);
            
            txt7 = document.createTextNode("Editar");
            btn2.appendChild(txt7);
            div6.appendChild(btn2);

            txt4 = document.createTextNode("Nombre:_"); 
            lab3.appendChild(txt4);
            div5.appendChild(lab3);

            txt3 = document.createTextNode(name);
            lab4.appendChild(txt3);
            div5.appendChild(lab4); 

            div5.appendChild(br);
            div5.appendChild(br2);

            txt6 = document.createTextNode("Codigo:_");
            label.appendChild(txt6);
            div5.appendChild(label);

            txt5 = document.createTextNode(codigo);
            lab2.appendChild(txt5);
            div5.appendChild(lab2);

            txt2 = document.createTextNode("x");
            btn.appendChild(txt2);
            div4.appendChild(btn);

            txt = document.createTextNode("Información de Carrera");
            h4.appendChild(txt);
            div4.appendChild(h4);

            div3.appendChild(div4);
            div3.appendChild(div5);
            div3.appendChild(div6);
            div2.appendChild(div3);
            div.appendChild(div2);
            document.getElementById(info).appendChild(div);
        }

function createStudents(){
            name = document.getElementById("new_name_students").value;
            photo = document.getElementById("photo").value;
            cedula = document.getElementById("new_ced_students").value;
            career = document.getElementById("new_career").value;
            lvlEng = document.getElementById("new_lvl_english").value;
            tbody = "students";
            info = "info";
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var a = document.createElement("a");
            var span = document.createElement("span");
            var span2 = document.createElement("span");
            var div = document.createElement("div");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            var div4 = document.createElement("div");
            var btn = document.createElement("button");
            var h4 = document.createElement("h4");
            var div5 = document.createElement("div");
            var img = document.createElement("img");
            var br = document.createElement("br");
            var label = document.createElement("label");
            var lab2 = document.createElement("label");
            var br2 = document.createElement("br");
            var lab3 = document.createElement("label");
            var lab4 = document.createElement("label");
            var br3 = document.createElement("br");
            var lab5 = document.createElement("label");
            var lab6 = document.createElement("label");
            var br4 = document.createElement("br");
            var lab7 = document.createElement("label");
            var lab8 = document.createElement("label");
            var div6 = document.createElement("div");
            var btn2 = document.createElement("button");

            a.setAttribute('class', "btn");
            a.setAttribute('data-toggle', "modal");
            a.setAttribute('data-target', "#info_"+cedula);
            span.setAttribute('id',"delCareer");
            span.setAttribute('class',"btn glyphicon glyphicon-remove");
            span2.setAttribute('id',"editCareer");
            span2.setAttribute('class',"btn glyphicon glyphicon-pencil");
            div.setAttribute('class',"modal");
            div.setAttribute('id',"info_"+cedula);
            div.setAttribute('tabindex',"-1");
            div.setAttribute('role',"dialog");
            div.setAttribute('aria-labelledby',"myModalLabel");
            div.setAttribute('aria-hidden',"true");
            div2.setAttribute('class',"modal-dialog");
            div3.setAttribute('class',"modal-content");
            div4.setAttribute('class',"modal-header");
            btn.setAttribute('class',"close");
            btn.setAttribute('data-dismiss',"modal");
            btn.setAttribute('aria-hidden',"true");       
            div5.setAttribute('class',"modal-body");
            img.setAttribute('src',photo);
            img.setAttribute('width',"24%");
            div6.setAttribute('class',"modal-footer");
            btn2.setAttribute('id',"btn_edit_careers");
            btn2.setAttribute('class',"btn btn-primary");
            btn2.setAttribute('data-dismiss',"modal");

            text = document.createTextNode(name);
            a.appendChild(text);   
            td.appendChild(a); 
            td.appendChild(span);
            td.appendChild(span2);
            tr.appendChild(td);
            document.getElementById(tbody).appendChild(tr);

            txt7 = document.createTextNode("Editar");
            btn2.appendChild(txt7);
            div6.appendChild(btn2);

            div5.appendChild(img);

            div5.appendChild(br);

            txt7 = document.createTextNode("Nombre:_"); 
            lab7.appendChild(txt7);
            div5.appendChild(lab7);

            txt8 = document.createTextNode(name);
            lab8.appendChild(txt8);
            div5.appendChild(lab8); 

            div5.appendChild(br2);

            txt5 = document.createTextNode("Cedula:_");
            lab5.appendChild(txt5);
            div5.appendChild(lab5);

            txt6 = document.createTextNode(cedula);
            lab6.appendChild(txt6);
            div5.appendChild(lab6);

            div5.appendChild(br3);

            txt3 = document.createTextNode("Carrera:_");
            lab3.appendChild(txt3);
            div5.appendChild(lab3);

            txt4 = document.createTextNode(career);
            lab4.appendChild(txt4);
            div5.appendChild(lab4);

            div5.appendChild(br4);

            txt = document.createTextNode("Nivel de Inglés:_");
            label.appendChild(txt);
            div5.appendChild(label);

            txt2 = document.createTextNode(lvlEng);
            lab2.appendChild(txt2);
            div5.appendChild(lab2);

            txt2 = document.createTextNode("x");
            btn.appendChild(txt2);
            div4.appendChild(btn);

            txt = document.createTextNode("Información de Estudiante");
            h4.appendChild(txt);
            div4.appendChild(h4);

            div3.appendChild(div4);
            div3.appendChild(div5);
            div3.appendChild(div6);
            div2.appendChild(div3);
            div.appendChild(div2);
            document.getElementById(info).appendChild(div);
        }

function createUsers(){
            username = document.getElementById("new_name_username").value;
            name = document.getElementById("new_name_user").value;
            cedula = document.getElementById("new_ced_user").value;
            role = document.getElementById("new_role").value;
            tbody = "users";
            info = "info";
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var a = document.createElement("a");
            var span = document.createElement("span");
            var span2 = document.createElement("span");
            var div = document.createElement("div");
            var div2 = document.createElement("div");
            var div3 = document.createElement("div");
            var div4 = document.createElement("div");
            var btn = document.createElement("button");
            var h4 = document.createElement("h4");
            var div5 = document.createElement("div");
            var label = document.createElement("label");
            var lab2 = document.createElement("label");
            var br = document.createElement("br");
            var lab3 = document.createElement("label");
            var lab4 = document.createElement("label");
            var br2 = document.createElement("br");
            var lab5 = document.createElement("label");
            var lab6 = document.createElement("label");
            var br3 = document.createElement("br");
            var lab7 = document.createElement("label");
            var lab8 = document.createElement("label");
            var div6 = document.createElement("div");
            var btn2 = document.createElement("button");

            a.setAttribute('class', "btn");
            a.setAttribute('data-toggle', "modal");
            a.setAttribute('data-target', "#info_"+username);
            span.setAttribute('id',"delCareer");
            span.setAttribute('class',"btn glyphicon glyphicon-remove");
            span2.setAttribute('id',"editCareer");
            span2.setAttribute('class',"btn glyphicon glyphicon-pencil");
            div.setAttribute('class',"modal");
            div.setAttribute('id',"info_"+username);
            div.setAttribute('tabindex',"-1");
            div.setAttribute('role',"dialog");
            div.setAttribute('aria-labelledby',"myModalLabel");
            div.setAttribute('aria-hidden',"true");
            div2.setAttribute('class',"modal-dialog");
            div3.setAttribute('class',"modal-content");
            div4.setAttribute('class',"modal-header");
            btn.setAttribute('class',"close");
            btn.setAttribute('data-dismiss',"modal");
            btn.setAttribute('aria-hidden',"true");       
            div5.setAttribute('class',"modal-body");
            div6.setAttribute('class',"modal-footer");
            btn2.setAttribute('id',"btn_edit_careers");
            btn2.setAttribute('class',"btn btn-primary");
            btn2.setAttribute('data-dismiss',"modal");

            text = document.createTextNode(username);
            a.appendChild(text);   
            td.appendChild(a); 
            td.appendChild(span);
            td.appendChild(span2);
            tr.appendChild(td);
            document.getElementById(tbody).appendChild(tr);

            txt7 = document.createTextNode("Editar");
            btn2.appendChild(txt7);
            div6.appendChild(btn2);

            txt7 = document.createTextNode("Nombre de usuario:_"); 
            lab7.appendChild(txt7);
            div5.appendChild(lab7);

            txt8 = document.createTextNode(username);
            lab8.appendChild(txt8);
            div5.appendChild(lab8); 

            div5.appendChild(br);

            txt5 = document.createTextNode("Nombre:_");
            lab5.appendChild(txt5);
            div5.appendChild(lab5);

            txt6 = document.createTextNode(name);
            lab6.appendChild(txt6);
            div5.appendChild(lab6);

            div5.appendChild(br2);

            txt3 = document.createTextNode("Cedula:_");
            lab3.appendChild(txt3);
            div5.appendChild(lab3);

            txt4 = document.createTextNode(cedula);
            lab4.appendChild(txt4);
            div5.appendChild(lab4);

            div5.appendChild(br3);

            txt = document.createTextNode("Role:_");
            label.appendChild(txt);
            div5.appendChild(label);

            txt2 = document.createTextNode(role);
            lab2.appendChild(txt2);
            div5.appendChild(lab2);

            txt2 = document.createTextNode("x");
            btn.appendChild(txt2);
            div4.appendChild(btn);

            txt = document.createTextNode("Información de Usuario");
            h4.appendChild(txt);
            div4.appendChild(h4);

            div3.appendChild(div4);
            div3.appendChild(div5);
            div3.appendChild(div6);
            div2.appendChild(div3);
            div.appendChild(div2);
            document.getElementById(info).appendChild(div);
        } 
/*
function editStudents() {
    // obtener datos del form
    var name = document.getElementById('new_name_students').value,
        photo = document.getElementById('photo').value;
        cedula = document.getElementById('new_ced_students').value;
        career = document.getElementById('new_career').value;
        lvl_english = document.getElementById('new_lvl_english').value;

    // crear objeto estudiante
    var student = { "name": name, "photo": photo, "cedula": cedula, "career": career, "lvl_english": lvl_english };
    
    // leer los estudiantes de localstorage
    var students = JSON.parse(localStorage.getItem('students'));
    if (students === null) {
        students = [];
    }

    // agregar el estudiante
    students.push(student);

    // volver guardar en localstoraage
    localStorage.setItem('students',JSON.stringify(students));
}
*/
function my_alert(text) {
    alert(text);
}

function deleteStudent(element) {
    if (confirm('Are you sure you want to delete user')) {
        alert('User with name: '+element.value+ ' was deleted');
        document.location.href='index_success.html';
    } else {
        document.location.href='index.html';
    }
}