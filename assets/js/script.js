import { CountUp } from './countUp.min.js';

const options = {
    suffix: " Kč/h",
    duration: 3
}
function startCountup() {
    var countUp = new CountUp('countUp', 250, options);
    countUp.start();
}
/* observer for counting up*/
const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        startCountup();
    }
}, { threshold: [1] });

observer.observe(document.querySelector("#countUp"));

/* observer for goTopBtn */
const observer2 = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        const x = document.getElementsByClassName("go-top-btn");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
}, { threshold: [1] });

observer2.observe(document.querySelector("#logo"));

window.addEventListener('scroll', function () {
    const x = document.getElementsByClassName("go-top-btn");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
});










