function doSub(){
  let a = document.getElementById("logint").value;
  let b = document.getElementById("passwordt").value;
  if(localStorage.getItem("login") == a){
    if(localStorage.getItem("password") == b){
      window.open("new.html");
    }else{
      alert("Wrong login or password");
      return;
    }
  }else{
    alert("Wrong login or password");
  }
}
document.getElementById("submitt").onclick = doSub;

localStorage.setItem("login", "admin");
localStorage.setItem("password", "admin");