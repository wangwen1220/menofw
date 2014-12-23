<?php
require_once 'config.php';

$class = 'contact-supplier signin';
$title = 'Contact Supplier';
$keywords = 'Contact Supplier';
$description = 'Contact Supplier';

include 'header.html';
?>

  <div id="main">
    <div class="pagetitle">Contact Supplier</div>
    <form action="#" class="inquiry-signin">
      <section class="switcher">
        <a class="signin">Sign in</a>
        <a class="register">Register</a>
      </section>

      <section class="input"><input type="text" name="user" class="text user"></section>
      <section class="input"><input type="text" name="password" class="text password"></section>
      <section class="submit"><button type="submit">Sign in</button></section>
      <section class="links"><a href="#" class="forgot-psw">Forgot Password?</a></section>
    </form>
  </div>

<?php include 'footer.html'; ?>