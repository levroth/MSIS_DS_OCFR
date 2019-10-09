<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM Person');
$stmt->execute();

$patients = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;