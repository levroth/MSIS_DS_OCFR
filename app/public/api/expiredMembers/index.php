<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT firstName, lastName, certName, agency, expDate
                      FROM CurrentCert cc, Certification c, Person p
                      WHERE p.pId = cc.pId AND c.cId = cc.cId AND cc.expDate <= curdate();');
$stmt->execute();

$certs = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certs, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
