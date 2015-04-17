<?php
require_once 'config.php';

$class = 'shop nosearch';
$title = 'Call Me';
$keywords = 'Call Me';
$description = 'Call Me';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Call Me</div>
    <form action="shop-call-me-next.php" id="js-callme" class="cnt-callme">
      <section>
        <p class="tips">Leave your phone number to let the supplier to call you back.</p>
        <div class="text">
          <input type="text" name="country" required="required" data-msg-req="Please fill in country code. If you don't know your country code, please fill in your country name instead." placeholder="Country">
          <input type="text" name="city" placeholder="City Code">
          <input type="text" name="phone" required="required" data-msg-req="Please fill in phone number." placeholder="Phone Number">
        </div>
      </section>
      <section>
        <label class="title">Your Name:</label>
        <div class="text">
          <input type="text" name="firstname" required="required" data-msg-req="Please fill in your first name." placeholder="First Name">
          <input type="text" name="lastname" placeholder="Last Name">
        </div>
      </section>
      <section><button type="submit" class="submit">Submit</button></section>
      <section class="links">
        <a href="#" class="joinfree">Join Free Now!</a>
        <a href="#" class="forgotpsw">Forgot Password?</a>
      </section>
    </form>
  </div>

<?php include 'footer.html'; ?>