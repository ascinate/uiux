<!-- START BANNER -->
<?php 
 if($this->session->userdata('login_id')==0)
 {
    redirect('login');
 }
?>
<section class="landing-banner">
    <i class="fa fa-home"></i>

    <h1 class="post-ad-head">
        my account</h1>
</section>
<!-- END BANNER -->

<?php 
 $u_id=$this->session->userdata('login_id');
 $user=$this->db->get_where('user_master',array('id'=>$u_id))->row();

?>
<section class="dashboard">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-3 col-xs-12">
                <div class="pro-img">
                    <div class="profile-wrapper">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <div class="profile-image">
                                    <?php 
                                if($user->image !='')
                                {
                                ?>
                                    <?php if($user->pic_url==1){?>
                                    <img src="<?php echo base_url();?>upload/<?=$user->image?>" style="height: 104px;padding:4px;width: 100px;">
                                    <?php } if($user->pic_url==2){?>
                                    <img src="<?=$user->image?>" style="height: 104px;padding:4px;width: 100px;">
                                    <?php } ?>
                                    <?php }else{ ?>
                                    <img src="<?php echo base_url();?>style/assets2/img/userpro.png" style="height: 104px;padding:4px;width: 100px;">
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="welcome">
                                    <h5 class="text-center">Welcome,<br><?=$user->name?></h5>
                                </div>
                                <div class="view-profile text-center">
                                    <i class="fa fa-list"></i>
                                    <a href="<?php echo base_url('userdashboard/editprofile/'.$u_id);?>">View my profile</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dog-res" id="cat-res-1">
                        <ul>
                            <a href="<?php echo base_url('userdashboard');?>">
                                <li id="cat-res-11" class="category-active-1 icon-next-1">My Profile
                                    <i class="fa fa-angle-right"></i>
                                </li>
                            </a>
                            <a href="<?php echo base_url('myads');?>">
                                <li id="cat-res-12" class="category-active-2 icon-next-1">my ads
                                    <i class="fa fa-angle-right"></i>
                                </li>
                            </a>
                            <!-- <a href="<?php //echo base_url('message');?>"><li id="cat-res-13" class="icon-next-1" >messages and notifications
                            <i class="fa fa-angle-right"></i>
                        </li></a> -->
                            <!--  <a href="<?php //echo base_url('order');?>"><li id="cat-res-14" class="icon-next-1">payment details
                            <i class="fa fa-angle-right"></i>
                        </li></a> -->
                            <a href="<?php echo base_url('discount');?>">
                                <li id="cat-res-15" class="icon-next-1">buy - Credits
                                    <i class="fa fa-angle-right"></i>
                                </li>
                            </a>
                            <a href="<?php echo base_url('addpost/add');?>">
                                <li id="cat-res-16" class="icon-next-1">Post a new ad
                                    <i class="fa fa-angle-right"></i>
                                </li>
                            </a>
                            <a href="<?php echo base_url('favourite');?>">
                                <li id="cat-res-17" class="icon-next-1">favourite ads
                                    <i class="fa fa-angle-right"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-9 col-xs-12 ">
                <?php 
                 $ad_qry=$this->db->get_where('ad_master',array('user_id'=>$u_id));
                $count=$ad_qry->num_rows();
                if($count==0)
                {
                ?>
                <!--------------------->
                <div class="message-box-1 text-center">
                    <h3>My Ads</h3>
                    <span>Your Favorite Ads help you keep track of the ads that you find
                        interesting so you can access them again at a later time.
                        You don’t have any favorite ads listed at the moment. Add your
                        favorites to this list by clicking on the star icon next to the ad.
                    </span>
                    <p class="circle-i text-center">i</p>
                </div>
                <!---------------------------------->
                <?php }else{?>
                <h1 class="text-center my-wishlist">my ads</h1>
                <span style="color: red;text-shadow: 2px 5px 3px #898989;margin-left: 24px;"><?php echo $this->session->flashdata('aderror');?></span>

                <div class="my-ads-wrapper">
                    <div class="row">
                        <?php 
                        
                         foreach ($ad_qry->result_array() as $ad) {
                        
                         ?>

                        <div class="col-xl-4 col-lg-4 col-md-6" style="margin-top: 10px;margin-bottom: 10px;">
                            <div class="imgg-1">

                                <?php
                                        
                                        if($ad['photo_varified']=="N")
                                        {
                                        ?>
                                <a href="<?php echo base_url('ads/viewad/'.$ad['id']);?>">
                                    <?php if($ad['pic_url']==1){?>
                                    <img src="<?php echo base_url();?>upload/<?=$ad['ad_image']?>" class="d-block img-fluid d-block" style="height: 200px;">
                                    <?php }if($ad['pic_url']==2){?>
                                    <img src="<?=$ad['ad_image'];?>" class="d-block img-fluid d-block" style="height: 200px;">
                                    <?php } ?>
                                    <?php } if($ad['photo_varified']=="H"){ ?>

                                    <?php 
                                        $chek=$this->db->get_where('verified_table',array('ad_id'=>$ad['id']))->num_rows();
                                        if($chek==0 && $ad['status']=="Active")
                                        {
                                        ?>
                                    <a href="<?php echo base_url('myads/verified/'.$ad['id']);?>" class="verify-class1">
                                        <i class="fa fa-hand-o-right" style="font-size:28px;color:red!important;margin-left: 10px;"></i>
                                        <span class="text-center" style="margin-left: 6px;font-size: 19px;font-weight: 600;">Verify Your Photo</span>

                                    </a>
                                    <a href="<?php echo base_url('ads/viewad/'.$ad['id']);?>">
                                        <?php }if($chek!=0){?>
                                        <a href="<?php echo base_url('ads/viewad/'.$ad['id']);?>" class="verify-class1">
                                            <span class="text-center" style="margin-left:29px;font-size: 19px;font-weight: 600;color: green!important;">Wait For Confirmation</span>
                                            <?php } ?>
                                            <a href="<?php echo base_url('ads/viewad/'.$ad['id']);?>">
                                                <?php if($ad['pic_url']==1){?>
                                                <img src="<?php echo base_url();?>upload/<?=$ad['ad_image']?>" class="d-block img-fluid d-block" style="height: 200px;">
                                                <?php }if($ad['pic_url']==2){?>
                                                <img src="<?=$ad['ad_image'];?>" class="d-block img-fluid d-block" style="height: 200px;">
                                                <?php } ?>
                                                <?php } ?>
                                                <div class="text-wrapper text-center">
                                                    <h3><?=substr(utf8_decode($ad['ad_title']),0,10)?>..</h3>
                                                    <?php  
                                            $additional_details=$this->db->get_where('additional_value_master',array('ad_id'=>$ad['id']))->result_array();
                                            foreach ($additional_details as $details) 
                                            {
                                            $dtt=str_replace("_"," ",$details['meta_key']);
                                            if($dtt=='price'){
                                            ?>
                                                    <h4>$<?=number_format($details['meta_value'],"2",".",",");?></h4>
                                                    <?php }if($dtt=='Date'){?>
                                                    <h4><?=$details['meta_value'];?></h4>
                                                    <?php } if($dtt=='Rent'){?>
                                                    <h4>$<?=number_format($details['meta_value'],"2",".",",");?>per/month</h4>
                                                    <?php } if($dtt=='Gender'){?>
                                                    <h4><?=$details['meta_value'];?></h4>
                                                    <?php }} ?>
                                                    <h5>available</h5>
                                                    <?php if($ad['status']=="In-Active"){?>
                                                    <p class="verify-class12" style="    transform: rotate(-48deg);bottom: 105px;margin-top: -57px;left: 10px;width: 106%;font-weight: bold;font-size: 19px;color: #650496!important;opacity: 0.5;position: relative;">Make It Featured Or Premium Ad To Show In List</p>
                                                    <?php } ?>
                                                </div>
                                            </a>

                                            <div class="myads-btn-wrap">
                                                <a href="<?php echo base_url('ads/editad/'.$ad['id'].'/'.$u_id);?>" class="view-all d-inline-block bg-5 text-center verify-class100">
                                                    Edit</a>
                                                <a href="<?php echo base_url('ads/deleteads/'.$ad['id'].'/'.$u_id);?>" class="myads-delete d-inline-block bg-3 text-center verify-class102" onclick="return del()">
                                                    <i class="fa fa-trash-o"></i>
                                                </a>
                                                <?php 
                                             $date=date('Y-m-d');
                                             $qry=$this->db->get_where('featured_ad_details',array('ad_id'=>$ad['id']));
                                             $c=$qry->num_rows();
                                             $cc=$qry->row();
                                             $qry1=$this->db->get_where('premium_ad_details',array('ad_id'=>$ad['id']));
                                             $p=$qry1->num_rows();
                                             $ppp=$qry1->row();
                                             if($c==0)
                                             {
                                             
                                              if($p==0)
                                              {
                                            ?>
                                                <a class="view-all verify-class1000 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/premium/'.$ad['id']);?>" style="width: 48%;">Premium</a>
                                                <?php 
                                             $time=date('h:i:s');
                                             $date=date('Y-m-d');
                                             $sc_qry=$this->db->get_where('topad_table',array('ad_id'=>$ad['id']));
                                             $cntt=$sc_qry->num_rows();
                                             $sc=$sc_qry->row();
                                            
                                             if($cntt==0)
                                             {
                                            ?>
                                                <a class="view-all verify-class1023 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel </a>
                                                <?php }if($cntt!=0 && $date<=$sc->last_date){?>
                                                <span class="view-all d-inline-block bg-5 text-center" style="width: 48%;">Top For <?=$sc->ad_days?> Days</span>

                                                <?php }if($cntt!=0 && $date>$sc->last_date){?>
                                                <a class="view-all verify-class1056 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel</a>
                                                <?php } ?>

                                                <?php }if($p!=0 && $date<=$ppp->days){?>
                                                <a class="view-all verify-class1078 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/P/'.$ad['id']);?>" style="width: 100%;margin-top: -10px;margin-bottom: -6px;margin-left: -1px;background-color: #b400ffa1!important;">Premium</a>

                                                <span class="view-all verify-class10789 d-inline-block bg-5 text-center" style="width: 100%;border-color: #0000ff2e!important;background-color: #0000ff6b!important;">Already in Premium Ad<br>(expire on <?=$ppp->days;?>)</span>

                                                <?php }if($p!=0 && $date>$ppp->days){?>
                                                <a class="view-all verify-class10078 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/premium/'.$ad['id']);?>" style="width: 48%;">Premium </a>
                                                <?php 
                                             $time=date('h:i:s');
                                             $date=date('Y-m-d');
                                             $sc_qry=$this->db->get_where('topad_table',array('ad_id'=>$ad['id']));
                                             $cntt=$sc_qry->num_rows();
                                             $sc=$sc_qry->row();
                                            
                                             if($cntt==0)
                                             {
                                            ?>
                                                <a class="view-all verify-class100122 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel </a>
                                                <?php }if($cntt!=0 && $date<=$sc->last_date){?>
                                                <span class="view-all verify-class100896 d-inline-block bg-5 text-center" style="width: 48%;">Top For <?=$sc->ad_days?> Days</span>

                                                <?php }if($cntt!=0 && $date>$sc->last_date){?>
                                                <a class="view-all verify-class100122 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel </a>
                                                <?php } ?>
                                                <?php }}if($c!=0 && $date<=$cc->days && $p==0){ ?>
                                                <a class="view-all verify-class10012212 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/F/'.$ad['id']);?>" style="width: 100%;margin-top: -10px;margin-bottom: -6px;margin-left: -1px;background-color: #04ad19bf!important;">Premium</a>
                                                <span class="view-all verify-class10012212 d-inline-block bg-5 text-center" style="width: 100%;border-color: #0000ff2e!important;background-color: #0000ff6b!important;border-color: #0000ff2e!important;">Already in Featured Ad<br>(expire on <?=$cc->days;?>)</span>

                                                <?php }if($c!=0 && $date>$cc->days && $p==0){ ?>
                                                <a class="view-all verify-class1001222220 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/premium/'.$ad['id']);?>" style="width: 48%;">Premium </a>
                                                <?php 
                                             $time=date('h:i:s');
                                             $date=date('Y-m-d');
                                             $sc_qry=$this->db->get_where('topad_table',array('ad_id'=>$ad['id']));
                                             $cntt=$sc_qry->num_rows();
                                             $sc=$sc_qry->row();
                                            
                                             if($cntt==0)
                                             {
                                            ?>
                                                <a class="view-all verify-class10012212 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel</a>
                                                <?php }if($cntt!=0 && $date<=$sc->last_date){?>
                                                <span class="view-all verify-class100122456 d-inline-block bg-5 text-center" style="width: 48%;">Top For <?=$sc->ad_days?> Days</span>

                                                <?php }if($cntt!=0 && $date>$sc->last_date){?>
                                                <a class="view-all verify-class1001227896 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel </a>
                                                <?php } ?>

                                                <?php }if($c!=0 && $p!=0)
                                              { 
                                                if($date<=$cc->days && $date<=$ppp->days)
                                                {
                                              ?>
                                                <span class="view-all verify-class1001224578 d-inline-block bg-5 text-center" style="width: 100%;border-color: #0000ff2e!important;background-color: #0000ff6b!important;border-color: #0000ff2e!important;">Already in Featured Ad<br>(expire on <?=$cc->days;?>)<br>
                                                    Already in Premium Ad<br>(expire on <?=$ppp->days;?>)</span>
                                                <?php }if($date<=$cc->days && $date>$ppp->days){?>
                                                <a class="view-all verify-class100122782 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/F/'.$ad['id']);?>" style="width: 100%;margin-top: -10px;margin-bottom: -6px;margin-left: -1px;background-color: #04ad19bf!important;">Premium</a>
                                                <span class="view-all verify-class10012212354 d-inline-block bg-5 text-center" style="width: 100%;border-color: #0000ff2e!important;background-color: #0000ff6b!important;border-color: #0000ff2e!important;">Already in Featured Ad<br>(expire on <?=$cc->days;?>)<br>
                                                </span>
                                                <?php }if($date>$cc->days && $date<=$ppp->days){?>
                                                <a class="view-all verify-class100122789654 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/P/'.$ad['id']);?>" style="width: 100%;margin-top: -10px;margin-bottom: -6px;margin-left: -1px;background-color: #04ad19bf!important;">Premium</a>
                                                <span class="view-all verify-class100122785236 d-inline-block bg-5 text-center" style="width: 100%;border-color: #0000ff2e!important;background-color: #0000ff6b!important;border-color: #0000ff2e!important;">Already in Premium Ad<br>(expire on <?=$cc->days;?>)<br>
                                                </span>
                                                <?php }if($date>$cc->days && $date>$ppp->days){?>

                                                <a class="view-all verify-class10012245874 d-inline-block bg-5 text-center" href="<?php echo base_url('addpost/premium/'.$ad['id']);?>" style="width: 48%;">Premium</a>
                                                <?php 
                                             $time=date('h:i:s');
                                             $date=date('Y-m-d');
                                             $sc_qry=$this->db->get_where('topad_table',array('ad_id'=>$ad['id']));
                                             $cntt=$sc_qry->num_rows();
                                             $sc=$sc_qry->row();
                                            
                                             if($cntt==0)
                                             {
                                            ?>
                                                <a class="view-all verify-class100122254658 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel </a>
                                                <?php }if($cntt!=0 && $date<=$sc->last_date){?>
                                                <span class="view-all verify-class10012274582 d-inline-block bg-5 text-center" style="width: 48%;">Top For <?=$sc->ad_days?> Days</span>

                                                <?php }if($cntt!=0 && $date>$sc->last_date){?>
                                                <a class="view-all verify-class1001227444 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/add/'.$ad['id']);?>" style="width: 48%;">Carousel</a>
                                                <?php } ?>

                                                <?php }} ?>

                                                <!-- ////////////////////////Do Available/////////////////// -->
                                                <?php 
                                            $cat_qryy=$this->db->get_where('category_master',array('id'=>$ad['category_id']))->row();
                                            if ($cat_qryy->category_name == 'PERSONALS'&& $ad['status']=='Active') {
                                                
                                            $ad_qr=$this->db->get_where('available_table',array('ad_id'=>$ad['id']));
                                            $cn=$ad_qr->num_rows();
                                            $cn2=$ad_qr->row();
                                            $time=date('H:i:s');
                                            $date=date('Y-m-d');
                                            if($cn==0){
                                           ?>
                                                <a class="view-all verify-class1001224587412 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/addavailable/'.$ad['id']);?>" style="width: 48%; margin-top: -6px; margin-left: 54px;background-color: #087d08bf!important;border-color: green!important;">Available Now</a>
                                                <?php }
                                      if($cn!=0 && $date==$cn2->set_date && $time>$cn2->from_time && $time<$cn2->set_time)
                                      {
                                        $time=date('H:i:s');
                                        $t1=new DateTime($time);
                                        $t2=new DateTime($cn2->set_time);
                                        $dif=$t2->diff($t1);
                                        
                                        ?>
                                                <span class="view-all verify-class100122saa d-inline-block bg-5 text-center" style="width: 83%; margin-top: -6px;background-color: #087d08bf!important;border-color: green!important;">Avaliable For <?=$dif->format("%H");?>h <?=$dif->format("%I");?>m</span>
                                                <a href="<?php echo base_url('makeadtop/deleteads/'.$ad['id']);?>" class=" verify-class100122ssd myads-delete d-inline-block bg-3 text-center" onclick="return del()">
                                                    <i class="fa fa-trash-o"></i>
                                                </a>
                                                <?php }
                                      if($cn!=0 && $date==$cn2->set_date && $time>$cn2->set_time)
                                      {?>
                                                <a class="view-all verify-class100122758855 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/addavailable/'.$ad['id']);?>" style="width: 48%; margin-top: -6px; margin-left: 54px;background-color: #087d08bf!important;border-color: green!important;">Available Now</a>
                                                <?php }
                                      if($cn!=0 && $date!=$cn2->set_date)
                                      {?>
                                                <a class="view-all verify-class100122555222 d-inline-block bg-5 text-center" href="<?php echo base_url('makeadtop/addavailable/'.$ad['id']);?>" style="width: 48%; margin-top: -6px; margin-left: 54px;background-color: #087d08bf!important;border-color: green!important;">Available Now</a>
                                                <?php }
                                      if($cn!=0 && $date==$cn2->set_date && $time<$cn2->from_time && $time<$cn2->set_time)
                                      {?>
                                                <span class="view-all verify-class10012244411 d-inline-block bg-5 text-center" style="width: 83%; margin-top: -6px;background-color: #087d08bf!important;border-color: green!important;">Wait For Avaliable</span>
                                                <a href="<?php echo base_url('makeadtop/deleteads/'.$ad['id']);?>" class="myads-delete d-inline-block bg-3 text-center" onclick="return del()">
                                                    <i class="fa fa-trash-o"></i>
                                                </a>
                                                <?php }} ?>
                                            </div>


                            </div>

                        </div>

                        <?php } ?>

                    </div>

                </div>
                <?php }?>
                <div class="row no-gutters">

                </div>

            </div>
        </div>
    </div>
</section>
<style type="text/css">
    .myads-btn-wrap>a:hover {
        color: #fff !important;
    }

    .my-ads-wrapper i {
        color: #ffffff !important;
        text-shadow: 2px #b2b2b2;
    }

    .myads-delete {
        border: 1px solid #f3eb07;
        width: 14%;
        border-radius: 0px 0px 5px 5px;
        padding: 5px 5px;
        color: #fff !important;
        text-transform: capitalize;
        display: block;
        margin: 10px auto;
    }

    .view-all {
        width: 84%;
    }

</style>
