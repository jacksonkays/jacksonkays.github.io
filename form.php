<?php
    if(isset($_POST['submit'])) {
        $name=$_POST['name'];
        $email=$_POST['email'];
        $msg=$_POST['msg'];

        $mailTo='jacksontkays@gmail.com';
        $headers="From: ".$email;
        $txt="You have received an email from ".$name."\n\n".$message;

        mail($mailTo, $txt, $headers);
        header("Location: form.php?mailsend");
    }