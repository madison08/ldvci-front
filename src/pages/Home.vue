<template>
    <div>

        <!-- ...:::: Start Banner & Hero Area Section:::... -->
    <div class="banner-and-hero-area-section">
        <div class="container">
            <div class="row flex-column-reverse flex-lg-row">
                <div class="col-lg-4">
                    <div class="banner-sidebar mt-30">
                        <!-- Start Banner Single -->
                        <div class="banner-single mb-30">
                            <a href="product-details-default.html" class="banner-img-link">
                                <img class="banner-img" src="assets/images/banner_images/aments_banner_01.jpg" alt="">
                            </a>
                            <div class="banner-content">
                                <span class="banner-text-tiny">Car Wheel</span>
                                <h3 class="banner-text-large">30% Off</h3>
                                <a href="product-details-default.html" class="banner-link">Shop Now</a>
                            </div>
                        </div> <!-- End Banner Single -->
                        <!-- Start Banner Single -->
                        <div class="banner-single">
                            <a href="product-details-default.html" class="banner-img-link">
                                <img class="banner-img" src="assets/images/banner_images/aments_banner_02.jpg" alt="">
                            </a>
                            <div class="banner-content">
                                <span class="banner-text-tiny">Car Vails</span>
                                <h3 class="banner-text-large">40% Off</h3>
                                <a href="product-details-default.html" class="banner-link">Shop Now</a>
                            </div>
                        </div> <!-- End Banner Single -->
                    </div>
                </div>
                <div class="col-lg-8">
                    <!-- ...:::: Start Hero Area Section:::... -->
                    <!-- <div class="hero-area-wrapper hero-slider-dots fix-slider-dots"> -->
                        <!-- <slick
                            ref="slick"
                            :options="slickOptions"
                            @afterChange="handleAfterChange"
                            @beforeChange="handleBeforeChange"
                            @breakpoint="handleBreakpoint"
                            @destroy="handleDestroy"
                            @edge="handleEdge"
                            @init="handleInit"
                            @reInit="handleReInit"
                            @setPosition="handleSetPosition"
                            @swipe="handleSwipe"
                            @lazyLoaded="handleLazyLoaded"
                            @lazyLoadError="handleLazeLoadError"> -->

                                <VueSlickCarousel :arrows="true" :dots="true">

                        <!-- Start Hero Slider Single -->
                        <div class="hero-area-single">
                            <div class="hero-area-bg-2">
                                <img class="hero-img-2" src="assets/images/slider_images/home_2/aments_home_2_slider_1.jpg" alt="">
                            </div>
                            <div class="hero-content hero-content-2">
                                <div class="row">
                                    <div class="col-10 col-md-8 col-xl-6 offset-1">
                                        <h5>World Best Quality</h5>
                                        <h2>Car Parts</h2>
                                        <p class="hero-text">Lorem ipsum dolor sit amet consectet</p>
                                        <a href="product-details-default.html" class="hero-button">Shopping Now</a>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- End Hero Slider Single -->
                        <!-- Start Hero Slider Single -->
                        <div class="hero-area-single">
                            <div class="hero-area-bg-2">
                                <img class="hero-img-2" src="assets/images/slider_images/home_2/aments_home_2_slider_2.jpg" alt="">
                            </div>
                            <div class="hero-content hero-content-2">
                                <div class="row">
                                    <div class="col-10 col-md-8 col-xl-6 offset-1">
                                        <h5>World Best Quality</h5>
                                        <h2>Car Parts</h2>
                                        <p>Lorem ipsum dolor sit amet consectet</p>
                                        <a href="product-details-default.html" class="hero-button">Shopping Now</a>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- End Hero Slider Single -->
                    <!-- </div> ...:::: End Hero Area Section:::... -->

  <!-- <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a> -->
<!-- </slick> -->
                                </VueSlickCarousel>
                </div>
            </div>
        </div>
    </div> <!-- ...:::: End Banner & Hero Area Section:::... -->

    <!-- ...:::: Start Product Tab Section:::... -->
    <div class="product-tab-section section-top-gap-100">
        <!-- Start Section Content -->
        <div class="section-content-gap">
            <div class="container">
                <div class="row">
                    <div class="section-content d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column">
                        <h3 class="section-title">New Arrivals</h3>
                        <ul class="tablist nav product-tab-btn">
                            <li><a class="nav-link active" data-toggle="tab" href="#car_and_drive">Car & Drive </a></li>
                            <li><a class="nav-link" data-toggle="tab" href="#motorcycle">Motorcycle</a></li>
                            <li><a class="nav-link" data-toggle="tab" href="#truck_drive">Truck & Drive</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> <!-- End Section Content -->

        <!-- Start Tab Wrapper -->
        <div class="product-tab-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tab-content tab-animate-zoom">
                            <div class="tab-pane show active" id="car_and_drive">
                                <div class="product-default-slider product-default-slider-4grids-1row">
                                    <!-- <slick
                            ref="slick"
                            :options="slickOptionsProductSlides"
                            @afterChange="handleAfterChange"
                            @beforeChange="handleBeforeChange"
                            @breakpoint="handleBreakpoint"
                            @destroy="handleDestroy"
                            @edge="handleEdge"
                            @init="handleInit"
                            @reInit="handleReInit"
                            @setPosition="handleSetPosition"
                            @swipe="handleSwipe"
                            @lazyLoaded="handleLazyLoaded"
                            @lazyLoadError="handleLazeLoadError"> -->
                                    
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- </slick> -->
                                </div>
                                <!-- llllllllll -->
                            </div>
                            <div class="tab-pane" id="motorcycle">
                                <div class="product-default-slider product-default-slider-4grids-1row">
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                </div>
                            </div>
                            <div class="tab-pane" id="truck_drive">
                                <div class="product-default-slider product-default-slider-4grids-1row">
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End Catagory Wrapper -->

    </div> <!-- ...:::: Start Product Tab Section:::... -->

    <!-- ...:::: Start Product Catagory Section:::... -->
    <div class="product-catagory-section section-top-gap-100">
        <!-- Start Section Content -->
        <div class="section-content-gap">
            <div class="container">
                <div class="row">
                    <div class="section-content">
                        <h3 class="section-title">Popular Categories</h3>
                    </div>
                </div>
            </div>
        </div> <!-- End Section Content -->

        <!-- Start Catagory Wrapper -->
        <div class="product-catagory-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_01.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_02.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_03.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_04.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_05.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_06.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_07.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                        <!-- Start Product Catagory Single -->
                        <a href="product-details-default.html" class="product-catagory-single">
                            <div class="product-catagory-img">
                                <img src="assets/images/categories_images/aments_categories_08.jpg" alt="">
                            </div>
                            <div class="product-catagory-content">
                                <h5 class="product-catagory-title">Parts Box</h5>
                                <span class="product-catagory-items">(20 Items)</span>
                            </div>
                        </a> <!-- End Product Catagory Single -->
                    </div>
                </div>
            </div>
        </div> <!-- End Catagory Wrapper -->
    </div> <!-- ...:::: End Product Catagory Section:::... -->

    <!-- ...:::: Start Product Tab Section:::... -->
    <div class="product-tab-section section-top-gap-100">
        <!-- Start Section Content -->
        <div class="section-content-gap">
            <div class="container">
                <div class="row">
                    <div class="section-content d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column">
                        <h3 class="section-title">Hot Deals</h3>
                        <ul class="tablist nav product-tab-btn">
                            <li><a class="nav-link active" data-toggle="tab" href="#drive_and_car">Drive & Car </a></li>
                            <li><a class="nav-link" data-toggle="tab" href="#bike">Bikes</a></li>
                            <li><a class="nav-link" data-toggle="tab" href="#drive_trucks">Drive & Truck</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> <!-- End Section Content -->

        <!-- Start Tab Wrapper -->
        <div class="product-tab-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tab-content tab-animate-zoom">
                            <div class="tab-pane" id="drive_and_car">
                                <div class="product-default-slider product-default-slider-4grids-1row">
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                </div>
                            </div>
                            <div class="tab-pane" id="bike">
                                <div class="product-default-slider product-default-slider-4grids-1row">
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                </div>
                            </div>
                            <div class="tab-pane show active" id="drive_trucks">
                                <div class="product-default-slider product-default-slider-4grids-1row">
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_2.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_1.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_4.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_3.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_6.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_5.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_8.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                    <!-- Start Product Defautlt Single -->
                                    <div class="product-default-single border-around">
                                        <div class="product-img-warp">
                                            <a href="product-details-default.html" class="product-default-img-link">
                                                <img src="assets/images/products_images/aments_products_image_7.jpg" alt="" class="product-default-img img-fluid">
                                            </a>
                                            <div class="product-action-icon-link">
                                                <ul>
                                                    <li><a href="wishlist.html"><i class="icon-heart"></i></a></li>
                                                    <li><a href="compare.html"><i class="icon-repeat"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i class="icon-eye"></i></a></li>
                                                    <li><a href="#" data-toggle="modal" data-target="#modalAddcart"><i class="icon-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="product-default-content">
                                            <h6 class="product-default-link"><a href="product-details-default.html">New Balance Fresh Foam Kaymin Car Purts</a></h6>
                                            <span class="product-default-price"><del class="product-default-price-off">$30.12</del> $25.12</span>
                                        </div>
                                    </div> <!-- End Product Defautlt Single -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End Catagory Wrapper -->
    </div> <!-- ...:::: End Product Tab Section:::... -->

    <!-- ...:::: Start Company Logo Section:::... -->
    <div class="company-logo-section section-top-gap-100">
        <!-- Start Company Logo Wrapper -->
        <div class="company-logo-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="company-logo-slider">
                            <!-- Start Company logo Single -->
                            <div class="company-logo-single">
                                <img src="assets/images/company_logo/company_logo_1.png" alt="" class="img-fluid company-logo-image">
                            </div> <!-- End Company logo Single -->
                            <!-- Start Company logo Single -->
                            <div class="company-logo-single">
                                <img src="assets/images/company_logo/company_logo_2.png" alt="" class="img-fluid company-logo-image">
                            </div> <!-- End Company logo Single -->
                            <!-- Start Company logo Single -->
                            <div class="company-logo-single">
                                <img src="assets/images/company_logo/company_logo_3.png" alt="" class="img-fluid company-logo-image">
                            </div> <!-- End Company logo Single -->
                            <!-- Start Company logo Single -->
                            <div class="company-logo-single">
                                <img src="assets/images/company_logo/company_logo_4.png" alt="" class="img-fluid company-logo-image">
                            </div> <!-- End Company logo Single -->
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End Company Logo Wrapper -->
    </div> <!-- ...:::: End Company Logo Section:::... -->

    <!-- ...:::: Start Blog Feed Section:::... -->
    <div class="blog-feed-section section-top-gap-100">
        <!-- Start Section Content -->
        <div class="section-content-gap">
            <div class="container">
                <div class="row">
                    <div class="section-content">
                        <h3 class="section-title">Latest News</h3>
                    </div>
                </div>
            </div>
        </div> <!-- End Section Content -->

        <!-- Start Blog Feed Wrapper -->
        <div class="blog-feed-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <!-- Start Blog Feed Single -->
                        <div class="blog-feed-single">
                            <a href="blog-single-sidebar-left.html" class="blog-feed-img-link">
                                <img src="assets/images/blog_images/aments_blog_01.jpg" alt="" class="blog-feed-img">
                            </a>
                            <div class="blog-feed-content">
                                <div class="blog-feed-post-meta">
                                    <span>By:</span>
                                    <a href="" class="blog-feed-post-meta-author">Admin</a> -
                                    <a href="" class="blog-feed-post-meta-date">Sep 14, 2020</a>
                                </div>
                                <h5 class="blog-feed-link"><a href="blog-single-sidebar-left.html">Lorem ipsum dolor amet cons adipisicing elit</a></h5>
                            </div>
                        </div><!-- End Blog Feed Single -->
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <!-- Start Blog Feed Single -->
                        <div class="blog-feed-single">
                            <a href="blog-single-sidebar-left.html" class="blog-feed-img-link">
                                <img src="assets/images/blog_images/aments_blog_02.jpg" alt="" class="blog-feed-img">
                            </a>
                            <div class="blog-feed-content">
                                <div class="blog-feed-post-meta">
                                    <span>By:</span>
                                    <a href="" class="blog-feed-post-meta-author">Admin</a> -
                                    <a href="" class="blog-feed-post-meta-date">Sep 14, 2020</a>
                                </div>
                                <h5 class="blog-feed-link"><a href="blog-single-sidebar-left.html">Lorem ipsum dolor amet cons adipisicing elit</a></h5>
                            </div>
                        </div><!-- End Blog Feed Single -->
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <!-- Start Blog Feed Single -->
                        <div class="blog-feed-single">
                            <a href="blog-single-sidebar-left.html" class="blog-feed-img-link">
                                <img src="assets/images/blog_images/aments_blog_03.jpg" alt="" class="blog-feed-img">
                            </a>
                            <div class="blog-feed-content">
                                <div class="blog-feed-post-meta">
                                    <span>By:</span>
                                    <a href="" class="blog-feed-post-meta-author">Admin</a> -
                                    <a href="" class="blog-feed-post-meta-date">Sep 14, 2020</a>
                                </div>
                                <h5 class="blog-feed-link"><a href="blog-single-sidebar-left.html">Lorem ipsum dolor amet cons adipisicing elit</a></h5>
                            </div>
                        </div><!-- End Blog Feed Single -->
                    </div>
                </div>
            </div>
        </div>


        <!-- <slick
  ref="slick"
  :options="slickOptions"
  @afterChange="handleAfterChange"
  @beforeChange="handleBeforeChange"
  @breakpoint="handleBreakpoint"
  @destroy="handleDestroy"
  @edge="handleEdge"
  @init="handleInit"
  @reInit="handleReInit"
  @setPosition="handleSetPosition"
  @swipe="handleSwipe"
  @lazyLoaded="handleLazyLoaded"
  @lazyLoadError="handleLazeLoadError">
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
</slick> -->


    </div> <!-- ...:::: End Blog Feed Section:::... -->

    </div>
</template>
<script>
// import Slick from 'vue-slick';
// import 'slick-carousel/slick/slick.css';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

// import $ from 'jquery'
    export default{
        name: 'Home',
        components: {
            // Slick,
            VueSlickCarousel
        },

        data(){
            return{
                // slickOptions:{
                //     slidesToShow: 1,
                //     arrows: true,
                //     dots: true
                // },
                // slickOptionsProductSlides:{
                //     slidesToShow: 4
                // }
            }
        },
        
        mounted(){
            console.log('heyy bro')

    /******************************
     * Hero Slider - [Single Grid]
     *****************************/
    // $('.hero-area-wrapper').slick({
    //     arrows: false,
    //     fade: true,
    //     dots: true,
    //     easing: 'linear',
    //     speed: 2000,
    // });

        }
    }
</script>
<style scoped>

</style>