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
        <a href="#" class="logo"><img src="http://i01.i.aliimg.com/img/company/v2/20/06/48/00/200648007_logo.jpg" alt="" width="50" height="50"></a>
        <h2>Dongguan Shenzhen Voptel Technology Co., Ltd.</h2>
      </header>
      <nav>
        <ul>
          <li><a href="shop-home.php" title="Home">Home</a></li>
          <li><a href="shop-products.php" title="Products">Products</a></li>
          <li><a href="shop-profile.php" title="Profile">Profile</a></li>
          <li class="on"><a href="shop-contacts.php" title="Contacts">Contacts</a></li>
        </ul>
      </nav>
      <div class="content">
        <div class="contact-overview">
          <a class="avatar"><img src="http://img.alibaba.com/img/portrait/20/03/71/44/200371441/1322640927660/120x120.jpg" alt="" width="50" height="50"></a>
          <div class="info">
            <h4 class="name">Ms. Kat Wang</h4>
            <div class="job">Job Title: Sales Manager</div>
            <div class="actions"><a class="btn contact">Contact Supplier</a> <a class="btn callme">Call Me</a></div>
          </div>
        </div>
        <dl class="list-info contact-details">
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
          <dd>0355-4455555</dd>
          <dt>Mobile:</dt>
          <dd>1354454555</dd>
          <dt>Fax Number:</dt>
          <dd>08-55665554</dd>
          <dd class="sign-link">Please <a href="#">Sign in</a> to view details.</dd>
        </dl>
      </div>
    </div>
  </div>

<?php include 'footer.html'; ?>