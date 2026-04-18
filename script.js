// script.js
const audio = document.getElementById('bg-audio');
const toggleMusicBtn = document.getElementById('toggle-music');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-content');

// Selection
const landingScreen = document.getElementById('landing-screen');
const mainContent = document.getElementById('main-content');
const mainNav = document.getElementById('main-nav');
const serverInfo = document.getElementById('server-info');
const selectionText = document.getElementById('selection-text');

function initializeSite(edition) {
    landingScreen.classList.add('fade-out');
    setTimeout(() => {
        landingScreen.classList.add('hidden');
        landingScreen.classList.remove('fade-out');
        mainContent.classList.remove('hidden');
        mainNav.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        setTimeout(() => mainContent.classList.remove('fade-in'), 400);
    }, 400);
    
    audio.play();
    toggleMusicBtn.textContent = 'Pause';

    if (edition === 'java') {
        selectionText.textContent = "You're playing on Java Edition (PC).";
        serverInfo.innerHTML = `
            <h2 class="text-sm uppercase tracking-widest text-neutral-500 mb-2">Java Edition Server</h2>
            <code class="text-3xl font-mono text-white block mb-2">Hell_Bro-Ip6u.aternos.me:13468</code>
            <p class="text-neutral-400 mb-6">Version: 1.20.1 Fabric</p>
            <button id="copy-ip" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all">Copy IP</button>
            <div class="changelog mt-6">
                <h3 class="text-white font-semibold mb-2">What's New (Java)</h3>
                <ul class="list-disc list-inside text-neutral-400">
                    <li>Optimizations improved</li>
                    <li>Voice Chat added</li>
                </ul>
            </div>
        `;
        document.getElementById('copy-ip').addEventListener('click', () => { navigator.clipboard.writeText("Hell_Bro-Ip6u.aternos.me:13468"); alert("IP copied!"); });
    } else {
        selectionText.textContent = "You're playing on Bedrock Edition (Mobile).";
        serverInfo.innerHTML = `
            <h2 class="text-sm uppercase tracking-widest text-neutral-500 mb-2">Bedrock Edition Server</h2>
            <code class="text-3xl font-mono text-white block mb-2">Hell_Bro.aternos.me</code>
            <p class="text-neutral-400">Port: 42747</p>
            <p class="text-neutral-400 mb-6">Version: 1.20.80.05</p>
            <a href="https://add.aternos.org/Hell_Bro" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all inline-block">Add to Server List</a>
            <div class="mt-4 text-blue-400 font-bold">New server version</div>
        `;
        // Hide Resource Packs tab for Bedrock
        const resourcePacksTab = document.querySelector('[data-target="resource-packs"]');
        if (resourcePacksTab) resourcePacksTab.style.display = 'none';
    }
}

document.getElementById('select-java').addEventListener('click', () => initializeSite('java'));
document.getElementById('select-bedrock').addEventListener('click', () => initializeSite('bedrock'));

// Toggle Music
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
    document.getElementById('home').classList.add('active');

    // Back Button
    document.getElementById('go-back').addEventListener('click', () => {
        mainContent.classList.add('fade-out');
        mainNav.classList.add('fade-out');
        setTimeout(() => {
            mainContent.classList.add('hidden');
            mainNav.classList.add('hidden');
            mainContent.classList.remove('fade-out');
            mainNav.classList.remove('fade-out');
            
            landingScreen.classList.remove('hidden');
            landingScreen.classList.add('fade-in');
            setTimeout(() => {
                landingScreen.classList.remove('fade-in');
            }, 400);
        }, 400);
    });
