  <?php 
  $ad_id=$this->uri->segment(3);
  $ad_qry=$this->db->get_where('ad_master',array('id'=>$ad_id))->row();
  $category=$this->db->get_where('category_master',array('id'=>$ad_qry->category_id))->row();
  $user=$this->db->get_where('user_master',array('id'=>$ad_qry->user_id))->row();
  ?>
  <section class="py-2 details-breadcrumbs d-lg-block d-none">
      <div class="container container-2">
          <div class="row justify-content-center">
              <div class="col-md-12 px-0 py-2">
                  <div class="pre-description-heading">
                      <ul>
                          <li><a href="#" class="right-angle">Home</a></li>
                          <li><a href="#" class="right-angle">Details</a></li>
                          <li><a href="#"><?=$category->category_name;?></a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="clearfix"></div>
      </div>
  </section>

  <section class="py-2 details-breadcrumbs d-lg-none d-block">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-11 px-0 py-2">
                  <div class="pre-description-heading">
                      <ul>
                          <li><a href="#" class="right-angle">Home</a></li>
                          <li><a href="#" class="right-angle">Details</a></li>
                          <li><a href="#"><?=$category->category_name;?></a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="clearfix"></div>
      </div>
  </section>

  <!--    details-description-text-end-->


  <!--    details-description-start-->

  <section class="details-description details-carousel-wrap details-text-wrap pt-1 pb-3 d-lg-block d-none">
      <div class="container container-2">
          <div class="row justify-content-center">
              <div class="col-md-12">
                  <div class="row">
                      <div class="left-container">
                          <div class="description-box details-carousel-box mb-4">
                              <div class="row justify-content-center">
                                  <div class="col-12">
                                      <h5><?=$ad_qry->ad_title;?></h5>
                                      <p>Posted by <?=$user->name?>. Ltd. on <?=$ad_qry->posted_date?></p>
                                      <h4 class="details-description-price"></h4>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="outer">
                                          <div id="big" class="owl-carousel owl-theme">
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>upload/<?=$ad_qry->ad_image;?>">
                                              </div>
                                              <?php 
                                                $details_image=$this->db->get_where('details_image_master',array('ad_id'=>$ad_qry->id))->result_array();
                                                foreach ($details_image as $image) 
                                                {            
                                                ?>
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>details_image/<?=$image['ad_details_image']?>">
                                              </div>
                                              <?php } ?>
                                          </div>
                                          <div id="thumbs" class="owl-carousel owl-theme">
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>upload/<?=$ad_qry->ad_image;?>">
                                              </div>
                                              <?php 
                                                $details_image=$this->db->get_where('details_image_master',array('ad_id'=>$ad_qry->id))->result_array();
                                                foreach ($details_image as $image) 
                                                {            
                                                ?>
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>details_image/<?=$image['ad_details_image']?>">
                                              </div>
                                              <?php } ?>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="description-box details-text-box">
                              <div class="row justify-content-center">
                                  <div class="col-12">
                                      <div class="row">
                                          <div class="col-5">
                                              <h6 class="details-name">Price</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value-color">Rs 35,00,000</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Location</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">Coimbatore, Tamil Nadu</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Type of ad</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">Professional Offer</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Size</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">30,32,34,36</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Make or Brand</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">SETA</p>
                                          </div>
                                          <div class="col-md-12 pt-3">
                                              <h6 class="details-name">Description</h6>
                                          </div>
                                          <div class="col-md-12 pb-3">
                                              <p class="details-value">Punch up your wardrobe with a semi-formal chino trousers from the house of Seta. Style this outfit with a button-down shirt and a fashionable tie.</p>
                                          </div>
                                          <div class="col-md-12 details-text-bottom py-1">
                                              <div class="row">
                                                  <div class="col-md-4">
                                                      <p><b>Ad ID</b> 208189084</p>
                                                  </div>
                                                  <div class="col-md-4">
                                                      <p><b>Member since</b> 22/11/2019</p>
                                                  </div>
                                                  <div class="col-md-4">
                                                      <p><b>Visitors</b> 003
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="related-seraches">
                              <div class="row">
                                  <div class="col-md-12 text-center py-4">
                                      <div class="listing-related-wrap">
                                          <h5 class="pb-2">Didn't find what you were looking for?</h5>
                                          <a href="#" class="details-back-anchor"><i class="fa fa-angle-double-left" aria-hidden="true"></i>Back to Results</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="related-searches details-related-searches">
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="listing-related-wrap">
                                          <h5 class="tags-details">Tags:</h5>
                                          <ul>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Fashion and Beauty Tamilnadu</a></li>
                                              <li><a href="#">Fashion and Beauty Coimbatore</a></li>
                                              <li><a href="#">Clothes and Accessories Tamilnadu</a></li>
                                              <li><a href="#">Clothes and Accessories Coimbatore</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="right-container">
                          <div id="msg-btn-div" class="listing-category details-sidebar text-center">
                              <h5>Contact the Advertiser</h5>
                              <p>Don't forget to mention Vivastreet when you get in touch!</p>

                              <a href="#" id="actual-no" class="listing-category-heading-btn btn-no-1 my-3">(+91) 1234567890</a>
                              <a href="#" id="show-no" class="listing-category-heading-btn btn-no-1 my-3">See phone number</a>
                              <a href="#" id="open-form-btn" class="listing-category-heading-btn btn-no-2 my-3">Send a Message</a>
                              <hr>
                              <a href="#" id="show-reporting-div" class="listing-category-heading-btn2 btn-no-3">Report this Ad</a>
                          </div>

                          <div id="msg-form" class="msg-form-modal">
                              <form>
                                  <div class="row justify-content-center">
                                      <div class="col-12 mb-3">
                                          <span class="form-heading">Send a message</span>
                                          <a href="#"><i id="close-form" class="fa fa-times float-right" aria-hidden="true"></i></a>
                                      </div>
                                      <div class="col-12 mb-2">
                                          <div class="form-group">
                                              <label class="labelfw" for="exampleInputEmail1">Email Id</label>
                                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                                          </div>
                                      </div>
                                      <div class="col-12 mb-2">
                                          <div class="form-group">
                                              <label class="labelfw" for="exampleInputEmail1">Phone Number</label>
                                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-group">
                                              <label class="labelfw" for="exampleFormControlTextarea1">Message</label>
                                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                          </div>
                                      </div>
                                      <div class="col-md-12">
                                          <div class="form-group form-new">
                                              <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row recaptcha-grid">
                                              <div class="col-sm-8 col-8 my-auto">
                                                  <div class="form-check">
                                                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                      <label class="form-check-label" for="exampleCheck1">I'm not not a robot</label>
                                                  </div>
                                              </div>
                                              <div class="col-sm-4 col-4 px-0 text-center">
                                                  <img class="recaptcha-img" src="<?php echo base_url();?>assets2/images/1200px-RecaptchaLogo.svg.png">
                                                  <a class="recaptcha-texts" href="#">Privacy</a>
                                                  <a class="recaptcha-texts" href="#">Terms</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row justify-content-center text-center mt-2">
                                              <div class="col-sm-12 col-10">
                                                  <button type="submit" class="btn btn-primary listing-category-heading-btn">Send message</button>
                                              </div>
                                              <div class="col-sm-12 col-10 pt-sm-0 mt-2">
                                                  <span class="register-form-anchor">By sending this message, you agree to Vivastreet's terms and conditions.</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div id="reporting-div" class="anything-wrong listing-category details-sidebar">
                              <span class="text-left">Anything Wrong ?</span>
                              <a href="#"><i id="close-flagged-form" class="fa fa-times float-right" aria-hidden="true"></i></a>
                              <p>You must be logged in to report this ad</p>
                              <a href="#" class="listing-category-heading-btn2">Log In</a>
                          </div>

                          <div class="similar-ads-section mt-4">
                              <h5 class="text-center py-2">Similar Ads</h5>
                              <div class="row">
                                  <!-- similar ads start -->
                                     <?php 
                                     $ad=$this->db->get_where('ad_master',array('category_id'=>$ad_qry->category_id))->result_array();
                                     foreach($ad as $value)
                                     {
                                     ?>
                                  <div class="col-md-12 details-small-ads py-2">
                                      <div class="row details-small-ads-grid">
                                          <div class="col-lg-4 col-sm-8">
                                              <img src="<?php echo base_url();?>upload/<?=$value['ad_image']?>">
                                          </div>
                                          <div class="col-lg-8 details-small-text px-lg-0">
                                              <a href="#"><?=$value['country']?></a>
                                              <p><small><?=$value['state']?></small></p>
                                              <p>Rs 1450</p>
                                          </div>
                                      </div>
                                  </div>
                                  <?php } ?>
                                  <!-- similar ads end -->
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="clearfix"></div>
      </div>
  </section>





  <section class="details-description details-carousel-wrap details-text-wrap pt-1 pb-3 d-lg-none d-block">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-11">
                  <div class="row justify-content-center">
                      <div class="col-md-12">
                          <div class="description-box details-carousel-box mb-4">
                              <div class="row justify-content-center">
                                  <div class="col-12">
                                       <h5><?=$ad_qry->ad_title;?></h5>
                                       <p>Posted by <?=$user->name?>. Ltd. on <?=$ad_qry->posted_date?></p>
                                      <h4 class="details-description-price">Rs 35,00,000</h4>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="outer">
                                          <div id="big2" class="owl-carousel owl-theme">
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>upload/<?=$ad_qry->ad_image;?>">
                                              </div>
                                              <?php 
                                                $details_image=$this->db->get_where('details_image_master',array('ad_id'=>$ad_qry->id))->result_array();
                                                foreach ($details_image as $image) 
                                                {            
                                                ?>
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>details_image/<?=$image['ad_details_image']?>">
                                              </div>
                                              <?php } ?>
                                            </div>
                                          <div id="thumbs2" class="owl-carousel owl-theme">
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>upload/<?=$ad_qry->ad_image;?>">
                                              </div>
                                              <?php 
                                                $details_image=$this->db->get_where('details_image_master',array('ad_id'=>$ad_qry->id))->result_array();
                                                foreach ($details_image as $image) 
                                                {            
                                                ?>
                                              <div class="item">
                                                  <img src="<?php echo base_url();?>details_image/<?=$image['ad_details_image']?>">
                                              </div>
                                              <?php } ?>
                                              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-8 mb-4">
                          <div id="msg-btn-div2" class="listing-category details-sidebar text-center">
                              <h5>Contact the Advertiser</h5>
                              <p>Don't forget to mention Vivastreet when you get in touch!</p>

                              <a href="#" id="actual-no2" class="listing-category-heading-btn btn-no-1 my-3">(+91) 1234567890</a>
                              <a href="#" id="show-no2" class="listing-category-heading-btn btn-no-1 my-3">See phone number</a>
                              <a href="#" id="open-form-btn2" class="listing-category-heading-btn btn-no-2 my-3">Send a Message</a>
                              <hr>
                              <a href="#" id="show-reporting-div2" class="listing-category-heading-btn2 btn-no-3">Report this Ad</a>
                          </div>

                          <div id="msg-form2" class="msg-form-modal">
                              <form>
                                  <div class="row justify-content-center">
                                      <div class="col-12 mb-3">
                                          <span class="form-heading">Send a message</span>
                                          <a href="#"><i id="close-form2" class="fa fa-times float-right" aria-hidden="true"></i></a>
                                      </div>
                                      <div class="col-12 mb-2">
                                          <div class="form-group">
                                              <label class="labelfw" for="exampleInputEmail1">Email Id</label>
                                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                                          </div>
                                      </div>
                                      <div class="col-12 mb-2">
                                          <div class="form-group">
                                              <label class="labelfw" for="exampleInputEmail1">Phone Number</label>
                                              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="form-group">
                                              <label class="labelfw" for="exampleFormControlTextarea1">Message</label>
                                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                          </div>
                                      </div>
                                      <div class="col-md-12">
                                          <div class="form-group form-new">
                                              <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row recaptcha-grid">
                                              <div class="col-sm-8 col-8 my-auto">
                                                  <div class="form-check">
                                                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                      <label class="form-check-label" for="exampleCheck1">I'm not not a robot</label>
                                                  </div>
                                              </div>
                                              <div class="col-sm-4 col-4 px-0 text-center">
                                                  <img class="recaptcha-img" src="<?php echo base_url();?>assets2/images/1200px-RecaptchaLogo.svg.png">
                                                  <a class="recaptcha-texts" href="#">Privacy</a>
                                                  <a class="recaptcha-texts" href="#">Terms</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row justify-content-center text-center mt-2">
                                              <div class="col-sm-12 col-10">
                                                  <button type="submit" class="btn btn-primary listing-category-heading-btn">Send message</button>
                                              </div>
                                              <div class="col-sm-12 col-10 pt-sm-0 mt-2">
                                                  <span class="register-form-anchor">By sending this message, you agree to Vivastreet's terms and conditions.</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div id="reporting-div2" class="anything-wrong listing-category details-sidebar">
                              <span class="text-left">Anything Wrong ?</span>
                              <a href="#"><i id="close-flagged-form2" class="fa fa-times float-right" aria-hidden="true"></i></a>
                              <p>You must be logged in to report this ad</p>
                              <a href="#" class="listing-category-heading-btn2">Log In</a>
                          </div>
                      </div>

                      <div class="col-md-12">
                          <div class="description-box details-text-box">
                              <div class="row justify-content-center">
                                  <div class="col-12">
                                      <div class="row">
                                          <div class="col-5">
                                              <h6 class="details-name">Price</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value-color">Rs 35,00,000</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Location</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">Coimbatore, Tamil Nadu</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Type of ad</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">Professional Offer</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Size</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">30,32,34,36</p>
                                          </div>
                                          <div class="col-5">
                                              <h6 class="details-name">Make or Brand</h6>
                                          </div>
                                          <div class="col-7">
                                              <p class="details-value">SETA</p>
                                          </div>
                                          <div class="col-md-12 pt-3">
                                              <h6 class="details-name">Description</h6>
                                          </div>
                                          <div class="col-md-12 pb-3">
                                              <p class="details-value">Punch up your wardrobe with a semi-formal chino trousers from the house of Seta. Style this outfit with a button-down shirt and a fashionable tie.</p>
                                          </div>
                                          <div class="col-md-12 details-text-bottom py-1">
                                              <div class="row">
                                                  <div class="col-md-4 pb-md-0 pb-2">
                                                      <p><b>Ad ID</b> 208189084</p>
                                                  </div>
                                                  <div class="col-md-4 pb-md-0 pb-2">
                                                      <p><b>Member since</b> 22/11/2019</p>
                                                  </div>
                                                  <div class="col-md-4 pb-md-0 pb-2">
                                                      <p><b>Visitors</b> 003
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-12">
                          <div class="related-seraches">
                              <div class="row">
                                  <div class="col-md-12 text-center py-4">
                                      <div class="listing-related-wrap">
                                          <h5 class="pb-2">Didn't find what you were looking for?</h5>
                                          <a href="#" class="details-back-anchor"><i class="fa fa-angle-double-left" aria-hidden="true"></i>Back to Results</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-12">
                          <div class="similar-ads-section mt-2">
                              <h5 class="text-center py-2">Similar Ads</h5>
                              <div class="row">
                                 <?php 
                                     $ad=$this->db->get_where('ad_master',array('category_id'=>$ad_qry->category_id))->result_array();
                                     foreach($ad as $value)
                                     {
                                  ?>
                                  <div class="col-sm-6 details-small-ads py-2">
                                      <div class="row details-small-ads-grid">
                                          <div class="col-4">
                                              <img src="<?php echo base_url();?>upload/<?=$value['ad_image']?>">
                                          </div>
                                          <div class="col-8 details-small-text px-lg-0">
                                              <a href="#"><?=$value['country']?></a>
                                              <p><small><?=$value['state']?></small></p>
                                              <p>Rs 1450</p>
                                          </div>
                                      </div>
                                  </div>
                                <?php } ?>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-8">
                          <div class="related-searches details-related-searches mt-4">
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="listing-related-wrap">
                                          <h5 class="tags-details">Tags:</h5>
                                          <ul>
                                              <li><a href="#">Shirt</a></li>
                                              <li><a href="#">Fashion and Beauty Tamilnadu</a></li>
                                              <li><a href="#">Fashion and Beauty Coimbatore</a></li>
                                              <li><a href="#">Clothes and Accessories Tamilnadu</a></li>
                                              <li><a href="#">Clothes and Accessories Coimbatore</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
