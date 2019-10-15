<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT DISTINCT radioNumber FROM Person ORDER BY radioNumber');
$stmt->execute();

$stations = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($stations, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
