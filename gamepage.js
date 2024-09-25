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
                        position: absolute;
                        z-index: 20; /* Ensure panic button is above everything */
                        cursor: pointer; /* Change cursor style for better UX */
                    }
                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <iframe src="${url}"></iframe>
                    <a href="#" class="panic" onclick="toggleEmergencyFrame(event)">Panic Button</a>
                </div>

                <script>
                    // Insert a value into localStorage when the page is visited
                    localStorage.setItem('gameVisit', new Date().toISOString()); // Store current timestamp
                    
                    function toggleEmergencyFrame(event) {
                        event.preventDefault(); // Prevent default link behavior
                        const overlay = window.opener.document.getElementById('emergencyOverlay');
                        const iframe = window.opener.document.getElementById('emergencyFrame');
                        const url = localStorage.getItem('emergencyFrameUrl');

                        if (overlay.style.display === 'none' || overlay.style.display === '') {
                            overlay.style.display = 'block';
                            iframe.src = url; // Set the emergency frame URL
                            iframe.style.display = 'block'; // Show the iframe
                        } else {
                            overlay.style.display = 'none';
                            iframe.style.display = 'none'; // Hide the iframe
                        }
                    }

                    // Apply settings from localStorage to the new window
                    function applySettings() {
                        // Get settings from localStorage
                        const panicButtonPosition = localStorage.getItem('panicButtonPosition') || "10px, 10px"; // Default position
                        const pageTitle = localStorage.getItem('pageTitle') || "MN Games Secure Browser"; // Default title

                        // Update the page title
                        document.title = pageTitle;

                        // Position the panic button
                        const panicButton = document.querySelector('.panic');
                        const positions = panicButtonPosition.split(',').map(pos => pos.trim());
                        if (positions.length === 2) {
                            panicButton.style.top = positions[0];
                            panicButton.style.right = positions[1];
                        }
                    }

                    // Call applySettings to set up the window correctly
                    applySettings();
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
