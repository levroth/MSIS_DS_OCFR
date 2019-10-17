<?php
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM CurrentCert
  WHERE pId = ?');

  $stmt->execute([$_GET['pId']]);

  $stmt = $db->prepare(
    'DELETE FROM Person
    WHERE pId = ?');

  $stmt->execute([$_GET['pId']]);
