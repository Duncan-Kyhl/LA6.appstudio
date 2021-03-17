
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit.onclick=function(){
    let userName = inptName.value
    if (members.includes(userName) == true) {
      lblResponse.value = "You are a member!"
    } else {
      lblResponse.value = "You are new member! You have been added to the membership database."
      members.push(userName)
      console.log(members)
        }
    }
