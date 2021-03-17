Hamburger1.onclick = function(s) {
    if (typeof(s) == "object") {
        return;
    }
    if (s === "Sign Out") {
        Hamburger1.hide();
        butSignIn.show();
    }
    if (s === "Change Password") {
        // todo
    }
    if (s === "Change Email") {
        // todo
    }
    if (s === "Delete Account") {
        // todo
    }
    
    alert('You clicked the menu')
};
PasswordInput1.onclick=function(){
  password = PasswordInput1.value
  alert('Type your password here')
}

Calendar1.onclick=function(){
   alert('Click a day on the calendar')
}

Rating1.onclick=function(){
   alert('Leave your rating of the app!')
}

