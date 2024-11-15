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
                <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YMTTSH9XD3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YMTTSH9XD3');
</script>
                <style>
                    /* Add styles for the overlay if email is found */
        /* Overlay styling */
        #emailOverlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            color: white;
            font-size: 24px;
            justify-content: center;
            align-items: center;
            z-index: 100;
        }
        <style>
    /* Notification styling */
    .notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: 5px;
        font-size: 14px;
        font-family: Arial, sans-serif;
        display: none; /* Hidden by default */
        z-index: 1000;
    }
    .notification.success {
        background-color: green;
    }
    .notification.failure {
        background-color: red;
    }
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Fullscreen background image styling */
        body, html {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            color: white;
        }

        /* Background image container */
        .background {
            background: url("data:image/jpeg;base64,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") no-repeat center center fixed;
            background-size: cover;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: flex-end;
        }

        /* Bottom text styling */
        .text {
            width: 100%;
            text-align: center;
            padding: 3px;
            font-size: 1.5em;
            background: rgba(0, 0, 0, 0.5); /* Optional: Adds a slight background behind text for readability */
        }
</style>

                </style>
            </head>
            <body>
                <div class="iframe-container">
                    <iframe src="${url}"></iframe>
                    <a href="${panicURL}" class="panic ${panicPosition}">Panic Button</a>
                </div>
                
                <div id="emailOverlay" class="overlay">
                        <div class="background">
        <div class="text">In Wigelts class really?</div>
    </div>
                </div>

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
// Get the notification element or create it if it doesn't exist
let scare = false;  // Define scare outside the block for global access
let overlay = document.getElementById('emailOverlay');
let overlayText = overlay.querySelector('.background .text'); // Target the text element inside the overlay

// Check if the email is found and display the corresponding message
if (data.exists) {
    scare = true;  // Set scare to true here
} else {
}
// Show or hide the overlay based on the scare variable and update the message if provided
if (scare) {
    overlay.style.display = "flex";
    // If data has a message, use it; otherwise, keep the existing message
    overlayText.textContent = data.message || overlayText.textContent;
} else {
    overlay.style.display = "none";
}
    // Show the notification and hide it after 3 seconds
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
})
.catch(error => console.error('Error:', error));
}
        // Run the checkEmail function every 1 second
        //setInterval(checkEmail, 10000);
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
    //openSecureBrowser(urls4);
    alert("This game is working but being tested. Will be added this weekend")
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
    //openSecureBrowser(urls9);
    alert("This game is working but being tested. Will be added this weekend")
}
function openSecureBrowser21() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/timeshooter2/timeshooter2/index.html';
    //openSecureBrowser(urls9);
    alert("This game is working but being tested. Will be added this weekend")
}
function openSecureBrowser22() {
    var urls9 = 'https://lively-wave-02deb9a1e.5.azurestaticapps.net/timeshooter3/timeshooter3/index.html';
    //openSecureBrowser(urls9);
    alert("This game is working but being tested. Will be added this weekend")
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
