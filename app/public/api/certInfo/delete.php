<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM CurrentCert
  WHERE cId = ?');

  $stmt->execute([$_GET['cId']]);

  $stmt = $db->prepare(
    'DELETE FROM Certification
    WHERE cId = ?');

  $stmt->execute([$_GET['cId']]);
