<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeWave</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="icon" type="image/x-icon" href="assets/images/logo/fav-icon.png">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responcive.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
</head>

<body class="<?php echo basename($_SERVER['PHP_SELF'], '.php'); ?>">
    <div class="cursor1"></div>
    <div class="cursor2"></div>
    <!-- LOADER -->

    <div class="loader-wrap" id="cwLoader">
        <div class="grid" id="grid"></div>
        <div class="glow glow-1" id="g1"></div>
        <div class="glow glow-2" id="g2"></div>
        <div class="glow glow-3"></div>
        <div class="particles" id="particles"></div>
        <div class="scanline"></div>

        <div class="content">
            <div class="orbit">
                <div class="orbit-ring ring-1" id="r1">
                    <div class="ring-dot"></div>
                </div>
                <div class="orbit-ring ring-2" id="r2">
                    <div class="ring-dot"></div>
                </div>
                <div class="orbit-ring ring-3" id="r3">
                    <div class="ring-dot"></div>
                </div>
                <div class="core"></div>
            </div>

            <h1 class="logo">
                <span class="logo-char">C</span><span class="logo-char">O</span><span class="logo-char">D</span><span class="logo-char">E</span>&nbsp;<em><span class="logo-char">W</span><span class="logo-char">A</span><span class="logo-char">V</span><span class="logo-char">E</span></em>
            </h1>

            <p class="tagline" id="tagline">PREMIUM DIGITAL EXPERIENCE</p>
            <p class="status" id="status">Initializing Experience</p>

            <div class="waves">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </div>
    <div class="back-to-top">

        <svg class="progress-ring" width="60" height="60">
            <circle class="progress-bg" cx="30" cy="30" r="26"></circle>
            <circle class="progress-circle" cx="30" cy="30" r="26"></circle>
        </svg>

        <i class="fas fa-arrow-up"></i>

    </div>
    <div class="wrapper">
        <!-- HEADER START -->
        <header class="header">
            <div class="container">
                <div class="row align-items-center gx-0">
                    <div class="col-lg-3 col-md-6 col-6">
                        <div class="site-logo">
                            <a href="./">
                                <img src="assets/images/logo/logo.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="header_menu">
                            <ul>
                                <li><a href="./" class="">Home</a></li>
                                <li><a href="about.php" class="">About Us</a></li>
                                <li><a href="services.php" class="">Services</a></li>
                                <li><a href="solutions.php" class="">Solutions</a></li>
                                <li><a href="work.php" class="">Our Work</a></li>
                                <li><a href="expertise.php" class="">Expertise</a></li>
                                <li><a href="contact.php" class="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6">
                        <!-- Ham Button -->
                        <div class="ham-menu-btn d-lg-none d-flex justify-content-end align-items-center">
                            <button class="hamburger" id="hamburger" aria-label="Toggle Menu" aria-expanded="false">
                                <span class="ham-line line-1"></span>
                                <span class="ham-line line-2"></span>
                                <span class="ham-line line-3"></span>
                            </button>
                        </div>

                        <!-- Desktop Button (already exists, keep as is) -->
                        <div class="header-btn d-none d-lg-block text-right">
                            <a href="contact.php" class="hover-btn">
                                <span class="btn-text-wrap">
                                    <span class="btn-text top">Work with us</span>
                                    <span class="btn-text bottom">Work with us</span>
                                </span>
                                <span class="btn-icon">
                                    <i class="far fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- HEADER END -->



        <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>

        <nav class="mobile-nav" id="mobileNav">
            <!-- Nav Header -->
            <div class="mobile-nav-header">
                <div class="mobile-logo">
                    <a href="./">
                        <img src="assets/images/logo/logo.png" alt="CodeWave">
                    </a>
                </div>
                <button class="mobile-nav-close" id="mobileNavClose" aria-label="Close Menu">
                    <!-- <i class="far fa-times"></i> -->
                    <i class="fal fa-times"></i>
                </button>
            </div>

            <!-- Nav Links -->
            <ul class="mobile-nav-links">
                <li class="mobile-nav-item" style="--i:1">
                    <a href="./" class="mobile-nav-link">
                        <span class="nav-num">01</span>
                        <span class="nav-text">Home</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
                <li class="mobile-nav-item" style="--i:2">
                    <a href="about.php" class="mobile-nav-link">
                        <span class="nav-num">02</span>
                        <span class="nav-text">About Us</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
                <li class="mobile-nav-item" style="--i:3">
                    <a href="services.php" class="mobile-nav-link">
                        <span class="nav-num">03</span>
                        <span class="nav-text">Services</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
                <li class="mobile-nav-item" style="--i:4">
                    <a href="javascript:void(0);" class="mobile-nav-link">
                        <span class="nav-num">04</span>
                        <span class="nav-text">Solutions</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
                <li class="mobile-nav-item" style="--i:5">
                    <a href="work.php" class="mobile-nav-link">
                        <span class="nav-num">05</span>
                        <span class="nav-text">Our Work</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
                <li class="mobile-nav-item" style="--i:6">
                    <a href="javascript:void(0);" class="mobile-nav-link">
                        <span class="nav-num">06</span>
                        <span class="nav-text">Expertise</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
                <li class="mobile-nav-item" style="--i:7">
                    <a href="contact.php" class="mobile-nav-link">
                        <span class="nav-num">07</span>
                        <span class="nav-text">Contact</span>
                        <i class="fal fa-arrow-right"></i>
                    </a>
                </li>
            </ul>

            <!-- Nav Footer -->
            <div class="mobile-nav-footer">
                <a href="contact.php" class="hover-btn mobile-cta">
                    <span class="btn-text-wrap">
                        <span class="btn-text top">Work with us</span>
                        <span class="btn-text bottom">Work with us</span>
                    </span>
                    <span class="btn-icon">
                        <i class="far fa-arrow-right"></i>
                    </span>
                </a>
                <div class="mobile-socials">
                    <a href="javascript:;"><img src="assets/images/icon/facebook.svg" alt="Facebook"></a>
                    <a href="javascript:;"><img src="assets/images/icon/twiter.svg" alt="Twitter"></a>
                    <a href="javascript:;"><img src="assets/images/icon/insta.svg" alt="Instagram"></a>
                    <a href="javascript:;"><img src="assets/images/icon/youtube.svg" alt="YouTube"></a>
                </div>
            </div>

            <!-- Decorative Glow -->
            <div class="mobile-nav-glow"></div>
        </nav>