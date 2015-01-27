<?php
require_once 'config.php';

$class = 'inquiry signin nocart nosearch';
$title = 'Contact Supplier';
$keywords = 'Contact Supplier';
$description = 'Contact Supplier';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Contact Supplier</div>
    <div id="js-signinbox" class="signinbox">
      <nav>
        <a class="on">Sign in</a>
        <a>Register</a>
      </nav>

      <!-- 实时验证及提交返回的数据格式： {"status": "error", "msg": "Please log in or register with a new email"} or {"status": "success", "msg": "如果是表单提交则返回成功后的跳转地址"} -->
      <?php include 'form-signin.html'; ?>
      <?php include 'form-register.html'; ?>
    </div>
  </div>

<?php include 'footer.html'; ?>