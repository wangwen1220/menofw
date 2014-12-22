<?php
header('Content-Type: application/json;charset=utf-8');

// $action = $_GET['action'];

$data = array('status' => 'success');
echo json_encode($data);
?>