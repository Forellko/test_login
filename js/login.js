function doLogSub(){
  let a = document.getElementById("idloglog").value;
  let b = document.getElementById("idlogpas").value;
  if(localStorage.getItem("log") == a){
    if(localStorage.getItem("pas") == b){
      localStorage.setItem("ok","ok");
      return;
    }
  }
  alert("Wrong login or password");
  return;
}

function doRegSub(){
  let a = document.getElementById("idreglog").value;
  let b = document.getElementById("idregpas").value;
  localStorage.setItem("log", a);
  localStorage.setItem("pas", b);
}

//window.location = "html/welcome.html";

let lnklog = document.getElementById('idlogf');
//lnklog.addEventListener("submit", {handleEvent: doLogSub, abcd: 5}, true);
lnklog.addEventListener("submit", doLogSub, false);
let lnkreg = document.getElementById('idregf');
lnkreg.addEventListener("submit", doRegSub, false);

if(localStorage.getItem("ok") == "ok"){
  window.location = "html/welcome.html";
}