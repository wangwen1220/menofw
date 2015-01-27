<?php
require_once 'config.php';

$class = 'signin nocart nosearch';
$title = 'Sign In';
$keywords = 'Sign In';
$description = 'Sign In';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Reset Password</div>
    <div id="js-signinbox" class="signinbox">
      <!-- 实时验证及提交返回的数据格式： {"status": "error", "msg": "您输入的邮箱或会员ID不存在，请重试。"} or {"status": "success", "msg": "如果是表单提交则返回成功后的跳转地址"} -->
      <form action="validform.php" class="resetpsw">
        <section><p>Please enter you registered email or Member ID to set a new password.</p></section>
        <section>
          <div class="title">Registered Email or Member ID:</div>
          <div class="text"><input type="text" name="userid" required="required" data-msg-req="Please enter your Email or Member ID"></div>
        </section>
        <section><button type="submit" class="button">Submit</button></section>
      </form>
    </div>
  </div>

<?php include 'footer.html'; ?>