// Navbar
document.addEventListener("DOMContentLoaded", function () {
    // Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});


// Reset password Code auto jump focus on typing and on pasting the full code
const codeInputs = document.querySelectorAll('.reset-code-wrapper .form-control');
if (codeInputs) {
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const value = event.target.value;

            if (value.length >= 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });

        input.addEventListener('paste', (event) => {
            const pastedData = event.clipboardData.getData('text');
            const pastedNumbers = pastedData.match(/\d/g);

            if (pastedNumbers && pastedNumbers.length === 4) {
                pastedNumbers.forEach((number, i) => {
                    if (i < codeInputs.length) {
                        codeInputs[i].value = number;
                    }
                });
            }
            event.preventDefault();
        });
    });
}
// international phone number input
const phone_input = document.querySelector("#phone");
if (phone_input) {
    window.intlTelInput(phone_input, {
        initialCountry: "auto",
        geoIpLookup: callback => {
            fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us"));
        },
        utilsScript: "/js/utils.js?1690975972744" // just for formatting/placeholders etc
    });
}

// edit phone
const editPhoneInput = document.querySelector("#edit_phone");
if (editPhoneInput) {
    window.intlTelInput(editPhoneInput, {
        utilsScript: "/js/utils.js?1690975972744" // just for formatting/placeholders etc
    });
}


(function ($) {
    // make main nav submenus works as accordions on mobile
    if ($(window).width() <= 991) {
        $(".has-sub").click(function (e) {
            e.preventDefault();
            var $this = $(this);
            if ($this.next(".submenu").hasClass('active')) {
                $this.next(".submenu").removeClass('active');
                $this.next(".submenu").slideUp(350);

            } else {
                $this.parent().parent().find('li .submenu').removeClass('active');
                $this.parent().parent().find('li .submenu').slideUp(350);
                $this.next(".submenu").toggleClass('active');
                $this.next(".submenu").slideToggle(350);
            }
        });
    }
// Accordion on mobile
    if ($(window).width() <= 991) {
        $('.toggle-mobile-trigger').click(function (e) {
            e.preventDefault()
            $(this).next('.toggle-mobile-content').slideToggle();
            $(this).toggleClass('open')
        })
    }
    // fix modal body overflow
    let modals = document.querySelectorAll('.modal')
    modals.forEach((modal) => {
        modal.addEventListener('shown.bs.modal', function (event) {
            $('body').addClass('modal-open')
        });
    })

    // Cats filter active
    $('.filter-cats button').on('click', function (e) {
        e.preventDefault();
        $('.filter-cats button').removeClass('active');
        $(this).addClass('active')
    })


    // Nice Select
    if ($('select.nice-select')) {
        $('select.nice-select').niceSelect();

    }

    // Copy current link
    const copyIcon = document.getElementById('copyURL');
    if (copyIcon) {
        copyIcon.addEventListener('click', (e) => {
            e.preventDefault()
            navigator.clipboard.writeText(window.location.href);
            copyIcon.insertAdjacentHTML('beforeend', '<div class="copy-notice">Link copied</div>');
            setTimeout(() => {
                document.querySelectorAll('.copy-notice').forEach(el => el.remove());
            }, 3000);
        })
    }


    // SLIDERS //


    // categories slider
    const CatsSlider = new Swiper('.featured-categories .swiper', {

        // loop: true,
        rewind: true,
        speed: 1000,
        spaceBetween: 24,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.featured-categories .swiper-button-next-outside',
            prevEl: '.featured-categories .swiper-button-prev-outside',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            }, // when window width is >= 480px
            480: {
                slidesPerView: 3,
            }, // when window width is >= 640px
            640: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            },
            1400: {
                slidesPerView: 8,
            },
            1600: {
                slidesPerView: 9,
            },
            1920: {
                slidesPerView: 10,
            },
            2560: {
                slidesPerView: 12,
            },
            3200: {
                slidesPerView: 14,
            }


        }
    });

    // brands slider
    const brandsSlider = new Swiper('.shop-by-brands .swiper', {

        // loop: true,
        rewind: true,
        speed: 1000,
        spaceBetween: 24,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.shop-by-brands .swiper-button-next-outside',
            prevEl: '.shop-by-brands .swiper-button-prev-outside',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3,
            }, // when window width is >= 480px
            480: {
                slidesPerView: 3,
            }, // when window width is >= 640px
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 6,
            },
            1400: {
                slidesPerView: 7,
            },
            1600: {
                slidesPerView: 8,
            },
            1920: {
                slidesPerView: 9,
            },
            2560: {
                slidesPerView: 10,
            },
            3200: {
                slidesPerView: 12,
            }

        }
    });

    //products slider
    const myCustomSlider = document.querySelectorAll('.products-slider');
    const mySliderPrev = document.querySelectorAll('.products-slider .swiper-button-prev-outside');
    const mySliderNext = document.querySelectorAll('.products-slider .swiper-button-next-outside');
    for (let i = 0; i < myCustomSlider.length; i++) {
        myCustomSlider[i].classList.add('products-slider-' + i);
        mySliderPrev[i].classList.add('swiper-button-prev-outside-' + i);
        mySliderNext[i].classList.add('swiper-button-next-outside-' + i);
        const productsSlider = new Swiper(`.products-slider-${+i} .swiper`, {
            loop: true,
            speed: 1000,
            rewind: true,
            autoplay: {
                delay: 3000,
            }, // Navigation arrows
            navigation: {
                nextEl: '.products-slider .swiper-button-next-outside-' + i,
                prevEl: '.products-slider .swiper-button-prev-outside-' + i,
            },
            spaceBetween: 24, // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                }, // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                }, // when window width is >= 640px
                768: {
                    slidesPerView: 3,
                    navigation: false,
                },
                1024: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 6,
                },
                1920: {
                    slidesPerView: 7,
                },
                2560: {
                    slidesPerView: 8,
                },
                3200: {
                    slidesPerView: 10,
                },

            }
        });

    }

    // hero slider
    const mainSlider = new Swiper('.header-slider .swiper', {

        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
        },
        effect: "fade",
        pagination: {
            el: '.header-slider .swiper-pagination',
            clickable: true,
        },
    });

    // Single product page slider and thumbnails
    let productThumbs = new Swiper(".product-thumbnails", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let productGallery = new Swiper(".product-main-slides", {
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: '.main-slides-dots',
            clickable: true,
        },

        thumbs: {
            swiper: productThumbs,
        },
    });


    // search box
    $('#search_input').focus(() => {
        $('.recent-search-keywords').addClass('show')
        $('.overlay').addClass('show')
        if ($(window).width() >= 768) {
            $('.header-mini-nav').hide()
        }
    })
    $('#search_input').blur(() => {
        $('.recent-search-keywords').removeClass('show')
        $('.overlay').removeClass('show')
        if ($(window).width() >= 768) {
            $('.header-mini-nav').show()
        }

    })

    // iconsax
    document.addEventListener("DOMContentLoaded", () => {
        init_iconsax();
    });

    function init_iconsax() {
        document.querySelectorAll(".iconsax").forEach(iconsax => {
            var TuT = iconsax.getAttribute("icon-name").toLowerCase().trim();

            fetch("https://glenthemes.github.io/iconsax/icons/" + TuT + ".svg")
                .then(n_n => {
                    return n_n.text();
                })
                .then(n_n => {
                    iconsax.innerHTML = n_n;
                    if (iconsax.querySelectorAll("[http-equiv='Content-Security-Policy']").length) {
                        iconsax.innerHTML = "";
                    }
                });
        });
    }


    // toggle add to fav icon

    $('.add-to-fav').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('added');
        if ($this.hasClass('added')) {
            $this.html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red">\n' + '<path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" fill="red"/>\n' + '</svg>');
        } else {
            $this.html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">\n' + '  <path d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#161616"/>\n' + '</svg>');
        }
    });

    // toggle menu icon
    $('.navbar-toggler').click(function (e) {
        e.preventDefault();
        var $this = $(this);

        if ($this.hasClass('collapsed')) {
            $this.html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +
                '  <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#161616"/>\n' +
                '  <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#161616"/>\n' +
                '  <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#161616"/>\n' +
                '</svg>');
        } else {
            $this.html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n' +
                '  <path d="M17.9998 6.92307L6.92288 18C6.67058 18.2523 6.25212 18.2523 5.99981 18C5.7475 17.7477 5.7475 17.3292 5.99981 17.0769L17.0767 5.99999C17.329 5.74768 17.7475 5.74768 17.9998 5.99999C18.2521 6.2523 18.2521 6.67076 17.9998 6.92307Z" fill="#161616"/>\n' +
                '  <path d="M6.92288 6.00001L17.9998 17.0769C18.2521 17.3292 18.2521 17.7477 17.9998 18C17.7475 18.2523 17.329 18.2523 17.0767 18L5.99981 6.92309C5.7475 6.67078 5.7475 6.25232 5.99981 6.00001C6.25211 5.7477 6.67058 5.7477 6.92288 6.00001Z" fill="#161616"/>\n' +
                '</svg>');
        }
    });

    // Collapsing in search filters

    $('.filter-title').click(function () {
        $(this).next('.filter-content').slideToggle();
        $(this).toggleClass('closed')
    });

    $('.parent-cat').click(function (event) {
        event.stopPropagation();
        $(this).children('.child-cats').first().slideToggle();
        $(this).toggleClass('expand')
    });

    $('.child-cats').click(function (event) {
        event.stopPropagation();
    });

    // Trigger filters on mobile
    let trigger = $('.trigger-filters')
    let html = trigger.html()
    trigger.click(function (e) {
        e.preventDefault()
        $(this).toggleClass('close')
        $('.overlay').toggleClass('show')
        $('.search-filters-wrapper').fadeToggle()
        $('body').toggleClass('overflow-hidden')

        if ( trigger.hasClass('close')) {
            $(this).html('&times;')
        } else {
            $(this).html(html)
        }
    })
    $('.overlay').click(function () {
        $('.overlay').removeClass('show')
        $('.search-filters-wrapper').fadeOut()
        $('body').removeClass('overflow-hidden')
        trigger.removeClass('close')
        trigger.html(html)
    })

    // Toggle Password

    $('body').on('click', '.togglePassword', function (e) {
        e.preventDefault();
        if ($(this).prev('.password-input').attr('type') === 'password') {

            $(this).prev('.password-input').attr("type", "text");
            $(this).addClass('hide')
        } else {
            $(this).prev('.password-input').attr("type", "password");
            $(this).removeClass('hide')
        }
    })

    // bootstrap dropdown on hover
    if ($(window).width() > 768) {
        $(document).ready(function() {
            $('.dropdown').hover(function() {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').addClass('show');
            }, function() {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').removeClass('show');
            });
            // rotate category arrow on hover
            $('.nav-link.has-sub').hover(function() {
                $(this).addClass('show');
            }, function() {
                $(this).removeClass('show');
            });
            // making sure the arrow stays rotated when hover over children
            $('.submenu.dropdown-menu').hover(function() {
                $(this).prev('.nav-link.has-sub').addClass('show');
            }, function() {
                $(this).prev('.nav-link.has-sub').removeClass('show');
            });
        });

    }


// Marquee
    $('.marquee').marquee({

        // Set to false if you want to use jQuery animate method
        allowCss3Support: true,

        // CSS3 easing function
        css3easing: 'linear',


        // Time to wait before starting the animation
        delayBeforeStart: 1000,

        // 'left', 'right', 'up' or 'down'
        direction: 'left',

        // Should the marquee be duplicated to show an effect of continues flow
        duplicated: false,

        // Duration of the animation
        duration: 10000,

        // Space in pixels between the tickers
        gap: 20,

        // On cycle pause the marquee
        pauseOnCycle: false,

        // Pause on hover
        pauseOnHover: true,

        // The marquee is visible initially positioned next to the border towards it will be moving
        startVisible: false

    });
    // animate show go to top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn();
        } else {
            $('.go-top').fadeOut();
        }
    })


})(jQuery);
