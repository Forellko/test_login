function lock(){
  ok = localStorage.getItem("ok");
  if(ok == "ok"){
    alert("Welcome");
  }else if(ok == "not"){
    alert("Wrong login or password");
  }
  localStorage.clear();
}

lock();