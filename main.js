function doSub(){
  let a = document.getElementById("logint").value;
  let b = document.getElementById("passwordt").value;
  localStorage.setItem("login", a);
  localStorage.setItem("password", b);
}
document.getElementById("submitt").onclick = doSub;