<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data
$guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Person (pId, firstName, lastName, gender, dob, position, radioNumber, stationNumber, isActive, startDate, email, mobilePhone, address)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$booleanNum = 0;

if ($_POST['isActive']== "Active") {
  $booleanNum = 1;
}

$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['gender'],
  $_POST['dob'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $booleanNum,
  $_POST['startDate'],
  $_POST['email'],
  $_POST['mobilePhone'],
  $_POST['address']

]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
