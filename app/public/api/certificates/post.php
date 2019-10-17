<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

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

// Step 4: Output
header('HTTP/1.1 303 See Other');
