<?php
require_once 'config.php';

$class = 'msgnotice nocart nosearch';
$title = 'msgnotice';
$keywords = 'msgnotice';
$description = 'msgnotice';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Message Notice</div>
    <div class="msgnotice">
      <section>
        <time>Date: 23 Mar 2011 14:54</time>
        <p class="tips">Please do not reply to this email as it is unmonitored.</p>
      </section>

      <section><p>Dear Ms. Lucy(ID: 1234234)</p></section>
      <section><p>You have received a new quotation from Mr. David on <a href="#">OFweek.com.</a></p></section>
      <section>
        <p>Quotation about: <a href="#">MP3 Player</a></p>
        <p>Supplier Location: <em>United States</em></p>
      </section>
      <section>
        <p>Supplier's message:</p>
        <p>To see the inquiry detail and reply to this buyer, please click on the Check Inquiry button below.</p>
        <p>Please do not reply to this email as it is unmonitored.</p>
      </section>
      <section>
        <p>To view the inquiry detail and reply to the supplier, please sign in:</p>
        <a href="#" class="signin">Sign in</a>
      </section>
      <section>
        <p>Your can login by your member <strong>ID: 1468508042.</strong></p>
        <p><a href="#">Forgot password?</a></p>
      </section>
      <section>
        <p>For any question, please <a href="#">contact us</a>.</p>
      </section>
      <section>
        <p>Best Regards,</p>
        <p>OFweek Service Team</p>
        <p><a href="#">en.ofweek.com</a></p>
      </section>
      <div class="contacts">
        <section>
          <p>This email was sent to <a href="mailto:1468508042@qq.com">1468508042@qq.com</a>.</p>
          <p>You are receiving this email because you are a registered member of en.ofweek.com.</p>
          <p>If you don't wish to receive this kind of email, please click <a href="#">unsubscribe</a>.</p>
        </section>
        <section>
          <p>OFweek Member Service Center: <a href="mailto:b2bservice@ofweek.com">b2bservice@ofweek.com</a></p>
          <p>Tel: (86) 755 83279360, 83279361</p>
        </section>
      </div>
    </div>
  </div>

<?php include 'footer.html'; ?>