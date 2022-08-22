// <!-- typed js effect -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development.", "web designing.", "backend development.", "web development."],
    loop: true,
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 500,
});


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 900,
    reset: true
});


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 150 });
srtop.reveal('.skills .container .bar', { delay: 350 });