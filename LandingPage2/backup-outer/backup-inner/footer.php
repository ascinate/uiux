  <!-- **** Footer Area Start **** -->
    <footer class="footer-area bg-img bg-overlay-2 section-padding-100-0" style="background-image: url(<?php echo base_url();?>assets2/img/bg-img/17.jpg);">
        <!-- Main Footer Area -->
        <div class="main-footer-area">
            <div class="container">
                <div class="row justify-content-between">

                    <!-- Footer Widget Area -->
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-80">
                            <!-- Footer Logo -->
                            <a href="#" class="footer-logo"><img src="images/logo.png" width="230" alt=""></a>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <!-- Social Info -->
                            <div class="social-info">
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Widget Area -->
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-80">
                            <!-- Widget Title -->
                            <h5 class="widget-title">Get info</h5>

                            <!-- Contact Area -->
                            <div class="footer-contact">
                                <p>Phone: <span>(12) 345 6789</span></p>
                                <p>Email: <span>RBAJ SOL.info@gmail.com</span></p>
                                <p>Address: <span>Iris Watson, Box 283 8562 Fusce Rd, NY</span></p>
                            </div>
                        </div>
                    </div>

                    <!-- Footer Widget Area -->
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-80">
                            <!-- Widget Title -->
                            <h5 class="widget-title">Property Cities</h5>

                            <!-- Footer Nav -->
                            <ul class="footer-nav d-flex flex-wrap">
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Paris</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Rome</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Delhi</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> London</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Chicago</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Sydney</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Tokyo</a></li>
                                <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> New York</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Footer Widget Area -->
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-80">
                            <!-- Widget Title -->
                            <h5 class="widget-title">Newsletter</h5>

                            <p>Subscribe our newsletter gor get notification about new updates, count, etc.</p>
                            <!-- Newsletter Form -->
                            <form action="index.html" class="nl-form">
                                <input type="email" name="nl-email" class="form-control" placeholder="Enter your email...">
                                <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copywrite Area -->
        <div class="copywrite-content">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Copywrite Text -->
                    <div class="col-12 col-sm-12">
                        <div class="copywrite-text text-center">
                            <p>
                                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                Copyright

                                All rights reserved
                                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                            </p>
                        </div>
                    </div>

                    <!-- Footer Menu -->
                </div>
            </div>
        </div>
    </footer>
    <!-- **** Footer Area End **** -->
    <style type="text/css">
        .product-item img {
            display: block;
            width: 100%;
            height: 230px;
        }

    </style>
    <!-- **** All JS Files ***** -->
    <!-- jQuery 2.2.4 -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="<?php echo base_url();?>assets2/js/jquery.min.js"></script>
    <!-- Popper -->
    <script src="<?php echo base_url();?>assets2/js/popper.min.js"></script>
    <!-- Bootstrap -->
    <script src="<?php echo base_url();?>assets2/js/bootstrap.min.js"></script>
    <!-- All Plugins -->
    <script src="<?php echo base_url();?>assets2/js/rehomes.bundle.js"></script>
    <!-- Active -->
    <script src="<?php echo base_url();?>assets2/js/default-assets/active.js"></script>

    <script type="text/javascript" src="<?php echo base_url();?>assets2/js/owlcarousel.min.js"></script>

     <script type="text/javascript">
         $(document).ready(function() {

             $("#open-form-btn").on('click', function() {
                 $("#msg-btn-div").hide();
                 $("#msg-form").show();
             });
             $("#close-form").on('click', function() {
                 $("#msg-btn-div").show();
                 $("#msg-form").hide();
             });
         });

     </script>
      <script type="text/javascript">
         $(document).ready(function() {

             $("#show-reporting-div").on('click', function() {
                 $("#msg-btn-div").hide();
                 $("#reporting-div").show();
             });
             $("#close-flagged-form").on('click', function() {
                 $("#msg-btn-div").show();
                 $("#reporting-div").hide();
             });
         });

     </script>
     <script type="text/javascript">
         document.getElementById("show-no").onclick = function() {

             document.getElementById("show-no").style.display = "none";
             document.getElementById("actual-no").style.display = "block";

         }

     </script>
     <script type="text/javascript">
         $(document).ready(function() {

             $("#open-form-btn2").on('click', function() {
                 $("#msg-btn-div2").hide();
                 $("#msg-form2").show();
             });
             $("#close-form2").on('click', function() {
                 $("#msg-btn-div2").show();
                 $("#msg-form2").hide();
                 2
             });
         });

     </script>

     <script type="text/javascript">
         $(document).ready(function() {

             $("#show-reporting-div2").on('click', function() {
                 $("#msg-btn-div2").hide();
                 $("#reporting-div2").show();
             });
             $("#close-flagged-form2").on('click', function() {
                 $("#msg-btn-div2").show();
                 $("#reporting-div2").hide();
             });
         });

     </script>
     <script type="text/javascript">
         document.getElementById("show-no2").onclick = function() {

             document.getElementById("show-no2").style.display = "none";
             document.getElementById("actual-no2").style.display = "block";

         }

     </script>
    <script>
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();

    </script>

    <script>
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                        } else {
                            panel.style.display = "block";
                        }

                            $(document).ready(function() {

                                $("#minput").keyup(function() {

                                    var value = $(this).val().toLowerCase();
                                    //alert(value);
                                    $("#registration .accordion").filter(function() {
                                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                    });
                                    $("#ads .accordion").filter(function() {
                                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                    });
                                    $("#communication .accordion").filter(function() {
                                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                    });
                                    $("#reviews .accordion").filter(function() {
                                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                    });
                                    $("#about .accordion").filter(function() {
                                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                    });
                                    $("#data .accordion").filter(function() {
                                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                    });
                                });
                            });

    </script>


    <script type="text/javascript">
        /*====================================
  New Products Owl Carousel
  ======================================*/
        var newproducts = $("#new-products");
        newproducts.owlCarousel({
            autoplay: true,
            nav: false,
            autoplayHoverPause: true,
            smartSpeed: 350,
            dots: true,
            margin: 2,
            loop: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                575: {
                    items: 2,
                    nav: false,
                    loop: true
                },
                767: {
                    items: 2,
                    nav: true,
                    loop: true
                },
                991: {
                    items: 3,
                    nav: true,
                    loop: true
                },
                1024: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });

    </script>

    <script>
        function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main");
        }

        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }

    </script>

    <!--    sticky-header-script-->
    <script>
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                $('.header').addClass("sticky");
            } else {
                $('.header').removeClass("sticky");
            }
        });

    </script>
    <script>
         $(document).ready(function() {
             var bigimage = $("#big");
             var thumbs = $("#thumbs");
             //var totalslides = 10;
             var syncedSecondary = true;

             bigimage
                 .owlCarousel({
                     items: 1,
                     slideSpeed: 2000,
                     autoplay: true,
                     dots: false,
                     loop: true,
                     responsiveRefreshRate: 200,
                     nav: true,
                     navText: [
                         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                     ]
                 })
                 .on("changed.owl.carousel", syncPosition);

             thumbs
                 .on("initialized.owl.carousel", function() {
                     thumbs
                         .find(".owl-item")
                         .eq(0)
                         .addClass("current");
                 })
                 .owlCarousel({
                     items: 4,
                     dots: true,
                     nav: false,
                     //                    navText: [
                     // '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                     // '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
                     // ],
                     smartSpeed: 200,
                     slideSpeed: 500,
                     slideBy: 4,
                     responsiveRefreshRate: 100
                 })
                 .on("changed.owl.carousel", syncPosition2);

             function syncPosition(el) {
                 //if loop is set to false, then you have to uncomment the next line
                 //var current = el.item.index;

                 //to disable loop, comment this block
                 var count = el.item.count - 1;
                 var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

                 if (current < 0) {
                     current = count;
                 }
                 if (current > count) {
                     current = 0;
                 }
                 //to this
                 thumbs
                     .find(".owl-item")
                     .removeClass("current")
                     .eq(current)
                     .addClass("current");
                 var onscreen = thumbs.find(".owl-item.active").length - 1;
                 var start = thumbs
                     .find(".owl-item.active")
                     .first()
                     .index();
                 var end = thumbs
                     .find(".owl-item.active")
                     .last()
                     .index();

                 if (current > end) {
                     thumbs.data("owl.carousel").to(current, 100, true);
                 }
                 if (current < start) {
                     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
                 }
             }

             function syncPosition2(el) {
                 if (syncedSecondary) {
                     var number = el.item.index;
                     bigimage.data("owl.carousel").to(number, 100, true);
                 }
             }

             thumbs.on("click", ".owl-item", function(e) {
                 e.preventDefault();
                 var number = $(this).index();
                 bigimage.data("owl.carousel").to(number, 300, true);
             });
         });

     </script>
    <script type="text/javascript">
         (function() {
             /**
              * jQuery
              */
             /* Variables */
             /*var icon = $('.icon');
             var products = $('.products');*/


             /* Do Something */
             /*$(icon).click(function(){
               if($(this).hasClass('active')) return;
               $(products).toggleClass('list').toggleClass('grid');
               $(icon).toggleClass('active');
             });*/


             /**
              * Vanilla JS
              */
             /* Variables */
             var icon = document.getElementsByClassName('icon');
             var products = document.getElementsByClassName('products');

             /* Functions */
             // Has class
             function hasClass(elem, className) {
                 return elem.classList.contains(className);
             }

             /* Do stuff */
             // For each icon
             for (var i = 0, len = icon.length; i < len; i++) {
                 // On click of icon
                 icon[i].addEventListener('click', function() {
                     // If clicked icon has 'active' class
                     if (hasClass(this, 'active')) {
                         // Do nothing
                         return;
                         // If clicked icon doesn't have 'active' class
                     } else {
                         // For each icon
                         for (var j = 0, len = icon.length; j < len; j++) {
                             // Toggle the 'active' class
                             icon[j].classList.toggle('active');
                         }
                         // Toggle the 'list' and 'grid' classes
                         products[0].classList.toggle('list');
                         products[0].classList.toggle('grid');

                     }

                 });

             }
         })();

     </script>
     <script>
         $(document).ready(function() {
             var bigimage = $("#big2");
             var thumbs = $("#thumbs2");
             //var totalslides = 10;
             var syncedSecondary = true;

             bigimage
                 .owlCarousel({
                     items: 1,
                     slideSpeed: 2000,
                     autoplay: true,
                     dots: false,
                     loop: true,
                     responsiveRefreshRate: 200,
                     nav: true,
                     navText: [
                         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                     ]
                 })
                 .on("changed.owl.carousel", syncPosition);

             thumbs
                 .on("initialized.owl.carousel", function() {
                     thumbs
                         .find(".owl-item")
                         .eq(0)
                         .addClass("current");
                 })
                 .owlCarousel({
                     items: 4,
                     dots: true,
                     nav: false,
                     //                    navText: [
                     // '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                     // '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
                     // ],
                     smartSpeed: 200,
                     slideSpeed: 500,
                     slideBy: 4,
                     responsiveRefreshRate: 100
                 })
                 .on("changed.owl.carousel", syncPosition2);

             function syncPosition(el) {
                 //if loop is set to false, then you have to uncomment the next line
                 //var current = el.item.index;

                 //to disable loop, comment this block
                 var count = el.item.count - 1;
                 var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

                 if (current < 0) {
                     current = count;
                 }
                 if (current > count) {
                     current = 0;
                 }
                 //to this
                 thumbs
                     .find(".owl-item")
                     .removeClass("current")
                     .eq(current)
                     .addClass("current");
                 var onscreen = thumbs.find(".owl-item.active").length - 1;
                 var start = thumbs
                     .find(".owl-item.active")
                     .first()
                     .index();
                 var end = thumbs
                     .find(".owl-item.active")
                     .last()
                     .index();

                 if (current > end) {
                     thumbs.data("owl.carousel").to(current, 100, true);
                 }
                 if (current < start) {
                     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
                 }
             }

             function syncPosition2(el) {
                 if (syncedSecondary) {
                     var number = el.item.index;
                     bigimage.data("owl.carousel").to(number, 100, true);
                 }
             }

             thumbs.on("click", ".owl-item", function(e) {
                 e.preventDefault();
                 var number = $(this).index();
                 bigimage.data("owl.carousel").to(number, 300, true);
             });
         });

        </script>
        <script type="text/javascript">
        $(document).ready(function(){
       
        $("#country_id").on('change', function(){

        var catgry = $("#country_id").val();
        //alert(catgry);

        var xurl = "<?php echo base_url();?>register/replacestate/?country="+catgry;
        //alert(xurl);

        $.ajax({url: xurl, success: function(result){

        $("#list_state").html(result);

        }})
        ;
        }) ;
        ///////////////////////////////////
        $("#country_id").on('change', function(){

        var catgry = $("#country_id").val();
        //alert(catgry);

        var xurl = "<?php echo base_url();?>register/replacecity/?country="+catgry;
        //alert(xurl);

        $.ajax({url: xurl, success: function(result){

        $("#list_city").html(result);

        }})
        ;
        }) ; 

        });
        </script>
   </body>
 </html>
