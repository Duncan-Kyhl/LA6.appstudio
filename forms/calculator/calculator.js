/* 
Scenario: 
Create a simple prototype calculator that 
gets 2 numbers from the user,
adds or multiplies them depending on which the user wants to do,  
displays the answer, and then clears the display 
when the user wants to calculate again. 
All output is prefaced with the users' name. 
*/

// Calculate and display result of inputs
btnAdd.onclick=function(){
  // get inputs
  let result = (Number(inptNum1.value) + Number(inptNum2.value))
  let user = inptUser.value
  
  // display result
  lblDisplay.value = `Hello ${user}, your answer is: ${result}`
  console.log(lblDisplay.value)
}

btnMultiply.onclick=function(){
  // get inputs
  let result = (Number(inptNum1.value) * Number(inptNum2.value))
  let user = inptUser.value
  
  // display result
  lblDisplay.value = `Hello ${user}, your answer is: ${result}`
}

// clear display and option to repeat program
btnReset.onclick=function(){
  inptNum1.value = inptNum2.value = inptUser.value = lblDisplay.value = result = '';
}


