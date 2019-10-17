<?php
// 0. Validate my data
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO CurrentCert
    (pId, cId, renewedDate, expDate)
  VALUES (?,?,?,?)'
);
$stmt->execute([
  $_POST['pId'],
  $_POST['cId'],
  $_POST['renewedDate'],
  $_POST['expDate']
]);
// TODO: Error checking?!
// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memCerts/index.php?pId='.$_POST['pId']);
