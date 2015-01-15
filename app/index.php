<?php include('partials/masthead.php'); ?>

  <section class="container">
    <h1 class="test-font">Google Fonts 'Open Sans' Working</h1>

    <hr>
    <h2>Text-truncate: <small>create elipsis text that does not wrap</small></h2>
    <div class="text-truncate" style="width: 300px;">
      This is some longer lorem text so we can see an elipsis
    </div>

    <hr>
    <h2>Button from mixin: Bootstrap Mixins Availabe</h2>
    <a href="" class="btn btn-test">Test Button Works</a>

    <hr>
    <h2>Glyphicon font icons working</h2>
    <span class="glyphicon glyphicon-check"></span>

    <hr>
    <h2>Transition mixins working: hover</h2>
    <div class="box"></div>

    <h2>Responsive/Retina image with .img-responsive class</h2>
    <div style="width: 400px;">
      <img class="img-responsive" src="assets/img/item@2x.png">
    </div>

    <hr>
    <h2>Responsive/Retina image with srcset</h2>
    <img src="assets/img/item-src.png" srcset="
      assets/img/item.png 1x,
      assets/img/item@2x.png 2x,
      item@3x.png 3x,
      item@4x.png 4x">

    <hr>
    <h2>Responsive/Retina background image</h2>
    <div class="container-with-image"></div>

    <hr>
    <h2>Responsive/Retina background image-set</h2>
    <div class="container-with-image-set"></div>
  </section>

<?php include('partials/footer.php'); ?>
