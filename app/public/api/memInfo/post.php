<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Person SET firstName=?, lastName=?, gender=?, dob=?, position=?, radioNumber=?, stationNumber=?, isActive=?, startDate=?, email=?, mobilePhone=?, address=?
  WHERE pId=?'
);

$booleanNum = 0;

if ($_POST['isActive']== "Active") {
  $booleanNum = 1;
}

$stmt->execute([
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
  $_POST['address'],
  $_POST['pId']
]);
