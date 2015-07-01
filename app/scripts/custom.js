'use strict';

$( document ).ready(function() {

  //my method for sending emails from the angular form
  function myMethod(){
    var data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#msg").val()
    };
    $.ajax({
        type: "POST",
        url: "email.php",
        data: data,
        success: function(){
        }
    });
  }
  
  //function for showing the 'message successful' button
  setTimeout(function(){
    var subBtn = document.getElementById('submit');
    var successBtn = document.getElementById('success');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    
    $('#submit').click(function(){
      console.log('Send Mail!');
      successBtn.style.display = 'inline-block';
      subBtn.style.display = 'none';
      name.disabled = true;
      email.disabled = true;
      msg.disabled = true;
      myMethod();
    });
  }, 100);
  
});