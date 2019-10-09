<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM Certification');
$stmt->execute();

$certificates = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certificates, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
