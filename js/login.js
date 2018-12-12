function doLogSub(){
  let a = document.getElementById("idloglog").value;
  let b = document.getElementById("idlogpas").value;
  if(localStorage.getItem("log") == a){
    if(localStorage.getItem("pas") == b){
      localStorage.setItem("ok","ok");
    }else{
      localStorage.setItem("ok","not");
    }
  }else{
    localStorage.setItem("ok","not");
  }
  return;
}
function doRegSub(){
  let a = document.getElementById("idreglog").value;
  let b = document.getElementById("idregpas").value;
  localStorage.setItem("log", a);
  localStorage.setItem("pas", b);
}
document.getElementById("idlogsub").onclick = doLogSub;
document.getElementById("idregsub").onclick = doRegSub;