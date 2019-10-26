<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE CurrentCert SET renewedDate=?, expDate=?
  WHERE pId = ? AND cId = ?'
);

$stmt->execute([
  $_POST['renewedDate'],
  $_POST['expDate'],
  $_POST['pId'],
  $_POST['cId']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../memCerts/?pId='.$_POST['pId']);
