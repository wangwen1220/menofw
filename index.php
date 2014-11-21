<?php
require_once 'config.php';

$class = 'home';
$title = '首页';
$keywords = '首页';
$description = '首页';

include 'header.html';
?>

  <div id="main">
    <div id="categories">
      <div class="category">
        <a href="#" class="category-pic">
          <span>LED & Lighting</span>
          <img src="imgxxx" alt="">
        </a>
        <div class="category-slider">
          <ul class="list">
            <li class="list-item">
              <a href="#">LED Bulbs</a>
              <a href="#">Indoor LED Lighting</a>
              <a href="#">Led Street Lighting</a>
              <a href="#">Outdoor LED Lighting</a>
            </li>
          </ul>
          <a class="nav next"></a>
        </div>
      </div>
      <div class="category">
        <a href="#" class="category-pic">
          <span>Electronic Components</span>
          <img src="imgxxx" alt="">
        </a>
        <div class="category-slider">
          <ul class="list">
            <li class="list-item">
              <a href="#">LEds</a>
              <a href="#">Motors & Mechanism</a>
              <a href="#">Led Street Lightin Equipment</a>
              <a href="#">Industrial Supporting Machinery</a>
            </li>
          </ul>
          <a class="nav next"></a>
        </div>
      </div>
      <a class="w-viewmore viewmore">All Categories</a>
    </div>

    <div class="w-recommend">
      <div class="w-recommend-hd"><h3 class="title">You May Like</h3></div>
      <div class="w-recommend-bd">
        <ul class="w-piclist fn-clear">
          <li class="item">
            <a href="#" class="pic"><img src="imgxxx" alt=""></a>
            <h4 class="name"><a href="#">MS111 Best Co2 Case Detector</a></h4>
          </li>
          <li class="item">
            <a href="#" class="pic"><img src="imgxxx" alt=""></a>
            <h4 class="name"><a href="#">Welding Cable $1 weding Wire</a></h4>
          </li>
          <li class="item">
            <a href="#" class="pic"><img src="imgxxx" alt=""></a>
            <h4 class="name"><a href="#">Product Name Opic Patch</a></h4>
          </li>
          <li class="item">
            <a href="#" class="pic"><img src="imgxxx" alt=""></a>
            <h4 class="name"><a href="#">Detector ansceiver</a></h4>
          </li>
        </ul>
      </div>
    </div>
  </div>

<?php include 'footer.html'; ?>