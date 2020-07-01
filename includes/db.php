<?php
    // Local dev
    $con = mysqli_connect("localhost","root","","4ws-test", "3307");

    // Live
    // $con = mysqli_connect("eu-cdbr-west-03.cleardb.net:3306","bbcf89e61037f2","060ff5d9","heroku_1988942d393ae2e");

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>

