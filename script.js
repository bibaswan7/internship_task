$(document).ready(function () {
    $('.menu-expand').hide()
    $('.outer').click(function () {
        $('.menu-expand').show()
    })
    $('.close-btn-container').click(function () {
        $('.menu-expand').hide()
    })




    setTimeout(function () {
        $(".image-section").addClass("slidedown");
        // $(".image-section").addClass(".img-slider");
    }, 3000);

    $('.img-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 800,
        prevArrow: '',
        nextArrow: '',
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        slidesToScroll: 1        
    });

    $('.img-slider1').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '',
        nextArrow: '',
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
    });

    $('.text-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        // fade:true,
        speed: 800,
        prevArrow: '',
        nextArrow: '',
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        adaptiveHeight: true,

    });

    $('.prev-button').click(function () {
        $('.img-slider1').slick('slickPrev');
    });

    $('.next-button').click(function () {
        $('.img-slider1').slick('slickNext');
    });

    $('.intro-title-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        fade:true,
        speed: 800,
        prevArrow: '',
        nextArrow: '',
        draggable: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // dots: true,
        adaptiveHeight: true,
        infinite:true

    });

})

let progressBar = document.querySelectorAll(".circular");
let textCon = document.querySelectorAll(".circular h2");

let progressValue = [0, 0, 0, 0];
let progressEndValue = 80;
let speed = 10;
let skillsPercent = [100, 85, 75, 80];
let skillsPercentInRad = skillsPercent.map(item => item * 3.6)

let colors = ['rgb(0, 183, 255)', 'rgb(253,186,4)', 'rgb(237,104,124)', 'rgb(26,188,156)'];

let setfxn = setInterval(() => {
    if (progressValue.every((value, count) => value === skillsPercentInRad[count])) {
        console.log("cleared")
        clearInterval(setfxn);
    }
    else {
        progressValue = progressValue.map((item, count) => {
            textCon[count].textContent = `${(item / 3.6).toFixed(0)}%`
            if (item !== skillsPercentInRad[count]) {
                return item + 1;
            }
            else {
                return item;
            }
        })
        progressBar.forEach((item, count) => {
            textCon[count].style.color = colors[count]
            item.style.background = `conic-gradient(${colors[count]} ${progressValue[count]}deg, white ${progressValue[count]}deg)`;
        })
    }
}, speed)

AOS.init();


