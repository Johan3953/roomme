<?php
define("DB_HOST", "localhost");
define("DB_NAME", "practice");
define("DB_USER","root");
define("DB_PASSWORD"," ");

$con=mysql_connect(localhost,signin,iForgot507) or die("Failed to connect to MySQL: " .mysql_error()); 
$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " .mysql_error());

/* 
$ID = $_POST["user"]; 
$Password = $_POST["pass"]; 
*/

function SignIn() {
     session_start(); 
     //starting the session for user profile page 
     if(!empty($_POST["user"])) 

        $query = mysql_query("SELECT * FROM user where user = "$_POST[user]" AND pass = "$_POST[pass]"") or die(mysql_error()); 
        $row = mysql_fetch_array($query) or die(mysql_error()); 
        if(!empty($row["user"]) AND !empty($row["pass"])) {

            $_SESSION["user"] = $row["pass"]; echo "SUCCESSFULLY LOGIN TO USER PROFILE PAGE..."; 
}

            else { echo "SORRY... YOU ENTERD WRONG ID AND PASSWORD... PLEASE RETRY..."; 
        }
    }
}

    if(isset($_POST["submit"]))
    {
        SignIn();
    }
            
?>