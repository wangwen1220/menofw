<?php
require_once 'config.php';

$class = 'contact-supplier';
$title = 'Contact Supplier';
$keywords = 'Contact Supplier';
$description = 'Contact Supplier';
$username = 'Steven Wang';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Contact Supplier</div>
    <form action="#" class="send-inquiry" id="js-send-inquiry">
      <section class="msg"><textarea name="inquiry"></textarea></section>

      <section class="tpls">
        <p class="tips">Select templates for a quick inquiry</p>
        <a class="switcher">Show</a>
        <div class="tpls-wrap js-hide">
          <label data-tpl="price"><input type="checkbox" name="template">Request Price</label>
          <label data-tpl="request"><input type="checkbox" name="template">Request Sample</label>
          <label data-tpl="product"><input type="checkbox" name="template">More Product deatils</label>
          <label data-tpl="order"><input type="checkbox" name="template">Min. order quantity</label>
        </div>
      </section>

      <section class="submit"><button type="submit">Send</button></section>

      <section class="opts">
        <label><input type="checkbox" name="rfq" value="true"> Recommend matching suppliers if this supplier doesn't contact me on Message Center within 24 hours.</label>
      </section>
    </form>
  </div>

<script>
  var inquiryTpls = {
    base: [
      'Hi,\n',
      'I’m interested in your product New 4" 27W off road 4x4 utv jeep led lamp led working light driving light sm6271,\n',
      'I would like some more details:\n',
      '\n',
      '\n',
      '\n',
      'I look forward to your reply.\n',
      '\n',
      'Regards <?php echo $username ?>\n'
    ],
    price: 'What is the best price you can offer?\n',
    request: 'Would you send me a product sample before I place an order?\n',
    product: 'Please provide me with more product details.\n',
    order: 'What is your min. order quantity?\n'
  };
</script>
<?php include 'footer.html'; ?>