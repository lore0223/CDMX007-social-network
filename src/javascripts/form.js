//Función para detectar si los inputs del form están vacíos
//id de divs a los inputs
const inputName = document.getElementById('validationServer01').value;
const inputLastName = document.getElementById('validationServer02').value;
const inputNickName = document.getElementById('validationServerUsername').value;
const inputState = document.getElementById('validationServer03').value;
const inputPreferences = document.getElementById('validationServer04').value;
// id de divs a los que se les va a cambiar la clase para que le diga al usuario si es válida su información
const divOfName = document.getElementById('input-name');
const divOfLastName = document.getElementById('input-last-name');
const divOfNickName = document.getElementById('input-nick-name');
const divOfState = document.getElementById('input-state');
const divOfPreferences = document.getElementById('input-preferences');
//variable del botón enviar formulario
const sendFormButton = document.getElementById('send-form-button');
//funciones
sendFormButton.addEventListener('click', () => {
    if(inputName !== ''){
        divOfName.classList.add('valid-feedback');
    } else {
        divOfName.classList.add('invalid-feedback');
    }
})

