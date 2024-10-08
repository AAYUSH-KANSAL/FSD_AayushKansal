function validate() {
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;

     
    if (username === "" || pass === "") {
      p1.innerText = "Username and Password cannot be empty";
      return false;
    }

     
    if (pass.length < 10) {
      p1.innerText = "Password must be at least 10 characters long";
      return false;
    }

    
    if (username === "admin") {
      if (pass === "adminadmin") {   
        p1.innerText = "Validated";
      } else {
        p1.innerText = "Invalid Password";
      }
    } else {
      p1.innerText = "Invalid Username";
    }

    return false;  
  }