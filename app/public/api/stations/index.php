<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT DISTINCT stationNumber FROM Person ORDER BY stationNumber');
$stmt->execute();

$stations = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($stations, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
