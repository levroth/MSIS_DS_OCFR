<?php
use Ramsey\Uuid\Uuid;


$guid = Uuid::uuid4()->toString();

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Person (pId, firstName, lastName, gender, dob, position, radioNumber, stationNumber, isActive, startDate, email, mobilePhone, address)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);



$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['gender'],
  $_POST['dob'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['startDate'],
  $_POST['email'],
  $_POST['mobilePhone'],
  $_POST['address']

]);
