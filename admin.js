const username = "Admin"
const password = "admin12345"
const user = "Staff"
const pass = "staff12345"
const usern = "User"
const passd = "user12345"

function login(){
  const uname = document.loginform.uname.value;
  const pass = document.loginform.pass.value;
  
  if(uname != ""&& pass != ""){
    if(uname == username && pass == password){
      alert("Successful Login")
      window.location.href="Admin.html";
    }
    else if(uname == user && pass == pass){
      alert("Successful Login")
      window.location.href="staff.html";
    }
    if(uname == usern && pass == passd){
      alert("Successful Login")
      window.location.href="user.html";
    }
  } else {
    document.getElementById("error-message").innerHTML = "Input fields should not be empty!";
    hideErrorMessage();
  }
}

function hideErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  if (errorMessage) {
    setTimeout(() => {
      errorMessage.innerHTML = '';
    }, 5000);
  }
}