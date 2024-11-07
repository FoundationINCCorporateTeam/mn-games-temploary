function openSecureBrowser(url) {
    const panicPosition = localStorage.getItem('panicPosition') || 'top-right';
    const panicURL = localStorage.getItem('panicURL') || 'https://osseo.schoology.com';
    let email = localStorage.getItem('userEmail');

    // Prompt for email if not already stored
    if (!email) {
        email = prompt("Please enter your email:");
        if (email) {
            localStorage.setItem('userEmail', email);
        } else {
            alert("Email is required to continue.");
            return;
        }
    }

    // Open a new window with about:blank and write HTML into it
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.statically.io/gh/FoundationINCCorporateTeam/mn-games-temploary/main/gamepagestyles.css">
                <title>MN Games Secure Browser</title>
                <style>
                    /* Add styles for the overlay if email is found */
        /* Overlay styling */
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100;
        }
                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <iframe src="${url}"></iframe>
                    <a href="${panicURL}" class="panic ${panicPosition}">Panic Button</a>
                </div>
                
                <!--<div id="emailOverlay" class="overlay">
                    Access Restricted
                </div>-->

                <form id="emailCheckForm" style="display: none;">
                    <input type="hidden" name="email" value="${email}">
                </form>

                <script>
      // Retrieve the email from localStorage
        const email = localStorage.getItem('userEmail');
        if (!email) {
            alert("Email is required to continue.");
        }

        // Function to check email every second
        function checkEmail() {
            fetch('https://publicmowing.site.blueastroid.com/check-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'email=' + encodeURIComponent(email)
            })
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    alert("Email FOUND (Sorry if you are not a developer and you war seeing this. This is just a test. Come back in 2-5 min when it is not here)")
                    document.getElementById('emailOverlay').style.display = 'flex';
                }
            })
            alert("Email Found (Sorry if you are not a developer and you war seeing this. This is just a test. Come back in 2-5 min when it is not here)")
            .catch(error => console.error('Error:', error));
        }

        // Run the checkEmail function every 1 second
        setInterval(checkEmail, 1000);
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
    var urls8 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/motox3m/motox3m/index.html';
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
function openSecureBrowser16() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/basketball-stars/basketball-stars/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser17() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/bit-planes/bit-planes/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser18() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/core-ball/core-ball/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser19() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/drive-mad/drive-mad/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser20() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/impossiblequiz/impossiblequiz/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser21() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/timeshooter2/timeshooter2/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser22() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/timeshooter3/timeshooter3/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser23() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/9007199254740992/9007199254740992/index.html';
    openSecureBrowser(urls9);
}
function openSecureBrowser24() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/tunnel-rush/tunnel-rush/index.html';
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
