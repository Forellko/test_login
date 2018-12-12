function doSub(){
  let a = document.getElementById("logint").value;
  let b = document.getElementById("passwordt").value;
  if(localStorage.getItem("login") == a){
    if(localStorage.getItem("password") == b){
      
    }else{
      alert("Wrong login or password");
    }
  }else{
    alert("Wrong login or password");
  }
  return;
}
document.getElementById("submitt").onclick = doSub;

localStorage.setItem("login", "admin");
localStorage.setItem("password", "admin");