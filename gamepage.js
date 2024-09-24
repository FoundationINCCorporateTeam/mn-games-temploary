// Function to open a secure browser and load the game URL
function openSecureBrowser(url) {
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
                        z-index: 1; /* Game content below overlay */
                    }
                    a.panic {
                        background: linear-gradient(to right, #ff0000, #ff0000);
                        background-color: #ff0000;
                        color: #fff;
                        font-family: Trebuchet MS;
                        font-size: 18px;
                        font-weight: 800;
                        text-decoration: none;
                        padding: 14px 15px;
                        border-radius: 10px;
                        display: inline-block;
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        z-index: 20; /* Ensure panic button is above the overlay */
                        cursor: grab;
                    }
                    /* Fullscreen overlay image */
                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background-image: url('https://t4.ftcdn.net/jpg/03/16/68/69/360_F_316686992_OvCTP1wfazJhBeMrBBDUGooufSmj2O8G.jpg'); /* Change to your image URL */
                        background-size: cover;
                        background-position: center;
                        z-index: 9999; /* Always on top */
                    }
                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <iframe src="${url}"></iframe>
                    <div id="fullscreenOverlay" class="overlay"></div> <!-- Always visible overlay -->
                    <a href="https://osseo.schoology.com" class="panic" id="panicButton">Panic Button</a>
                </div>

                <script>
                    const overlay = document.getElementById('fullscreenOverlay');
                    const panicButton = document.getElementById('panicButton');
                    let isDragging = false;
                    let startX, startY, initialX, initialY;

                    // Dragging functionality for the Panic Button
                    panicButton.addEventListener('mousedown', function(e) {
                        isDragging = true;
                        startX = e.clientX;
                        startY = e.clientY;
                        initialX = panicButton.offsetLeft;
                        initialY = panicButton.offsetTop;
                        panicButton.style.cursor = 'grabbing';
                    });

                    document.addEventListener('mousemove', function(e) {
                        if (isDragging) {
                            e.preventDefault(); // Prevent selection or other actions while dragging
                            const deltaX = e.clientX - startX;
                            const deltaY = e.clientY - startY;
                            panicButton.style.left = initialX + deltaX + 'px';
                            panicButton.style.top = initialY + deltaY + 'px';
                            panicButton.style.position = 'absolute';
                        }
                    });

                    document.addEventListener('mouseup', function() {
                        if (isDragging) {
                            isDragging = false;
                            panicButton.style.cursor = 'grab';
                        }
                    });

                    // Prevent click action during dragging
                    panicButton.addEventListener('click', function(e) {
                        if (isDragging) {
                            e.preventDefault(); // Stop any action when dragging
                        }
                    });
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
    var urls2 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy slope-2/index.html';
    openSecureBrowser(urls2);
}
function openSecureBrowser3() {
    var urls3 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy slope/index.html';
    openSecureBrowser(urls3);
}
function openSecureBrowser4() {
    var urls4 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy stickman-hook/index.html';
    openSecureBrowser(urls4);
}
function openSecureBrowser5() {
    var urls5 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy worlds-hardest-game-2/index.html';
    openSecureBrowser(urls5);
}
function openSecureBrowser6() {
    var urls6 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy retro-bowl/index.html';
    openSecureBrowser(urls6);
}
function openSecureBrowser7() {
    var urls7 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy n-gon/index.html';
    openSecureBrowser(urls7);
}
function openSecureBrowser8() {
    var urls8 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy motox3m/index.html';
    openSecureBrowser(urls8);
}
function openSecureBrowser9() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam 3kh0-assets fixy death-run-3d/index.html';
    openSecureBrowser(urls9);
}
