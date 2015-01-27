<?php
require_once 'config.php';

$class = 'signin nocart nosearch';
$title = 'Sign In';
$keywords = 'Sign In';
$description = 'Sign In';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Sign In</div>
    <div id="js-signinbox" class="signinbox">
      <!-- 实时验证及提交返回的数据格式： {"status": "error", "msg": "Please log in or register with a new email"} or {"status": "success", "msg": "如果是表单提交则返回成功后的跳转地址"} -->
      <?php include 'form-signin.html'; ?>
    </div>
  </div>

<?php include 'footer.html'; ?>