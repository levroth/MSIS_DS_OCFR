<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Certification SET agency=?, certName=?, expiry=?
  WHERE cId=?'
);

$stmt->execute([
  $_POST['agency'],
  $_POST['certName'],
  $_POST['expiry'],
  $_POST['cId']
]);
