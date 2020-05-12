<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="" />

    <!-- Title -->
    <title>Greenpages</title>

    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/animate.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/default-assets/classy-nav.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/magnific-popup.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/owlcarousel.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/owlcarousel.theme.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/nice-select.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url();?>assets2/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo base_url();?>assets2/style.css">
    <link rel="stylesheet" href="<?php echo base_url();?>assets2/mystyle.css">
</head>

<body>


    <!-- **** Header Area start **** -->

    <!-- START NAVBAR -->
    <!--    <nav class="navbar navbar-expand-md float-panel" data-top="0" data-scroll="200">-->
    <!-- Brand -->
    <!--        <a class="navbar-brand" href="#"><img src="images/logo.png" alt=""></a>-->

    <!-- Toggler/collapsibe Button -->
    <!--
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <i class="fa fa-bars"></i>
        </button>
-->

    <!-- Navbar links -->
    <!--
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="show-me nav-category">
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/seminar.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/help.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/event.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/man.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/sale%20(1).png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/respect.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/loan.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li>
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/sale.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
                <li class="no-border">
                    <div class="circle bg-1" title="Classes">
                        <a href="">
                            <img class="icons_img" src="images/lcons/car.png" alt="" style="height: 29px;margin-top: -5px;margin-left: -3px;">
                        </a>
                    </div>
                </li>
            </ul>
            <ul class="ml-auto navbar-nav">
                <li><a href="#"><i class="fa fa-star star"></i></a></li>
                <li class="post-ad"> <a href="#">
                        <i class="fa fa-plus-circle"></i>post a free ad</a></li>
                <li class="hide-me"><a href="#"></a></li>
                <li class="post-ad"><a href="#">Login</a></li>
            </ul>
        </div>
        </nav>
-->
    <!-- END NAVBAR -->


    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="<?php echo base_url();?>"><img src="<?php echo base_url();?>assets2/images/logo.png" alt=""></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="ml-auto navbar-nav">
                    <li><a href="#"><i class="fa fa-star star"></i></a></li>
                    <li class="post-ad">
                        <?php if($this->session->userdata('login_id')!=''){?>
                        <a href="<?php echo base_url('ad/postad');?>">
                            <?php }if($this->session->userdata('login_id')==''){?>
                            <a href="<?php echo base_url('login');?>">
                                <?php } ?>
                                <i class="fa fa-plus-circle"></i>post a free ad
                            </a>
                    </li>
                    <?php if($this->session->userdata('login_id')==''){?>
                    <li class="post-ad"><a href="<?php echo base_url('login');?>">Login</a></li>
                    <?php }if($this->session->userdata('login_id')!=''){?>
                    <li class="post-ad"><a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Profile <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="<?php echo base_url('profile');?>">My Profile</a>
                            <a class="dropdown-item" href="<?php echo base_url('login/user_logout');?>">Sign out</a>
                        </div>
                    </li>

                    <?php } ?>
                </ul>
            </div>
        </nav>

    </header>
