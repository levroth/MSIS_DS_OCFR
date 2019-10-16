<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'SELECT * FROM Certification c, CurrentCert cc
  WHERE cc.pId = ? AND cc.cId = c.cId');
$stmt->execute([$_GET['pId']]);

$members = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
