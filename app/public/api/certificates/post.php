<?php
use Ramsey\Uuid\Uuid;


$guid = Uuid::uuid4()->toString();

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Certification (cId, agency, certName, expiry)
  VALUES (?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['agency'],
  $_POST['certName'],
  $_POST['expiry']
]);
