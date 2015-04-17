<?php
require_once 'config.php';

$class = 'shop nosearch';
$title = 'Call Me Next';
$keywords = 'Call Me Next';
$description = 'Call Me Next';

include 'header.html';
?>

  <div id="main">
    <!-- <div class="pagetitle">Call Me Next</div> -->
    <div class="send-success">
      <p class="msg"><span class="inner">Your phone number has been sent to rhe supplier. Please wait for calling back</span></p>
      <div class="links">
        <a href="javascript:window.history.back();" class="goback">Go back to previous page</a><br>
      </div>
      <p class="tips">It will return to previous page in <strong id="js-countdown">5</strong> seconds.</p>
    </div>
  </div>

<?php include 'footer.html'; ?>