<?php
require_once 'config.php';

$class = 'shop shop-products nosearch';
$title = 'Shop Products';
$keywords = 'Shop Products';
$description = 'Shop Products';

include 'header.html';
?>

  <div id="main">
    <div class="cnt-shop">
      <header>
        <a href="#" class="logo"><img src="http://i01.i.aliimg.com/img/company/v2/20/06/48/00/200648007_logo.jpg" alt="" width="50" height="50"></a>
        <h2>Dongguan Shenzhen Voptel Technology Co., Ltd.</h2>
      </header>
      <nav>
        <ul>
          <li><a href="shop-home.php" title="Home">Home</a></li>
          <li class="on"><a href="shop-products.php" title="Products">Products</a></li>
          <li><a href="shop-profile.php" title="Profile">Profile</a></li>
          <li><a href="shop-contacts.php" title="Contacts">Contacts</a></li>
        </ul>
      </nav>
      <div class="content">
        <div class="datalist">
          <h3 class="title">Product Categories</h3>
          <ul>
            <li><a href="#">Gas Sensores Transmitters</a> <span>(39)</span></li>
            <li><a href="#">Transmitters & test</a> <span>(9)</span></li>
            <li><a href="#">Gas Sensores</a> <span>(19)</span></li>
          </ul>
        </div>
        <div class="prolist">
          prolist
        </div>
        <dl class="details contacts">
          <dt class="title">Contact Details</dt>
          <dt>Contact Persion:</dt>
          <dd>Ms. Kat Wang</dd>
          <dt>Job Title:</dt>
          <dd>Sales Manager</dd>
          <dt>Address:</dt>
          <dd>Building 2-3, No. 78 Hao Yun Road, YuHang District.</dd>
          <dt>City:</dt>
          <dd>Ningguo</dd>
          <dt>Province / State:</dt>
          <dd>Anhui</dd>
          <dt>Country / Region:</dt>
          <dd>China(Mainland)</dd>
          <dt>Zip:</dt>
          <dd>242300</dd>
          <dt>Phone Number:</dt>
          <dd><!-- 0355-4455555 --><span class="sign-tips">Please <a href="#">Sign in</a> to view details.</span></dd>
          <dt>Mobile:</dt>
          <dd><!-- 1354454555 --></dd>
        </dl>
      </div>
    </div>
  </div>

<?php include 'footer.html'; ?>