<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

//send email
    mail("devin@thewebdev.ca", "Test Message From" .$email, $message);
}
?>