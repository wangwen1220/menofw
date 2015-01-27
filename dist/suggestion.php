<?php
header('Content-Type: application/json;charset=utf-8');

$key = $_GET['key'];

// $data = array();
// $image = array('txt', 'doc', 'xls', 'album', 'pdf', 'ppt', 'ufo');
// $count = count($image);

for ($i = 0; $i < 10; $i++) {
  $data[] = array(
    'suggestion' => '<li><a href="/search?key='.$key.'"><strong>'.$key.'</strong> keyword suggestion '.($i+1).'</a></li>'
  );
}

echo json_encode($data);
?>