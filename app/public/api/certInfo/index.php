<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'SELECT * FROM Certification
  WHERE cId = ?');
$stmt->execute([$_GET['cId']]);

$patients = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
