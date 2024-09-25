// Function to open a secure browser and load the game URL
function openSecureBrowser(url, panicPosition, panicURL) {
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
                        font-size: 18px;
                        font-weight: 800;
                        text-decoration: none;
                        padding: 14px 15px;
                        border-radius: 10px;
                        display: inline-block;
                        position: absolute; /* Keep absolute positioning for flexibility */
                        z-index: 20; /* Ensure panic button is above everything */
                        cursor: pointer; /* Change cursor style for better UX */
                        width: 150px; /* Set a fixed width */
                        height: 50px; /* Set a fixed height */
                        line-height: 50px; /* Center the text vertically */
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
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls1, panicPosition, panicURL);
}
function openSecureBrowser2() {
    var urls2 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20slope-2/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls2, panicPosition, panicURL);
}
function openSecureBrowser3() {
    var urls3 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20slope/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls3, panicPosition, panicURL);
}
function openSecureBrowser4() {
    var urls4 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20stickman-hook/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls4, panicPosition, panicURL);
}
function openSecureBrowser5() {
    var urls5 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20worlds-hardest-game-2/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls5, panicPosition, panicURL);
}
function openSecureBrowser6() {
    var urls6 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20retro-bowl/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls6, panicPosition, panicURL);
}
function openSecureBrowser7() {
    var urls7 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20n-gon/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls7, panicPosition, panicURL);
}
function openSecureBrowser8() {
    var urls8 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20motox3m/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls8, panicPosition, panicURL);
}
function openSecureBrowser9() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/FoundationINCCorporateTeam%203kh0-assets%20fixy%20death-run-3d/index.html';
    var panicPosition = document.getElementById('panicPosition').value; // Get the panic button position
    var panicURL = document.getElementById('panicURL').value; // Get the panic button URL
    openSecureBrowser(urls9, panicPosition, panicURL);
}

// Function to apply settings from the popup
function applySettings() {
    toggleSettings(); // Close the settings popup
}
