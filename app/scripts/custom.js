'use strict';

$( document ).ready(function() {
  function myMethod(){
    console.log('test!');
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
            $('.success').fadeIn(1000);
        }
    });
  }
  
  setTimeout(function(){ 
    var subBtn = document.getElementById('submit');
    console.log(subBtn);
    $('#submit').click(function(){
      console.log('click!');
      myMethod();
    });
  }, 1000);
  
});