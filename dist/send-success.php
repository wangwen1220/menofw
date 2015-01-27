<?php
require_once 'config.php';

$class = 'inquiry nosearch';
$title = 'Contact Supplier';
$keywords = 'Contact Supplier';
$description = 'Contact Supplier';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Contact Supplier</div>
    <div class="send-success">
      <p class="msg">Your inquiry has been sent successfully.</p>
      <div class="links">
        <a href="javascript:window.history.back();" class="goback">Go back to previous page</a><br>
        <a href="#" class="view-msg">View my messages</a>
      </div>
    </div>
  </div>

<?php include 'footer.html'; ?>