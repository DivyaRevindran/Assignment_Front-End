document.addEventListener('DOMContentLoaded', function () {
     let password = document.getElementById('password');
     var userName = document.getElementById('txtUserName')
     let button = document.getElementById('btnSubmit');
     const form = document.getElementById('frmLogin');
     let error = document.getElementById('errorMsg')
     form.addEventListener('submit', function (event) {
          //prevent form submission
          event.preventDefault();
     
          //password validation
          if (password.value.length < 4) {
               error.textContent = "Password should be 4 characters long!"
          }
          else {
               error.textContent = "";
          }
     })
     var userFlag;
     var pswrdFlag;
     
   //check whether the username is entered
     userName.addEventListener("input", () => {
          if (userName.value.length > 0) {
               userFlag = 1
          }
          else {
               userFlag = 0;
          }
          setButton()

     })

     //check whether the password is entered
     password.addEventListener("input", () => {
          if (password.value.length > 0) {
               pswrdFlag = 1
          }
          else {
               pswrdFlag = 0
          }
          setButton()
     })

     //enable button when user entered both username and password
     function setButton() {
          if (userFlag == 1 && pswrdFlag == 1) {
               button.disabled = false
          }
          else {
               button.disabled = true;
          }
     }


})
