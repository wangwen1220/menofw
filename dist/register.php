<?php
require_once 'config.php';

$class = 'signin nocart nosearch';
$title = 'Registration';
$keywords = 'Registration';
$description = 'Registration';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Registration</div>
    <div id="js-signinbox" class="signinbox">
      <!-- 实时验证及提交返回的数据格式： {"status": "error", "msg": "Please log in or register with a new email"} or {"status": "success", "msg": "如果是表单提交则返回成功后的跳转地址"} -->
      <?php include 'form-register.html'; ?>
    </div>
  </div>

<?php include 'footer.html'; ?>