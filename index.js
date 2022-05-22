var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput', usernameVerify);
password.addEventListener('textInput', passVerify);

function validate(){
    if (username.value.length < 9){
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (password.value.length < 5  ){
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function usernameVerify(){
    if(username.value.length >=8){
        username.style.border = "3px solid green";
        username_error.style.display = "none";
        return true;
    }
}

function passVerify(){
    if(password.value.length >=8){
        password.style.border = "3px solid green";
        pass_error.style.display = "none";
        return true;
    }
}