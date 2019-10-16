<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT DISTINCT c.certName
                      FROM CurrentCert cc, Certification c
                      WHERE c.cId = cc.cId AND cc.expDate <= curdate();');
$stmt->execute();

$certs = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certs, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
