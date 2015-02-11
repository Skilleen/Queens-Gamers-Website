<html>

<?php
//PHP code for displaying the contents of the database.
try {
    $dbh = new PDO('mysql:host=localhost;dbname=comments', "root", "282mysql");
    $rows = $dbh->query('select * from forum');
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
<body>
<?php foreach ($rows as $row) { ?> 
<p>  <?= $row["name"] ?>: <?= $row["post"] ?> </p>
<?php } ?>
  

<button><a href="forums.html">Back</a></button>
</body>
</html>