<?php
header('Content-Type: application/json;charset=utf-8');
sleep(1);

$page = $_GET['page'];
// $image = array('txt', 'doc', 'xls', 'album', 'pdf', 'ppt', 'ufo');
// $count = count($image);

if ($page == 5) {
  $status = 'nomore';
} else {
  $status = 'success';
}

for ($i = 0; $i < 10; $i++) {
  $list[] = array(
    'title' => '100W Hid 240mm Internal <strong>LED</strong> Ball ast <strong>led</strong> panel light',
    // 'keywords' => 'LED',
    'url' => 'details.php',
    'pic' => '/upload/pic/pic-cat1.png',
    'price' => 'Usd 100.00 / piece',
    'minOrder' => '1000 pcs',
    'desc' => 'Main Products: After searching the Turbocharger,Turbo,Throttle Body,Throttle Position Sensor,Electric turbo.',
    'com' => 'Guangzhou Jianguang Lighting Col,Ltd.',
    'comUrl' => '#',
    'comDesc' => 'Main Products: After searching the Turbocharger,Turbo,Throttle Body,Throttle Position Sensor,Electric turbo.',
    'contactUrl' => '#',
    'cartUrl' => 'addto-cart.php'
  );
}

$data = array(
  'status' => $status,
  'page' => $page,
  'list' => $list
);

echo json_encode($data);
?>