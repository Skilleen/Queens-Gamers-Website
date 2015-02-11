<html>
<?php
//my php code for storing the information of the forum posts on the database.

$name = $_POST["theName"];
$theComment = $_POST["theComment"];

try {
    $dbh = new PDO('mysql:host=localhost;dbname=comments', "root", "282mysql");
    print "Thankyou for submitting!";
    $rows = $dbh->exec("insert into forum (name, post) values ('$name', '$theComment')");
    print $rows;
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>
<body>
<button><a href="forums.html">Back</a></button>
</body>
</html>