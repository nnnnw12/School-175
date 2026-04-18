// script.js
const audio = document.getElementById('bg-audio');
const toggleMusicBtn = document.getElementById('toggle-music');
const startOverlay = document.getElementById('start-overlay');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-content');

// Music
startOverlay.addEventListener('click', () => {
    startOverlay.style.display = 'none';
    audio.play();
    toggleMusicBtn.textContent = 'Pause';
});

toggleMusicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        toggleMusicBtn.textContent = 'Pause';
    } else {
        audio.pause();
        toggleMusicBtn.textContent = 'Play';
    }
});

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(link.getAttribute('data-target')).classList.add('active');
    });
});

// Show home by default
document.getElementById('home').classList.add('active');

    // Copy IP
    document.getElementById('copy-ip').addEventListener('click', () => {
        navigator.clipboard.writeText("Hell_Bro-Ip6u.aternos.me:13468");
        alert("IP copied!");
    });
