   <section class="banner" style="background-image: url(<?php echo base_url();?>assets2/images/banner-2.webp)">
        <div class="home-banner-overlay"></div>
        <div class="container">
            <div class="banner-details text-center">
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <h1>Largest Classifieds In The World</h1>
                        <h4>You can buy, sell anything you want.</h4>
                    </div>
                </div>
                <div class="position">
                    <span>Or Browse The Highlights</span>
                    <img src="<?php echo base_url();?>assets2/images/lcons/curve%20.png" width="45" alt="">
                </div>
            </div>

            <!-- **** Location Search Form Area **** -->

            <div class="rehomes-search-form-area wow fadeInUp" data-wow-delay="200ms">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="rehomes-search-form">
                            <form action="#" method="post">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-lg-12 ">
                                        <div class="row justify-content-center">
                                            <div class="col-12 col-md-11 py-lg-0 py-2 col-lg-4">
                                                <input type="text" class="form-control search-places" placeholder="Search locations..">
                                                <!--
                                                <select name="location" id="location" class="form-control">
                                                    <option value="location">Search locations..</option>
                                                    <option value="armenia">Armenia</option>
                                                    <option value="argentina">Argentina</option>
                                                    <option value="australia">Australia</option>
                                                    <option value="belgium">Belgium</option>
                                                    <option value="botswana">Botswana</option>
                                                </select>
-->
                                            </div>
                                            <div class="col-12 col-md-11 pb-lg-0 pb-2 col-lg-4">
                                                <select name="types" id="types" class="form-control">
                                                    <option value="all-types">Search items..</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="office">Office</option>
                                                    <option value="villa">Villa</option>
                                                    <option value="apartment">Apartment</option>
                                                    <option value="condominium">Condominium</option>
                                                </select>
                                            </div>
                                            <div class="col-12 col-md-11 pb-lg-0 pb-2 col-lg-2">
                                                <select type="text" name="types" id="name" class="form-control">
                                                    <option value="all-types">Search items..</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="office">Office</option>
                                                    <option value="villa">Villa</option>
                                                    <option value="apartment">Apartment</option>
                                                    <option value="condominium">Condominium</option>
                                                </select>
                                            </div>
                                            <div class="col-12 col-md-11 pb-lg-0 pb-2 col-lg-2">
                                                <button type="submit" class="btn rehomes-search-btn"><i class="fa fa-search mr-2" aria-hidden="true"></i>Click to Search</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- **** Location Search Form Area **** -->


            <!-- **** category Area Start **** -->
            <div class="category d-lg-block d-none">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="row justify-content-center">
                            <?php
                            $qry=$this->db->get('category_master')->result_array();
                            foreach($qry as $value)
                            { 
                            ?>
                            <div class="col-lg col-md-4 col-8 pb-lg-0 pb-3 px-1">
                                <div class="custom-grid  text-center">
                                    <img src="<?php echo base_url();?>category_image/<?=$value['category_icon']?>" width="35" alt="">
                                    <h6 class="pt-2"><?=$value['category_name']?></h6>

                                </div>
                            </div>
                           <?php } ?>                           
                        </div>
                    </div>
                </div>

            </div>
            <!-- **** category Area End **** -->
            <div class="clearfix"></div>
        </div>
    </section>

    <!--    category-bottom-start-->

    <section class="bottom-category-wrap mt-4">
        <div id="mySidebar" class="sidebar d-lg-none d-block">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><i class="fa fa-times" aria-hidden="true"></i></a>
            <li><a href="#" class="d-lg-none d-block">Classes</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Community</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Events</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">For Sale</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Jobs</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Personals</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Real Estate</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Service</a></li>
            <hr>
            <li><a href="#" class="d-lg-none d-block">Vehicles</a></li>
        </div>

        <div id="main" class="d-lg-none d-block text-center">
            <button class="openbtn" onclick="openNav()">Select Your Category</button>
        </div>
    </section>

    <!--    category-bottom-end-->


    <!-- START FEATURED -->

    <section class="featured-lis">
        <div class="container">
            <div class="row">
                <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div id="new-products" class="owl-carousel owl-theme">
                        <!-- Top Ad List -->
                        <?php 
                        $this->db->order_by("id", "desc");
                        $top_query=$this->db->get_where('topad_table')->result_array();
                        foreach ($top_query as $ft) 
                        {
                        $time=date('H:i:s');
                        $date=date('Y-m-d');

                        if ($time>$ft['ad_time'] && $date<=$ft['last_date']) 
                        {
                        $ad_qry=$this->db->get_where('ad_master',array('id'=>$ft['ad_id']))->row();
                        $cat_qry=$this->db->get_where('category_master',array('id'=>$ad_qry->category_id))->row();
                        if($cat_qry->category_name!='PERSONALS' && $ad_qry->report_count<5)
                        {
                        ?>
                        <div class="item">
                            <div class="product-item">
                                <a href="<?php echo base_url();?>home/view/<?=$ad_qry->id;?>">
                                <div class="featured-pic"><img src="<?php echo base_url();?>assets2/images/topad.png" width="30"></div>
                                <div class="carousel-thumb">
                                <img src="<?php echo base_url();?>upload/<?=$ad_qry->ad_image;?>" alt="">
                                </div>
                                </a>
                                <a href="<?php echo base_url();?>home/view/<?=$ad_qry->id;?>" class="item-name"><?=$ad_qry->country;?></a>
                                <span class="price"><?=$cat_qry->category_name;?></span>
                            </div>
                        </div>
                       <?php }}} ?>
                     <!-- Top Ad List End -->
                     <!-- Featured Ad List -->
                        <?php 
                        $this->db->order_by("id", "desc");
                        $featured_ad_query=$this->db->get_where('featured_ad_details',array('status'=>'Approved'))->result_array();
                        foreach ($featured_ad_query as $ft) 
                        {
                        $date=date('Y-m-d');
                        if($date<=$ft['days'])
                        {
                        $ad_qry=$this->db->get_where('ad_master',array('id'=>$ft['ad_id']))->row();
                        $cat_qry=$this->db->get_where('category_master',array('id'=>$ad_qry->category_id))->row();
                        if($cat_qry->category_name!='PERSONALS' && $ad_qry->report_count<5)
                        {
                        ?>
                        <div class="item">
                            <div class="product-item">
                                <a href="<?php echo base_url();?>home/view/<?=$ad_qry->id;?>">
                                <div class="featured-pic"><img src="<?php echo base_url();?>assets2/images/featured.png" width="30"></div>
                                <div class="carousel-thumb">
                                <img src="<?php echo base_url();?>upload/<?=$ad_qry->ad_image;?>" alt="">
                                </div>
                                </a>
                                <a href="<?php echo base_url();?>home/view/<?=$ad_qry->id;?>" class="item-name"><?=$ad_qry->country;?></a>
                                <span class="price"><?=$cat_qry->category_name;?></span>
                            </div>
                        </div>
                       <?php }}} ?>
                     <!-- Featured Ad List End -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- END FEATURED -->



    <!-- **** feature-listing Area Start **** -->
    <!--
    <div class="feature-list-heading">
        <div class="py-3 text-center location-choose">
            <h3>BROWSE YOUR LOCATION</h3>
        </div>
    </div>
-->

    <section class="feature_listing country-list py-3">
        <div class="feature-list-part container">

            <div class="row">
                <div class="col-md-12">
                    <div class="columns-1">
                        <div class="row px-0">
                            <div class="col-md-12 columns-country px-0">
                                <div class="row">
                                    <div class="col-md-12 py-2">
                                        <div class="columns-1-heading">
                                            <h5>POPULAR STATE</h5>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-6">
                                        <div class="listing-1 location-left columns-1-listing">
                                            <ul>
                                                <?php 
                                                $state_qry=$this->db->get_where('state_list_new',array('country_id'=>94))->result_array();
                                                foreach($state_qry as $state)
                                                {
                                                ?>
                                                <li><a href="#"><?=$state['state_name'];?></a></li>
                                                <?php } ?>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- 1st -->
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 1st-column -->
            </div>
            <div class="clearfix"></div>
        </div>
    </section>


    <section class="feature_listing py-3">
        <div class="feature-list-part container">

            <div class="row">
                <div class="col-md-12">
                    <div class="columns-1">
                        <div class="row px-0">
                            <div class="col-md-12 columns-country px-0">
                                <div class="row">
                                    <div class="col-md-12 py-2">
                                        <div class="columns-1-heading">
                                            <h5>POPULAR CITIES</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-6">
                                        <div class="listing-1 states-left columns-1-listing">
                                            <ul>
                                                <?php 
                                                $city_qry=$this->db->get_where('cities',array('country_id'=>94),320)->result_array();
                                                foreach($city_qry as $city)
                                                {
                                                ?>
                                                <li><a href="#"><?=$city['city_name']?></a></li>
                                                <?php } ?>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- 1st -->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 1st-column -->
            </div>
            <div class="clearfix"></div>
        </div>
    </section>


    <!--    more-of-our-categories-start-->

    <section class="more-of-our-categories-wrap py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 mb-2">
                    <div class="more-of-our-categories-heading">
                        <h5>MORE OF OUR CATEGORIES</h5>
                    </div>
                </div>
                <div class="col-md-3 py-md-0 col-6 py-3 more-list-underline">
                    <div class="more-list">
                        <h6><a href="#">PETS</a></h6>
                        <ul>
                            <li><a href="#">Pets for Sale</a></li>
                            <li><a href="#">Pets Adoption</a></li>
                            <li><a href="#">Pets Adoption</a></li>
                            <li><a href="#">Pet Services - Accessories</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 py-md-0 col-6 py-3 more-list-underline">
                    <div class="more-list">
                        <h6><a href="#">CLASSES</a></h6>
                        <ul>
                            <li><a href="#">Creative Courses</a></li>
                            <li><a href="#">IT & Computer course</a></li>
                            <li><a href="#">Language & Humanities</a></li>
                            <li><a href="#">Professional Courses</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 py-md-0 col-6 py-3 more-list-underline">
                    <div class="more-list">
                        <h6><a href="#">DOMESTIC HELP</a></h6>
                        <ul>
                            <li><a href="#">Nanny - Babysitters</a></li>
                            <li><a href="#">Housekeeping - Cleaning</a></li>
                            <li><a href="#">Local Events</a></li>
                            <li><a href="#">Exhibitions</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 py-md-0 col-6 pt-3">
                    <div class="more-list">
                        <h6><a href="#">COMMUNITY</a></h6>
                        <ul>
                            <li><a href="#">Artists - Musicians</a></li>
                            <li><a href="#">Missing People - Connections</a></li>
                            <li><a href="#">Weekend Activities</a></li>
                            <li><a href="#">Charity - Volunteers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--    more-of-our-categories-start-->

    <!-- **** details Area Start **** -->

    <section class="details">
        <div class="container">

            <div class="row details-part px-0">
                <div class="col-lg-6 py-lg-0 py-3 col-md-12">
                    <div class="left-content card mt-4">
                        <h5 class="">Are You Looking for Something?</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <a href="#" class="card__button">Help / Faq!</a>
                    </div>
                </div>
                <!--  -->
                <div class="col-lg-6 py-lg-0 py-3 col-md-12">
                    <div class="right-content card mt-4">
                        <h5 class="">Would You Like to Post a Classified Ad?</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <a href="#" class="card__button">Post a free ad now!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <style type="text/css">
  a {
    text-decoration: none;
  }
  .states-left {
        /*border:1px solid #ccc;*/
        /*padding:5px;*/
        list-style:none;
        -moz-column-count:4; /* Firefox */
        -moz-column-gap:40px;
        -moz-column-rule-width:1px;
        -moz-column-rule-style:outset;
        -moz-column-rule-color:#ccc;
        -webkit-column-count:4; /* Safari and Chrome */
        -webkit-column-gap:40px;
        -webkit-column-rule-width:1px;
        -webkit-column-rule-style:outset;
        -webkit-column-rule-color:#ccc;
        column-count: 4px;  
        column-gap:40px;
        column-rule-width:1px;
        column-rule-style:outset;
        column-rule-color:#ccc;
    }
    .location-left {
        /*border:1px solid #ccc;*/
        /*padding:5px;*/
        list-style:none;
        -moz-column-count:4; /* Firefox */
        -moz-column-gap:40px;
        -moz-column-rule-width:1px;
        -moz-column-rule-style:outset;
        -moz-column-rule-color:#ccc;
        -webkit-column-count:4; /* Safari and Chrome */
        -webkit-column-gap:40px;
        -webkit-column-rule-width:1px;
        -webkit-column-rule-style:outset;
        -webkit-column-rule-color:#ccc;
        column-count: 4px;  
        column-gap:40px;
        column-rule-width:1px;
        column-rule-style:outset;
        column-rule-color:#ccc;
    }
</style>