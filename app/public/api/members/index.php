<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM Person ORDER BY stationNumber ASC, radioNumber ASC');
$stmt->execute();

$members = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
