function doSub(){
  let a = document.getElementById("logint").value;
  let b = document.getElementById("passwordt").value;
  if(localStorage.getItem("login") == a){
    if(localStorage.getItem("password") == b){
      localStorage.setItem("ok","ok");
    }else{
      localStorage.setItem("ok","not");
    }
  }else{
    localStorage.setItem("ok","not");
  }
  return;
}
document.getElementById("submitt").onclick = doSub;

localStorage.setItem("login", "admin");
localStorage.setItem("password", "admin");