//to append the values user entered in to the screen
function clickbutton(val)
{
   document.getElementById("screenText").value+=val;
}

//to clear the values in the screen when user click clear button
function clearfunction()
{
   document.getElementById("screenText").value="";
}

//to evaluate when user clicks equals button
function clickequal()
{
   var text=document.getElementById("screenText").value
   var result=eval(text)
   document.getElementById("screenText").value=result
}