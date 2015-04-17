<?php
require_once 'config.php';

$class = 'shop nosearch';
$title = 'Shop Contact';
$keywords = 'Shop Contact';
$description = 'Shop Contact';

include 'header.html';
?>

  <div id="main">
    <div class="cnt-shop">
      <header>
        <a href="#" class="logo"><img src="http://i01.i.aliimg.com/img/company/v2/20/06/48/00/200648007_logo.jpg" alt=""></a>
        <h2>Shenzhen Voptel Technology Co., Ltd.</h2>
      </header>
      <nav>
        <ul>
          <li><a href="shop-home.php" title="Home">Home</a></li>
          <li><a href="shop-products.php" title="Products">Products</a></li>
          <li><a href="shop-profile.php" title="Profile">Profile</a></li>
          <li><a href="shop-contacts.php" title="Contacts">Contacts</a></li>
        </ul>
      </nav>
      <div class="content">
        <div class="contact-overview">
          <a class="avatar"><img src="http://img.alibaba.com/img/portrait/20/03/71/44/200371441/1322640927660/120x120.jpg" alt=""></a>
          <div class="info">
            <h4 class="name">Ms. Kat Wang</h4>
            <div class="job">Job Title: Sales Manager</div>
            <div class="actions"><a class="btn contact">Contact Supplier</a> <a class="btn callme">Contact Supplier</a></div>
          </div>
        </div>
        <ul class="list-info contact-details">
          <li><span class="key">Price / Payment:</span> <span class="val">TT</span></li>
          <li><span class="key">Min.Order:</span> <span class="val">10000 pcs</span></li>
          <li><span class="key">Standard:</span> <span class="val">CE, RoHS, UL</span></li>
          <li>packing, polybag or box packing for single piece, certain quantity packed</li>
          <li><span class="key">Production Capacity:</span> <span class="val">10000 Sets per Month</span></li>
          <li><span class="key">Origin:</span> <span class="val">China(Mainland)</span></li>
        </ul>
      </div>
    </div>
  </div>

<?php include 'footer.html'; ?>