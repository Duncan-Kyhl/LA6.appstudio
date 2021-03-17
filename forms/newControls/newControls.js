url = https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg



Menu1.onclick=function(){
  
}

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
};
PasswordInput1.onclick=function(){
  password = PasswordInput1.value
}
