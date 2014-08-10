function prepareBinding() {    
    //$( "#test_button" ).bind( "click", function() { my_alert('text 2');});
    $( "#btn_save_students" ).click(function() { saveStudent() ;});
    $( "#btn_save_careers" ).click(function() { saveCareers() ;});
    $( "#btn_save_users" ).click(function() { saveUsers() ;});
    //$( "#cancel" ).click( = "http://localhost/proyecto2/Admin_area.html");
}

function saveStudent() {
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
        } 
        else 
        {
            alert("Cofirmacion de contraseña incorrecta, asegurese de que la contraseña de confirmación sea igual a la contraseña..")
            location.reload();
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
}

function createStudent(){
            ul = "list_stud";
            var nameStud = document.createElement("a");
            name.setAttribute('href','');
            labeltext = document.createTextNode(document.getElementById("new_name_students"));
            label.appendChild(labeltext);
            document.getElementById(ul).appendChild(nameStud);
        }

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