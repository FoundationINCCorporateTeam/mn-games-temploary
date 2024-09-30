// Function to open a secure browser and load the game URL
function openSecureBrowser(url) {
    const panicPosition = localStorage.getItem('panicPosition') || 'top-right'; // Default position
    const panicURL = localStorage.getItem('panicURL') || 'https://osseo.schoology.com'; // Default URL

    var newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.statically.io/gh/FoundationINCCorporateTeam/mn-games-temploary/main/gamepagestyles.css">
                <title>MN Games Secure Browser</title>
                <style>
                    body {
                        margin: 0;
                        overflow: hidden;
                    }
                    .iframe-container {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }
                    iframe {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border: none;
                        z-index: 1; /* Game content below panic button */
                    }
                    a.panic {
                        background: linear-gradient(to right, #ff0000, #ff0000);
                        background-color: #ff0000;
                        color: #fff;
                        font-family: Trebuchet MS;
                        font-size: 16px; /* Slightly smaller font */
                        font-weight: 800;
                        text-decoration: none;
                        padding: 10px 12px; /* Reduced padding */
                        border-radius: 10px;
                        display: inline-block;
                        position: absolute; /* Keep absolute positioning for flexibility */
                        z-index: 20; /* Ensure panic button is above everything */
                        cursor: grab; /* Change cursor style for better UX */
                        width: 100px; /* Set a fixed width */
                        height: 30px; /* Set a fixed height */
                        line-height: 30px; /* Center the text vertically */
                        text-align: center; /* Center the text horizontally */
                    }
                    .top-right { top: 10px; right: 10px; }
                    .top-left { top: 10px; left: 10px; }
                    .bottom-right { bottom: 10px; right: 10px; }
                    .bottom-left { bottom: 10px; left: 10px; }
                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <iframe src="${url}"></iframe>
                    <a href="${panicURL}" class="panic ${panicPosition}">Panic Button</a>
                </div>

                <script>
                    // Insert a value into localStorage when the page is visited
                    localStorage.setItem('gameVisit', new Date().toISOString()); // Store current timestamp
                </script>
            </body>
        </html>
    `);
    newWindow.document.close();
}

// Functions to load different game URLs
function openSecureBrowser1() {
    var urls1 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%201v1lol/index.html';
    openSecureBrowser(urls1);
}
function openSecureBrowser2() {
    var urls2 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20slope-2/index.html';
    openSecureBrowser(urls2);
}
function openSecureBrowser3() {
    var urls3 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20slope/index.html';
    openSecureBrowser(urls3);
}
function openSecureBrowser4() {
    var urls4 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20stickman-hook/index.html';
    openSecureBrowser(urls4);
}
function openSecureBrowser5() {
    var urls5 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20worlds-hardest-game-2/index.html';
    openSecureBrowser(urls5);
}
function openSecureBrowser6() {
    var urls6 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20retro-bowl/index.html';
    openSecureBrowser(urls6);
}
function openSecureBrowser7() {
    var urls7 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20n-gon/index.html';
    openSecureBrowser(urls7);
}
function openSecureBrowser8() {
    var urls8 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20motox3m/index.html';
    openSecureBrowser(urls8);
}
function openSecureBrowser9() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20death-run-3d/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser10() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20basket-random/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser11() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20bitlife/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser12() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20flappy-bird/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser13() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20rooftop-snipers/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser14() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20sand-game/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser15() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%20selenite-old%20main%20monkeymart/index.html';
    openSecureBrowser(urls9);
}

// Function to apply settings from the popup
function applySettings() {
    const panicPosition = document.getElementById('panicPosition').value;
    const panicURL = document.getElementById('panicURL').value;
    localStorage.setItem('panicPosition', panicPosition);
    localStorage.setItem('panicURL', panicURL);
    toggleSettings(); // Close the settings popup
}
