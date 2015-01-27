<?php
header('Content-Type: application/json;charset=utf-8');

// $data = array(
//   'status' => 'success',
//   'msg' => 'goto url'
// );

$data = array(
  'status' => 'error',
  'msg' => 'Please log in or register with a new email'
);

echo json_encode($data);
?>