<!--     my-ads-section-start-->
<?php 
if($this->session->userdata('login_id')=='')
{
redirect('login');
}
$id=$this->session->userdata('login_id');
$user=$this->db->get_where('user_master',array('id'=>$id))->row();

?>
<section class="my-ads-wrap post-ad-form-wrap py-3">
<div class="container">
<div class="row justify-content-center">
<div class="col-lg-12 pl-lg-0 ml-lg-0 col-md-7 pl-md-4 ml-md-3 col-sm-8 pl-sm-4 col-10 pl-4 mt-2 d-sm-block d-none">
<div class="profile-home-div">
<a href="#"><i class="fa fa-home" aria-hidden="true"></i> / My Ads</a>
</div>
</div>
<div class="col-lg-3 col-md-6 col-sm-7 col-9 mt-lg-2 mt-3 d-sm-block d-none">
<div class="row">
<div class="col-md-12 profile-name-box py-sm-auto py-3">
<div class="row justify-content-center">
<div class="col-md-5 col-sm-4 col-5 mb-sm-0 mb-2">
<div class="profile-pic-box">
<?php 
if($user->image!='')
{
?>
<img src="<?php echo base_url();?>upload/<?=$user->image?>" alt="">
<?php }if($user->image==''){?>
<img src="<?php echo base_url();?>assets2/765-default-avatar.png" alt="">
<?php } ?>
</div>
</div>
<div class="col-md-7 col-sm-8 col-10 pl-sm-0 pl-auto">
<div class="profile-pic-side-box text-sm-left text-center">
<h4>Welcome,<br><?=$user->name?></h4>
<a href="#"><i class="fa fa-th-list" aria-hidden="true"></i><span> View my Profile</span></a>
</div>
</div>
</div>
</div>
<div class="col-md-12 my-profile-list-box px-0">
<ul>
<li><a href="<?php echo base_url();?>profile/">My Profile</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/editprofile">Edit Profile</a></li>
<hr>
<li><a class="active-li" href="<?php echo base_url();?>profile/myads">My Ads</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/buycredit">Buy Credits</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/postad">Post A New Ad</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/favourite">Favourite Ads</a></li>
</ul>
</div>
</div>
</div>
<div class="col-12 d-sm-none d-block">
<div class="profile-dropdown-box">
<div class="row justify-content-center">
<div class="col-lg-12">
<div class="profile-home-div text-center">
<a id="profile-dropdown-btn" href="#"><i class="fa fa-home" aria-hidden="true"></i> / My Ads</a>
</div>
</div>
<div class="col-lg-3 col-md-6 col-sm-7 col-9 mt-lg-2">
<div class="row">
<div id="profile-menu" class="col-md-12 my-profile-list-box my-3 px-0">
<ul>
<li><a href="<?php echo base_url();?>profile/">My Profile</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/editprofile">Edit Profile</a></li>
<hr>
<li><a class="active-li" href="<?php echo base_url();?>profile/myads">My Ads</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/buycredit">Buy Credits</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/postad">Post A New Ad</a></li>
<hr>
<li><a href="<?php echo base_url();?>profile/favourite">Favourite Ads</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="col-lg-9 col-sm-12 col-10 mt-lg-2 mt-3">
<div class="my-ads-section">
<div class="row justify-content-center">
<div class="col-md-12">
<div class="row justify-content-end">
<div class="col-md-6 text-right">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
<li class="nav-item">
<a class="nav-link active ads-list-right-border" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa fa-bars" aria-hidden="true"></i> <span>List</span></a>
</li>
<li class="nav-item">
<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa fa-th" aria-hidden="true"></i> <span>Grid</span></a>
</li>
</ul>
</div>
<div class="col-md-12">
<div class="tab-content" id="pills-tabContent">
<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
<div class="row">
<div class="col-md-12">
<?php
$ad_qry=$this->db->get_where('ad_master',array('user_id'=>$id))->result_array();
foreach($ad_qry as $ad)
{
?>    
<a href="<?php echo base_url();?>home/view/<?=$ad['id']?>">
 <div class="my-ad-grid mb-3">
     <div class="row">
         <div class="col-md-3 col-sm-4 col-5 my-ad-pic pr-sm-auto pr-0">
             <img src="<?php echo base_url();?>upload/<?=$ad['ad_image']?>" alt="">
             <div class="my-ad-premium">
                 <span><i class="fa fa-star" aria-hidden="true"></i></span>
             </div>
         </div>
         <div class="col-md-9 col-sm-8 col-7 my-ad-description">
             <div class="row">
                 <div class="col-md-12">
                     <span class="d-sm-inline-block d-none">Home-Office Furniture</span>
                     <span class="float-sm-right">23-March-20</span>
                 </div>
                 <div class="col-md-12">
                     <h5 class="d-sm-block d-none">I Want To Sell My 2 Single Solid Teak Wood Dewan Bed...</h5>
                     <h5 class="d-sm-none d-block"><?=$ad['ad_title']?></h5>
                 </div>
                 <div class="col-md-12">
                     <h4>$3000</h4>
                 </div>
                 <div class="col-md-12">
                     <span class="my-ad-location"><i class="fa fa-map-marker" aria-hidden="true"></i>(<?=$ad['city']?>)</span>
                 </div>
                 <div class="col-md-12 text-sm-right text-left mb-2">
                     <form action="<?php echo base_url();?>profile/deletead/<?=$ad['id']?>" method="post">
                     <button type="button" class="btn btn-primary">Delete Ad</button>
                     </form>
                 </div>
                 <div class="col-md-12">
                     <span class="d-md-inline-block d-none"><?=substr($ad['ad_description'],0,30)?>..</span>
                     <span class="float-right d-sm-block d-none">Posted:<?=$ad['posted_date']?></span>
                 </div>
             </div>
         </div>
     </div>
 </div>
</a>
<?php } ?>
</div>
</div>
</div>
<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
<div class="row justify-content-center">
<?php
$ad_qry=$this->db->get_where('ad_master',array('user_id'=>$id))->result_array();
foreach($ad_qry as $ad)
{
?> 
<div class="col-md-4 col-sm-8 col-10">
<a href="<?php echo base_url();?>home/view/<?=$ad['id']?>">
 <div class="my-ad-grid-2">
     <div class="row">
         <div class="col-md-12 my-ad-pic">
             <img src="<?php echo base_url();?>upload/<?=$ad['ad_image']?>" alt="">
             <div class="my-ad-premium">
                 <span><i class="fa fa-star" aria-hidden="true"></i></span>
             </div>
         </div>
         <div class="col-md-12 my-ad-description text-center">
             <div class="row">
                 <div class="col-md-12">
                     <h5><?=$ad['ad_title']?></h5>
                 </div>
                 <div class="col-md-12">
                     <h4>$3000</h4>
                 </div>
                 <div class="col-md-12">
                     <span class="my-ad-location"><i class="fa fa-map-marker" aria-hidden="true"></i>(<?=$ad['city']?>)</span>
                 </div>
             </div>
         </div>
     </div>
 </div>
</a>
</div>
<?php } ?>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
<div class="clearfix"></div>
</div>
</section>

<!--     my-ads-section-end-->