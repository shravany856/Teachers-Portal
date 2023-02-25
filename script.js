console.log("aa");




// var login = false;

// function checkIfLoggedIn(){


//     var users = JSON.parse(localStorage.getItem("users"));
//     if(users.login){
//         window.location.href = "/login.html";
//         }
// }
var login=false;
function signupUser(){
    console.log("crct email and password");
    const fullNameInput = document.getElementById("fullname-input");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input")
    const confirmPasswordInput= document.getElementById("confirmpassword-input")

    let fullName =fullNameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmpassword = confirmPasswordInput.value;

    let messageDiv1= document.getElementById('message1');
    let messageDiv2= document.getElementById('message2');
    let messageDiv = document.getElementById('message');
    let messageDiv3 =  document.getElementById('message3');
    let flag = true;

    
    if(fullName===""){
        messageDiv.innerText = "Make sure name should not be empty";
        flag = false;
    }

    if(email===""|| email <= 3 || !email.includes("@") || !email.includes(".")){
        messageDiv1.innerText ="Make sure email is more than 3 characters and has @ and a . ";
        flag =  false;
    }
    
    if(password == "" || password <= 8){
        console.log("dfr")
        messageDiv2.innerText = "Make sure password is more than 8 characters";
        flag =  false;
    }
    
    
    if(password !== confirmpassword){
        messageDiv3.innerText ="Password Mis-matching";
        flag =  false;
    }
    
    
   
    if(flag){
    
        users = {
        fullname : fullNameInput.value,
        email: emailInput.value,
        password : passwordInput.value,

        };

        localStorage.setItem("users", JSON.stringify(users));
        // localStorage.setItem("signupUser", "true");
    
            // console.log("cccccc");
            window.location.href = "/login.html";
        
    }

}

// loginPage = {
//     localStorage : {
//         "http://127.0.0.1:5500": [{login:true},{email:"teacher1@gmail.com",password:"123232",name:"Teacher 1 Name"},{email:"teacher2@gmail.com",pass:"!23454",name:"Teacher2 Name"}],
//         "http://127.0.0.1:5500":[],
//     },
   
// };





function loginUser(){
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");
   
    let loginEmail = emailInput.value;
    let loginPassword = passwordInput.value;
   
//     var Currentuser = JSON.parse(localStorage.getItem("Currentuser"));
// if(Currentuser.login){
//     window.location.href = "/dashboard.html";
// }
    login = true;
    var userobj = JSON.parse(localStorage.getItem("users"));
  console.log("userobj",userobj.email)
    if(userobj.email === loginEmail && userobj.password === loginPassword){
       
    
    Currentuser = {
        email : loginEmail,
        password : loginPassword,

    };
    localStorage.setItem("Currentuser", JSON.stringify(Currentuser));
    window.location.href = "/dashboard.html";
}

}





function changePassword(){
    console.log("enters")
    const oldpasswordInput = document.getElementById("Old-Password")
    const newpasswordInput = document.getElementById("New-Password")
    const confirmpasswordInput = document.getElementById("ConfirmNew-Password")

        let messageDiv6 = document.getElementById("message6")
    
    let OldPassword = oldpasswordInput.value;
    let NewPassword = newpasswordInput.value;
    let ConfirmPassword = confirmpasswordInput.value;

//  let messageDiv4 = document.getElementById("message4");
//  let messageDiv5 = document.getElementById("message4");
 
//   messageDiv4.innerText = `Welcome back ${name}!`
//   messageDiv5.innerText = `Your EmailID : ${email}`
console.log("changing password" ,OldPassword);

var userobj1 = JSON.parse(localStorage.getItem("users"));
if(userobj1.password !==  OldPassword){
    messageDiv6.innerText = "Password doesn't match";
}
else if (NewPassword === ConfirmPassword ){
    userobj1.password = NewPassword;
    localStorage.setItem("users", JSON.stringify(userobj1));
    
}

}
 
function logout(){
    localStorage.setItem("login", false);
    window.location.href = "/index.html";
}