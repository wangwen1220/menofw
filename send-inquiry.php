<?php
require_once 'config.php';

$class = 'contact-supplier';
$title = 'Contact Supplier';
$keywords = 'Contact Supplier';
$description = 'Contact Supplier';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Contact Supplier</div>
    <form action="#" class="send-inquiry" id="js-send-inquiry">
      <section class="msg"><textarea name="inquiry"></textarea></section>

      <section class="tpls">
        <p class="tips">Select templates for a quick inquiry</p>
        <a class="switcher">Show</a>
        <div class="tpls-wrap">
          <label><input type="checkbox" name="template">Request Price</label>
          <label><input type="checkbox" name="template">Request Sample</label>
          <label><input type="checkbox" name="template">More Product deatils</label>
          <label><input type="checkbox" name="template">Min. order quantity</label>
        </div>
      </section>

      <section class="submit"><button type="submit">Send</button></section>

      <section class="opts">
        <label><input type="checkbox" name="rfq" value="true"> Recommend matching suppliers if this supplier doesn't contact me on Message Center within 24 hours.</label>
      </section>
    </form>
  </div>

<?php include 'footer.html'; ?>